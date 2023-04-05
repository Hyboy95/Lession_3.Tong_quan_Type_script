// let sum:number = 0;
// in ra các số Fibonacci nhỏ hơn 1 số n cho trước:
// function fibonacci_2 (n: number, a: number = 0, b: number = 1) {
//     if (a >= n) {
//         return;
//     }
//     console.log(a);
//     fibonacci_2(n, b, a + b);
// }
//
// fibonacci_2(10);
// tính tổng n số fibonacci:
// function fibonacci (n: number): number {
//         if (n <= 1) {
//             return n;
//         }
//         return fibonacci(n - 1) + fibonacci(n - 2);
// }
// function sumFibonacci(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += fibonacci(i);
//     }
//     return sum;
// }
//
// console.log(sumFibonacci(10));
function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2) + 1;
}
console.log(fib(20));
