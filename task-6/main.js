let  arr=[1,2,6,4];
let min=100;
let max=0;
let sum=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }

    if (arr[i]<min){
        min=arr[i]
    }
sum=sum+arr[i]

}


console.log(sum-max-min)
