import { imageUploadService } from '../image/ImageUpload.service';
import { UpdateUserService } from './UpdateUser.service';

export const CreateUserProfileImageService = async (
  sessionToken: string | undefined,
  file: string,
  fileName: string,
) => {
  try {
    const uploadedImage = await imageUploadService(file, fileName);

    const updatedUser = await UpdateUserService(sessionToken, {
      photoUrl: uploadedImage.url,
    });

    return updatedUser;
  } catch (error) {
    return { success: false, error: error };
  }
};
