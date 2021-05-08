import { Request, Response } from 'express';
import { CreateUserProfileImageService } from '../../services/user/CreateUserProfileImage.service';
import sessionToken from '../../util/getSessionToken';

export const createUserProfileImageController = async (req: Request, res: Response) => {
  try {
    if (!req.body.file) {
      throw new Error('No file uploaded');
    }

    const file = req.body.file;
    const fileName = req.params.fileName;

    const profileImage = await CreateUserProfileImageService(sessionToken(req), file, fileName);

    res.send(profileImage);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message || err);
  }
};
