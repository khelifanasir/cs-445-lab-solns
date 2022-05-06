
let fibonacci = (function(n){
    let result = [];

    return  function fibonacciMemoization(n){
if (result[n]){
    return result[n];
} else {
    if (n <= 1) {
        result [n] = 1;
        return 1;
    }
    result[n] = fibonacciMemoization(n - 1) + fibonacciMemoization(n - 2)
    return fibonacciMemoization(n - 1) + fibonacciMemoization(n - 2);
}
    }
})()

console.log(fibonacci(8))
console.log(fibonacci(8))




