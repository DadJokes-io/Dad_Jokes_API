import { ObjectId } from 'mongodb';
import { mongoService } from '../..';
import { Joke } from '../../model/joke';
import CreateImage from '../../utils/createImage';

export const PNGByIdService = async (id: string) => {
  try {
    const oId = new ObjectId(id);
    const result: Joke | null = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .findOne({ _id: oId });

    if (result) {
      const image = CreateImage(result.setup, result.punchline);

      return {
        success: true,
        body: {
          ...result,
          image,
        },
      };
    } else {
      throw new Error('Joke not found');
    }
  } catch (err) {
    throw err;
  }
};
