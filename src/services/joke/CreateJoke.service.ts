import { MongoService } from '../..';

interface Body {
  type: string;
  setup: string;
  punchline: string;
}

export const CreateJokeService = async (body: Body) => {
  try {
    const result = await MongoService.db('Jokes').collection('DadJokes').insertOne(body);
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
