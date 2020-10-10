import { Request, Response } from 'express';
import { JokeBySearchService } from '../../services/joke/JokeBySearch.service';

export const JokeBySearchController = async (req: Request, res: Response) => {
  try {
    const findJokes = await JokeBySearchService(req.query.term?.toString());
    res.send(findJokes);
  } catch (err) {
    res.status(500).send(err);
  }
};
