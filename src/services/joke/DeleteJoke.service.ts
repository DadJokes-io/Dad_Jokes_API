import { ObjectId } from 'mongodb';
import { mongoService } from '../..';

export const deleteJokeService = async (id: string) => {
  const objectid = new ObjectId(id);
  try {
    const result = await mongoService.db('Jokes')
    .collection('DadJokes')
    .deleteOne({ _id: objectid });
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
