import { Request, Response } from 'express';
import { profileUserService } from '../../services/user/ProfileUser.service';
import sessionToken from '../../util/getSessionToken';

export const profileUserController = async (req: Request, res: Response) => {
  try {
    const userProfile = await profileUserService(sessionToken(req));
    res.send(userProfile);
  } catch (err) {
    res.status(500).send(err);
  }
};
