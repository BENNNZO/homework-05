let min = 8
let max = 20

function innit() {
    generatePlanner(8, 20)
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
        <p class="hour" style="background-color: ${bgColor}">${getDisplayHour()}</p>
        <textarea class="notes" placeholder="Type your notes here." id="${hour}"></textarea>
        <button class="save-button" onclick="saveText(${hour})">SAVE</button>`
        document.querySelector('.planner-container').appendChild(hourContainer)
        document.getElementById(hour).value = localStorage.getItem(`note-hour-${hour}`)
    }
}

function saveNote(hour) {
    if (hour === 100) {
        for (let i = min; i < max; i++) {
            localStorage.setItem(`note-hour-${i}`, document.getElementById(i).value)
        }
    } else {
        localStorage.setItem(`note-hour-${hour}`, document.getElementById(hour).value)
    }
}

innit()