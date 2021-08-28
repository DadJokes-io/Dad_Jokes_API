import { mongoService } from '../..';

export const jokeByTypeService = async (type: string, limit: number) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .find({ type })
      .limit(limit > 50 ? 50 : limit)
      .toArray();

    const body = result.map((joke) => {
      return {
        ...joke,
        shareableLink: `https://dadjokes.io/joke/${joke._id}`,
      };
    });
    return { success: true, body: body };
  } catch (err) {
    throw err;
  }
};
