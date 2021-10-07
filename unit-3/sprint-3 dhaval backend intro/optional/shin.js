
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
let line=1
for(let p=1;p<=cases;p++){
    let dim1=input[line++].trim().split(" ").map(Number);
    let size=dim1[0];
    let q=dim1[1];
    let arr=input[line++].trim().split(" ").map(Number);
    for(var t=0;t<size;t++){
      for(var y=0;y<size-t-1;y++){
        if(arr[y]>arr[y+1]){
          let temp=arr[y]
          arr[y]=arr[y+1]
          arr[y+1]=temp;
        }
      }
    }
   // console.log(arr);
    let sum=0;

    for(let i=0;i<size-1;i++){
      
 diff=Math.abs(arr[i]-arr[i+1])
 //console.log(diff);
ans=diff*q;
//console.log(ans);
sum=ans+sum;

    }
  console.log(sum);
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  2 4
  2 1
  1 5
  3`);
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
