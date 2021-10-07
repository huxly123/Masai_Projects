function runProgram(input) {
    input=input.trim().split("\n");
    var cases=+(input[0]);
    var line=1;
    for(var i=0;i<cases;i++){
 var n=+(input[line++]);
 var arr=input[line++].trim().split(" ").map(Number);
 var k=+(input[line++]);
 var res=-1;
 for(var j=0;j<n;j++){

   for(var l=j+1;l<n;l++){
    var sum=0
     sum=arr[j]+arr[l]
if(sum>res&&sum<k){
  res=sum
}
   }
 }
if(res>k){
  console.log(-1);
}else{
  console.log(res);
}
    }
    }
    
    if (process.env.USERNAME === 'huxly') {
      runProgram(`2
      5
      1 2 3 4 5
      7
      3
      30 10 20
      15`);
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
    