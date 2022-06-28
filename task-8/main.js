let  arr=[6,7, -3, 5 ,-5 ,-4, 7 ,-5];
let max=0;
let b;
let temp=arr[arr.length-1]
for(i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }


else if(arr[i]==max){
  b=i;

}
}

arr[b]=temp;
arr[arr.length-1]=max


console.log(arr);
