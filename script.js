let gridsize = 0;
while (gridsize < 16 || gridsize > 100) {
    gridsize = prompt("Please enter a grid size (16 to 100)");
}

const gridcontainer = document.querySelector(".gridContainer");
gridcontainer.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
gridcontainer.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;

let isMouseDown = false;
let color= "rgb(0,0,0)";

window.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    draw(e);
})
window.addEventListener("mouseup", (e) => isMouseDown = false)

for (let index = 0; index < gridsize; index++) {
    for (let index = 0; index < gridsize; index++) {
        const gridelement = document.createElement("div");
        gridelement.classList.add("gridElement");
        gridelement.addEventListener("mouseenter", draw);
        gridelement.addEventListener("mousedown", draw);
        gridcontainer.appendChild(gridelement);        
    }
}

function draw(e) {
    if (e.target.className == "gridElement"){
        if (isMouseDown) {
            clearSelection();
            e.target.style.backgroundColor = color;
        }
    }
}

function reset(){
    const gridElements = document.querySelectorAll(".gridElement");
    Array.from(gridElements).forEach(gridElement => {
        gridElement.style.backgroundColor = "white";
    });
}

function createGrid(){

}

// source: https://stackoverflow.com/questions/62224280/strange-and-unexpected-behaviour-with-javascript-mousedown-mouseup-and-mouseov
// fix bug that when you hold click on an element the browser recognize that you are 
// dragging it, not allowing to paint in the grid
function clearSelection() {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
 }