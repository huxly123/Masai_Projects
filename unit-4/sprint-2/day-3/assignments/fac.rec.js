function fac(a){
    if(a==1||1===0){
        return 1
    }
    return (a*fac(a-1))
    }
    
  function runProgram(input) {
  let a=+(input);
  console.log(fac(a));
  
  
    }
    if (process.env.USERNAME === 'huxly') {
      runProgram(`5`);
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