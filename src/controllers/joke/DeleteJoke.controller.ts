import { Request, Response } from 'express';
import { DeleteJokeService } from '../../services/joke/DeleteJoke.service';

export const DeleteJokeController = async (req: Request, res: Response) => {
  try {
    const removedJoke = await DeleteJokeService(req.params.id);
    res.send(removedJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
