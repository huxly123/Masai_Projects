var count=0
function step(arr,num){
    if(num===0) count++;
   else if (num<0) return 0
else {
  for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length;j++){
        step(arr,num-(arr[i]+arr[j]))
     }
  }
}

}