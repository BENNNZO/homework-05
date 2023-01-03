function innit() {
    generatePlanner()
}

function generatePlanner() {
    // document.querySelector('.planner-container')
    let currentTime = new Date().getHours()
    console.log(currentTime)
    for (let hour = 8; hour < 20; hour++) { // I like to create elements on one line since it takes so much space for no reason
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

function saveText(hour) {
    console.log(hour)
    localStorage.setItem(`note-hour-${hour}`, document.getElementById(hour).value)
}

innit()