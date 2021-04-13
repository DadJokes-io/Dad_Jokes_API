import { Request, Response } from 'express';
import { publicUserService } from '../../services/user/PublicUser.service';

export const publicUserController = async (req: Request, res: Response) => {
  try {
    const userProfile = await publicUserService(req.params.id);
    res.send(userProfile);
  } catch (err) {
    res.status(500).send(err);
  }
};
