import { mongoService } from '../..';
import { Joke } from '../../model/joke';

export const jokeBySearchService = async (search: string | undefined) => {
  try {
    const result: Array<Joke> = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .find({ $text: { $search: search ? search : '' } })
      .toArray();

    const body = result.map((joke) => {
      return {
        ...joke,
        shareableLink: `https://dadjokes.io/joke/${joke._id}`,
      };
    });

    return { success: true, body: body };
  } catch (err) {
    return { success: false, error: err };
  }
};
