function findh(aaa,size){
    if(size%2==0){
var aa1=[];
var aa2=[];
var half=Math.floor(size/2);
for(var i=0;i<half;i++){
    for(var j=0;j<size;j++){
        aa1.push(aaa[i][j])
    }
}
for(var i=size-1;i>=half;i--){
    for(var j=0;j<size;j++){
        aa2.push(aaa[i][j])
    }
}
if(comp(aa1,aa2)==true){
    return true
}
else{
    return false
}
}
else{
    var aa1=[];
var aa2=[];
var half=Math.floor(size/2);
for(var i=0;i<half;i++){
    for(var j=0;j<size;j++){
        aa1.push(aaa[i][j])
    }
}
for(var i=size-1;i>half;i--){
    for(var j=0;j<size;j++){
        aa2.push(aaa[i][j])
    }
}
if(comp(aa1,aa2)==true){
    return true
}
else{
    return false
}
}
}


function findv(aaa,size){
    if(size%2==0){
var aa1=[];
var aa2=[];
var half=Math.floor(size/2);
for(var i=0;i<half;i++){
    for(var j=0;j<size;j++){
        aa1.push(aaa[j][i])
    }
}
for(var i=size-1;i>=half;i--){
    for(var j=0;j<size;j++){
        aa2.push(aaa[j][i])
    }
}
if(comp(aa1,aa2)==true){
    return true
}
else{
    return false
}

}
else{
    var aa1=[];
var aa2=[];
var half=Math.floor(size/2);
for(var i=0;i<half;i++){
    for(var j=0;j<size;j++){
        aa1.push(aaa[j][i])
    }
}
for(var i=size-1;i>half;i--){
    for(var j=0;j<size;j++){
        aa2.push(aaa[j][i])
    }
}
if(comp(aa1,aa2)==true){
    return true
}
else{
    return false
}
}
}


function comp(aa1,aa2){
    for(var i=0;i<aa1.length;i++){
        if(aa1[i]!=aa2[i]){
            var exists=true;
            return false
        }
    }if(!exists){
        return true;
    }
}


function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1;
for(var i=0;i<cases;i++){
    var size=+(input[line]);
    var next=line+size;
    var aa=[];
    for(var j=line+1;j<=next;j++){
        var ee=input[j].trim().split("");
        aa.push(ee);
    }
    line=next+1;
   if(findh(aa,size)==true && findv(aa,size)==true){
       console.log("YES");
   }
else{
    console.log("NO");
}

}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  2
  11
  11
  4
  0101
  0110
  0110
  0101
  4
  1001
  0000
  0000
  1001
  5
  01110
  01010
  10001
  01010
  01110
  5
  00100
  01010
  10001
  01010
  01110`);
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