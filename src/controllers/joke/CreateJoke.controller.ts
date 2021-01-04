import { Request, Response } from 'express';
import { CreateJokeService } from '../../services/joke/CreateJoke.service';

export const CreateJokeController = async (req: Request, res: Response) => {
  try {
    const createdJoke = await CreateJokeService(req.body);
    res.send(createdJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
