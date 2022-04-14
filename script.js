'use strict'
const adviceText = document.querySelector('h1');
const adviceNr = document.querySelector('p');
const diceBtn = document.querySelector('.dice')
adviceText.textContent = '';
adviceNr.textContent = '';
const getAdvice = async function(){
    try{
    const advice = await fetch('https://api.adviceslip.com/advice');
    const response = await advice.json();
    adviceText.textContent = `${response.slip.advice}`;
    adviceNr.textContent = `ADVICE #${response.slip.id}`
    } catch(err){
        console.error(err);
    }
}

diceBtn.addEventListener('click', getAdvice)
window.addEventListener('load', getAdvice);