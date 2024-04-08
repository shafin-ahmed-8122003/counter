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
