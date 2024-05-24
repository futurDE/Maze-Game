// Select the DOM elements for the box and the blocks
const box = document.querySelector(".box");
const block = document.querySelector(".block1");
const walls = document.querySelectorAll(".wall");

// Array to store the positions of the walls
const wallPositions = [];

// Initialize a counter variable
let counter = 0;

// Loop through each wall element to get its position and store it in wallPositions array
// walls.forEach((wall) => {
//     let wallPosition = wall.getBoundingClientRect();
//     let wallTop = wallPosition.top;
//     let wallBottom = wallPosition.bottom;
//     let wallLeft = wallPosition.left;
//     let wallRight = wallPosition.right;

//     function Box(top, bottom, left, right) {
//         this.top = top;
//         this.bottom = bottom;
//         this.left = left;
//         this.right = right;
//     }

//     let box = new Box(wallTop, wallBottom, wallLeft, wallRight);
//     wallPositions.push(box);
// });

let topThing = [];
let bottomThing = [];
let leftThing = [];
let rightThing = [];

walls.forEach((wall) => {
    let wallPosition = wall.getBoundingClientRect();
    let wallTop = wallPosition.top;
    let wallBottom = wallPosition.bottom;
    let wallLeft = wallPosition.left;
    let wallRight = wallPosition.right;

    topThing.push(wallTop);
    bottomThing.push(wallBottom);
    leftThing.push(wallLeft);
    rightThing.push(wallRight);
});

wallPositions.push(topThing);
wallPositions.push(bottomThing);
wallPositions.push(leftThing);
wallPositions.push(rightThing);

// Log the positions of all walls to the console
console.log(wallPositions);

// Placeholder function for finding the closest wall (implementation not provided)
function findClosest() {
    let boxPosition = box.getBoundingClientRect();
    let boxCenter = boxPosition.top - (boxPosition.height/2);
    // console.log(`This is box center from top${boxCenter}`);
    let offset = 0;
    let compareDifference = [];
    let closestObject = {};

    const wallObjPosition = {};
    function funcTop(array) {
        for (let i = 0; i < array.length; i++) {
            const topKey = `top${i + 1}`;
            wallObjPosition[topKey] = array[i];
        }
    }
    function funcBottom(array) {
        for (let i = 0; i < array.length; i++) {
            const bottomKey = `bottom${i + 1}`;
            wallObjPosition[bottomKey] = array[i];
        }}
    function funcLeft(array) {
        for (let i = 0; i < array.length; i++) {
            const leftKey = `left${i + 1}`;
            wallObjPosition[leftKey] = array[i];
        }}
    function funcRight(array) {
        for (let i = 0; i < array.length; i++) {
            const rightKey = `right${i + 1}`;
            wallObjPosition[rightKey] = array[i];
        }}

    funcTop(topThing);
    funcBottom(bottomThing);
    funcLeft(leftThing);
    funcRight(rightThing);

    // console.log(wallObjPosition);

    for (x in wallObjPosition) {
        offset = wallObjPosition[x] - boxCenter;
        compareDifference.push(offset);
    }

    console.log(compareDifference);
    // return compareDifference;

    let closest = compareDifference[0];
    let domR = "";

    for (k = 0; k < compareDifference.length; k++) {
        if (compareDifference[k] < closest) {
            closest = compareDifference[k];
            if (k + 1 <= 7) {
                domR = "top";
            } else if (k + 1 >= 8 && k + 1 <= 14) {
                domR = "bottom";
            } else if (k + 1 >= 15 && k + 1 <= 21) {
                domR = "left";
            } else {
                domR = "right";
            }
            closestObject[domR] = closest;
        }
    }

    return closestObject;
}

findClosest();

// Initialize the position of the moving box
let topPos = 0;
let leftPos = 0;

// Add an event listener for the "keydown" event to move the box down
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowDown") {
        topPos += 10; // Increase the top position by 10 pixels
        box.style.top = `${topPos}px`; // Update the box's top style
        box.top = topPos; // Update the box's top property
        updateBoxPos(); // Call the function to update the box's position
        console.log(findClosest());
    }
});

// Add an event listener for the "keydown" event to move the box up
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        topPos -= 10; // Decrease the top position by 10 pixels
        box.style.top = `${topPos}px`; // Update the box's top style
        box.top = topPos; // Update the box's top property
        updateBoxPos(); // Call the function to update the box's position
        console.log(findClosest());
    }
});

// Add an event listener for the "keydown" event to move the box right
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
        leftPos += 10; // Increase the left position by 10 pixels
        box.style.left = `${leftPos}px`; // Update the box's left style
        box.left = leftPos; // Update the box's left property
        updateBoxPos(); // Call the function to update the box's position
        console.log(findClosest());
    }
});

// Add an event listener for the "keydown" event to move the box left
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
        leftPos -= 10; // Decrease the left position by 10 pixels
        box.style.left = `${leftPos}px`; // Update the box's left style
        box.left = leftPos; // Update the box's left property
        updateBoxPos(); // Call the function to update the box's position
        console.log(findClosest());
    }
});

// Function to update the box's position and log it to the console
function updateBoxPos() {
    let boxPosUpdate = box.getBoundingClientRect(); // Get the updated position of the box
    console.log(boxPosUpdate); // Log the updated position to the console
}
