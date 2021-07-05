import { Request, Response } from 'express';
import { PNGByIdService } from '../../services/joke/PNGById.service';

export const PNGByIdController = async (req: Request, res: Response) => {
  try {
    const findJoke = await PNGByIdService(req.params.id);
    res.send(findJoke);
  } catch (err: any) {
    res.status(500).send({ success: false, err: err.message });
  }
};
