const gridcontainer = document.querySelector(".gridContainer");
let isMouseDown = false;
let color= "rgb(0,0,0)";

window.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    draw(e);
})
window.addEventListener("mouseup", (e) => isMouseDown = false)

for (let index = 0; index < 16; index++) {
    for (let index = 0; index < 16; index++) {
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

// source: https://stackoverflow.com/questions/62224280/strange-and-unexpected-behaviour-with-javascript-mousedown-mouseup-and-mouseov
// fix bug that when you hold click on an element the browser recognize that you are 
// dragging it, not allowing to paint in the grid
function clearSelection() {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
 }