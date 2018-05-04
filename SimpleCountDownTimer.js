//This function will print out a countdown timer for given minutes to console
//For example: countdown(2) will print 1:59..1:58..1:57...1:00...0:59...0:00

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {        
        var current_minutes = mins-1;
        seconds--;
        console.log(
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {

            if(mins > 1){

               // countdown(mins-1);   never reach “00″
               setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();
}

countdown(2);