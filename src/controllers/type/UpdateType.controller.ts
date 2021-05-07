import { Request, Response } from 'express';
import { updateTypeService } from '../../services/type/UpdateType.service';

export const updateTypeController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const num = req.body.countNumber;
  try {
    const updatedType = await updateTypeService(id, num);
    res.send(updatedType);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
