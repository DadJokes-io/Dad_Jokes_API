import { Request, Response } from 'express';
import { countTypeService } from '../../services/type/CountType.service';

export const countTypeController = async (req: Request, res: Response) => {
  const type = req.params.type;
  try {
    const typeCount = await countTypeService(type);
    res.send(typeCount);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
