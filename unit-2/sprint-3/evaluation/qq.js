function find(arr){
    var obj={};
    for(var i=0;i<arr.length;i++){
        if(obj[arr[i]]==null){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]=obj[arr[i]]+1
        }
    }var v=Object.values(obj);
    var k=Object.keys(obj);
    for(var i=0;i<v.length;i++){
        if(v[i]==1){
            var tt=i
        }
    }
    var ans=k[tt];
    return ans
}
function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1;
for(var i=0;i<cases;i++){
var size=+(input[line]);
line++;
var arr=input[line].trim().split(" ").map(Number);
line++;
console.log(find(arr));
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`1
  5
  1 2 1 3 4 4 5 2 3`);
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
