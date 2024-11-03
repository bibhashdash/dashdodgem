const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const carWidth = 50;
const carHeight = 50;
let carSpeed = 5;
let carX = (canvas.width / 2) - 25;
let carY = canvas.height - 250;

let rightPressed = false;
let leftPressed = false;
let score = 0;
let health = 140;
const drawRoad = () => {
  ctx.beginPath();
  ctx.rect(160, 0, 160, canvas.height)
  ctx.fillStyle = "#afafaf";
  ctx.fill();
  ctx.closePath();
}

const drawGrassLeft = () => {
  ctx.beginPath();
  ctx.rect(0, 0, 159, canvas.height);
  ctx.fillStyle = "#6b4510";
  ctx.fill();
  ctx.closePath();
}

const drawGrassRight = () => {
  ctx.beginPath();
  ctx.rect(321, 0, 159, canvas.height);
  ctx.fillStyle = "#6b4510";
  ctx.fill();
  ctx.closePath();
}


let roadMarkingsInitialYPosnOne = -800;
let roadMarkingsInitialYPosnTwo = -1800;
const drawRoadMarkings = () => {
  ctx.beginPath();
  ctx.rect(235, roadMarkingsInitialYPosnOne, 10, 500);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(235, roadMarkingsInitialYPosnTwo, 10, 500);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  roadMarkingsInitialYPosnOne += 10
  if (roadMarkingsInitialYPosnOne > canvas.height) roadMarkingsInitialYPosnOne = -800;
  roadMarkingsInitialYPosnOne += 10
  if (roadMarkingsInitialYPosnTwo > canvas.height) roadMarkingsInitialYPosnTwo = -1800;
}

let treeLeftInitialXOne = Math.floor(Math.random() * 100);
let treeLeftInitialXTwo = Math.floor(Math.random() * 100);
let treeLeftInitialXThree = Math.floor(Math.random() * 100);
let treeLeftInitialYOne = -(Math.floor(Math.random() * 200));
let treeLeftInitialYTwo = -(Math.floor(Math.random() * 800));
let treeLeftInitialYThree = -(Math.floor(Math.random() * 500));

const drawRandomTreesLeft = () => {
  const treeImage = new Image();
  treeImage.src = "tree.png";
  treeImage.addEventListener("load", (e) => {
    ctx.drawImage(treeImage, 0, 0, 512, 512, treeLeftInitialXOne, treeLeftInitialYOne, 50, 50);
    ctx.drawImage(treeImage, 0, 0, 512, 512, treeLeftInitialXTwo, treeLeftInitialYTwo, 50, 50);
    ctx.drawImage(treeImage, 0, 0, 512, 512, treeLeftInitialXThree, treeLeftInitialYThree, 50, 50);
  })
  treeLeftInitialYOne += 5;
  treeLeftInitialYTwo += 5;
  treeLeftInitialYThree += 5;
  if (treeLeftInitialYOne > canvas.height) {
    treeLeftInitialXOne = Math.floor(Math.random() * 100);
    treeLeftInitialYOne = -(Math.floor(Math.random() * 200));
  }
  if (treeLeftInitialYTwo > canvas.height) {
    treeLeftInitialXTwo = Math.floor(Math.random() * 100);
    treeLeftInitialYTwo = -(Math.floor(Math.random() * 800));
  }
  if (treeLeftInitialYThree > canvas.height) {
    treeLeftInitialXThree = Math.floor(Math.random() * 100);
    treeLeftInitialYThree = -(Math.floor(Math.random() * 500));
  }
};

let treeRightInitialXOne =  Math.floor(Math.random() * (400 - 340) + 340);
let treeRightInitialXTwo =  Math.floor(Math.random() * (400 - 340) + 340);
let treeRightInitialXThree =  Math.floor(Math.random() * (400 - 340) + 340);
let treeRightInitialYOne = -(Math.floor(Math.random() * 200));
let treeRightInitialYTwo = -(Math.floor(Math.random() * 800));
let treeRightInitialYThree = -(Math.floor(Math.random() * 500));
const drawRandomTreesRight = () => {
  const treeImage = new Image();
  treeImage.src = "tree.png";
  treeImage.addEventListener("load", (e) => {
    ctx.drawImage(treeImage, 0, 0, 512, 512, treeRightInitialXOne, treeRightInitialYOne, 50, 50);
    ctx.drawImage(treeImage, 0, 0, 512, 512, treeRightInitialXTwo, treeRightInitialYTwo, 50, 50);
    ctx.drawImage(treeImage, 0, 0, 512, 512, treeRightInitialXThree, treeRightInitialYThree, 50, 50);
  })
  treeRightInitialYOne += 5;
  treeRightInitialYTwo += 5;
  treeRightInitialYThree += 5;
  if (treeRightInitialYOne > canvas.height) {
    treeRightInitialXOne = Math.floor(Math.random() * (400 - 340) + 340);
    treeRightInitialYOne = -(Math.floor(Math.random() * 200));
  }
  if (treeRightInitialYTwo > canvas.height) {
    treeRightInitialXTwo = Math.floor(Math.random() * (400 - 340) + 340);
    treeRightInitialYTwo = -(Math.floor(Math.random() * 800));
  }
  if (treeRightInitialYThree > canvas.height) {
    treeRightInitialXThree = Math.floor(Math.random() * (400 - 340) + 340);
    treeRightInitialYThree = -(Math.floor(Math.random() * 500));
  }
};

let coinInitialX = Math.floor(Math.random() * (280 - 190) + 190);
let coinY = 0;

let moneyBagInitialX = Math.floor(Math.random() * (280 - 190) + 190);
let moneyBagY = 0;
const drawRewards = () => {
  const coinImage = new Image();
  coinImage.src = "coin.png";
  coinImage.addEventListener("load", (e) => {
    ctx.drawImage(coinImage, 0, 0, 512, 512, coinInitialX, coinY, 30, 30)
  })

  coinY += 5
  if (coinY > canvas.height) {
    coinInitialX = Math.floor(Math.random() * (280 - 190) + 190);
    coinY = 0;
  }

  const moneyBagImage = new Image();
  moneyBagImage.src = "money-bags.png";
  moneyBagImage.addEventListener("load", (e) => {
    ctx.drawImage(moneyBagImage, 0, 0, 512, 512, moneyBagInitialX, moneyBagY, 30, 30)
  })

  moneyBagY += 5
  if (moneyBagY > canvas.height) {
    moneyBagInitialX = Math.floor(Math.random() * (280 - 190) + 190);
    moneyBagY = 0;
  }
}

let hazardInitialX = Math.floor(Math.random() * (300 - 200) + 200);
let hazardY = -200;

const drawHazard = () => {

  const hazardImage = new Image();
  hazardImage.src = "hole.png";
  hazardImage.addEventListener("load", (e) => {
    ctx.drawImage(hazardImage, 0, 0, 512, 512, hazardInitialX, hazardY, 30, 30)
  })

  hazardY += 5
  if (hazardY > canvas.height) {
    hazardInitialX = Math.floor(Math.random() * (300 - 200) + 200);
    hazardY = -200;
  }
}

const drawCar = () => {
  const carImage = new Image();
  carImage.src = "racing-car.png";
  carImage.addEventListener("load", (e) => {
    ctx.drawImage(carImage, 0, 0, 512, 512, carX, carY, 50, 50);
  })
}

function drawScore() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(score, 60, 40);
}

const drawHealthBar = (width) => {
  ctx.beginPath();
  ctx.rect(5, 80, width, 10);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

const drawHealthBarContainer = () => {
  ctx.beginPath();
  ctx.rect(8, 78, 100, 24);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}

function drawMoneyBag() {
  const moneyBagImage = new Image();
  moneyBagImage.src = "money-bag.png";
  moneyBagImage.addEventListener("load", (e) => {
    ctx.drawImage(moneyBagImage, 0, 0, 512, 512, 2, 5, 50, 50);
  })
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawRewards();
  drawHazard();
  drawCar();

  drawMoneyBag();
  drawScore();
  drawHealthBar(health);


//   update score
  if (Math.abs(carX - hazardInitialX) <= 30 && Math.abs(carY - hazardY) <= 30 )  {
    hazardInitialX = -500;
    hazardY = -500;
    drawHealthBar(health);
    health -= 10
  }
  if (Math.abs(carX - coinInitialX) <= 30 && Math.abs(carY - coinY) <= 30 )  {
    coinInitialX = -500;
    coinY = -500;
    score = score + 1;
  }

  if (Math.abs(carX - moneyBagInitialX) <= 30 && Math.abs(carY - moneyBagY) <= 30 )  {
    moneyBagInitialX = -500;
    moneyBagY = -500;
    score = score + 5;
  }

  if (rightPressed) {
    carX += 5;
    if (carX + carWidth > 320) {
      carX = 320 - carWidth;
    }
  } else if (leftPressed) {
    carX -= 5;
    if (carX < 160) {
      carX = 160;
    }
  }


}



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

const drawBackground = () => {
  drawRoad();
  drawRoadMarkings();
  // drawRoadMarkingsTwo();
  drawGrassLeft();
  drawGrassRight();
  drawRandomTreesLeft();
  drawRandomTreesRight();
  // drawRandomAnimals();
  // drawRandomPeople();
}

setInterval(draw, 10);
