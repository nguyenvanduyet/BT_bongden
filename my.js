class Switch {
    constructor() {
        this.status = false;
        this.lamp = Lamp;
    }

    connectToLamp(lamp){
        this.lamp = lamp;
    }

    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    }

    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }

    switchButton(){
        if (this.status){
            this.switchOff();
        }else {
            this.switchOn();
        }
    }
}
