function spiralTraversalIV(N, arr){
    var ans=[]
     var size=N*N;
     var count=0;
     var top=0,left=0,right=N-1,bottom=N-1;
     while(count<size){
       for(var i=bottom;i>=top;i--){
   ans.push(arr[i][right]);
   count++;
   
       }right--;
       for(var i=right;i>=left;i--){
         ans.push(arr[top][i]);
         count++;
       
             } top++
             for(var i=top;i<=bottom;i++){
               ans.push(arr[i][left]);
               count++;
               
                   }left++
                   for(var i=left;i<=right;i++){
                     ans.push(arr[bottom][i]);
                     count++;
                   
                         bottom--;
     }}var ddd= ans.join(" ")
    console.log(ddd);
   
}
function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1;
for(var i=0;i<cases;i++){
    var size=+(input[line]);
    var next=line+size;
    var aa=[];
    for(j=line+1;j<=next;j++){
        var ee=input[j].trim().split(" ").map(Number);
        aa.push(ee);
    
    }
    spiralTraversalIV(size, aa)
    line=next+1;
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`1
  3 
  1 2 3
  4 5 6
  7 8 9`);
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
