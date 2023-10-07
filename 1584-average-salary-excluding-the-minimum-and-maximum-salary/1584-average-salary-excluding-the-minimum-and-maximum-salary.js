/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary = salary.sort((a, b) => a-b);
    let sum = 0, count = 0;
    salary.forEach((arr)=>{
        if(arr!=salary[0] && arr!=salary[salary.length-1]){
            sum += arr;
            count++;
        }
    })
    return sum/count;
};