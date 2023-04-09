const body = document.body
const btn = document.querySelector('.btn')
const messageBox = document.querySelector('#message')
let on = localStorage.on === 'true'


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
    body.style = 'background-color: black;'
    btn.innerText = 'Turn on'
    on = true
    messageBox.innerText = `Last turn on: ${getDate()}`
    messageBox.hidden = false 
    saveState()
}

function turnOff() {
    body.style = 'background-color: bisque;'
    btn.innerText = 'Turn off'
    on = false
    messageBox.innerText = `Last turn off: ${getDate()}`
    messageBox.hidden = false
    saveState()
}

function saveState() {
    localStorage.on = on
    localStorage.message = messageBox.innerText
}

if (on) {
    turnOn()
} else {
    turnOff()
}

body.hidden = false

if (localStorage.message){
    messageBox.innerText = localStorage.message
    messageBox.hidden = false
} 

btn.addEventListener('click', () => {
    if (on) {
        turnOff()
    } else {
        turnOn()
    }
})