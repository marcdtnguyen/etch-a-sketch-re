const container = document.querySelector('.container')


container.addEventListener('mouseover', (e)=>{
    e.target.style.backgroundColor = 'black'
    console.log(e.target)
})

function createGrid(n){
    for(let i = 0; i < n*n; i++){
        const squ = document.createElement('div');
    
        squ.style = `
            width: calc(85vw/${n}); 
            height: calc(85vw/${n}); 
            background-color: green;
            border: 1px solid red;
        `;
        container.appendChild(squ);
    }
}

createGrid(3)
/*
16x16 grid of square divs.

divs using JavaScript

grid squares inside another “container”

flexbox to make the divs appear as a grid

borders and margins adjust the size of the squares!

“hover” effect so that the grid divs change color when your mouse passes over them, l
eaving a (pixelated) trail through your grid like a pen would.

Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it.
 You can set up event listeners for either of those events as a starting point.

changing the div’s background color using JavaScript.

Add a button to the top of the screen that will send the user a popup
asking for the number of squares per side for the new grid. 

Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide)
 so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. 

A larger number of squares results in more computer resources being used, 
 potentially causing delays, freezing, or crashing that we want to prevent.

Research button tags in HTML and how you can make a JavaScript function run when one is clicked.

Also check out prompts.

You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

each interaction should randomize the square’s RGB value entirely.

darkening each interaction adds 10% more black or color to the square. 

The objective is to achieve a completely black square only after ten interactions.

You can choose to do either one or both of these challenges, it’s up to you.
*/