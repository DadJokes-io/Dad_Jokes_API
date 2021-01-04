import { mongoService } from '../..';

export const randomJokeService = async (count: number) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .aggregate([{ $sample: { size: count > 5 ? 5 : count } }])
      .toArray();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
