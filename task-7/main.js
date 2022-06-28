let  arr=[6, -3, 5 ,-5 ,-4, 7 ,-5];
let min=100;

for(let i=0;i<arr.length;i++){
    if (arr[i]<min){
        min=arr[i]
  
    }
}

  a=arr[arr.indexOf(min)]

arr[arr.indexOf(min)]=arr[0];
arr[0]=a;


console.log(arr);
