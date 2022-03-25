// Set random background

const body = document.querySelector('body');
let imgNum = Math.floor(Math.random() * 13 + 1);

window.addEventListener('load', () => {
    body.style.backgroundImage = `url(./assets/img/webp/${imgNum}.webp)`;
})

// Set timer
const time = document.querySelector('.time');
const daysH = document.querySelector('.days');
const hoursH = document.querySelector('.hours');
const minsH = document.querySelector('.mins');
const secsH = document.querySelector('.secs');
const current = new Date().getTime();
const start = new Date('Feb 24, 2022 05:00:00').getTime();
const timer = current - start;

function showTimer() {
    const days = Math.floor( timer / 1000 / 3600 / 24);
    const hours = Math.floor(timer / 1000 / 3600) - days * 24;
    const mins = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    // time.innerHTML = `${days} днів : ${hours} годин : ${mins} хвилин : ${seconds} секунд`;
    daysH.innerHTML = `${days}`;
    hoursH.innerHTML = `${hours}`;
    minsH.innerHTML = `${mins}`;
    secsH.innerHTML = `${seconds}`;
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
    body.style.backgroundImage = `url(./assets/img/webp/${imgNum}.webp)`;
}

function nextBg() {
    if(imgNum < 14){
        imgNum++
    } else {
        imgNum = 1;
    }
    body.style.backgroundImage = `url(./assets/img/webp/${imgNum}.webp)`;
}

prev.addEventListener('click', prevBg);
next.addEventListener('click', nextBg);
