let tablet = document.getElementById("gridDom"); // getting elements from page
let bttnTools = document.getElementById('tools');
let bttnGrid = document.getElementById('grid');
let containerTools = document.getElementById('ContainerTools');
let containerGrid = document.getElementById('ContainerGrid');
let sliderGrid = document.getElementById('slider');
let text = document.getElementById('textBox');


function restGrid(){ // rests the grid
    while (tablet.firstChild) {
        tablet.removeChild(tablet.lastChild);
    }
}


function gridSize(size){ //updates the tablet to the users grid size
    restGrid();
    text.textContent = sliderGrid.value;
    tablet.style.gridTemplateColumns = 'repeat('+ Math.sqrt(size) + ', 1fr)'
    for (let i=0; i<size; i++){
        let div = document.createElement('div');
        div.classList.add('grid-cell');//remove after only meant for testing
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

containerTools.style.display = 'none';//makes it so you see grid first

gridSize(16*16);


bttnTools.addEventListener('click', () => showTools());
bttnGrid.addEventListener('click', () => showGrid());


sliderGrid.addEventListener('mouseup', () => gridSize(sliderGrid.value*sliderGrid.value));


