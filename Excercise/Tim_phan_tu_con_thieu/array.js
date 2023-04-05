var numbers = [0, 2, 3, 5, 6, 8];
var num2 = [];
// for (let i: number = 0; i < 10; i++) {
//     if (numbers.indexOf(i) === -1) {
//         num2.push(i);
//     }
// }
var i = 0;
while (i < 10) {
    if (numbers.indexOf(i) === -1) {
        num2.push(i);
    }
    i++;
}
console.log(num2);
