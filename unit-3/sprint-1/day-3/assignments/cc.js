function add(sub,target){
    var sum=0;
    for(var i=0;i<sub.length;i++){
        var k=+(sub[i])
sum=sum+k
    }
if(sum%target!=0){
    return true
}else{
    return false
}
}
function max(aa){
    var max=0
for(var i=0;i<aa.length;i++){
if(aa[i].length>max){
    max=aa[i].length
}
}
return max
}
function runProgram(input) {
    var aa=[]
    input=input.trim().split("\n");
    var dim=input[0].trim().split(" ");
    var size=+(dim[0]);
    var target=+(dim[1]);
    var arr=input[1].trim().split(" ").map(Number);
    var i,j;
    for(j=i=0;i<size;i++){
        var sub=""
        sub=sub+arr[j]
        if(i == myArrayLength -1){
            i = j++;//++j - 1;
            
        }
        if(add(sub,target)==true){
            aa.push(sub)
        }
    }
   var bb=max(aa)
   var count=0;
   for(var i=0;i<aa.length;i++){
       if(aa[i].length==bb){
           count++
       }
   }
   console.log(count);
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`4 3
  2 3 4 6`);
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
