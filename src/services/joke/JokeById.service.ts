import { ObjectId } from 'mongodb';
import { mongoService } from '../..';
import { Joke } from '../../models/joke';

export const jokeByIdService = async (id: string) => {
  try {
    const oId = new ObjectId(id);
    const result = (await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .findOne({ _id: oId })) as Joke;
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
