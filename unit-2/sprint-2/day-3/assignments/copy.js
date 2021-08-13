var arrayy=[0,1,2,3];
function find(arr){
arr[0]="masai";    //I am changing the first element of array inside function . 
}
console.log(arrayy);   //it returns the global value,so it doesn't affected by the manipulation 
                    //inside the function