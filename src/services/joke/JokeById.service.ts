import { ObjectId } from 'mongodb';
import { mongoService } from '../..';

export const jokeByIdService = async (id: string) => {
  try {
    const oId = new ObjectId(id);
    const result = await mongoService.db('Jokes').collection('DadJokes').findOne({ _id: oId });
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
