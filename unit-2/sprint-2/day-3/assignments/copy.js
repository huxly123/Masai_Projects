var arrayy=[0,1,2,3];
var cpy=[];
for(var i=0;i<arrayy.length;i++){
  cpy.push(arrayy[i]);
}

function find(arr){
arr[0]="masai";    //I am changing the first element of array inside function . 
}
console.log(cpy);   //it returns the global value,so it doesn't affected by the manipulation 
                    //inside the function
