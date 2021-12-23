function enc(str, k) {
    let alphcap = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let alphsmall = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let ans=[]
    for (let i = 0; i < str.length; i++){
        if (alphcap.includes(str[i])) {
            for (let j = 0; j < alphcap.length; j++){
                if (str[i] === alphcap[j]) {
                    ans.push(alphcap[(j + k) % alphcap.length]);
                    break
                }
            }
        }
       else if (alphsmall.includes(str[i])) {
              for (let j = 0; j < alphsmall.length; j++) {
                if (str[i] === alphsmall[j]) {
                  ans.push(alphsmall[(j + k) % alphsmall.length]);
                  break;
                }
              }
        }
       else if (num.includes(str[i])) {
              for (let j = 0; j < num.length; j++) {
                if (str[i] === num[j]) {
                  ans.push(num[(j + k) % num.length]);
                  break;
                }
              }
        }
        else {
            ans.push(str[i])
        }
    }
return ans.join("")
}


function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[0].trim().split("");
    let k = +(input[1])
    console.log(enc(str,k));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`All-convoYs-9-be:Alert1.
4`);
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
