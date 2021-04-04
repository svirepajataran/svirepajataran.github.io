var butter = document.getElementById('butter')
var l1 = document.getElementById('line-1')
var l2 = document.getElementById('line-2')
var l3 = document.getElementById('line-3')
var butterClick = false
butter.onclick = function () {
    if (!butterClick) {
        butterClick = true
        document.getElementById('header').className = ' click'
        
        l1.style.transform = 'rotateZ(45deg)'
        l3.style.transform = 'rotateZ(-45deg)'
        l2.style.display = 'none'
    }
    else {
        butterClick = false
        document.getElementById('header').className = ''
        
        l1.style.transform = 'rotateZ(0)'
        l3.style.transform = 'rotateZ(0)'
        l2.style.display = 'block'
    }
}