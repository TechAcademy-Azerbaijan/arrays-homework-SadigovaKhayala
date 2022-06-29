let arr=[3,5,-7,7,5,-9,-4];
let count=0
let temp=[]

for(i=0;i<arr.length;i++){
    if(!temp.includes(arr[i])){
temp.push(arr[i])
    }
}

console.log(temp.length);
