var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
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
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getStatus = function () {
        return this.on;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.setStatus = function (status) {
        this.on = status;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.toString = function () {
        if (this.on) {
            console.log("fan is on");
            console.log("speed of fan: ".concat(this.speed));
            console.log("color of fan: ".concat(this.color));
            console.log("radius of fan: ".concat(this.radius));
        }
        else {
            console.log("fan is off");
            console.log("color of fan: ".concat(this.color));
            console.log("radius of fan: ".concat(this.radius));
        }
    };
    return Fan;
}());
var fan1 = new Fan();
// let fan1 = new Fan(Speed.SLOW, true, 5, 'blue')
fan1.setSpeed(Speed.FAST);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setStatus(true);
var fan2 = new Fan();
// let fan2 = new Fan(Speed.FAST, true, 5, 'blue')
fan2.setSpeed(Speed.MEDIUM);
fan1.toString();
fan2.toString();
