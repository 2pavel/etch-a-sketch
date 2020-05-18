const painting = document.querySelector('#painting');
let rows = 64;
let row = 1;
let column = 1;
let usercolor = 'black';

function changeColor(e) {
    usercolor = e.target.id;
    console.log(usercolor);  
}
function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function rainbow() {
    pixels.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = randomColor();
        });
    });
}
function clear(){
    let erase = document.querySelectorAll('.pixel');
    erase.forEach((e) => {
        e.style.backgroundColor = 'white';
    });
}
function fillPainting() {

    for(let i = 0; i < rows * rows; i++) {
        let creatediv = document.createElement('div');
        creatediv.addEventListener('mouseover', () => {
            creatediv.style.backgroundColor = usercolor;
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
let pencilbtn = document.getElementById('pencil');
let randombtn = document.getElementById('randomclr');
let colorbtns = document.querySelectorAll('.colorbtn');
let rainbowbtn = document.getElementById('rainbow');
let allbuttons = document.querySelectorAll('button');
let currentcolor = document.getElementById('currentcolor');

fillPainting();

const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = usercolor;
        });
    });

colorbtns.forEach((e) => {
    e.addEventListener('click', changeColor);
});
randombtn.addEventListener('click', () => {
    usercolor = randomColor();
});

rainbowbtn.addEventListener('click', rainbow);

painting.addEventListener('mouseleave', () => {
    pixels.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = usercolor;
        });
    });    
});

let clearbtn = document.getElementById('clearbtn');
clearbtn.addEventListener('click', clear);
