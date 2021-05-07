import { Request, Response } from 'express';
import { getUserPostService } from '../../services/user/GetUserPosts.service';

export const getUserPostController = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const userPosts = await getUserPostService(userId);

    if (!userPosts.success) {
      res.status(500).send(userPosts);
    }

    res.send(userPosts);
  } catch (err) {
    res.status(500).send(err);
  }
};
