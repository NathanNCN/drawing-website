let tablet = document.getElementById("gridDom"); // getting elements from page
let bttnTools = document.getElementById('tools');
let bttnGrid = document.getElementById('grid');
let bttnEraser = document.getElementById('eraser');
let bttnRest = document.getElementById('rest')
let bttnBlack = document.getElementById('black')
let containerTools = document.getElementById('ContainerTools');
let containerGrid = document.getElementById('ContainerGrid');
let sliderGrid = document.getElementById('slider');

let text = document.getElementById('textBox');
let currentTrail = 'grid-trail';
let currentGridSize = none;



function restGrid(){ // rests the grid
    while (tablet.firstChild) {
        tablet.removeChild(tablet.lastChild);
    }
}


function gridSize(size){ //updates the tablet to the users grid size
    restGrid();
    currGridSize = size;
    text.textContent = sliderGrid.value + ' x ' + sliderGrid.value;
    tablet.style.gridTemplateColumns = 'repeat('+ Math.sqrt(size) + ', 1fr)'
    for (let i=0; i<size; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', trail);
        tablet.appendChild(div);
    }
}

function showTools(){ //shows the tools color, black, eraser
    containerGrid.style.display = 'none';
    containerTools.style.display = 'flex';
}

function showGrid(){ //shows slider which controls grid size
    containerTools.style.display = 'none';
    containerGrid.style.display = 'flex';
}

function trail(event){
    event.target.classList.add(currentTrail);
}

function changeColor(color){
    currentTrail = color;
}


containerTools.style.display = 'none';//makes it so you see grid first

gridSize(16*16);// make the defualt grid 16x16



bttnTools.addEventListener('click', () => showTools());
bttnGrid.addEventListener('click', () => showGrid());

bttnEraser.addEventListener('click', () => changeColor('grid-eraser'));
bttnBlack.addEventListener('click', () => changeColor('grid-trail'));
bttnRest.addEventListener('click', () => gridSize(currentGridSize*currentGridSize*);



sliderGrid.addEventListener('mouseup', () => gridSize(sliderGrid.value*sliderGrid.value));

gridCell.addEventListener('mouseover', () => trail());
