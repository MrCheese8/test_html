let text = document.querySelector('#text');
let submit = document.querySelector('#submit');
let message = document.querySelector('#message');
let timer = document.querySelector('#timer');

submit.addEventListener('click',() => {
    console.log('clicked submit')
    let correctPassword = "password123";

    if (correctPassword === text.value) {
        message.textContent = "Nice!";
    } else {
        message.textContent = "Wrong!";
    }

});