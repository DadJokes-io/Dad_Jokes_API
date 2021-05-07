import { Request, Response } from 'express';
import { authUser } from '../../services/user/authUser.service';
import { LikeJokeService } from '../../services/user/LikeJoke.service';
import sessionToken from '../../util/getSessionToken';

export const CreateLikeJokeController = async (req: Request, res: Response) => {
  try {
    const jokeId = req.params.jokeId as string;

    const likeJokeResult = await LikeJokeService(sessionToken(req), jokeId);

    if (likeJokeResult?.success === false) {
      return res.status(500).send(likeJokeResult);
    }

    res.send(likeJokeResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const ListLikeJokeController = async (req: Request, res: Response) => {
  try {
    const likeJokeResult = await authUser(sessionToken(req));

    if (likeJokeResult instanceof Error) throw likeJokeResult;

    res.send(likeJokeResult.likes);
  } catch (err) {
    res.status(500).send(err);
  }
};
