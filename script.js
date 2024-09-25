//TASK 2
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");

//function that turns box1 pink
let makePink = () => {
    box1.classList.add('pink');

};

//makePink();


//funtion that turns any box pink 
//parm box: which box am I turning pink?
let makeboxPink = (box) => {
    box.classList.add('pink');

};

makeboxPink(box1)
makePink(box3)

//make a funtion that bolds thae number in any box

let boldnumber = (box) => {
    box.style.fontweight = 'bold';
};

boldnumber(box2);
boldnumber(box4);

//make a funtion that turns any box any color

let anycolor = (color) => {
    box.style.classList.add = 'purple';
};

anycolor(box5);
