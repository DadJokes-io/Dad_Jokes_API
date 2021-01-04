import { Request, Response } from 'express';
import { createJokeService } from '../../services/joke/CreateJoke.service';

export const createJokeController = async (req: Request, res: Response) => {
  try {
    const createdJoke = await createJokeService(req.body);
    res.send(createdJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
