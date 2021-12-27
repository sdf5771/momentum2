const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];
//image randomize
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.className = 'bgImg';
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);