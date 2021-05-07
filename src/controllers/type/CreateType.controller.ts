import { Request, Response } from 'express';
import { createTypeService } from '../../services/type/CreateType.service';
import sessionToken from '../../util/getSessionToken';

export const createTypeController = async (req: Request, res: Response) => {
  try {
    const postedType = await createTypeService(sessionToken(req), req.body);

    if (postedType.success) {
      res.send(postedType);
    } else {
      res.status(400).send(postedType);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
