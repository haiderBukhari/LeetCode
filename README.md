# Problem 1 (Hard)

   * Median of Two Sorted Arrays

## Problem Statement [Question](https://leetcode.com/problems/median-of-two-sorted-arrays/)

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

```bash
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

```

```bash
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```
## [Sollution](https://github.com/haiderBukhari/LeetCode/blob/main/(Hard)%20Median%20of%20Two%20Sorted%20Arrays.js/)
```bash
var findMedianSortedArrays = function(nums1, nums2) {
    let finalarray = [...nums1, ...nums2].sort(function(a,b){
        return a - b;
    });
    let length = finalarray.length;
    if(length%2 === 0){
        return ((finalarray[length/2]+finalarray[(length/2)-1])/2)
    }
    else{
        return finalarray[Math.floor(length/2)]
    }
};
```
#


# Problem 2 (Easy)
* Two Sum

## Problem Statement [Question](https://leetcode.com/problems/two-sum/)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


```bash
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

```

```bash
Example 2:

Input: nums = [3,3], target = 6
Output: [0,1]
```
```bash
Example 3:

Input: nums = [3,2,4], target = 6
Output: [1,2]
```
## [Sollution](https://github.com/haiderBukhari/LeetCode/blob/main/(Hard)%20Median%20of%20Two%20Sorted%20Arrays.js/)
```bash
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target){
                return [i, j];
            }
        }
    }
};
```
#