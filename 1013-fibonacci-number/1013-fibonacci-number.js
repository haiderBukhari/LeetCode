/**
 * @param {number} n
 * @return {number}
 */
let arr = [0, 1]
var fib = function(n) {
    if(n == 0 || n== 1){
        return n;
    }
    if(!arr[n-1]){
        arr[n-1] = fib(n-1);
    }
    if(!arr[n-2]){
        arr[n-2] = fib(n-2);
    }
    
    return arr[n-1] + arr[n-2];
};