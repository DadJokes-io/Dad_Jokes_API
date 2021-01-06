import { Request, Response } from 'express';
import { profileUserService } from '../../services/user/ProfileUser.service';

export const profileUserController = async (req: Request, res: Response) => {
  try {
    const sessionToken = req.headers.authorization?.split(' ')[1];

    const userProfile = await profileUserService(sessionToken);
    res.send(userProfile);
  } catch (err) {
    res.status(500).send(err);
  }
};
