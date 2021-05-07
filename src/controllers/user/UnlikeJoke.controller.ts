import { Request, Response } from 'express';
import { UnlikeJokeService } from '../../services/user/UnlikeJoke.service';
import sessionToken from '../../util/getSessionToken';

export const UnlikeJokeController = async (req: Request, res: Response) => {
  try {
    const jokeId = req.params.jokeId as string;

    const unlikeJokeResult = await UnlikeJokeService(sessionToken(req), jokeId);

    if (unlikeJokeResult?.success === false) {
      return res.status(500).send(unlikeJokeResult);
    }

    res.send(unlikeJokeResult);
  } catch (err) {
    res.status(500).send(err);
  }
};
