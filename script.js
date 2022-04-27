const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.second-hand')

function setDate() {
  const now = new Date()

  const seconds = now.getSeconds()+now.getMilliseconds()/1000
  const secondsDeg = (seconds / 60) * 360 + 90
  secHand.style.transform = `rotate(${secondsDeg}deg)`

  const mins = now.getMinutes()
  const minsDeg = (mins / 60) * 360 + (seconds / 60) * 6 + 90
  minHand.style.transform = `rotate(${minsDeg}deg)`

  const hours = now.getHours()
  const hoursDeg = (hours / 12) * 360 + (mins / 60) * 30 + 90
  hourHand.style.transform = `rotate(${hoursDeg}deg)`
}

setInterval(setDate, 1000/10)

setDate()
