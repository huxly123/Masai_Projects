function oddd(sub){
  if(sub[0]%2!=0){
      return true
  }else{
      return false
  }
}
function evenn(sub){
var bb=sub.length-1
  if(sub[bb]%2==0){
      return true
  }else{
      return false
  }
}
function find(arr,size){
  var count=0;
var i=0
while(i<size){
for(var j=i+1;j<=size;j++){
  var sub=""
  for(var k=i;k<j;k++){
      sub=sub+arr[k]
  }if(oddd(sub)==true && evenn(sub)==true){
      count++
  }
}
i++;
}
console.log(count);
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
 find(arr,size);
}
}

if (process.env.USERNAME === 'huxly') {
runProgram(`2
5
1 2 3 4 5
5
1 2 3 4 5           `);
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