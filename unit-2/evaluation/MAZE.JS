function find(aa,size){
    var x=0,y=0;
    var count=0;
for(var i=0;i<1;i++){
    for(var j=0;j<size;j++){
        if(x==size||x<0 ||y==size ||y<0){
    if(aa[i][j]=="L"){
        x++;
        count++
    }
    else if(aa[i][j]=="R"){
        y++;
        count++;
    }
    else if(aa[i][j]=="U"){
        x--;
        count++;
    }
    else {
        y--;
        count++;
    }
    return "count"
    break;
    
}
    }
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
        console.log(find(aa,size));
    }
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  4 
  RRRR
  LLLL
  UUUU
  DDDD
  3
  LRL
  UUU
  DLR
  2
  RL
  DD
  `);
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