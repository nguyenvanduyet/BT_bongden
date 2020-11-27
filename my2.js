class Lamp {
    constructor() {
        this.status =false;
        this.img = '';

    }

    turnOn(){
        this.status = true;
    }

    turnOff(){
        this.status = false;
    }

    checkStatus(){
        return this.status;
    }
}