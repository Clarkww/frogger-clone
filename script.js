const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

console.log(window.innerWidth);

const rowHeight = window.innerHeight / 23; // Define the height of each row

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let carImgBlue = new Image();
carImgBlue.src = './images/CarCollection1.png';

let blueCarLeft = new Image();
blueCarLeft.src = './images/CarCollection1left.png';

let redTruckImg = new Image();
redTruckImg.src = './images/redTruck.png';

let redTruckLeftImg = new Image();
redTruckLeftImg.src = './images/redTruckLeft.png';

let greenTruckImg = new Image();
greenTruckImg.src = './images/greenTruck.png';

let greenTruckLeftImg = new Image();
greenTruckLeftImg.src = './images/greenTruckLeft.png';

let greyBusImg = new Image();
greyBusImg.src = './images/greyBus.png';

let greyBusLeftImg = new Image();
greyBusLeftImg.src = './images/greyBusLeft.png';

let orangeSportsCarImg = new Image();
orangeSportsCarImg.src = './images/orangeSportCar.png';

let orangeSportsCarLeftImg = new Image();
orangeSportsCarLeftImg.src = './images/orangeSportCarLeft.png';

let purpleBikeImg = new Image();
purpleBikeImg.src = './images/purpleBike.png';

let purpleBikeLeftImg = new Image();
purpleBikeLeftImg.src = './images/purpleBikeLeft.png';

let greenSuvImg = new Image();
greenSuvImg.src = './images/greenSuv.png';

let greenSuvLeftImg = new Image();
greenSuvLeftImg.src = './images/greenSuvLeft.png';

let binLorryImg = new Image();
binLorryImg.src = './images/binLorry.png';

let binLorryLeftImg = new Image();
binLorryLeftImg.src = './images/binLorryLeft.png';

let frogForwardImg = new Image();
frogForwardImg.src = './images/frogForward.png';

let frogLeftImg = new Image();
frogLeftImg.src = './images/frogLeft.png';

let frogRightImg = new Image();
frogRightImg.src = './images/frogRight.png';

const frog = {
    x: canvas.width / 2 - 10,
    y: canvas.height - rowHeight,
    // y:30,
    width: rowHeight,
    height: rowHeight -1 ,

    speed: rowHeight, // Move one row at a time
    direction: 'up',
    onLog: false

};
const originalCarHeight = rowHeight - 7; // Original car height
const originalCarWidth = Math.min(window.innerWidth / 11, 70)// Original car width



const scaleFactor = canvas.height / window.innerHeight; // Scale based on canvas height relative to window
const carHeight = originalCarHeight * scaleFactor;
const carWidth = originalCarWidth * scaleFactor;


const stages = [
    // stage 1
    {
        cars: [
            { x: 200, y: rowHeight * 2, width: carWidth, height: carHeight, speed: 3, img: redTruckLeftImg, direction: 'left' },
            { x: 100, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 2, img: blueCarLeft, direction: 'left' },
            { x: 400, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 2, img: greenTruckLeftImg, direction: 'left' },
            { x: 10, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 2, img: orangeSportsCarLeftImg, direction: 'left' },
        
            { x: 300, y: rowHeight * 4, width: carWidth, height: carHeight, speed: 1, img: carImgBlue },
            { x: 300, y: rowHeight * 5, width: carWidth, height: carHeight, speed: 4, img: orangeSportsCarImg },
            // { x: 200, y: rowHeight * 8, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
            { x: 100, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 2.5, img: blueCarLeft, direction: 'left' },
            { x: 400, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 2.5, img: blueCarLeft, direction: 'left' },
            { x: 10, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 2.5, img: greenTruckLeftImg, direction: 'left' },
            { x: 200, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: redTruckImg },
            { x: 100, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: carImgBlue },
            { x: 300, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: binLorryImg },
            { x: 10, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: carImgBlue },
            { x: 300, y: rowHeight * 13, width: carWidth, height: carHeight, speed: 5, img: orangeSportsCarLeftImg, direction: 'left' },
            { x: 200, y: rowHeight * 14, width: carWidth, height: carHeight, speed: 3, img: redTruckImg, direction: 'right' },
            { x: 100, y: rowHeight * 19, width: carWidth, height: carHeight, speed: 3, img: greenSuvLeftImg, direction: 'left' },
            { x: 300, y: rowHeight * 19, width: carWidth, height: carHeight, speed: 3, img: blueCarLeft, direction: 'left' },
            { x: 100, y: rowHeight * 20, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'right' },
        
        ],
        logs: [
            // { x: 0, y: rowHeight * 8, width: 100, height: 20, speed: 1 },
            { x: 300, y: rowHeight * 12, width: 100, height: 15, speed: 1 },
            { x: 0, y: rowHeight * 16, width: 100, height: 15, speed: 2 },
            // { x: 300, y: rowHeight * 20, width: 100, height: 20, speed: 2 }
        ],
        roads: [
            { startRow: 19, rowCount: 2 },
            { startRow: 13, rowCount: 2 },
            { startRow: 9, rowCount: 2 },
            { startRow: 2, rowCount: 4 }
        ],
        dashedLines: [
            [19, 20],
            [13, 14],
            [10, 9],
            [2, 3],
            [4, 5]
        ],
        solidLines: [
            [3, 4]
        ]
    },
    // stage 2
    {
        cars: [
            { x : 100, y: rowHeight * 17, width: carWidth, height: carHeight, speed: 2, img: redTruckImg, direction: 'right' },
            { x : -50, y: rowHeight * 17, width: carWidth, height: carHeight, speed: 2, img: greenTruckImg, direction: 'right' },
            { x: 200, y: rowHeight * 18, width: carWidth, height: carHeight, speed: 3, img: carImgBlue, direction: 'left' },

            { x : 400, y: rowHeight * 13, width: carWidth, height: carHeight, speed: 1.3, img: carImgBlue, direction: 'right' },
            { x : 400, y: rowHeight * 14, width: carWidth, height: carHeight, speed: 1, img: greenSuvLeftImg, direction: 'left' },

            { x : 200, y: rowHeight * 8, width: carWidth, height: carHeight, speed: 2, img: greenTruckLeftImg, direction: 'left' },
            { x : 100, y: rowHeight * 9, width: carWidth, height: carHeight , speed: 3, img: orangeSportsCarLeftImg, direction: 'left' },
            { x : 300, y: rowHeight * 7, width: carWidth, height: carHeight, speed: 1.5, img: blueCarLeft, direction: 'left' },
            { x : 400, y: rowHeight * 7, width: carWidth, height: carHeight, speed: 1.5, img: redTruckLeftImg, direction: 'left' },

            { x : 200, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 1.5, img: redTruckImg, direction: 'right' },
            { x : 0, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 1.5, img: greenSuvImg, direction: 'right' },
            { x : 300, y: rowHeight * 4, width: carWidth, height: carHeight, speed: 1.5, img: carImgBlue, direction: 'right' },
            { x : 100, y: rowHeight * 4, width: carWidth, height: carHeight, speed: 1.5, img: greenTruckImg, direction: 'right' },
            { x : 400, y: rowHeight * 5, width: carWidth, height: carHeight, speed: 1.5, img: binLorryImg, direction: 'right' },




        ],
        logs: [
            // { x: 0, y: rowHeight * 8, width: 100, height: 20, speed: 1 },
            { x: 300, y: rowHeight * 21, width: 100, height: 15, speed: 1, direction: 'left' },
            { x: 300, y: rowHeight * 20, width: 100, height: 15, speed: 2, direction: 'right' },

            { x: 300, y: rowHeight * 15, width: 100, height: 15, speed: 0.3, direction: 'left' },
            // { x: 0, y: rowHeight * 16, width: 100, height: 15, speed: 0.3, direction: 'right' },


        ],

        roads: [
            { startRow: 17, rowCount: 2 },
            { startRow: 13, rowCount: 2 },

            { startRow: 3, rowCount: 3 },
            { startRow: 7, rowCount: 3 },


        ],

        dashedLines: [
            [17, 18],
            [13, 14],

            [3, 4],
            [4, 5],
            [7, 8],
            [8, 9],

        ],
        solidLines: [
            // [3, 4]
        ]
        
    },
    // stage 3

    {
        cars: [
            { x : 100, y: rowHeight * 16, width: carWidth, height: carHeight, speed: 2, img: purpleBikeImg, direction: 'right' },
            { x : 200, y: rowHeight * 16, width: carWidth, height: carHeight, speed: 2, img: purpleBikeImg, direction: 'right' },
            { x : 0, y: rowHeight * 16, width: carWidth, height: carHeight, speed: 2, img: greenSuvImg, direction: 'right' },
            { x : 100, y: rowHeight * 17, width: carWidth, height: carHeight, speed: 1.3, img: redTruckImg, direction: 'right' },

            { x : 300, y: rowHeight * 18, width: carWidth, height: carHeight, speed: 1.4, img: blueCarLeft, direction: 'left' },
            { x : 100, y: rowHeight * 18, width: carWidth, height: carHeight, speed: 1.4, img: blueCarLeft, direction: 'left' },
            { x : 400, y: rowHeight * 19, width: carWidth, height: carHeight, speed: 1.9, img: purpleBikeLeftImg, direction: 'left' },

            { x : 200, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 3, img: purpleBikeLeftImg, direction: 'left' },
            { x : 150, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 3, img: purpleBikeLeftImg, direction: 'left' },
            { x : 350, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 3, img: orangeSportsCarLeftImg, direction: 'left' },
            { x : 100, y: rowHeight * 8, width: carWidth, height: carHeight, speed: 2.3, img: greenSuvLeftImg, direction: 'left' },
            { x : 250, y: rowHeight * 8, width: carWidth, height: carHeight, speed: 2.3, img: greenTruckLeftImg, direction: 'left' },
            { x : 330, y: rowHeight * 8, width: carWidth, height: carHeight, speed: 2.3, img: redTruckLeftImg, direction: 'left' },
            { x : 200, y: rowHeight * 7, width: carWidth, height: carHeight, speed: 1.6, img: greenTruckLeftImg, direction: 'left' },

            { x : 200, y: rowHeight * 6, width: carWidth, height: carHeight, speed: 1.8, img: carImgBlue, direction: 'right' },
            { x : 300, y: rowHeight * 6, width: carWidth, height: carHeight, speed: 1.8, img: binLorryImg, direction: 'right' },
            { x : 200, y: rowHeight * 5, width: carWidth, height: carHeight, speed: 2.8, img: purpleBikeImg, direction: 'right' },
            { x : 200, y: rowHeight * 4, width: carWidth, height: carHeight, speed: 3.7, img: orangeSportsCarImg, direction: 'right' },




        ],
        logs: [
            { x: 0, y: rowHeight * 20, width: 100, height: 15, speed: 2 },
            { x: 300, y: rowHeight * 15, width: 150, height: 15, speed: 1, direction: 'left' },

            { x: 100, y: rowHeight * 13, width: 120, height: 15, speed: 1.9, direction: 'left' },
            { x: 300, y: rowHeight * 12, width: 153, height: 15, speed: 1.3, direction: 'right' },
            { x: 300, y: rowHeight * 11, width: 150, height: 15, speed: 1, direction: 'left' },



        ],
        roads: [
            { startRow: 16, rowCount: 4 },

            { startRow: 4, rowCount: 6 },


        ],
        dashedLines: [
            [16, 17],
            [18, 19],

            [4,5],
            [5,6],
            [7,8],
            [8,9],
        ],
        solidLines: [
            [17, 18],
            [6, 7],
        ]
    }
    
]

let currentStage = 0;
let lives = 3;
let cars = stages[currentStage].cars;
let logs = stages[currentStage].logs
let roads = stages[currentStage].roads
let dashedLines = stages[currentStage].dashedLines
let solidLines = stages[currentStage].solidLines

let startScreen = true;

console.log(currentStage    );

function drawFrog() {
    ctx.fillStyle = 'green';
    // ctx.fillRect(frog.x, frog.y, frog.width, frog.height);
    if (frog.direction === 'up') {
        ctx.drawImage(frogForwardImg, frog.x, frog.y, frog.width, frog.height);
    } else if (frog.direction === 'left') {
        ctx.drawImage(frogLeftImg, frog.x, frog.y, frog.width, frog.height);
    }
    else if (frog.direction === 'right') {
        ctx.drawImage(frogRightImg, frog.x, frog.y, frog.width, frog.height);
    }
}

function drawCars() {
    cars.forEach(car => {
        ctx.drawImage(car.img, car.x, car.y, car.width, car.height);
    });
}

function drawLogs() {
    ctx.fillStyle = 'brown';
    logs.forEach(log => {
        const logCenterY = log.y + (rowHeight - log.height) / 2;
        ctx.fillRect(log.x, logCenterY, log.width, log.height);
    });
}
function drawWater() {
    ctx.fillStyle = 'blue';
    if (Array.isArray(logs)) {
        logs.forEach(log => {
            ctx.fillRect(0, log.y, canvas.width, rowHeight);
        });
    }
}

function updateCars() {
    cars.forEach(car => {
        if (car.direction === 'left') {
            car.x -= car.speed;
            if (car.x < -car.width) {
                car.x = canvas.width;
            }
        } else {
            car.x += car.speed;
            if (car.x > canvas.width) {
                car.x = -car.width;
            }
        }
    });
}


function drawRoads() {
    ctx.fillStyle = 'gray';
    // console.log('roads', roads);
    // const roads = stages[stage].roads;
    roads.forEach(road => {
        ctx.fillRect(0, rowHeight * road.startRow, canvas.width, rowHeight * road.rowCount);
    });
}




function drawLines(){
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.setLineDash([20, 15]); // Adjust the dash and gap lengths as needed
    const dashedLines = stages[currentStage].dashedLines;

    dashedLines.forEach(pair => {
        const y = (rowHeight * pair[0] + rowHeight * (pair[1] + 1)) / 2; // Center between the two rows
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    });
    ctx.setLineDash([]); // Reset the line dash to solid
}


function drawSolidLines() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    const solidLines = stages[currentStage].solidLines;
    solidLines.forEach(pair => {
        const y = (rowHeight * pair[0] + rowHeight * (pair[1] + 1)) / 2; // Center between the two rows
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    });
}

function updateLogs() {
    logs.forEach(log => {
        if (log.direction === 'left') {
            log.x -= log.speed;
            if (log.x < -log.width) {
                log.x = canvas.width;
            }
        } else {
            log.x += log.speed;
            if (log.x > canvas.width) {
                log.x = -log.width;
            }
        }
    });
}
function detectCollisions() {
    const padding = 2; // Adjust the padding value as needed
    cars.forEach(car => {
        if (frog.x < car.x + car.width - padding &&
            frog.x + frog.width > car.x + padding &&
            frog.y < car.y + car.height - padding &&
            frog.y + frog.height > car.y + padding) {
            lives--
            resetFrogToPreviousRow(car.y);
        }
    });
}

function waterLogCollision() {
    const padding = 2; // Adjust the padding value as needed
    const tolerance = 0.1
    let onLog = false;

    // console.log('frog collision');

    logs.forEach(log => {
        // console.log(`frog.y = ${frog.y} log.y = ${log.y}`);
        if (frog.x < log.x + log.width - padding &&
            frog.x + frog.width > log.x + padding &&
            frog.y < log.y + log.height - padding &&
            frog.y + frog.height > log.y + padding) {
            onLog = true;
            // frog.x += log.speed;
            if (log.direction === 'left') {
                frog.x -= log.speed;
            } else {
                frog.x += log.speed;
            }
            // console.log('frog on log');
        } else if (Math.abs(frog.y - log.y) < tolerance) {
            lives--;
            // console.log('frog on water');
            resetFrog();
        }
    });


}

function resetFrogToPreviousRow(collisionRowY) {
    let previousRowY = collisionRowY + rowHeight;
    let foundSafeRow = false;

    while (previousRowY < canvas.height && !foundSafeRow) {
        const isSafe = !cars.some(car => car.y === previousRowY) && !logs.some(log => log.y === previousRowY);
        if (isSafe) {
            foundSafeRow = true;
        } else {
            previousRowY += rowHeight;
        }
    }

    if (foundSafeRow) {
        frog.y = previousRowY;
    } else {
        // If no safe row is found, reset to the bottom row
        frog.y = canvas.height - rowHeight;
    }
    frog.x = canvas.width / 2 - frog.width / 2;
}


function resetFrog() {
    frog.x = canvas.width / 2 - 10;
    frog.y = canvas.height - rowHeight;
    lives = 3
}

function loadStage(stageIndex) {
    currentStage = stageIndex;
    cars = stages[currentStage].cars;
    logs = stages[currentStage].logs || []; // Default to an empty array if undefined
    roads = stages[currentStage].roads || [];
    dashedLines = stages[currentStage].dashedLines || [];
    solidLines = stages[currentStage].solidLines || [];


    resetFrog();
}


function checkStageCompletion() {
    if (frog.y <= 0) {
        if (currentStage < stages.length - 1) {
            console.log('Stage completed!');
            loadStage(currentStage + 1);
        } else {
            console.log('Game completed!');
            // Optionally, reset to the first stage or show a completion message
            loadStage(0);
        }
    }
}

function drawLives() {
    ctx.fillStyle = 'teal';
    ctx.font = '20px Arial';
    ctx.fillText(`Lives: ${lives}`, window.innerWidth - 80, 20);
}

function drawStage() {
    ctx.fillStyle = 'teal';
    ctx.font = '20px Arial';
    ctx.fillText(`Stage: ${currentStage + 1}`, 10, 20);
}

function drawStartScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // blue text saying froppy frog
    ctx.fillStyle = 'teal';
    ctx.font = '50px Arial';
    const titleX = canvas.width / 2 - ctx.measureText('Froppy').width / 2;
    const titleY = canvas.height / 2 - 50;
    ctx.fillText('Froppy', titleX, titleY);

    // white text saying press any key to start
    ctx.fillStyle = 'grey';
    ctx.font = '26px Arial';
    const startTextX = canvas.width / 2 - ctx.measureText('Press any key to start').width / 2;
    const startTextY = canvas.height / 2;
    ctx.fillText('Press any key to start', startTextX, startTextY);
}



function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLives();
    drawStage();
    drawRoads();
    drawLines();
    drawSolidLines();
    drawCars();
    drawWater();
    drawLogs();
    drawFrog();
    updateCars();
    updateLogs();
    detectCollisions();
    waterLogCollision();
    checkStageCompletion();
    requestAnimationFrame(update)
    if (lives === 0) {
        alert('Game Over');
        loadStage(0);
        lives = 3;
    }
}

function moveFrog(e) {
    switch (e.key) {
        case 'ArrowUp':
            frog.y -= frog.speed;
            frog.direction = 'up';
            break;
        case 'ArrowDown':
            if (frog.y + frog.height + frog.speed <= canvas.height) {
                frog.y += frog.speed;
                frog.direction = 'up';
            }
            break;
        case 'ArrowLeft':
            if (frog.x - frog.speed >= 0) {
                frog.x -= frog.speed;
                frog.direction = 'left';
            }
            break;
        case 'ArrowRight':
            if (frog.x + frog.width + frog.speed <= canvas.width) {
                frog.x += frog.speed;
                frog.direction = 'right';
            }
            break;
    }
}

document.addEventListener('keydown', moveFrog);
// update();

drawStartScreen();

function startGame() {
    loadStage(0);
    update();
    document.removeEventListener('keydown', startGame);
}

document.addEventListener('keydown', startGame);
