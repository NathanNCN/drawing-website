llet tablet = document.getElementById("gridDom");

let bttnSize16 = document.getElementById('GridSize16');

let bttnSize36 = document.getElementById('GridSize36');

let bttnSize72 = document.getElementById('GridSize72');

let bttnTools = document.getElementById('tools');

let bttnGrid = document.getElementById('grid');

let containerTools = document.getElementById('ContainerTools');
let containerGrid = document.getElementById('ContainerGrid');



function restGrid(){
    while (tablet.firstChild) {
        tablet.removeChild(tablet.lastChild);
    }
}



function gridSize(size){
    restGrid();
    let width=100/Math.sqrt(size);
    for (let i=0; i<size; i++){
        let div = document.createElement('div');
        div.classList.add('grid-cell');
        tablet.appendChild(div);
    }
    tablet.style.gridTemplateColumns = 'repeat('+ Math.sqrt(size) + ', ' + width +'%)'
}

//function showOptions(){
    containerGrid.style.display = 'none';
    containerTools.style.display = 'flex';
    console.log('bruh')
}

//bttnTools.addEventListener('click', () => showOptions());

bttnSize16.addEventListener('click', () => gridSize(256));
bttnSize36.addEventListener('click', () => gridSize(1296));
bttnSize72.addEventListener('click', () => gridSize(5184));
