const count = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')
const fast = document.getElementById('clicker__fast')

let start = Date.now()

img.onclick = () => {
    
    count.textContent = Number(count.textContent) + 1 ;
    if (Number(count.textContent) % 2) {
        img.width += 100;
    }
    else {
        img.width -=100;
    }
    let end = Date.now()
    const tr = end - start
    start = Date.now()
    fast.textContent = (1000/tr).toFixed(2)
}