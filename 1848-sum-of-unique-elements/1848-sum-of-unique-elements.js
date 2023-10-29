/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let set = new Set(nums);
    let nums1 = [...set], sum = 0, index, temp;
    for(let i = 0; i<nums1.length; i++){
        index = nums.indexOf(nums1[i]);
        temp = nums[index];
        nums[index] = -1;
        sum += nums.indexOf(nums1[i]) == -1 ? nums1[i] : 0; 
        nums[index] = temp;
    }
    return sum;
};