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
for x in range(tileCountWorld):
    for y in range(tileCountWorld):
        file = 'islands_' + str(x) + '_' + str(y) + '.png'
        if not os.path.isfile(file):
            print("Missing file: " + file)
            sys.exit()

        images.append(file)

output = Image.new('RGB', (imageSize, imageSize))

x = 0
y = 0
for i in range(len(images)):
    file = images[i]

    img = Image.open(file)
    output.paste(img, (x * tileSize * tileCount, y * tileSize * tileCount))

    # move on to next tile
    x = x + 1
    if x == 5:
        x = 0
        y = y + 1

output.save('islands_full.png')