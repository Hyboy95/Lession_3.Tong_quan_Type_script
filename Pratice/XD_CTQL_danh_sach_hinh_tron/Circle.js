var Circle = /** @class */ (function () {
    function Circle(name, color, radius) {
        this.name = name;
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle('1', 'yellow', 10));
circleList.push(new Circle('2', 'green', 15));
circleList.push(new Circle('3', 'blue', 20));
function showCircle(circle) {
    console.log("H\u00ECnh tr\u00F2n ".concat(circle.name, " c\u00F3 m\u00E0u ").concat(circle.color, " v\u00E0 b\u00E1n k\u00EDnh l\u00E0 ").concat(circle.radius));
}
circleList.forEach(showCircle);
