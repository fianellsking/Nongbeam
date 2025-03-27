const loadingContainer = document.getElementById("loading-container");
const loadingBar = document.getElementById("loading-bar");
const loadingText = document.getElementById("loading-text");
const press = document.getElementById("go-next");
const press1 = document.getElementById("press1");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const text1 = document.querySelector(".loading");

const text = "Loading...";

let step = 0;

press1.addEventListener("click", function () {
    if (step === 0) {
        box1.style.opacity = 0;
        setTimeout(() => {
            box1.classList.add("hidden");
            box2.classList.remove("hidden");
            setTimeout(() => {
                box2.style.opacity = 1;
            }, 10);
        }, 1000);
        step = 1;
    } else if (step === 1) {
        box2.style.opacity = 0;
        setTimeout(() => {
            box2.classList.add("hidden");
            text1.classList.remove("hidden");
            text1.classList.add("visible");
            press.classList.remove("hidden");
            press1.classList.add("hidden")
            loadingContainer.classList.remove("hidden");
            text1.style.opacity = 1;
            setTimeout(() => {
                press.style.opacity = 1;
                loadingContainer.style.opacity = 1;
                document.getElementById("loading-text").style.opacity = 1;
            }, 10);
        }, 1000);
        step = 2;
    }
});

press.addEventListener("click", function () {
    if (step === 2) {
        startLoading();
        step = 3;   
    }
});

function startLoading() {
    loadingContainer.classList.remove("hidden");
    applyWaveEffect(text);
    loadingText.style.opacity = 1;

    let width = 0;
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(function () {
                loadingText.innerHTML = '';
                const doneText = document.createElement('span');
                doneText.textContent = "Done!!!";
                doneText.style.fontSize = "60px";
                doneText.style.color = "green";
                loadingText.appendChild(doneText);

                setTimeout(function () {
                    window.location.href = "page2.html";
                }, 3000);
            }, 1000);
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 70);
}


function applyWaveEffect(text) {
    loadingText.innerHTML = '';
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1}s`;
        loadingText.appendChild(span);
    });
}
