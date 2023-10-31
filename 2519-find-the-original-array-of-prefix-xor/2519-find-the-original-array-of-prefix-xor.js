/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let arr = [pref[0]]
    for(let i=1; i<pref.length; i++){
        arr.push(pref[i-1] ^ pref[i]);
    }
    return arr;
};