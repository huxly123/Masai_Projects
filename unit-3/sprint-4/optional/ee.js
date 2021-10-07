
function runProgram(input) {
    input=input.trim().split("\n");
    let cases=+(input[0]);
    let line=1;

    for(let p=0;p<cases;p++){
    let size1=+(input[line++].trim());
    let arr1=input[line++].trim().split(" ").map(Number);
    let size2=+(input[line++].trim());
    let arr2=input[line++].trim().split(" ").map(Number);
    let tt=arr1.concat(arr2);
    let obj={};
    for(let i=0;i<tt.length;i++){
        if(obj[tt[i]]===undefined){
            obj[tt[i]]=1
        }
    }
    let ans=Object.keys(obj);
    let arr=ans.map(i=>Number(i))
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
             if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
   
    
    console.log(arr.join(" "));
    }
    
    }
    if (process.env.USERNAME === 'huxly') {
      runProgram(`2
      4
      1 1 2 3 4
      5
      1 2 3 4 5
      4
      7 8 9 2 
    5
    10 4 7 9 -50
      `);
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