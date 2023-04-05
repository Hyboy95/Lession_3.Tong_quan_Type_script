"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
function distance(circle1, circle2, d) {
    return Math.sqrt(Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(d, 2));
}
var circle_1 = new Circle_1.default(9);
var circle_2 = new Circle_1.default(5);
console.log(distance(circle_1, circle_2, 24));
