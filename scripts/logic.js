
// CREATING DIVS FOR GRID CONATINER //

const input = document.querySelector('#userInput');
input.addEventListener('input', createGrid);

const grid = document.querySelector(".grid");

let isClicked = false;

function createGrid(e) {
    removeAllChildNodes(grid);
    const gridSize = parseInt(e.target.value || 0);
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let index = 0; index < (gridSize * gridSize); index++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
        square.addEventListener('click', changeColor);
        square.addEventListener('mouseover', changeColor);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// ADDING HOVERING EFFECT FOR THE PIXELS//

function changeColor(e) {
    if (e.type == "mouseover" && isClicked) {
        e.target.style.backgroundColor = "#71C9CE";
    } else if (e.type == "click") {
        isClicked = !isClicked;
        e.target.style.backgroundColor = "#71C9CE";
    }
}

// ADDING GRID CLEARING //

const clearingButton = document.querySelector(".clearing-button");
clearingButton.addEventListener('click', clearGrid);

function clearGrid() {
    const gridSquares = document.querySelectorAll(".square");
    for (const gridSquare of gridSquares) {
        gridSquare.style.backgroundColor = "#c5ffff";
    }
    input.value = "";
    isClicked = false;
}















// // CREATING 4 DIVS FOR  BIG GRID//

// const bigGrids = document.querySelectorAll(".big-grid");


// for (const bigGrid of bigGrids) {
//     for (let index = 0; index < 4; index++) {
//         const middleGrid = document.createElement("div");
//         middleGrid.className = "middle-grid";
//         middleGrid.textContent = "MIDDLE";
//         bigGrid.appendChild(middleGrid);
//     }
// }
// console.log(bigGrids);



// CREATING 16 DIVS FOR MIDDLE GRID//

// const middleGrids = document.querySelectorAll(".middle-grid");

// for (const middleGrid of middleGrids) {
//     for (let index = 0; index < 16; index++) {
//         const smallGrid = document.createElement("div");
//         smallGrid.className = "small-grid";
//         smallGrid.textContent = "SMALL";
//         middleGrid.appendChild(smallGrid);
//     }
// } 
