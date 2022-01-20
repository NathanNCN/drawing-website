let tablet = document.getElementById("gridDom");

let bttnSize16 = document.getElementById('GridSize16')

let bttnSize36 = document.getElementById('GridSize36')

let bttnSize72= document.getElementById('GridSize72')


function restGrid(){
    //problem is that before when i click the buttons it would work
    //it created the divs and stuff. But when you click on another one instead 
    //of it being 16x16 to 36x36 it would stack on top of each other so
    //Now I am struggling with how to remove the divs cause now I cant even get the grids
    let div = document.getElementById('cell')
    div.parentNode.removeChild(div);
}

function gridSize(size){
    restGrid();
    for (let i=0; i<size; i++){
        let div = document.createElement('div');
        div.classList.add('grid-cell');
        div.setAttribute('id', 'cell');
        tablet.appendChild(div);
    }
    let width=100/Math.sqrt(size);
    tablet.style.gridTemplateColumns = 'repeat('+ Math.sqrt(size) + ', ' + width +'%)'
}


bttnSize16.addEventListener('click', () => gridSize(256));
bttnSize36.addEventListener('click', () => gridSize(1296));
bttnSize72.addEventListener('click', () => gridSize(5184));
