import { Request, Response } from 'express';
import { jokeTypesService } from '../../services/joke/JokeTypes.service';

export const jokeTypesController = async (req: Request, res: Response) => {
  try {
    const result = await jokeTypesService()
    res.send(result)
  } catch (err: any) {
    res.status(500).send({ success: false, error: err.message });
  }
}