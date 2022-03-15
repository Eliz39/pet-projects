// Set random background

const body = document.querySelector('body');
let imgNum = Math.floor(Math.random() * 13 + 1);

window.addEventListener('load', () => {
    body.style.backgroundImage = `url(../assets/img/${imgNum}.jpg)`
})

// Set timer
const time = document.querySelector('.time');

const current = new Date().getTime();
const start = new Date('Feb 24, 2022 05:00:00').getTime();
const timer = current - start;

function showTimer() {
    const days = Math.floor( timer / 1000 / 3600 / 24);
    const hours = Math.floor(timer / 1000 / 3600) - days * 24;
    const mins = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    time.innerHTML = `${days} днів : ${hours} годин : ${mins} хвилин : ${seconds} секунд`;
    setTimeout(showTimer, 1000);
}

showTimer()

// Slider

const prev = document.querySelector('.left');
const next = document.querySelector('.right');

function prevBg() {
    if(imgNum > 2){
        imgNum--
    } else {
        imgNum = 14;
    }
    body.style.backgroundImage = `url(../assets/img/${imgNum}.jpg)`;
}

function nextBg() {
    if(imgNum < 14){
        imgNum++
    } else {
        imgNum = 1;
    }
    body.style.backgroundImage = `url(../assets/img/${imgNum}.jpg)`;
}

prev.addEventListener('click', prevBg);
next.addEventListener('click', nextBg);
