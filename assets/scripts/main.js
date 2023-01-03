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
        <input class="notes" placeholder="Type your notes here."></input>
        <p class="save-button">SAVE</p>`
        document.querySelector('.planner-container').appendChild(hourContainer)
    }
}

innit()