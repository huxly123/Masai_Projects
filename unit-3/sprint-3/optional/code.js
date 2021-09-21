
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
let que1=[];let rollQue=[];
let que2=[];
let que3=[];
let que4=[];
let fr1=0;let bk1=0;
let fr2=0;let bk2=0;
let fr3=0;let bk3=0;
let fr4=0;let bk4=0;
for(let i=1;i<=cases;i++){
    let q=input[i].trim().split(" ");
    if(q[0]==='E'&&q[1]==='1'){
        que1.push(q[2]);
        bk1++;
        if(!rollQue.includes('1')){
            rollQue.push('1');

        }
    }
    else if(q[0]==='E'&&q[1]==='2'){
        que2.push(q[2]);
        bk2++;
        if(!rollQue.includes('2')){
            rollQue.push('2');

        }
    }
    else if(q[0]==='E'&&q[1]==='3'){
        que3.push(q[2]);
        bk3++;
        if(!rollQue.includes('3')){
            rollQue.push('3');

        }
    }
    else if(q[0]==='E'&&q[1]==='4'){
        que4.push(q[2]);
        bk4++;
        if(!rollQue.includes('4')){
            rollQue.push('4');

        }
    }
else if(q[0]==='D'){
    if(rollQue[0]==='1'){
        if(!que1[fr1]!==undefined){
            console.log(1,que1[fr1++]);
        }
    }
       else if(rollQue[0]==='2'){
           if(!que2[fr2!==undefined]){
               console.log(2,que2[fr2++]);
           }
       }
       else if(rollQue[0]==='3'){
        if(!que3[fr3!==undefined]){
            console.log(3,que3[fr3++]);
        }
    }
    else if(rollQue[0]==='4'){
        if(!que4[fr4!==undefined]){
            console.log(4,que4[fr4++]);
        }
    }
}
if(fr1===bk1){
    if(rollQue[0]==='1'){
        rollQue.shift()
    }
}
if(fr2===bk2){
    if(rollQue[0]==='2'){
        rollQue.shift()
    }
}
if(fr3===bk3){
    if(rollQue[0]==='3'){
        rollQue.shift()
    }
}
if(fr4===bk4){
    if(rollQue[0]==='4'){
        rollQue.shift()
    }
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
