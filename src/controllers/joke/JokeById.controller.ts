import { Request, Response } from 'express';
import { jokeByIdService } from '../../services/joke/JokeById.service';

export const jokeByIdController = async (req: Request, res: Response) => {
  try {
    const findJoke = await jokeByIdService(req.params.id);
    res.send(findJoke);
  } catch (err: any) {
    res.status(500).send({ success: false, error: err.message });
  }
};
