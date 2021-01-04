import { mongoService } from '../..';

export const countJokeService = async () => {
  try {
    const result = await mongoService.db('Jokes').collection('DadJokes').countDocuments();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
