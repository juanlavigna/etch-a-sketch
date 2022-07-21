const CONTAINER = document.querySelector(".container")
for(let i = 0; i < 16; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    CONTAINER.appendChild(newDiv);
    newDiv.addEventListener("mouseover", draw(newDiv))
}

function draw(newDiv) {
    return function () {
        newDiv.style.backgroundColor = "black";
    };
}

