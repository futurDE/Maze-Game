// Select the DOM elements for the box and the blocks
const box = document.querySelector(".box");
const block = document.querySelector(".block1");
const walls = document.querySelectorAll(".wall");

// Arrays to store the positions of the walls
const wallPositions = [];
let wallTopPositions = [];
let wallBottomPositions = [];
let wallLeftPositions = [];
let wallRightPositions = [];

// Get the position of each wall and store them in the respective arrays
walls.forEach((wall) => {
    let wallPosition = wall.getBoundingClientRect();
    let wallTop = wallPosition.top;
    let wallBottom = wallPosition.bottom;
    let wallLeft = wallPosition.left;
    let wallRight = wallPosition.right;

    wallTopPositions.push(wallTop);
    wallBottomPositions.push(wallBottom);
    wallLeftPositions.push(wallLeft);
    wallRightPositions.push(wallRight);
});

// Push the arrays of wall positions into the wallPositions array
wallPositions.push(wallTopPositions);
wallPositions.push(wallBottomPositions);
wallPositions.push(wallLeftPositions);
wallPositions.push(wallRightPositions);

// Log the positions of all walls to the console
console.log(wallPositions);

// Placeholder function for finding the closest wall (implementation not provided)
function findClosest() {
    // Get the current position of the box
    let boxPosition = box.getBoundingClientRect();
    // Calculate the center positions of the box
    let boxTop = boxPosition.top;
    let boxBottom = boxPosition.bottom;
    let boxLeft = boxPosition.left;
    let boxRight = boxPosition.right;
    // Log the center positions of the box
    console.log(`This is box center from top${boxTop}`);
    console.log(`This is box center from bottom${boxBottom}`);
    console.log(`This is box center from left${boxLeft}`);
    console.log(`This is box center from right${boxRight}`);
    
    let offset1 = 0;
    let offset2 = 0;
    let offset3 = 0;
    let offset4 = 0;
    let compareDifference = [];
    let closestObject = {};

    // Object to store the wall positions
    const wallObjPosition = {};

    // Functions to populate the wallObjPosition object with the respective wall positions
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
        }
    }

    function funcLeft(array) {
        for (let i = 0; i < array.length; i++) {
            const leftKey = `left${i + 1}`;
            wallObjPosition[leftKey] = array[i];
        }
    }

    function funcRight(array) {
        for (let i = 0; i < array.length; i++) {
            const rightKey = `right${i + 1}`;
            wallObjPosition[rightKey] = array[i];
        }
    }

    // Populate the wallObjPosition object with the wall positions
    funcTop(wallTopPositions);
    funcBottom(wallBottomPositions);
    funcLeft(wallLeftPositions);
    funcRight(wallRightPositions);

    // Calculate the differences between the wall positions and the box center positions
    for (w in wallObjPosition) { //compare with top
        offset1 = wallObjPosition[w] - boxTop;
        compareDifference.push(offset1);
    }
    for (x in wallObjPosition) { //compare with bottom
        offset2 = wallObjPosition[x] - boxBottom;
        compareDifference.push(offset2);
    }
    for (y in wallObjPosition) { //compare with bottom
        offset3 = wallObjPosition[y] - boxBottom;
        compareDifference.push(offset3);
    }
    for (z in wallObjPosition) { //compare with bottom
        offset4 = wallObjPosition[z] - boxBottom;
        compareDifference.push(offset4);
    }

    // Log the differences to the console
    console.log(compareDifference);

    // Find the closest wall by comparing the differences
    let closest = compareDifference[0];
    let domR = "";

    for (k = 0; k < compareDifference.length; k++) {
        if (compareDifference[k] < closest) {
            closest = compareDifference[k];
            if (k + 1 <= 28) {
                domR = "top";
            } else if (k + 1 >= 29 && k + 1 <= 56) {
                domR = "bottom";
            } else if (k + 1 >= 57 && k + 1 <= 84) {
                domR = "left";
            } else {
                domR = "right";
            }
            closestObject[domR] = closest;
        }
    }

    return closestObject;
}

// Call the findClosest function
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
        console.log(findClosest()); // Log the closest wall to the console
    }
});

// Add an event listener for the "keydown" event to move the box up
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        topPos -= 10; // Decrease the top position by 10 pixels
        box.style.top = `${topPos}px`; // Update the box's top style
        box.top = topPos; // Update the box's top property
        updateBoxPos(); // Call the function to update the box's position
        console.log(findClosest()); // Log the closest wall to the console
    }
});

// Add an event listener for the "keydown" event to move the box right
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
        leftPos += 10; // Increase the left position by 10 pixels
        box.style.left = `${leftPos}px`; // Update the box's left style
        box.left = leftPos; // Update the box's left property
        updateBoxPos(); // Call the function to update the box's position
        console.log(findClosest()); // Log the closest wall to the console
    }
});

// Add an event listener for the "keydown" event to move the box left
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
        leftPos -= 10; // Decrease the left position by 10 pixels
        box.style.left = `${leftPos}px`; // Update the box's left style
        box.left = leftPos; // Update the box's left property
        updateBoxPos(); // Call the function to update the box's position
        console.log(findClosest()); // Log the closest wall to the console
    }
});

// Function to update the box's position and log it to the console
function updateBoxPos() {
    let boxPosUpdate = box.getBoundingClientRect(); // Get the updated position of the box
    console.log(boxPosUpdate); // Log the updated position to the console
}
