function namee(nme,mark){
  for(var i=0;i<nme.length;i++){
    for(var j=0;j<nme.length-i-1;j++){
      if(Compp(nme[j],nme[j+1])>0){
var temp=nme[j];
nme[j]=nme[j+1];
nme[j+1]=temp;
var temp2=mark[j];
mark[j]=mark[j+1];
mark[j+1]=temp2
      }
    }
  }
  return (nme)

}
function Compp(a,b){
for(var i=0;i<Math.min(a.length,b.length);i++){
  if(a[i]!=b[i]){
    return a[i]-b[i];
    break;
  }
}
}
function runProgram(input) {
input=input.trim().split("\n");
var size=+(input[0]);
var name=[]
var mark=[]
for(var i=1;i<=size;i++){
var dim=input[i].trim().split(" ");
var nme=dim[0];
var marks=+(dim[1]);
name.push(nme)
mark.push(marks)
}
console.log(namee(name,mark));
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`6
  rancho 45
  chatur 32
  raju 30
  farhan 28
  virus 32
  joy 45`);
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
