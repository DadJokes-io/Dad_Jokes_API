import { mongoService } from '../..';

export const jokePaginationService = async (skip: number, limit: number) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .find({ approved: true })
      .skip(skip)
      .limit(limit)
      .toArray();

    return { success: true, body: result };
  } catch (err) {
    return { success: false, body: err };
  }
};
