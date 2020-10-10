import { MongoService } from '../..';

export const JokeByTypeService = async (type: string, limit: number) => {
  try {
    const result = await MongoService.db('Jokes')
      .collection('DadJokes')
      .find({ type })
      .limit(limit > 50 ? 50 : limit)
      .toArray();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
