import { ObjectId } from 'mongodb';
import { mongoService } from '../..';
import { Joke } from '../../model/joke';

export const jokeByIdService = async (id: string) => {
  try {
    const oId = new ObjectId(id);
    const result: Joke | null = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .findOne({ _id: oId });

    if (!result) {
      throw new Error('Joke with that ID does not exist');
    }

    return {
      success: true,
      body: { ...result, shareableLink: `https://dadjokes.io/joke/${result._id}` },
    };
  } catch (err) {
    throw err;
  }
};
