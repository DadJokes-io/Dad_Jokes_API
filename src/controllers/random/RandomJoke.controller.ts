import { Request, Response } from 'express';
import { RandomJokeService } from '../../services/random/RandomJoke.service';

export const RandomJokeController = async (req: Request, res: Response) => {
  let count: number = Number(req.query.count) | 1;

  try {
    const randomJoke = await RandomJokeService(count);
    res.send(randomJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
