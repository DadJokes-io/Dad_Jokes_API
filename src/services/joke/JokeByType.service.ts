import { mongoService } from '../..';

export const jokeByTypeService = async (type: string, limit: number) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .find({ type })
      .limit(limit > 50 ? 50 : limit)
      .toArray();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
