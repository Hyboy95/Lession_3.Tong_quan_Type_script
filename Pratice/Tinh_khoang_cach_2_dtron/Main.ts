import Circle from "./Circle";

function distance(circle1: Circle, circle2: Circle, d: number) {
    return  Math.sqrt(Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(d, 2));
}

let circle_1 = new Circle(9);
let circle_2 = new Circle(5);

console.log(distance(circle_1,circle_2,24))