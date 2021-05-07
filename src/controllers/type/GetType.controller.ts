import { Request, Response } from 'express';
import { getTypeService } from '../../services/type/GetType.serivce';

export const getTypeController = async (req: Request, res: Response) => {
  try {
    const types = await getTypeService();
    res.send(types);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
