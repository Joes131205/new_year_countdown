const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const messageEl = document.getElementById("message")

setInterval(time = () => {
    let endDate = new Date("January 1, 2024 00:00:00")
    let nowDate = new Date()
    let timeLeft = endDate.getTime() - nowDate.getTime()
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    let hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24)
    let minutes = Math.floor(timeLeft / (1000 * 60) % 60)
    let seconds = Math.floor(timeLeft / 1000 % 60)
    daysEl.textContent = days
    hoursEl.textContent = hours
    minutesEl.textContent = minutes
    secondsEl.textContent = seconds
    if (timeLeft < 0) {
        clearInterval(time)
        document.body.style.background = 'url("fireworks.webp")'
        messageEl.textContent = "Happy 2023!!"
        daysEl.textContent = "🥳"
        hoursEl.textContent = "🥂"
        minutesEl.textContent = "🎊"
        secondsEl.textContent = "🎉"
    }
}, 1000)
