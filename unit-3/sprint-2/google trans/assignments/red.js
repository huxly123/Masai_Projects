
function runProgram(input) {
    var arr=input.trim().split("");
    var main=[]

    for(var i=0;i<arr.length;i++){
        console.log(count);
        var count=0
       
        for(var j=i;j<arr.length;j++){
if(arr[i]==arr[j]){
 count++
}
else{
    i=j
    break;
}
        }
        
        if(count%2!=0){
            main.push(arr[i])
        }
        if(count==1){
            main.push(arr[i])
        }

    }
    if(main.length==0){
        console.log("Empty String");
    }else{
     console.log(main.join(""));
    }
  
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`aaabccddd`);
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
