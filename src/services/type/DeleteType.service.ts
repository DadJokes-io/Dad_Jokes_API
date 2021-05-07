import { mongoService } from '../..';
import oID from '../../util/oID';

export const deleteTypeService = async (id: string) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('Types')
      .deleteOne({ _id: oID(id) });

    return { success: true, body: result.result.ok };
  } catch (err) {
    return { success: false, error: err };
  }
};
