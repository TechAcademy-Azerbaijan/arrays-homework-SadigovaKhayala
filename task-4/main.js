let arr=[14,16,3,7,17,19,9];
let narr=[];
let b=0;

for(i=1;i<arr.length;i++){


if(arr[i]>arr[i-1]){
narr.push(arr[i]);
}

else{narr.push(arr[i-1])}
}


for(i=0;i<narr.length;i++){
    if(narr[i]==narr[i+1]){
        narr.splice(narr[i],1);
    }
}

console.log(narr)
