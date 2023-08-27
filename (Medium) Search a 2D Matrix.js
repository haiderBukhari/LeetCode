/*
    Question
        You are given an m x n integer matrix matrix with the following two properties:
        Each row is sorted in non-decreasing order.
        The first integer of each row is greater than the last integer of the previous row.
        Given an integer target, return true if target is in matrix or false otherwise.
        You must write a solution in O(log(m * n)) time complexity.

        Example 1:
            Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
            Output: true
        
        Example 2:
            Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
            Output: false
*/

let binarySearch = (matrix, start, end, key) => {
    const mid = Math.floor((start + end) / 2);
    if(start>end){
        return false;
    }
    else if(matrix[mid] === key){
        return true;
    }
    else if(matrix[mid] > key){
        return binarySearch(matrix, start, mid-1, key)
    }
    else{
        return binarySearch(matrix, mid+1, end, key);
    }
}
var searchMatrix = function(matrix, target) {
    matrix = [...new Set(matrix.flat())];
    return binarySearch(matrix, 0, matrix.length-1, target);
};