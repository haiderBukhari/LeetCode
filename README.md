# ✍️ Problem 1 (Hard)

   * Median of Two Sorted Arrays

## 👉[Problem Statement](https://leetcode.com/problems/median-of-two-sorted-arrays/) 👉 [Solution](https://github.com/haiderBukhari/LeetCode/blob/main/(Hard)%20Median%20of%20Two%20Sorted%20Arrays.js/)


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
#

# ✍️ Problem 2 (Medium)

   * Remove Duplicates from Sorted Array II

## 👉[Problem Statement](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) 👉 [Solution](https://github.com/haiderBukhari/LeetCode/blob/main/(Medium)%20Remove%20Duplicates%20from%20Sorted%20Array%20II.js/)

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

```bash
Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
```

```bash
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
```
#
# ✍️ Problem 3 (Easy)

   * Longest Common Prefix

## 👉[Problem Statement](https://leetcode.com/problems/longest-common-prefix/) 👉 [Solution](https://github.com/haiderBukhari/LeetCode/blob/main/(Hard)%20Median%20of%20Two%20Sorted%20Arrays.js/)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


```bash
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

```

```bash
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
#
# ✍️ Problem 4 (Medium)

   * Best Time to Buy and Sell Stock II

## 👉[Problem Statement](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) 👉 [Solution](https://github.com/haiderBukhari/LeetCode/blob/main/(Medium)%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20II.js/)

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.


```bash
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
```

```bash
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
```
#
# ✍️ Problem 5 (Easy)

   * Two Sum

## 👉[Problem Statement](https://leetcode.com/problems/two-sum/) 👉 [Solution](https://github.com/haiderBukhari/LeetCode/blob/main/(Easy)%20Longest%20Common%20Prefix.js/)

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
#
# ✍️ Problem 6 (Medium)

   * Search a 2D Matrix

## 👉[Problem Statement](https://leetcode.com/problems/search-a-2d-matrix/) 👉 [Solution](https://github.com/haiderBukhari/LeetCode/blob/main/(Medium)%20Search%20a%202D%20Matrix.js/)

You are given an m x n integer matrix matrix with the following two properties:
   1. Each row is sorted in non-decreasing order.
   2. The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.

```bash
Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

```

```bash
Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```