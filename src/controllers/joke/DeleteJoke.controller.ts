import { Request, Response } from 'express';
import { deleteJokeService } from '../../services/joke/DeleteJoke.service';

export const deleteJokeController = async (req: Request, res: Response) => {
  try {
    const removedJoke = await deleteJokeService(req.params.id);
    res.send(removedJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
