#!/usr/bin/env python

from gimpfu import *
import os
import unicodedata



def batch_convert_xcf_to_png(img, layer, inputFolder, outputFolder):
    ''' Convert the xcf images in a directory to png.

    Parameters:
    img : image The current image (unused).
    layer : layer The layer of the image that is selected (unused).
    inputFolder : string The folder of the images that must be modified.
    outputFolder : string The folder in which save the modified images.
    '''
    # Iterate the folder
    files = os.listdir(unicode(inputFolder))
    for file in files:
        try:
            # Build the full file paths.
            inputPath = inputFolder + "\\" + file

            new_name = file.rsplit(".",1)[0] + ".png"
            outputPath = outputFolder + "\\" + new_name

            # Open the file if is a XCF image.
            image = None
            if(file.lower().endswith(('.xcf'))):
                image = pdb.gimp_xcf_load(1,inputPath, inputPath)


            # Verify if the file is an image.
            if(image != None):

                #layer = pdb.gimp_image_merge_visible_layers(image, gimpfu.CLIP_TO_IMAGE)
                layer = pdb.gimp_image_merge_visible_layers(image, 1)

                # Save the image.
                pdb.file_png_save(image, image.layers[0], outputPath, outputPath, 0, 9, 0, 0, 0, 0, 0)

        except Exception as err:
            gimp.message("Unexpected error: " + str(err))   




'''                
    img = pdb.gimp_file_load(filename, filename)
    new_name = filename.rsplit(".",1)[0] + ".png"
    layer = pdb.gimp_image_merge_visible_layers(img, gimpfu.CLIP_TO_IMAGE)

    pdb.gimp_file_save(img, layer, new_name, new_name)
    pdb.gimp_image_delete(img)
'''    


register(
        "Batch Convert XCF to PNG",
        "",
        "",
        "",
        "",
        "",
        "<Image>/Filters/Batch/Batch Convert XCF to PNG",
        "*",
        [
            (PF_DIRNAME, "inputFolder", "Input directory", ""),
            (PF_DIRNAME, "outputFolder", "Output directory", ""),            
        ],
        [],
        batch_convert_xcf_to_png)



main()