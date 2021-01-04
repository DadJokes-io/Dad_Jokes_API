import { mongoService } from '../..';

export const jokeBySearchService = async (search: string | undefined) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .find({ $text: { $search: search ? search : '' } })
      .toArray();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
