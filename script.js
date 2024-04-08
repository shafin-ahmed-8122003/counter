let counter = document.getElementById("counter");
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", () => {
    let counterValue = Number(counter.innerText);
    counter.innerText = counterValue + 1;
});

decrementButton.addEventListener("click", () => {
    let counterValue = Number(counter.innerText);
    if (counterValue > 0) {
        counter.innerText = counterValue - 1;
    }
});

resetButton.addEventListener("click", () => {
    counter.innerText = 0;
});

document.addEventListener("click", function(event) {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  });