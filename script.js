
let hours = 9;
let minutes = 54;
let seconds = 12;

function updateTimer() {

  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;

    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;

      if (hours > 0) {
        hours--;
      }
    }
  }


  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;


  setTimeout(updateTimer, 1000);
}


updateTimer();
