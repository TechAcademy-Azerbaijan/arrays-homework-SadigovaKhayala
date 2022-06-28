let  arr=[4,2,3,4,5,6];
let  arr2=[];


for(i=0;i<arr.length;i++){
if(!arr2.includes(arr[i])){
  arr2.push(arr[i])
}
}
console.log(arr2.length)
