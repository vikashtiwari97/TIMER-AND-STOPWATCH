window.onload = function() {
    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    let Interval;
    let lapCount = 1;

    let bodyRef = document.querySelector('tbody'); 

    const appendTens = document.getElementById("tens");
    const appendSeconds = document.getElementById("seconds");
    const appendMinutes = document.getElementById("minutes");

    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');
    const buttonLap = document.getElementById('button-lap');

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };
    
    buttonStop.onclick = function() {
        clearInterval(Interval);
    };

    buttonReset.onclick = function() {
        clearInterval(Interval);
        minutes = "00";
        tens = "00";
        seconds = "00";

        appendMinutes.innerHTML = tens;
        appendTens.innerHTML = tens;
  	    appendSeconds.innerHTML = seconds;

        bodyRef.innerHTML = '';
        lapCount = 1;
    };

    buttonLap.onclick = function() {
        let currentTime = `${minutes} : ${seconds} : ${tens}`;
        
        let template = `<tr> 
                            <td>Lap ${lapCount}</td>
                            <td>${currentTime}</td>
                        </tr>
                        `;

        bodyRef.innerHTML += template;
        lapCount++;
    }

    function startTimer() {
        tens++;
        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9) {
            appendTens.innerHTML = tens;
        }
    
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
          
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    }
};
