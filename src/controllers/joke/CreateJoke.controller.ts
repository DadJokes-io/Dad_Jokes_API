import { Request, Response } from 'express';
import { createJokeService } from '../../services/joke/CreateJoke.service';
import sessionToken from '../../util/getSessionToken';

export const createJokeController = async (req: Request, res: Response) => {
  try {
    const createdJoke = await createJokeService(sessionToken(req), req.body);

    if (createdJoke.success) {
      res.send(createdJoke);
    } else {
      res.status(400).send(createdJoke);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
