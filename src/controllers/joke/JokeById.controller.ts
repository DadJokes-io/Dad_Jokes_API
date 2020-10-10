import { Request, Response } from 'express';
import { JokeByIdService } from '../../services/joke/JokeById.service';

export const JokeByIdController = async (req: Request, res: Response) => {
  try {
    const findJoke = await JokeByIdService(req.params.id);
    res.send(findJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
