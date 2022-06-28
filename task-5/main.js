let arr=[1,2,3,4,5,6,7];
let last=arr[arr.length-1]
let narr=[]
if(arr.length%2==0){
for(i=0;i<arr.length;i=i+2){
narr.push(arr[i+1]);
narr.push(arr[i])
}
}
else{
    for(i=0;i<arr.length-1;i=i+2){
        narr.push(arr[i+1]);
        narr.push(arr[i])
        }
    narr.push(last)
}
console.log(narr)
