let arr=[14, 16, 3, 7, 17, 19, 9];
let count=0
let temp=[]

for(i=0;i<arr.length;i++){
    if(arr[i]>arr[i-1]){
        temp.push(arr[i])
    }
}
    console.log(temp)
