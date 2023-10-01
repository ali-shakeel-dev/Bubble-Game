let timer = 60;
let score = 0;
let hint;

let showBubble = function () {
    let bobbly = "";

    for (let i = 1; i <= 207; i++) {
        bobbly += `<div id="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector("#bottom-container").innerHTML = bobbly;
}

let timerOut = function () {
    let timeInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerInterval").innerHTML = timer
        } else {
            clearInterval(timeInterval);
            document.querySelector("#bottom-container").innerHTML = `<h2>Game Over <br>Score = ${score}</h2>`;
            let playBtn = document.querySelector("#playAgain");
            playBtn.classList.add("true");
            playBtn.addEventListener("click", () => {
                location.reload()
            })
        }
    }, 1000);
}
let hintrnval = function () {
    hint = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerHTML = hint
}
let increaseScore = function () {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}


document.querySelector("#bottom-container")
    .addEventListener("click", function (dets) {
        if (hint == Number(dets.target.textContent)) {
            increaseScore();
            hintrnval();
            showBubble();

        } else {
            console.log("False")

        }
    })

showBubble();
timerOut();
hintrnval();