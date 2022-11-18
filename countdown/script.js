var minutesInput = document.getElementById("minutesInput");
var secondsInput = document.getElementById("secondsInput");
var startButton = document.getElementById("startButton");
var progressBar = document.getElementById("progressBar");
var colonStyle = document.getElementById("colonStyle");

var progressBarMax;
var changeSeconds = 0;
var changeMinutes = 0;
var stopper;

var setTime = ()=>{
    clearTimeout(stopper);
    var getMinutes = parseInt(minutesInput.value);
    var getSeconds = parseInt(secondsInput.value);

    // seconds logic
 
    switch (true){
        case getSeconds <= 9:
            var originalValue = secondsInput.value;
            secondsInput.value = ('0' + originalValue).slice(-2);
            break;
        case  getSeconds >= 60:
            secondsInput.value = ('0' + 0).slice(-2);
            changeSeconds = 0;
            break;
        
        case  getSeconds>= 10 :
            secondsInput.value = getSeconds;
            break;

        case  secondsInput.value === "":
            secondsInput.value =("0" + 0).slice(-2);
            break;
    }

    // minutes logic

    switch (true){
        case minutesInput.value==="":
            minutesInput.value =0;
            break;
    }
    changeMinutes= parseInt(minutesInput.value);
    minutesInput.value= changeMinutes;
    changeMinutes= changeMinutes + 60;
    changeSeconds = parseInt(secondsInput.value);
    var totalTime = changeSeconds + changeMinutes;
    progressBar.value =0;
    progressBar.setAttribute('max', totalTime);
    progressBarMax =totalTime;
}

minutesInput.addEventListener('keyup', setTime);
minutesInput.addEventListener("click", setTime);
secondsInput.addEventListener('keyup', setTime);
secondsInput.addEventListener("click", setTime);

// main CountDown

var progressCountdown = () =>{
    secondsInput.classList.add("form_active");
    minutesInput.classList.add("form_active");
    colonStyle.classList.add('form_active');

        minutesInput.disabled = false;
        secondsInput.disabled = false;
        stopper = setTimeout(progressCountdown, 1000)
        if(secondsInput.value === 0 && minutesInput.value >0){
            secondsInput.value = 60;
            minutesInput.value-= 1;
        }
        if(secondsInput.value >0){
            secondsInput.value-= 1;
            progressBar.value +=1;
        }
}