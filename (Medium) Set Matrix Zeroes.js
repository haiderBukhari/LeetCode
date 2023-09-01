/*
    Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

    You must do it in place.
    
    Example 1:
        Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
        Output: [[1,0,1],[0,0,0],[1,0,1]]

    Example 2:
        Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
        Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/


var setZeroes = function(matrix) {
    const data = []
    matrix.map((arr1, r_index)=>{
        if(arr1.includes(0)){
            arr1.map((arr2, c_index)=>{
                if(arr2 == 0){
                    data.push({r_index, c_index})
                }
            })
        }   
    })
    for(let i = 0; i<data.length; i++){
        matrix[data[i].r_index] = new Array(matrix[data[i].r_index].length).fill(0);
        for(let j = 0; j<matrix.length; j++){
            matrix[j][data[i].c_index] = 0;
        }
    }
    return matrix;
};