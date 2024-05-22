const block = document.querySelector(".block1");
let oneTwo = block.getBoundingClientRect();
let topOneTwo = oneTwo.top;

let topPos = 0;
let leftPos = 0;

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowDown") {
        if (topPos < topOneTwo) {
            topPos += 10;
            box.style.top = `${topPos}px`;
        }
        box.top = topPos;
        updateBoxPos();
    }
});

//....................................................................................

if (event.key == "ArrowDown") {
    let getBoxBound = box.getBoundingClientRect();
    let offset = getBoxBound.top - (getBoxBound.height / 2);
    if (offset < topOneTwo) {
        topPos += 10;
        box.style.top = `${topPos}px`;
    }
    box.top = topPos;
    updateBoxPos();
}