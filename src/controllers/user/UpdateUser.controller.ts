import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUser.service';
import sessionToken from '../../util/getSessionToken';

export const updateUserController = async (req: Request, res: Response) => {
  const updates = req.body;
  try {
    const updatedUser = await UpdateUserService(sessionToken(req), updates);

    if (!updatedUser.success) {
      res.status(500).send(updatedUser);
    }

    res.send(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};
