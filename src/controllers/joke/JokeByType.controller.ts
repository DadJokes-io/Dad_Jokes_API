import { Request, Response } from 'express';
import { JokeByTypeService } from '../../services/joke/JokeByType.service';

export const JokeByTypeController = async (req: Request, res: Response) => {
  try {
    const findJoke = await JokeByTypeService(req.params.type, Number(req.query.limit));
    res.send(findJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
