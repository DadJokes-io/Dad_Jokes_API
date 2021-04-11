import { Request, Response } from 'express';
import { deleteJokeService } from '../../services/joke/DeleteJoke.service';
import sessionToken from '../../util/getSessionToken';

export const deleteJokeController = async (req: Request, res: Response) => {
  try {
    const removedJoke = await deleteJokeService(sessionToken(req), req.params.id);
    res.send(removedJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
