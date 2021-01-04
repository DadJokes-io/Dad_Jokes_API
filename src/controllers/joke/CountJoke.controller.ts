import { Request, Response } from 'express';
import { countJokeService } from '../../services/joke/CountJoke.service';

export const countJokeController = async (req: Request, res: Response) => {
  try {
    const jokeCount = await countJokeService();
    res.send(jokeCount);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
