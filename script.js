
let firstColor = document.querySelector("#firstColor");
let secondColor = document.querySelector('#secondColor');
let inputs = document.getElementsByTagName('input');

let body = document.querySelector('body');

const changeColor = () => {
    body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`; 
    document.querySelector('p').innerText = body.style.background;
}
/*

Array.from(inputs).forEach(input => {
    input.addEventListener('input', ({ target }) => {
        if(target.id === "firstColor") {
            body.style.background = `linear-gradient(to right, ${target.value}, ${secondColor.value})`
        } else {
            body.style.background = `linear-gradient(to right, ${firstColor.value}, ${target.value})`
        }
    })
})
*/