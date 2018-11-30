const { src, dest, series, parallel } = require('gulp');
let del = require("del");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify-es").default;
let minify = require("gulp-minify");
let obfuscate = require("gulp-obfuscate");
let cleanCSS = require("gulp-clean-css");
let htmlReplace = require("gulp-html-replace");
var gulpCopy = require('gulp-copy');

const rename = require('gulp-rename');

const paths = {
    sourceDir: "src",
    destDir: "."
};

const config = {
    js: [
        paths.sourceDir + '/lam.js',
        paths.sourceDir + '/*.js',
    ],
    jsData: [
        paths.sourceDir + '/data/*.js'
    ]
};

function clean(cb) {
    // body omitted
    del([paths.destDir + '/*.tmp.*']);
    del([paths.destDir + '/index.min.html']);
    cb();
}

function cssTranspile(cb) {
    // body omitted
    cb();
}

function cssMinify(cb) {
    // body omitted
    cb();
}

function jsConcatCore(cb) {
    return src(config.js)
        .pipe(concat("lam.tmp.js"))
        //.pipe(obfuscate())
        .pipe(uglify())
        .pipe(dest(paths.destDir + '/'));
}

function jsConcatData(cb) {
    return src(config.jsData)
        .pipe(concat("lam.data.tmp.js"))
        //.pipe(obfuscate())
        .pipe(uglify())
        .pipe(dest(paths.destDir + '/'));
}

function jsMinifyCore(cb) {
    return src(paths.destDir + '/lam.tmp.js')
        .pipe(minify())
        .pipe(rename("lam.min.js"))
        .pipe(dest(paths.destDir + '/'));
}

function jsMinifyData(cb) {
    return src(paths.destDir + '/lam.data.tmp.js')
        .pipe(minify())
        .pipe(rename("lam.data.min.js"))
        .pipe(dest(paths.destDir + '/'));
}

function publish(cb) {
    // body omitted
    del([paths.destDir + '/*.tmp.*']);

    src('index.html')
        .pipe(rename("index.min.html"))
        .pipe(htmlReplace({
            'js': ['lam.min.js', 'lam.data.min.js']
        }))
        .pipe(dest(paths.destDir + '/'));

    cb();
}

exports.build = series(
    clean,
    parallel(
        cssTranspile,
        series(jsConcatCore, jsConcatData)
    ),
    parallel(cssMinify, jsMinifyCore, jsMinifyData),
    publish
);