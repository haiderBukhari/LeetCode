let arr = [[1,0,3], [4,5,6], [0,8,9]]
const data = []
arr.map((arr1, r_index)=>{
    if(arr1.includes(0)){
        arr1.map((arr2, c_index)=>{
            if(arr2 == 0){
                data.push({r_index, c_index})
            }
        })
    }
})
for(let i = 0; i<data.length; i++){
    // arr[data[i].r_index] = new Array(arr[data[i].r_index].length).fill(0);
    // arr[data[i].c_index] = new Array(arr[data[i].c_index].length).fill(0);
    arr[data]
}
console.log(arr);