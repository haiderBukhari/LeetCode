/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let maxLen = -1;
    let count = 0; 
    rectangles.map((arr)=>{
        if(arr[0]>arr[1] && arr[1]>maxLen){
            maxLen = arr[1];
            count = 1;
        }
        else if(arr[0]>arr[1] && arr[1] == maxLen){
            count++;
        }
        else if(arr[0]<arr[1] && arr[0]>maxLen){
            maxLen = arr[0];
            count = 1;
        }
        else if(arr[0]<arr[1] && arr[0] == maxLen){
            count++;
        }
    })
    return count;
};