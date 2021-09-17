
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
for(var i=1;i<=cases;i++){
    let dim=input[i].trim().split(" ");
let main=[]
let f=0;
    let con=dim[0];
    if(con=="E"){
        let notmain=[];
        let findd=[]
    let club=dim[1];
    let stunum=dim[2];
if(findd.length==0){
    findd.push(club);
    notmain.push(club);
    notmain.push(stunum);
    main.push(notmain);
}
else{
    for(let j=findd.length-1;j>=0;j--){
        if(club==findd[j]){
var exist=true;

        }
        
    }
    if(!exist){
        findd.push(club)
    }
}

    }
    if(con=="D"){
        console.log(main[f].join(" "));
    }
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  E 1 1
  E 2 1
  E 1 2
  D
  D`);
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
