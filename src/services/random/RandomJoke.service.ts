import { mongoService } from '../..';

export const randomJokeService = async (count: number) => {
  try {
    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .aggregate([{ $sample: { size: count > 5 ? 5 : count } }])
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
