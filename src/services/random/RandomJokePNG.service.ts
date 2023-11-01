import { mongoService } from '../..';
import { Joke } from '../../model/joke';
import generateImage from '../../utils/createCanvasImage';

export const randomJokePNGService = async () => {
  try {
    const joke: Array<Joke> = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();

    const image = await generateImage(joke[0].setup, joke[0].punchline);

    const result = {
      ...joke[0],
      image,
    };

    return {
      success: true,
      body: result,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
