import { MongoService } from '../..';

export const JokeBySearchService = async (search: string | undefined) => {
  try {
    const result = await MongoService.db('Jokes')
      .collection('DadJokes')
      .find({ $text: { $search: search ? search : '' } })
      .toArray();
    return { success: true, body: result };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
};
