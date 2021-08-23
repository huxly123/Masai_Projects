function find(str1,str2){
    var obj1={}
    for(var i=0;i<str1.length;i++){
        if(obj1[str1[i]]==null){
            obj1[str1[i]]=1
        }else{
            obj1[str1[i]]=obj1[str1[i]]+1
        }
    }
    var obj2={}
    for(var i=0;i<str2.length;i++){
        if(obj2[str2[i]]==null){
            obj2[str2[i]]=1
        }else{
            obj2[str2[i]]=obj2[str2[i]]+1
        }
    }var main=Object.keys(obj2);
    var main2=[]
    var not=Object.keys(obj1);
    for(var i=0;i<main.length;i++){
        for(var j=0;j<not.length;j++){
            if(main[i]==not[j]){
                main2.push(main[i])
            }
        }
    }
    if(main.length==main2.length){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
function runProgram(input) {
input=input.trim().split("\n");
var size1=+(input[0]);
var str1=input[1].trim().split("");
var size2=+(input[2]);
var str2=input[3].trim().split("");
find(str1,str2)
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  aabbc
  4
  abcd`);
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
