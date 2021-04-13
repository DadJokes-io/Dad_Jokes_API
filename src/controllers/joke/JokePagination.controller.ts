import { Request, Response } from 'express';
import { jokePaginationService } from '../../services/joke/JokePagination.service';

export const JokePaginationController = async (req: Request, res: Response) => {
  const skip = req.query.skip as string;
  const limit = req.query.limit as string;

  if (isNaN(Number(skip)) && isNaN(Number(limit))) throw new Error('non vaild numbers');

  try {
    const jokes = await jokePaginationService(Number(skip), Number(limit));

    res.send(jokes);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
