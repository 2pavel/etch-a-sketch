const painting = document.querySelector('#painting');
let rows = 64;
//let divArray = [];
let row = 1;
let column = 1;

function appendChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
}

function clear(){

}

function fillPainting() {

    for(let i = 0; i < rows * rows; i++) {
        let creatediv = document.createElement('div');
        creatediv.addEventListener('mouseover', () => {
            creatediv.style.backgroundColor = 'black';
        });
        creatediv.classList.add(`pixel`);
        creatediv.style.backgroundColor = 'white';
        creatediv.style.gridRow = row;
        creatediv.style.gridColumn = column;
        painting.appendChild(creatediv.cloneNode(true));
        column += 1;
        if (column == rows + 1) {
            row += 1;
            column = 1;
        }
        
    }
}
fillPainting();
const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = 'black';
        });
    });

