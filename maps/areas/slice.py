import sys
import os
import shutil
import image_slicer
from PIL import Image

if len(sys.argv) < 4:
    print("slice.py <zoom_level> <file> <target>")
    sys.exit()

zoomLevel = int(sys.argv[1])
if zoomLevel <= 0:
    print("Invalid zoom level")
    sys.exit()

def resize_image(file):
    print("Resizing " + file)

    src = Image.open(file)
    target = src.resize((512, 512))
    target.save(file)

def split_image(source, target, currentZoomLevel):
    if currentZoomLevel >= zoomLevel:
        return

    print("Splitting " + source + " to " + target)
    if not os.path.exists(targetDir):
        os.makedirs(targetDir)

    image_slicer.slice(source, 4)
    x = 1
    y = 1
    for tile in range(0, 4):
        tileImageFile = target + '\\' + str(tile) + '.jpg'
        print(tileImageFile)

        outFile = os.path.splitext(source)[0] + "_0" + str(y) + "_0" + str(x) + ".png"
        x = x + 1
        if x == 3:
            x = 1
            y = y + 1

        print(outFile)

        if os.path.exists(tileImageFile):
            os.remove(tileImageFile)

        if os.path.exists(outFile):
            os.rename(outFile, tileImageFile)

            if currentZoomLevel < zoomLevel:
                subTargetDir = target + '\\' + str(tile) + '\\'
                if not os.path.exists(subTargetDir):
                    os.makedirs(subTargetDir)

                shutil.copyfile(tileImageFile, subTargetDir + 'raw.jpg')

                split_image(subTargetDir + 'raw.jpg', subTargetDir, currentZoomLevel + 1)

                os.remove(subTargetDir + 'raw.jpg')

            resize_image(tileImageFile)

sourceFile = sys.argv[2]
targetDir = sys.argv[3]

split_image(sourceFile, targetDir, 0)

shutil.copyfile(sourceFile, targetDir + "\\base.jpg")
resize_image(targetDir + "\\base.jpg")

