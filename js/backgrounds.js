const images = [
  "Manchester_United.jpg",
  "주술회전.jpg",
  "4월은 너의 거짓말.gif",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
