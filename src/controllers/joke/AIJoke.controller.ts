import { Request, Response } from 'express';
import { countJokeService } from '../../services/joke/CountJoke.service';
import { AiJokeService } from '../../services/joke/AIJoke.service';

export const AIJokeController = async (req: Request, res: Response) => {
  try {
    const { topic } = req.params
    const { style } = req.query

    const jokeResponse = await AiJokeService(topic, String(style))
    res.send(jokeResponse);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
