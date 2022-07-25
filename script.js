const CONTAINER = document.querySelector(".container");
const BUTTON_SIZE = document.querySelector("#size");
const SQUARES = document.querySelectorAll(".container>div");
let gridSize = 16;
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
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        CONTAINER.appendChild(newDiv);
        resize(size, newDiv);
        newDiv.addEventListener("mouseover", draw(newDiv));
    }
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

