let btn = document.querySelector('.knockBtn')
let container = document.querySelector('#msgContainer')
btn.addEventListener('click',function () {
    // 获取棍子，控制动画类名
    const stk = document.querySelector('.stickBox')
    stk.classList.add('animate')
    setTimeout(() => {
        stk.classList.remove('animate')
    }, 100);
    // 每次敲击时，新创建一个功德提示元素
    const newMsg = document.createElement('span')
    newMsg.className = 'msg'
    newMsg.textContent = '功德 +1'
    container.appendChild(newMsg)
    let msg = document.querySelectorAll('.msg')
    // 快速连点提示
    if (msg.length > 5) {
        document.querySelector('.tooFast').classList.add('show')
        setTimeout(() => {
            document.querySelector('.tooFast').classList.remove('show')
        }, 3000);
    }
    // 添加淡入淡出效果
    setTimeout(() => {
        msg.forEach(m => {
            m.classList.remove('fin')
            m.classList.add('mid')})
    }, 50); // 这里是在等浏览器将新元素渲染完毕
    setTimeout(() => {
        msg.forEach(m => {
            m.classList.remove('mid')
            m.classList.add('fin')})
    }, 550);
    setTimeout(() => {
        newMsg.remove()
    }, 1050);
})