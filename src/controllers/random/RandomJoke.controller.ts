import { Request, Response } from 'express';
import { randomJokeService } from '../../services/random/RandomJoke.service';

export const randomJokeController = async (req: Request, res: Response) => {
  const count: number = Number(req.query.count) | 1;
  const NSFW: string = (req.query.NSFW as unknown) as string

  try {
    const randomJoke = await randomJokeService(count, NSFW);
    res.send(randomJoke);
  } catch (err: any) {
    res.status(500).send({ success: false, error: err.message });
  }
};
