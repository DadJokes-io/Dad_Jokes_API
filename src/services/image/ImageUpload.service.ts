import { imagekit } from '../../index';
import sharp from 'sharp';
import dataUriToBuffer from 'data-uri-to-buffer';

export const imageUploadService = async (
  file: string,
  fileName: string,
): Promise<ImageKit.UploadResponse> => {
  try {
    const originalImage = dataUriToBuffer(file);

    const updatedFile = await sharp(originalImage).resize({ width: 120, height: 120 }).toBuffer();

    const result = await imagekit.upload({
      file: updatedFile,
      fileName,
    });

    return result;
  } catch (error) {
    return error;
  }
};
