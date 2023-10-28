/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let dp = new Array(5).fill(1);
    let dp1 = [...dp];
    let mod = 10**9 + 7;
    for(let i = 1; i<n; i++){
        dp1[0] = (dp[1] + dp[4] + dp[2])%mod;
        dp1[1] = (dp[0] + dp[2])%mod;
        dp1[2] = (dp[1] + dp[3])%mod;
        dp1[3] = (dp[2])%mod;
        dp1[4] = (dp[2] + dp[3])%mod;
        dp = [...dp1];
    }

    let sum = dp.reduce((acc, val)=> acc+val, 0)
    return sum%mod
};