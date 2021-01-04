import { mongoService } from '../..';

interface Body {
  type: string;
  setup: string;
  punchline: string;
}

export const createJokeService = async (body: Body) => {
  try {
    const result = await mongoService.db('Jokes').collection('DadJokes').insertOne(body);
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
