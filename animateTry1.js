let btn = document.querySelector('.knockBtn')
let container = document.querySelector('#msgContainer')
btn.addEventListener('click',function () {
    const newMsg = document.createElement('span')
    newMsg.className = 'msg'
    newMsg.textContent = '功德 +1'
    container.appendChild(newMsg)
    let msg = document.querySelectorAll('.msg')
    setTimeout(() => {
        msg.forEach(m => {
            m.classList.remove('fin')
            m.classList.add('mid')})
    }, 50);
    setTimeout(() => {
        msg.forEach(m => {
            m.classList.remove('mid')
            m.classList.add('fin')})
    }, 500);
    setTimeout(() => {
        newMsg.remove()
    }, 1050);
})