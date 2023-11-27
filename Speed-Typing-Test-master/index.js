let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let uniqueId = null;

function page() {
    spinnerEl.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
            let counter = 0;
            uniqueId = setInterval(function() {
                timerEl.textContent = counter;
                counter = counter + 1;
            }, 1000);
        });
    quoteInputEl.value = "";
    resultEl.textContent ="";
}
console.log(Math.trunc(120/60));

function validatequote() {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        clearInterval(uniqueId);
        if(timerEl.textContent>=60){
            let min = Math.trunc(timerEl.textContent/60);
            let sec = timerEl.textContent%60;
            resultEl.textContent = "You typed in " + min + " min "+ sec + " seconds";
        }else{
            resultEl.textContent = "You typed in " + timerEl.textContent + " seconds";
        }
        
    }

    if (quoteDisplayEl.textContent !== quoteInputEl.value || quoteInputEl.value === "") {
        resultEl.textContent = "you typed incorrect sentence";
    }
}


page();
submitBtnEl.addEventListener("click", validatequote);
resetBtnEl.addEventListener("click", page);