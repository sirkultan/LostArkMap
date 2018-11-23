import sys
import os
import shutil
import image_slicer
from PIL import Image

def cropImage(file, targetDir):
    print(file)
    img = Image.open(file);
    width, height = img.size;
    if width != 1600 or height != 900:
        print("ERROR: size mismatch " + file + " == " + str(width) + " x " + str(height));
        return

    croppedImage = img.crop((500, 100, width - 500, height-150));
    width, height = croppedImage.size;
    ratio = float(height) / float(width);

    firstResize = croppedImage.resize((300, int(300 * ratio)));

    finalImage = firstResize;
    finalImage.save(targetDir + '/' + file);

targetDir = 'out';
if not os.path.exists(targetDir):
        os.makedirs(targetDir)

for file in os.listdir("."):
    if file.endswith(".jpg"):
        cropImage(file, targetDir);
