const body = document.body
const btn = document.querySelector('.btn')
const messageBox = document.querySelector('#message')
let isOn = localStorage.on === 'true'


function getDate() {
    const date = new Date()
    const day = date.getDate().toString().padStart(2, 0)
    const month = (date.getMonth()+1).toString().padStart(2, 0)
    const year = date.getFullYear().toString()
    const hours = date.getHours().toString().padStart(2, 0)
    const minutes = date.getMinutes().toString().padStart(2, 0)
    const seconds = date.getSeconds().toString().padStart(2, 0)
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}

function turnOn() {
    isOn = true
    messageBox.innerText = `Last turn on: ${getDate()}`
    saveState()
    on()
}

function on(){
    body.style = 'background-color: black;'
    btn.innerText = 'Turn on'
    messageBox.innerText = localStorage.message
    messageBox.hidden = false 
}

function turnOff() {
    isOn = false
    messageBox.innerText = `Last turn off: ${getDate()}`
    saveState()
    off()
}

function off() {
    body.style = 'background-color: bisque;'
    btn.innerText = 'Turn off'
    messageBox.innerText = localStorage.message
    messageBox.hidden = false 
}

function saveState() {
    localStorage.on = isOn
    localStorage.message = messageBox.innerText
}



body.hidden = false

if (localStorage.message){
    if (isOn) {
        on()
    } else {
        off()
    }
}

btn.addEventListener('click', () => {
    if (isOn) {
        turnOff()
    } else {
        turnOn()
    }
})