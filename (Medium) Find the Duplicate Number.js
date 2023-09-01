/*
    Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
    There is only one repeated number in nums, return this repeated number.
    You must solve the problem without modifying the array nums and uses only constant extra space.

    Example 1:
        Input: nums = [1,3,4,2,2]
        Output: 2

    Example 2:
        Input: nums = [3,1,3,4,2]
        Output: 3
*/

var findDuplicate = function(nums) {
    let a = {}
    for(let i = 0; i<nums.length; i++){
        if(!a[nums[i]]){
            a[nums[i]] = 1;
        }
        else{
            a[nums[i]] +=1;
        }
        if(a[nums[i]]>=2){
            return nums[i];
        }
    }  
};