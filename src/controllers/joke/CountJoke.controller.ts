import { Request, Response } from 'express';
import { CountJokeService } from '../../services/joke/CountJoke.service';

export const CountJokeController = async (req: Request, res: Response) => {
  try {
    const jokeCount = await CountJokeService();
    res.send(jokeCount);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
