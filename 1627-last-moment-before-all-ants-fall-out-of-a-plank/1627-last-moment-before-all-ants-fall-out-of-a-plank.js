/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    right = right.map((arr)=>n-arr) 
    let max_left = Math.max(...left);
    let max_right = Math.max(...right);
    return max_left > max_right ? max_left : max_right;
};