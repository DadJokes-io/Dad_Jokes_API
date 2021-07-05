const text2png = require('text2png');

const CreateImage = (setup: string, punchline: string): string => {
  let customItemsPunchline = punchline.split(',');

  for (let i = 0; i < customItemsPunchline.length; i++) {
    customItemsPunchline[i] + '\n';
  }

  punchline = customItemsPunchline.join('');

  let customItemsSetup = setup.split(',');

  for (let i = 0; i < customItemsSetup.length; i++) {
    customItemsSetup[i] + '\n';
  }

  setup = customItemsSetup.join('');

  const png = text2png(`${setup} \n \n${punchline}`, {
    color: 'black',
    lineSpacing: 10,
    padding: 20,
    output: 'dataURL',
    font: '18px Montserrat',
    localFontPath: 'fonts/Montserrat-Regular.ttf',
    localFontName: 'Montserrat',
  });

  return png;
};

export default CreateImage;
