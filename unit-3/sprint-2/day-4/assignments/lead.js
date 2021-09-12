function compute(a,b){
    for(var i=0;i<Math.min(a.length,b.length);i++){
        var string1=  a.charCodeAt(i)
        var string2=b.charCodeAt(i)
        var ans=string1-string2
        if(ans!=0){
            return ans;
            break;
        }
    }
}
function runProgram(input) {
input=input.trim().split("\n");


var name=[]
var mark=[]

var size=+(input[0]);
for(var i=1;i<=size;i++){
    var dim=input[i].trim().split(" ")
    name.push(dim[0]);
    mark.push(+(dim[1]))
}


for(var i=0;i<name.length;i++){
    for(j=0;j<name.length-i-1;j++){
        if(compute(name[j],name[j+1])>0){
            var temp1=name[j]
            name[j]=name[j+1];
            name[j+1]=temp1
            var temp2=mark[j];
            mark[j]=mark[j+1];
            mark[j+1]=temp2
        }
    }
}


for(var i=0;i<mark.length;i++){
    for(var j=0;j<mark.length-i-1;j++){
        if(mark[j]<mark[j+1]){
            var temp3=name[j]
            name[j]=name[j+1];
            name[j+1]=temp3
            var temp4=mark[j];
            mark[j]=mark[j+1];
            mark[j+1]=temp4
        }
    }
}
//console.log(name);
//console.log(mark);


//console.log(name);
var rank=1;
var count=0;
var prev_mark=-1
var ranks=[]
for(var i=0;i<mark.length;i++){
if(mark[i]==prev_mark){
ranks.push(rank)
}
else{
    rank=rank+count;
    ranks.push(rank);
    count=0
}
prev_mark=mark[i]
count++

}
//console.log(name);

for(var i=0;i<name.length;i++){
    var gg=[]
    gg.push(ranks[i]);
    gg.push(name[i]);
    console.log(gg.join(" "));
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
