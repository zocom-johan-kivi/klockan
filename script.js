let clock = {
    time: null,
    els: {
        face: document.querySelector('.face'),
        hourHand: document.querySelector('.face .hour'),
        minuteHand: document.querySelector('.face .minute'),
        textTime: document.querySelector('h1'),
        btn: document.querySelector('button')
    },
    generateUI(){

        let minute = this.time.split(':')[1]*6;
        let hour = this.time.split(':')[0]*30 + ((this.time.split(':')[1]*1)/2); // hour + overshoot

        this.els.hourHand.style.transform = `rotateZ(${hour}deg)`; // hour rotation
        document.querySelector('.face .minute').style.transform = `rotateZ(${minute}deg)`; // minute rotation

    },
    generateText(){

        let minute = this.time.split(':')[1]*1,
            hour = this.time.split(':')[0]*1,
            minuteText = minuteToText(minute);

        if (minute === 0) {
            let hourText = hourToText(hour);
            return `Klockan är <b>${hourText}</b>.`;
        } else if(minute <= 25){
            let hourText = hourToText(hour);

            return `Klockan är <b>${minuteText} ${hourText}</b>.`;
        } else if (minute >= 25) {
            let hourText = hourToText(hour+1);
            return `Klockan är <b>${minuteText} ${hourText}</b>.`;
        }
    },
    randomTime(){
        this.time = null; // reset time

        let hour = Math.floor(Math.random()*24);
        let minute = Math.floor(Math.random()*12)*5;

        this.time = `${hour}:${minute}`;
    },
    setClock(){
        this.randomTime();
        this.generateUI();

        this.els.btn.addEventListener('click', () => {
            this.els.textTime.innerHTML = this.generateText();
        });

        this.els.face.addEventListener('click', () => {
            this.els.textTime.innerHTML = '';
            this.setClock();
        })
        
    }
}

// Init code
clock.setClock();


// Helper functions

function hourToText(hour){
    switch(hour){
        case 0: return 'tolv'
        case 1:  return 'ett'
        case 2:  return 'två'
        case 3:  return 'tre'
        case 4:  return 'fyra'
        case 5:  return 'fem'
        case 6:  return 'sex'
        case 7:  return 'sju'
        case 8:  return 'åtta'
        case 9:  return 'nio'
        case 10: return 'tio'
        case 11: return 'elva'
        case 12: return 'tolv'
        case 13:  return 'ett'
        case 14:  return 'två'
        case 15:  return 'tre'
        case 16:  return 'fyra'
        case 17:  return 'fem'
        case 18:  return 'sex'
        case 19:  return 'sju'
        case 20:  return 'åtta'
        case 21:  return 'nio'
        case 22: return 'tio'
        case 23: return 'elva'
    }
}

function minuteToText(minute){
    switch(minute){
        case 5:
            return 'fem över';
        case 10:
            return 'tio över';
        case 15:
            return 'kvart över';
        case 20:
           return 'tjugo över';
        case 25:
           return 'fem i halv';
        case 30:
           return 'halv';
        case 35:
           return 'fem över halv';
        case 40:
           return 'tjugo i';
        case 45:
           return 'kvart i';
        case 50:
           return 'tio i';
        case 55:
           return 'fem i';
    }
}
