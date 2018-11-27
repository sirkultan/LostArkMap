import sys
import os
import shutil
from PIL import Image

if len(sys.argv) < 2:
    print("Path Missing")
    sys.exit()

path = sys.argv[1]

maxWidth = 0;
maxHeight = 0;
for file in os.listdir(path):
    if not file.endswith('.png') and not file.endswith('.jpg'):
        continue

    img = Image.open(path + '/' + file);
    width, height = img.size;
    if width > maxWidth:
        maxWidth = width
    if height > maxHeight:
        maxHeight = height

print(str(maxWidth) + " x " + str(maxHeight))
