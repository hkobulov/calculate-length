var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');

var elFormAll = document.querySelector('.form-list__item__area')
var elFormWalk = document.querySelector('.cal-walk');
var elFormVelo = document.querySelector('.cal-velo');
var elFormCar = document.querySelector('.cal-car');
var elFormAir = document.querySelector('.cal-air');

// SPEEDS
var speedWalk = 3.6;
var speedVelo = 20.1;
var speedCar = 70;
var speedAir = 800;

function calculateTimeSpeed (number, speed){
    var resultHour = Math.floor(number / speed);
    var resultMin = Math.floor(((number / speed) - resultHour) * 60);
    var resultFullMin = ((number / speed) - resultHour) * 60;
    var resultSec = Math.floor((resultFullMin - resultMin) *60);
    

    if (resultHour > 0 && resultMin > 0 && resultSec > 0){
        return `${resultHour} ${resultMin} ${resultSec}`
    }
    // return `${resultHour} soat, ${resultMin} daqiqa, ${resultSec} soniya`
}

function checkResult(evt){
    evt.preventDefault();

    var userNumber = elInput.value;

    elFormWalk.textContent = calculateTimeSpeed(userNumber, speedWalk);
    elFormVelo.textContent = calculateTimeSpeed(userNumber, speedVelo);
    elFormCar.textContent = calculateTimeSpeed(userNumber, speedCar);
    elFormAir.textContent = calculateTimeSpeed(userNumber, speedAir);
}



elForm.addEventListener('submit', checkResult);

