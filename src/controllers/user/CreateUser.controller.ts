import { Request, Response } from 'express';
import { createUserService } from '../../services/user/CreateUser.service';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const createdJoke = await createUserService(req.body);
    res.send(createdJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
