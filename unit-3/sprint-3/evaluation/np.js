
function runProgram(input) {
input=input.trim().split("\n");
let cases=input[0].trim().split(" ").map(Number);
let r=cases[0]
let c=cases[1]
var mat=[]
let ans=[]
let one=0
for(var i=1;i<=r;i++){
    let fu=input[i].trim().split(" ").map(Number);
    mat.push(fu)
}
for(var i=0;i<r;i++){
    for(var j=0;j<c;j++){
        let count=0
        if(mat[i][j]==1){
            one++
        }
        for(var pp=2;pp<mat[i][j];pp++){
            
            if(mat[i][j]%pp==0){
                count++
            }
        }
        if(count!=0){
            if(!ans.includes(mat[i][j]))
ans.push(mat[i][j])
        }
    }
}

if(one!=0){
  console.log(ans.length+1);
}else{
console.log(ans);
}
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9 `);
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