const container = document.querySelector('.container');
const numSize = document.querySelector('#num-size');
const rangeSize = document.querySelector('#range-size');
let size;
const inks = Array.from(document.querySelectorAll('input[name=ink]'));

window.addEventListener('resize', sizeGrid);

function sizeGrid(){
    if(screen.width > screen.height){
        size = screen.height * 0.75;
    } else {
        size = screen.width * 0.75;
    }
    container.style.width = `${size}px`;
    container.style.height = `${size}px`;
}

container.addEventListener('mouseover', (e)=>{
    const t = e.target
    if(t == container) return;
    const ink = inks.filter(ink=>ink.checked)[0].value
    let bg;
    switch(ink){
        case 'black': bg = 'rgb(0,0,0)';
        break;
        case 'random': bg = genRand();
        break;
        case 'darken': bg = genDark(t.style.backgroundColor);
        break;
        default:;
        break;
    }
    t.style.backgroundColor = bg;
})

function getRand(n){
    return Math.floor(Math.random()*n);
}

function genRand(){
    return `rgb(${getRand(255)},${getRand(255)},${getRand(255)})`
}

function genDark(old){
    const dec = 255*0.1;
    if(old == '') return `rgb(${255-dec}, ${255-dec},${255-dec})`
    const rgb = old.slice(4,-1).split(',').map(n=>{
        if(n<=dec) return 0;
        return n - dec;
    })
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

function createGrid(n){
    const grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);
    for(let i = 0; i < n*n; i++){
        const squ = document.createElement('div');
    
        squ.style = `
            width: calc(${size/n}px); 
            height: calc(${size/n}px); 
            border: 0.1px dashed black;
            backgroundColor: white;
        `;
        grid.appendChild(squ);
    }
}

function newGrid(e){
    const value = e.target.value;
    if(value > 0 && value <= 100){
        if (e.target == numSize) rangeSize.value = value;
        if (e.target == rangeSize) numSize.value = value;
        const grid = document.querySelector('.grid');
        container.removeChild(grid)
        createGrid(value);
    }
}

numSize.addEventListener('input', newGrid);

rangeSize.addEventListener('input', newGrid);

sizeGrid();
createGrid(16);