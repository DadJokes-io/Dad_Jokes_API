import { createCanvas } from 'canvas';

async function generateImage(setup: string, punchline: string): Promise<string> {
  // Set up canvas dimensions
  const canvasWidth = 800;
  const canvasHeight = 400;

  // Create a canvas
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Set up font style
  const fontSize = 40;
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = '#000000';

  // Wrap text function to handle line breaks
  function wrapText(text: string, maxWidth: number, lineHeight: number) {
    const words = text.split(' ');
    let line = '';
    let lines: string[] = [];
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const testLineWidth = ctx.measureText(testLine).width;
      if (testLineWidth > maxWidth && i > 0) {
        lines.push(line);
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);
    return lines;
  }

  // Wrap text and draw setup
  const setupLines = wrapText(setup, canvasWidth - 40, fontSize + 10);
  const setupHeight = setupLines.length * (fontSize + 10);
  setupLines.forEach((line, index) => {
    ctx.fillText(line, 20, 40 + index * (fontSize + 10));
  });

  // Wrap text and draw punchline below setup
  const punchlineLines = wrapText(punchline, canvasWidth - 40, fontSize + 10);
  punchlineLines.forEach((line, index) => {
    ctx.fillText(line, 20, 40 + setupHeight + index * (fontSize + 10));
  });

  // Convert canvas to data URL
  const dataURL = canvas.toDataURL();

  return dataURL;
}

export default generateImage;