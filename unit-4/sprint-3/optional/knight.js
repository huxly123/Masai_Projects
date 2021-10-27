function knight(arr,step,i,j){
   
    
    if (i<0||i>9||j<0||j>9){
        //console.log("flag");
        return ;
    }
    if(step==0){
        arr[i][j]=1;
        return ;  
    }
    knight(arr,step-1,i-2,j+1);
    knight(arr,step-1,i-2,j-1);
    knight(arr,step-1,i-1,j+2);
    knight(arr,step-1,i-1,j-2);
    knight(arr,step-1,i+2,j+1);
    knight(arr,step-1,i+2,j-1);
    knight(arr,step-1,i+1,j-2);
    knight(arr,step-1,i+1,j+2);
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i][j]==1){
                count++
            }
        }
    }
   return count
}
function runProgram(input) {
input=input.trim().split(" ").map(Number);
let i=+(input[0])-1;
let j=+(input[1])-1;
let N=+(input[2]);
let arr=new Array(10).fill(0).map(item=>new Array(10).fill(0));
console.log(knight(arr,N,i,j));
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`4 10 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

