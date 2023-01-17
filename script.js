window.onload = function(){

    var ShowSeconds = 00;
    var ShowTens = 00;
    var Interval;

    var Tens = document.getElementById("tens");
    var Seconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");

    

                
    /* function to start timer*/
    function startTimer(){
        ShowTens++;
        if(ShowTens < 9){
            Tens.innerHTML = "0" + ShowTens;
        }
        if(ShowTens > 9){
            Tens.innerHTML = ShowTens;
        }
        if(ShowTens > 99){
            ShowTens = 00;
            ShowSeconds++;
            Seconds.innerHTML = "0" + ShowSeconds;
            
            Tens.innerHTML = "0" + ShowTens;
        }
        if(ShowSeconds > 9){
            Seconds.innerHTML = ShowSeconds;
        }
    }

    /*Button to Start Timer*/
    buttonStart.onclick = function(){
        Interval = setInterval(startTimer, 10);
    }

    /*Button to Stop Timer*/
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    /*Button to Resst Timer*/
    buttonReset.onclick = function(){
		/*stopping the timer*/
        clearInterval(Interval);
		/*setting the values back to default*/
        ShowTens = "00";
        ShowSeconds = "00";
        Tens.innerHTML = ShowTens;
        Seconds.innerHTML = ShowSeconds;
    }

           
}
