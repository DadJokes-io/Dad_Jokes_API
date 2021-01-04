import { ObjectId } from 'mongodb';
import { MongoService } from '../..';

export const DeleteJokeService = async (_id: string) => {
  const objectid = new ObjectId(_id);
  try {
    const result = await MongoService.db('Jokes').collection('DadJokes').deleteOne({ _id: objectid });
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
