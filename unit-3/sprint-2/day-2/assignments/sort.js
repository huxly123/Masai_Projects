
function runProgram(input) {
input=input.trim().split("\n");
var size=+(input[0]);
var obj={}

for(var i=1;i<=size;i++){
var dim=input[i].trim().split(" ");
var nme=dim[0];
var mark=+(dim[1]);
if(obj[nme]==null){
    obj[nme]=mark
}

}
var marks=Object.values(obj);
var sortedmarks=marks.sort();
var main=[]
var c=1;
var count=0
for(var i=sortedmarks.length-1;i>=0;i--){
    var aaa=[]
    for(key in obj){
if(sortedmarks[i]==obj[key]){
    
    
    aaa.push(c);
    aaa.push(key);
    obj[key]=null
    count++
    break;
    }
    

    }
    if(sortedmarks[i]==sortedmarks[i-1]){
        count++
    }
    else{
        c=count
    }
    main.push(aaa)
}
for(var i=0;i<main.length;i++){
   var dd=[]
    for(var j=0;j<main[i].length;j++){
        dd.push(main[i][j])
    }
    console.log(dd.join(" "));
}
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
