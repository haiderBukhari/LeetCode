/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = "";
    let i = 0;
    for(; i<word1.length && i<word2.length; i++){
        str+=word1[i] + word2[i];
    }
    if(word1.length > word2.length){
        str += word1.slice(i);
    }
    else{
        str += word2.slice(i);
    }
    return str;
};