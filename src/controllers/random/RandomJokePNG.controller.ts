import { Request, Response } from 'express';
import { randomJokePNGService } from '../../services/random/RandomJokePNG.service';

export const randomJokePNGController = async (req: Request, res: Response) => {
  try {
    const randomJokePNG = await randomJokePNGService();

    res.send(randomJokePNG);
  } catch (err: any) {
    res.status(500).send({ success: false, error: err.message });
  }
};
