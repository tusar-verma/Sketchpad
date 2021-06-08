const gridcontainer = document.querySelector(".gridContainer");
const body = document.querySelector("body");
let isMouseDown = false;
let color= "rgb(0,0,0)";

body.addEventListener("mousedown", (e) => isMouseDown = true)
body.addEventListener("mouseup", (e) => isMouseDown = false)

for (let index = 0; index < 16; index++) {
    for (let index = 0; index < 16; index++) {
        const gridelement = document.createElement("div");
        gridelement.classList.add("gridElement");
        gridelement.onmouseenter = () => {
            if (isMouseDown) {
                gridelement.style.backgroundColor = color;
            }
        }
        gridcontainer.appendChild(gridelement);        
    }
}


function reset(){
    const gridElements = document.querySelectorAll(".gridElement");
    Array.from(gridElements).forEach(gridElement => {
        gridElement.style.backgroundColor = "white";
    });
}