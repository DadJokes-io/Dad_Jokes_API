import { mongoService } from '../..';
import { Joke } from '../../model/joke';
const text2png = require('text2png');

export const randomJokePNGService = async () => {
  try {
    const joke: Array<Joke> = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();

    let customItemsPunchline = joke[0].punchline.split(',');

    for (let i = 0; i < customItemsPunchline.length; i++) {
      customItemsPunchline[i] + '\n';
    }

    joke[0].punchline = customItemsPunchline.join('');

    let customItemsSetup = joke[0].setup.split(',');

    for (let i = 0; i < customItemsSetup.length; i++) {
      customItemsSetup[i] + '\n';
    }

    joke[0].setup = customItemsSetup.join('');

    const png = text2png(`${joke[0].setup} \n \n${joke[0].punchline}`, {
      color: 'black',
      lineSpacing: 10,
      padding: 20,
      output: 'dataURL',
      font: '18px Montserrat',
      localFontPath: 'fonts/Montserrat-Regular.ttf',
      localFontName: 'Montserrat',
    });

    return { success: true, body: png };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
