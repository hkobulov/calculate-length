var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');

var elFormAll = document.querySelectorAll('.form-list__item__area')
var elFormWalk = document.querySelector('.cal-walk');
var elFormVelo = document.querySelector('.cal-velo');
var elFormCar = document.querySelector('.cal-car');
var elFormAir = document.querySelector('.cal-air');
var elFormAlert = document.querySelector('.form__alert');

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
    
    return `${resultHour} soat, ${resultMin} daqiqa, ${resultSec} soniya`;
}


function checkResult(evt){
    evt.preventDefault();
    
    var userNumber = elInput.value-0;

  
    
    if (userNumber===0 || userNumber<0){
        elFormAlert.textContent = 'Iltimos, musbat son kiriting!';
        elFormAlert.classList.add('form__alert-design');
        elInput.value = null;
        return;
    } else if (isNaN(userNumber)) {
        elFormAlert.textContent = 'Iltimos, raqam kiriting!';
        elFormAlert.classList.add('form__alert-design');
        elInput.value = null;
        return;
    } else {
        elFormAlert.textContent = null;
        elFormAlert.classList.remove('form__alert-design');
    }
    
    elFormWalk.textContent = calculateTimeSpeed(userNumber, speedWalk);
    elFormVelo.textContent = calculateTimeSpeed(userNumber, speedVelo);
    elFormCar.textContent = calculateTimeSpeed(userNumber, speedCar);
    elFormAir.textContent = calculateTimeSpeed(userNumber, speedAir);
}

elForm.addEventListener('submit', checkResult);

