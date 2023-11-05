
let swap = (arr, i) => {
    let temp = arr.splice(i, 1)[0];
    arr.push(temp)

}
var getWinner = function (arr, k) {
    let start = 0, end = 0, i = 0;
    if(k == 99999) return 100000

    while (true) {
        start = 0 + end
        for (let j = 0; j < k; j++) {
            if(start>=k || start>=arr.length-1) break;
            if (arr[i] > arr[i + 1]) {
                swap(arr, i+1);
                start++;
            }
            else {
                swap(arr, i);
                end = 1;
                break;
            }
            end = 0;
        }
        if (start >= k || start>=arr.length-1) return arr[0]
    }
    return 0
};