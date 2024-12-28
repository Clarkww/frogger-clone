const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

console.log(window.innerWidth);

const rowHeight = window.innerHeight / 25; // Define the height of each row

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let carImgBlue = new Image();
carImgBlue.src = 'CarCollection1.png';

let blueCarLeft = new Image();
blueCarLeft.src = 'CarCollection1left.png';

let redTruckImg = new Image();
redTruckImg.src = './redTruck.png';

let redTruckLeftImg = new Image();
redTruckLeftImg.src = './redTruckLeft.png';



let frogForwardImg = new Image();
frogForwardImg.src = 'frogForward.png';

let frogLeftImg = new Image();
frogLeftImg.src = 'frogLeft.png';

let frogRightImg = new Image();
frogRightImg.src = 'frogRight.png';

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
const originalCarHeight = rowHeight; // Original car height
const originalCarWidth = Math.min(window.innerWidth / 11, 70)// Original car width



const scaleFactor = canvas.height / window.innerHeight; // Scale based on canvas height relative to window
const carHeight = originalCarHeight * scaleFactor;
const carWidth = originalCarWidth * scaleFactor;


const stages = [
    // stage 1
    {
        cars: [
            { x: 200, y: rowHeight * 2, width: carWidth, height: carHeight, speed: 3, img: carImgBlue, direction: 'left' },
            { x: 100, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
            { x: 400, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
            { x: 10, y: rowHeight * 3, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
        
            { x: 300, y: rowHeight * 4, width: carWidth, height: carHeight, speed: 1, img: carImgBlue },
            { x: 300, y: rowHeight * 5, width: carWidth, height: carHeight, speed: 4, img: carImgBlue },
            // { x: 200, y: rowHeight * 8, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
            { x: 100, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
            { x: 400, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
            { x: 10, y: rowHeight * 9, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'left' },
            { x: 200, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: carImgBlue },
            { x: 100, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: carImgBlue },
            { x: 300, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: carImgBlue },
            { x: 10, y: rowHeight * 10, width: carWidth, height: carHeight, speed: 2, img: carImgBlue },
            { x: 300, y: rowHeight * 13, width: carWidth, height: carHeight, speed: 5, img: carImgBlue, direction: 'left' },
            { x: 200, y: rowHeight * 14, width: carWidth, height: carHeight, speed: 3, img: carImgBlue, direction: 'right' },
            { x: 100, y: rowHeight * 19, width: carWidth, height: carHeight, speed: 3, img: blueCarLeft, direction: 'left' },
            { x: 300, y: rowHeight * 19, width: carWidth, height: carHeight, speed: 3, img: blueCarLeft, direction: 'left' },
            { x: 100, y: rowHeight * 20, width: carWidth, height: carHeight, speed: 2, img: carImgBlue, direction: 'right' },
        
        ],
        logs: [
            // { x: 0, y: rowHeight * 8, width: 100, height: 20, speed: 1 },
            { x: 300, y: rowHeight * 12, width: 100, height: 10, speed: 1 },
            { x: 0, y: rowHeight * 16, width: 100, height: 10, speed: 2 },
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
            { x: 200, y: rowHeight * 18, width: carWidth, height: carHeight, speed: 3, img: carImgBlue, direction: 'left' },
            { x : 100, y: rowHeight * 17, width: carWidth, height: carHeight, speed: 2, img: redTruckImg, direction: 'right' },

        ],
        logs: [
            // { x: 0, y: rowHeight * 8, width: 100, height: 20, speed: 1 },
            { x: 300, y: rowHeight * 21, width: 100, height: 15, speed: 1, direction: 'left' },
            { x: 300, y: rowHeight * 20, width: 100, height: 15, speed: 2, direction: 'right' },

            // { x: 0, y: rowHeight * 16, width: 100, height: 20, speed: 2 },
            // { x: 300, y: rowHeight * 20, width: 100, height: 20, speed: 2 }
        ],

        roads: [
            { startRow: 17, rowCount: 2 },
            // { startRow: 13, rowCount: 2 },
            // { startRow: 9, rowCount: 2 },
            // { startRow: 2, rowCount: 4 }
        ],

        dashedLines: [
            [17, 18],
            // [13, 14],
            // [10, 9],
            // [2, 3],
            // [4, 5]
        ],
        solidLines: [
            // [3, 4]
        ]
        
    },
    
]

let currentStage = 1;
let cars = stages[currentStage].cars;
let logs = stages[currentStage].logs
let roads = stages[currentStage].roads
let dashedLines = stages[currentStage].dashedLines
let solidLines = stages[currentStage].solidLines

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
            resetFrog();
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
            // console.log('frog on water');
            resetFrog();
        }
    });


}



function resetFrog() {
    frog.x = canvas.width / 2 - 10;
    frog.y = canvas.height - rowHeight;
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

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    requestAnimationFrame(update);
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
update();