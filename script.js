const CONTAINER = document.querySelector(".container");
const BUTTON_SIZE = document.querySelector("#size");
let gridSize = 256;
const gridPx = 500;

makeGrid(gridSize)

function makeGrid(size){
    for(let i = 0; i < size; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        CONTAINER.appendChild(newDiv);
        newDiv.addEventListener("mouseover", draw(newDiv));
    }
}

function draw(newDiv) {
    return function () {
        newDiv.style.backgroundColor = "black";
    };  
}

BUTTON_SIZE.addEventListener("click", function(){
    removeChilds();
    gridSize = prompt("Ingrese tamaño de la cuadricula");
    makeGrid(gridSize);
})

function removeChilds (){
    while (CONTAINER.firstChild){
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}


