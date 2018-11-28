import sys
import os
import shutil
import image_slicer
from PIL import Image

targetFile = 'islands_full.png'

# (tilesize * tiles) * world tile count
tileSize = 600
tileCount = 15
tileCountWorld = 5
imageSize = (tileSize * tileCount) * tileCountWorld
images = []

output = Image.new('RGB', (imageSize, imageSize))

for x in range(tileCountWorld):
    for y in range(tileCountWorld):
        file = 'islands_' + str(x) + '_' + str(y) + '.png'
        if not os.path.isfile(file):
                file = 'islands_empty.png'

        print(str(x) + ' x ' + str(y) + ' == ' + file)
        img = Image.open(file)
        output.paste(img, (x * tileSize * tileCount, y * tileSize * tileCount))

output.save('islands_full.png')