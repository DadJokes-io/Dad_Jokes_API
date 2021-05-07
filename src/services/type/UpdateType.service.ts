import { mongoService } from '../..';
import oID from '../../util/oID';

export const updateTypeService = async (id: string, postCount: number) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('Types')
      .updateOne({ _id: oID(id) }, { $set: { postCount: postCount } });

    return { success: true, body: result.upsertedCount };
  } catch (err) {
    return { success: false, error: err };
  }
};
