import { MongoService } from '../..';

export const CountJokeService = async () => {
  console.log('COunt joke service');
  try {
    const result = await MongoService.db('Jokes').collection('DadJokes').countDocuments();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
