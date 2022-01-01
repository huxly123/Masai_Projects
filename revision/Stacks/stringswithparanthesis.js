function runProgram(input) {
    let arr = input.trim().split("");
    let stack = []
    let flag=false
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "{" || arr[i] == "[" || arr[i] == "(") {
            stack.push(arr[i])
            continue
        }
        if (arr[i] == "}" &&stack[stack.length-1]=="{"){
            stack.pop()
            continue
        }
         if (arr[i] == ")" &&stack[stack.length-1]=="("){
            stack.pop()
            continue
        }
         if (arr[i] == "]" &&stack[stack.length-1]=="["){
            stack.pop()
            continue
        }
        if (stack.length == 0 && arr[i] == "}" || arr[i] == "]" || arr[i] == ")") {
            console.log([i]);
            flag = true;
            break
        }
    }
    if (flag) {
        console.log("unbalanced");
    } else {
        console.log("balanced");
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`(((((((((())))))))))`);
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
