const timer = document.getElementById('timer')


const time = setInterval(() => {timer.textContent = Number(timer.textContent) - 1; 
    if (Number(timer.textContent) < 0) {
        alert ("Вы победили в конкурсе");
        clearInterval(time);
    } }
, 1000)
