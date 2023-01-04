let min = 5
let max = 22

function innit() {
    generatePlanner()
}

function generatePlanner() {
    // document.querySelector('.planner-container')
    let currentTime = new Date().getHours()
    console.log(currentTime)
    for (let hour = min; hour < max; hour++) { // I like to create elements on one line since it takes so much space for no reason
        hour === currentTime ? bgColor = 'lightcoral' : hour < currentTime ? bgColor = 'white' : bgColor = 'palegreen'
        function getDisplayHour() {
            if (hour > 12) {
                return `${hour - 12}pm`
            } else if (hour === 12) {
                return `${hour}pm`
            } else {
                return `${hour}am`
            }
        }
        let hourContainer = document.createElement('div'); hourContainer.classList.add('hour-container'); hourContainer.innerHTML = `
        <p style="background-color: ${bgColor}">${getDisplayHour()}</p>
        <textarea placeholder="Type your notes here." id="${hour}"></textarea>
        <button onclick="saveNote(${hour})">SAVE</button>`
        document.querySelector('.planner-container').appendChild(hourContainer)
        document.getElementById(hour).value = localStorage.getItem(`note-hour-${hour}`)
    }
}

function saveNote(hour) {
    if (hour === 'save-all') {
        for (let i = min; i < max; i++) {
            localStorage.setItem(`note-hour-${i}`, document.getElementById(i).value)
        }
    } else {
        localStorage.setItem(`note-hour-${hour}`, document.getElementById(hour).value)
    }
}

function clearAll() {
    localStorage.clear()
    location.reload()
}

innit()