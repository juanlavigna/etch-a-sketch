const CONTAINER = document.querySelector(".container");
const BUTTON_SIZE = document.querySelector("#size");
const SQUARES = document.querySelectorAll(".container>div");
const BUTTON_RGB = document.querySelector("#random-color")
let newDiv
let gridSize = 20;
const gridPx = 500;

makeGrid(gridSize)

function resize (size, square){
    let divPx = gridPx/gridSize
    for(let i = 0; i<size; i++){
        square.style.width = `${divPx}px`;
        square.style.height = `${divPx}px`;
    }
}

function makeGrid(size){
    size = Math.pow(size, 2)
    for(let i = 0; i < size; i++){
        newDiv = document.createElement("div");
        newDiv.classList.add("square");
        CONTAINER.appendChild(newDiv);
        resize(size, newDiv);
        CONTAINER.style.border = "1px solid grey"
        drawRGB(newDiv)
        newDiv.addEventListener("mouseover", draw(newDiv));
    }
}

function drawRGB(newDiv){
    BUTTON_RGB.addEventListener("click", colorPaint(newDiv))
}

function colorPaint(newDiv) {
    return function () {
        newDiv.addEventListener("mouseover", function () {
            newDiv.style.backgroundColor = randomRGB();
        });
    };
}

function draw(newDiv) {
    return function () {
        newDiv.style.backgroundColor = "black";
    };  
}

function removeChilds (){
    while (CONTAINER.firstChild){
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}


BUTTON_SIZE.addEventListener("click", function(){
    removeChilds();
    gridSize = prompt("Ingrese cantidad de cuadrados por lado");
    makeGrid(gridSize);
})

function randomRGB (){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}


