enum Speed {
    SLOW = 1,
    MEDIUM,
    FAST
}
class Fan {
    private speed: Speed;
    private on: boolean;
    private radius: number;
    private color: string;
    constructor() {
        this.speed = Speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = 'blue';
    }
    // constructor(speed: Speed, on: boolean, radius: number, color: string) {
    //     this.speed = speed;
    //     this.on = on;
    //     this.radius = radius;
    //     this.color = color;
    // }
    getSpeed() {
        return this.speed;
    }
    getStatus() {
        return this.on;
    }
    getRadius() {
        return this.radius;
    }
    getColor() {
        return this.color;
    }
    setSpeed(speed: number) {
        this.speed = speed;
    }
    setStatus(status: boolean) {
        this.on = status;
    }
    setRadius(radius: number) {
        this.radius = radius;
    }
    setColor(color: string) {
        this.color = color;
    }
    toString() {
        if (this.on) {
            console.log(`fan is on`);
            console.log(`speed of fan: ${this.speed}`);
            console.log(`color of fan: ${this.color}`);
            console.log(`radius of fan: ${this.radius}`);
        } else {
            console.log(`fan is off`);
            console.log(`color of fan: ${this.color}`);
            console.log(`radius of fan: ${this.radius}`);
        }
    }
}

let fan1 = new Fan();
// let fan1 = new Fan(Speed.SLOW, true, 5, 'blue')
fan1.setSpeed(Speed.FAST);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setStatus(true);

let fan2 = new Fan();
// let fan2 = new Fan(Speed.FAST, true, 5, 'blue')
fan2.setSpeed(Speed.MEDIUM);

fan1.toString();
fan2.toString();



