class Circle {
    name: string;
    color: string;
    radius: number;
    constructor(name: string, color: string, radius: number) {
        this.name = name;
        this.color = color;
        this.radius = radius;
    }
}
let circleList: Circle[] = [];

circleList.push(new Circle('1','yellow', 10));
circleList.push(new Circle('2','green', 15));
circleList.push(new Circle('3','blue', 20));

function showCircle(circle: Circle) {
    console.log(`Hình tròn ${circle.name} có màu ${circle.color} và bán kính là ${circle.radius}`);
}

circleList.forEach(showCircle);