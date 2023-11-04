/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let max_left = Math.max(...left);
    let min_right = Math.min(...right);
    return Math.max(max_left, n - min_right);
};