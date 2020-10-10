import { ObjectId } from 'mongodb';
import { MongoService } from '../..';

export const JokeByIdService = async (_id: string) => {
  try {
    const o_id = new ObjectId(_id);
    const result = await MongoService.db('Jokes').collection('DadJokes').findOne({ _id: o_id });
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
