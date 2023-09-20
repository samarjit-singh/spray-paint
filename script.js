const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const generateButton = document.getElementById("generateButton");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;

function generateArtwork() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const numRectangles = Math.floor(Math.random() * 3) + 4; // generate numbers randomly

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 0; i < numRectangles; i++) {
    // randomly choose the rotation angle for each rectangle
    const rotation = Math.random() * 360; // random rotation angle
    const width = Math.random() * 500 + 400; // random width between 50 and 150
    const height = Math.random() * 400 + 300; // random height between 50 and 150

    // calculate the position to center the rectangle
    const x = centerX - width / 2;
    const y = centerY - height / 2;

    // random stroke color (RGB)
    const strokeColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
      Math.random() * 256
    })`;

    // set the stroke style and line width (thicker border)
    context.strokeStyle = strokeColor;
    context.lineWidth = 50; // adjust the line width as needed

    // draw the hollow rectangle with rotation
    context.translate(x + width / 2, y + height / 2);
    context.rotate((rotation * Math.PI) / 180);
    context.strokeRect(-width / 2, -height / 2, width, height);
    context.setTransform(1, 0, 0, 1, 0, 0); // reset transformations
  }

  // implement spray paint effect (random circles)
  const numSprayPaints = 1000; // adjust as needed
  for (let i = 0; i < numSprayPaints; i++) {
    const sprayX = Math.random() * canvas.width;
    const sprayY = Math.random() * canvas.height;
    const spraySize = Math.random() * 4; // random circle size

    // random fill color for the spray paint (RGB with low opacity)
    const sprayColor = `rgba(${Math.random() * 256}, ${Math.random() * 256}, ${
      Math.random() * 256
    }, 0.2)`;

    // draw the spray paint circle
    context.fillStyle = sprayColor;
    context.beginPath();
    context.arc(sprayX, sprayY, spraySize, 0, Math.PI * 2);
    context.fill();
  }
}

generateButton.addEventListener("click", generateArtwork);
generateArtwork(); // generate art work

