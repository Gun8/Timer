window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let btn = document.querySelectorAll('.btn'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

    let passedSeconds = 1,
        clock = {
            min: 0,
            sec: 0
        };

    //Start
    btn[0].addEventListener('click', () => {
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            clock.sec = Math.floor(passedSeconds % 60);
            clock.min = Math.floor(passedSeconds / 60);
            if (clock.sec < 10)
                clock.sec = '0' + clock.sec;
            if (clock.min < 10) {
                clock.min = '0' + clock.min;
            }
            minutes.textContent = clock.min;
            seconds.textContent = clock.sec;
            passedSeconds += 1;
        }

        //Stop
        btn[1].addEventListener('click', () => {
            clearInterval(timeInterval);
        });

        //Restart
        btn[2].addEventListener('click', () => {
            clearInterval(timeInterval);
            minutes.textContent = '00';
            seconds.textContent = '00';
            passedSeconds = 1;
            clock.min = 0;
            clock.sec = 0;
        });
    });




});