import { mongoService } from '../..';
import { Type } from '../../models/type';

export const countTypeService = async (type: string) => {
  try {
    const result: Type | null = await mongoService
      .db('Jokes')
      .collection('Types')
      .findOne({ type: type });

    if (!result) throw new Error('type does not exist');

    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
