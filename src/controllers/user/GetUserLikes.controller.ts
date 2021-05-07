import { Request, Response } from 'express';
import { getUserLikesService } from '../../services/user/GetUserLikes.service';

export const getUserLikesController = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const userLikes = await getUserLikesService(userId);

    if (!userLikes.success) {
      res.status(500).send(userLikes);
    }

    res.send(userLikes);
  } catch (err) {
    res.status(500).send(err);
  }
};
