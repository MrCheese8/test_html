//TASK 2
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");

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
//para box: which box?
//para color: which color?
let colorChange = (box, color) => {
    box.style.backgroundColor.add = color;
};

anycolor(box5, 'purple');

box6.addEventListener

