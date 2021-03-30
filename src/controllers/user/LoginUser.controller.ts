import { Request, Response } from 'express';
import { loginUserService } from '../../services/user/LoginUser.service';

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const login = await loginUserService(req.body);
    res.send(login);
  } catch (err) {
    res.status(500).send(err);
  }
};
