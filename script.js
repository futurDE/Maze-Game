// Select the DOM elements for the box and the blocks
const box = document.querySelector(".box");
const block = document.querySelector(".block1");
const walls = document.querySelectorAll(".wall");

// Array to store the positions of the walls
const wallPositions = [];

// Initialize a counter variable
let counter = 0;

// Loop through each wall element to get its position and store it in wallPositions array
walls.forEach((wall) => {
    let wallPosition = wall.getBoundingClientRect();
    let wallTop = wallPosition.top;
    let wallBottom = wallPosition.bottom;
    let wallLeft = wallPosition.left;
    let wallRight = wallPosition.right;

    function Box(top, bottom, left, right) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }

    let box = new Box(wallTop, wallBottom, wallLeft, wallRight);
    wallPositions.push(box);
});

//     // Get the position of the wall
//     let wallPosition = walls[i].getBoundingClientRect();
//     let wallTop = wallPosition.top;
//     let wallBottom = wallPosition.bottom;
//     let wallLeft = wallPosition.left;
//     let wallRight = wallPosition.right;

//     // Constructor function to create a box object with top, bottom, left, and right properties
//     function Box(top, bottom, left, right) {
//         this.top = top;
//         this.bottom = bottom;
//         this.left = left;
//         this.right = right;
//     }

//     // Create a new box object with the wall's position and add it to the wallPositions array
//     let box = new Box(wallTop, wallBottom, wallLeft, wallRight);
//     wallPositions.push(box);
// }

// Placeholder function for finding the closest wall (implementation not provided)
function findClosest() {
    
}

// Log the positions of all walls to the console
console.log(wallPositions);

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
    }
});

// Add an event listener for the "keydown" event to move the box up
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        topPos -= 10; // Decrease the top position by 10 pixels
        box.style.top = `${topPos}px`; // Update the box's top style
        box.top = topPos; // Update the box's top property
        updateBoxPos(); // Call the function to update the box's position
    }
});

// Add an event listener for the "keydown" event to move the box right
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
        leftPos += 10; // Increase the left position by 10 pixels
        box.style.left = `${leftPos}px`; // Update the box's left style
        box.left = leftPos; // Update the box's left property
        updateBoxPos(); // Call the function to update the box's position
    }
});

// Add an event listener for the "keydown" event to move the box left
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
        leftPos -= 10; // Decrease the left position by 10 pixels
        box.style.left = `${leftPos}px`; // Update the box's left style
        box.left = leftPos; // Update the box's left property
        updateBoxPos(); // Call the function to update the box's position
    }
});

// Function to update the box's position and log it to the console
function updateBoxPos() {
    let boxPosUpdate = box.getBoundingClientRect(); // Get the updated position of the box
    console.log(boxPosUpdate); // Log the updated position to the console
}
