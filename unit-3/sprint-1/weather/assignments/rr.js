
function runProgram(input) {
    var n=input
    var half=Math.floor(n/2);
    var l=0;
    var r=n.length-1;
    while(l<r){
      if(n[l]==n[r]){
        l++;
        r--;
      }
      else{
        var exist=true;
        console.log("No");
        break;
      }
    }
    if(!exist){
      console.log("Yes");
    }
    }
    
    if (process.env.USERNAME === 'huxly') {
      runProgram(`12`);
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
    