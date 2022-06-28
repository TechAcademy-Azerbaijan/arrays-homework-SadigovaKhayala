

let arr=[14,16,3,7,17,19,9];
let narr=[];
let b=0;

for(i=1;i<arr.length;i++){


if(arr[i]>arr[i-1]){
narr.push(arr[i]);
}}


console.log(narr.join(' '));
