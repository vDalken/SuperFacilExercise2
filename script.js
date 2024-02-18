const calculate = document.getElementById('calculate');

const modal = document.querySelector('.modal-content');

const incrivelBtn = document.getElementById('incrivel');

let height = document.getElementById('height');

let message = document.getElementById('message');

let body = document.querySelector('body');

const altura = document.querySelector('h1');

const firstParagraph = document.getElementById('first-p');

calculate.addEventListener('click', () =>{
    modal.style.display = "block";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    height.style.display = "none";
    firstParagraph.style.display = "none";
    calculate.style.display = "none";
    altura.style.display = "none";
    body.classList.add('modal-open');
    if(height.value <=0){
        message.innerText = "ERROR 404";
    }else{
        const answer = eval(`${height.value}/100`);
        message.innerText = `A tua altura é: ${answer} metros`;
    }
});

incrivelBtn.addEventListener('click', () =>{
    modal.style.display = "none";
    body.classList.remove('modal-open'); 
    body.style.backgroundColor = "white";
    height.style.display = "inline";
    firstParagraph.style.display = "inline";
    calculate.style.display = "inline";
    altura.style.display = "block";
});




