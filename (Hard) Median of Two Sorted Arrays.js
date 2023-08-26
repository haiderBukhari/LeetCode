/*
Question :
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    Example 1:
            Input: nums1 = [1,3], nums2 = [2]
            Output: 2.00000
            Explanation: merged array = [1,2,3] and median is 2.
    Example 2:
            Input: nums1 = [1,2], nums2 = [3,4]
            Output: 2.50000
            Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

The overall run time complexity should be O(log (m+n)).
*/
//Sollution
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