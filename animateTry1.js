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

// 木鱼列表点击事件委托（删除木鱼 & 颜色控制）
const fishList = document.querySelector('#myFishList')
fishList.addEventListener('click', function(e){
    // 删除木鱼
    if (e.target.classList.contains('rubbishBin')) {
        if (e.target.classList.contains('default')) {
            alert('默认木鱼不可删除')
        } else {
            const fishItem = e.target.closest('.myFish')
            fishItem.remove()
        }
    // 木鱼颜色控制
    } else if (e.target.classList.contains('myFish') || e.target.closest('.myFish')) {
        // 取消其他木鱼的选中状态
        const allFish = document.querySelectorAll('.myFish')
        allFish.forEach(fish => fish.classList.remove('chosen'))
        // 选中当前木鱼
        const selectedFish = e.target.closest('.myFish')
        selectedFish.classList.add('chosen')
        // 更换木鱼颜色
        const woodFishIcon = document.querySelector('.woodFishIcon');
        const fishColor = selectedFish.querySelector('.fishColor')
        woodFishIcon.querySelector('path').setAttribute('fill', fishColor.style.backgroundColor);
    }
})


// 新建木鱼弹窗相关逻辑
const newFishModal = document.querySelector('#newFishModal')
const newFishForm = document.querySelector('#newFishForm')
// 打开新建木鱼弹窗
document.querySelector('#createNewFish').addEventListener('click', function(){
    newFishModal.style.display = 'block'
    const newFishColor = document.querySelectorAll('.newFishColor')
    newFishColor.forEach(option => option.classList.remove('chosen'))
    newFishColor[0].classList.add('chosen') // 默认选中第一个颜色
})

const colorOptions = document.querySelectorAll('.newFishColor')
    colorOptions.forEach(option => {
        option.addEventListener('click', function(){
            // 取消其他已选颜色的选中状态
            colorOptions.forEach(opt => opt.classList.remove('chosen'))
            // 选中当前颜色
            option.classList.add('chosen')
        })
    })
// 提交新建木鱼表单
newFishForm.addEventListener('submit', function(e){
    e.preventDefault()
    const fishName = document.querySelector('#newFishName').value.trim()
    const newFishColor = document.querySelector('.newFishColor.chosen')
    if (!fishName) {
        alert('请输入木鱼名称')
        return
    }
    if (!newFishColor) {
        alert('请选择木鱼颜色')
        return
    }
    const fishColor = newFishColor.dataset.color
    // 创建新的木鱼元素
    const fishList = document.querySelector('#myFishList')
    const newFish = document.createElement('li')
    newFish.className = 'myFish'
    newFish.innerHTML = `
    
            <span class="fishNameContainer">
                <span class="fishColor" style="background-color: ${fishColor};"></span>
                <span class="fishName">${fishName}</span>
            </span>
                <span><img src="images/icons/垃圾桶.svg" alt="rubbishBin" class="rubbishBin"></span>

    `
    fishList.appendChild(newFish)
    // 关闭弹窗并重置表单
    newFishModal.style.display = 'none'
    newFishForm.reset()
})
// 关闭新建木鱼弹窗
document.querySelector('.cancelBtn').addEventListener('click', function(){
    newFishModal.style.display = 'none'
})