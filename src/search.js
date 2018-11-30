(function () {

    class LostArkSearch {

        constructor() {
            this.activeSearchEntries = {};
            this.activeSearchText = undefined;
            this.nextSearchResultId = 0;
        }

        initialize() {
            this.initializeUI();
        }

        initializeUI() {
            $('#searchField').change(function(e){
                LAM.activateContent(ContentTypeEnum.Search);
                LAM.search.execSearch($(this).val());
            });

            $('#searchCopyButton').click(function(e){
                if(LAM.search.activeSearchText !== undefined) {
                    let link = '?c=' + ContentTypeEnum.Search + '&t=' + LAM.search.activeSearchText.replace(/\s/g, '_');
                    LAM.showCopyLinkDialog(link, "Copy Search");
                }
            });

            this.clearResults();
        }

        execSearch(text) {
            this.clearResults();

            if(text === undefined || text === null || text === "") {
                return;
            }

            this.activeSearchText = text;

            let words = text.split(' ');
            let regexStr = '';
            for(let i in words) {
                let word = words[i];
                if(word === "" || word.length <= 2) {
                    // Too short or invalid
                    continue;
                }

                regexStr = regexStr + '(?=.*' + word + ')';
            }

            if(regexStr === ''){
                return;
            }

            regexStr = regexStr + '.+';
            let regex = new RegExp(regexStr, 'ig');
            let results = [];
            this.searchInAreaData(regex, results);
            this.searchInMarkerData(regex, results);
            this.searchInGuides(regex, results);
            this.searchInFAQ(regex, results);

            if(results.length > 0) {
                this.buildResultEntries(results);

                this.updateResultCount(results.length);

                $('#searchExamples').hide();
            }
        }

        updateResultCount(count) {
            let element = $('#searchResultCount');
            if(count === undefined || count <= 0){
                element.text('No Results');
            } else {
                element.text(count + ' Results');
            }
        }

        clearResults() {
            this.activeSearchText = undefined;
            this.activeSearchEntries = {};
            this.nextSearchResultId = 0;

            this.updateResultCount(0);

            $('#searchResults').empty();
            $('#searchExamples').show();
        }

        matchSearchAgainst(regex, text, altText) {
            if(text !== undefined && regex.test(text)) {
                return text;
            }

            if(altText !== undefined && regex.test(altText)) {
                return altText;
            }

            return undefined;
        }

        searchInAreaData(regex, target) {
            for (let areaName in LAM.areas) {
                let area = LAM.areas[areaName];
                for(let zoneName in area.maps) {
                    let zoneData = area.maps[zoneName];
                    let match = this.matchSearchAgainst(regex, zoneName, zoneData.kr);
                    if(match !== undefined) {
                        target.push(this.buildAreaResult(zoneName, areaName, zoneData, match));
                        continue;
                    }

                    if(zoneData.meta !== undefined) {
                        for(let metaKey in zoneData.meta) {
                            let metaValue = zoneData.meta[metaKey];
                            if(typeof metaValue === 'string') {
                                match = this.matchSearchAgainst(regex, metaValue);
                                if(match !== undefined){
                                    target.push(this.buildAreaResult(zoneName, areaName, zoneData, metaKey + ': '+ match));
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        buildAreaResult(name, areaName, zoneData, match){
            let result = {
                type: SearchResultTypeEnum.Area,
                title: name,
                teleportTo: GetBoundsCenter(zoneData.bounds),
                teleportArea: areaName,
                match: match
            };

            return result;
        }

        searchInMarkerData(regex, target) {
            for (let areaName in LAM.areas) {
                let area = LAM.areas[areaName];
                for(let i in area.markerLayer.markers) {
                    let markerData = area.markerLayer.markers[i];

                    // Title
                    let match = this.matchSearchAgainst(regex, markerData.title, markerData.titleKR);
                    if(match !== undefined){
                        target.push(this.buildMarkerSearchResult(markerData, match));
                        continue;
                    }

                    // Popup Text
                    match = this.matchSearchAgainst(regex, markerData.popupText, markerData.popupTextKR);
                    if(match !== undefined){
                        target.push(this.buildMarkerSearchResult(markerData, match));
                        continue;
                    }

                    // Hint Text
                    match = this.matchSearchAgainst(regex, markerData.hintText, markerData.hintTextKR);
                    if(match !== undefined){
                        target.push(this.buildMarkerSearchResult(markerData, match));
                        continue;
                    }

                    // Type
                    match = this.matchSearchAgainst(regex, 't:' + GetKeyByValue(MarkerTypeEnum, markerData.type));
                    if(match !== undefined){
                        target.push(this.buildMarkerSearchResult(markerData, undefined));
                        continue;
                    }
                }
            }
        }

        buildMarkerSearchResult(markerData, match) {
            let result = {
                type: SearchResultTypeEnum.Marker,
                title: markerData.area + ' ' + GetKeyByValue(MarkerTypeEnum, markerData.type),
                teleportTo: [markerData.x, markerData.y],
                teleportArea: markerData.area,
                icon: 'images/icons/' + markerData.type,
                match: match
            };

            // Order here matters
            if(markerData.isGenerated !== true) {
                result.title = result.title + ' #' + markerData.id;
            }

            if(markerData.title !== undefined) {
                result.description = result.title;
                result.title = markerData.title;
            }

            if(markerData.popupText !== undefined) {
                result.description = result.title;
                result.title = markerData.popupText;
            }

            return result;
        }

        searchInGuides(regex, target) {
            for(let i in LAM.guides) {
                let guideData = LAM.guides[i];
                let match = this.matchSearchAgainst(regex, guideData.title);
                if(match !== undefined) {
                    target.push({
                        type: SearchResultTypeEnum.Guide,
                        title: guideData.title,
                        url: guideData.url
                    });
                }
            }
        }

        searchInFAQ(regex, target) {
            for(let i in LAM.faq) {
                let faqData = LAM.faq[i];
                let match = this.matchSearchAgainst(regex, faqData.q, faqData.a);
                if(match !== undefined){
                    target.push({
                        type: SearchResultTypeEnum.FAQ,
                        title: faqData.q,
                        match: faqData.a,
                        icon: faqData.img
                    });
                }
            }
        }

        buildResultEntries(results) {
            if(results === undefined || results.length === 0) {
                console.log("Search returned no Results");
                return;
            }

            let entryParent = $('#searchResults');
            for(let i in results) {
                let entryData = results[i];
                let entry = this.buildResultEntry(entryData);
                if(entry !== undefined){
                    entryParent.append(entry);
                }
            }
        }

        gotoSearchResult(id) {
            let entryData = this.activeSearchEntries[id];
            if(entryData === undefined) {
                return;
            }

            if(entryData.teleportTo !== undefined) {
                LAM.gotoMapArea(entryData.teleportTo, entryData.teleportArea, entryData.teleportZoom);
            }
        }

        buildResultEntry(entryData) {
            entryData.id = this.nextSearchResultId++;

            let row = $('<tr data-status="' + entryData.type + '"></tr>');

            let linkColumn = $('<td></td>');
            row.append(linkColumn);

            let iconColumn = $('<td></td>');
            row.append(iconColumn);

            let contentColumn = $('<td class="w-100"></td>');
            row.append(contentColumn);

            if(entryData.teleportTo !== undefined) {
                let link = $('<a type="button" class="btn btn-primary searchResultLink" id="showSearchResult_' + entryData.id + '" href="#">Show</a>');
                linkColumn.append(link);
            } else if(entryData.url !== undefined) {
                let link = $('<a type="button" class="btn btn-primary searchResultLink" href="' + entryData.url + '" target="_blank">Open</a>');
                linkColumn.append(link);
            }

            if(entryData.icon !== undefined) {
                let icon = $('<img src="' + entryData.icon + '" class="search-icon">');
                iconColumn.append(icon);
            }

            let contentBody = $('<div class="search-content-body"></div>');
            contentBody.append($('<h4 class=title>' + entryData.title + '<span class="float-right search-type ' + entryData.type + '">(' + GetKeyByValue(SearchResultTypeEnum, entryData.type) + ')</span></h4>'));
            if(entryData.match !== undefined && entryData.match !== entryData.title) {
                contentBody.append($('<p class="match">(' + entryData.match + ')</p>'));
            }

            if(entryData.description !== undefined) {
                contentBody.append($('<p class="summary">' + entryData.description + '</p>'));
            }

            let content = $('<div class="search-content"></div>');
            content.append(contentBody);
            contentColumn.append(content);

            this.activeSearchEntries[entryData.id] = entryData;

            return row;
        }
    }

    $(document).ready(function() {
        $('body').on('click', 'a.searchResultLink', function() {
            let idSegments = this.id.split('_');
            LAM.search.gotoSearchResult(idSegments[1]);
        });

        $('.btn-filter').on('click', function () {
            var target = $(this).data('target');
            if (target !== 'all') {
                $('.table tr').css('display', 'none');
                $('.table tr[data-status="' + target + '"]').fadeIn('slow');
            } else {
                $('.table tr').css('display', 'none').fadeIn('slow');
            }
        });

        $('.searchExample').on('click', function () {
            var target = $(this).data('text');
            $('#searchField').val(target);
            LAM.search.execSearch(target);
        })
    });

    LAM.search = new LostArkSearch();

}());