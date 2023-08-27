/*
Question
    You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
    On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
    Find and return the maximum profit you can achieve.

    Example 1
        Input: prices = [7,1,5,3,6,4]
        Output: 7
    Example 2
        Input: prices = [1,2,3,4,5]
        Output: 4
*/


var maxProfit = function(prices) {
    let sum = 0;
    for(let i=1; i<prices.length; i++){
        const subtraction = prices[i] - prices[i-1];
        if(subtraction>0){
            sum += subtraction;
        }
    }
    return sum;
};