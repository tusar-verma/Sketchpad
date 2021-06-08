
let isMouseDown = false;
let randomColor = false;
let color = "rgb(0,0,0)";
createNewGrid()

window.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    draw(e);
})
window.addEventListener("mouseup", (e) => isMouseDown = false)

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", setColor)
colorPicker.addEventListener("click", setColor)

function draw(e) {
    if (e.target.className == "gridElement"){
        if (isMouseDown) {
            clearSelection();
            e.target.style.backgroundColor = randomColor ? randomRGBcolor() : color;
        }
    }
}

function createNewGrid(){
    let gridSize = 0;
    randomColor = false;
    color = "rgb(0,0,0)";
    while (gridSize < 16 || gridSize > 100) {
        gridSize = prompt("Please enter a grid size (16 to 100)", 16);
    }
    const grid = document.querySelector(".grid");
    grid.textContent = ""; // clear all grid elements
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    const gridElements = document.querySelectorAll(".gridElement");
    for (let index = 0; index < gridSize; index++) {
        for (let index = 0; index < gridSize; index++) {
            const gridelement = document.createElement("div");
            gridelement.classList.add("gridElement");
            gridelement.addEventListener("mouseenter", draw);
            gridelement.addEventListener("mousedown", draw);
            grid.appendChild(gridelement);        
        }
    }
}

function randomRGBcolor(){
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

function toggleRandomColor(){
    randomColor = !randomColor;
}

function erase(){
    color = "rgb(255,255,255)";
    randomColor = false;
}
function setColor(e){
    color = e.target.value
    randomColor = false;
}

// source: https://stackoverflow.com/questions/62224280/strange-and-unexpected-behaviour-with-javascript-mousedown-mouseup-and-mouseov
// fix bug that when you hold click on an element the browser recognize that you are 
// dragging it, not allowing to paint on the grid
function clearSelection() {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
 }