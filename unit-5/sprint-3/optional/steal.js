function runProgram(input) {
  input = input.trim().split("\n");
  var max_weigth = +input[0];
  var len = +input[1];
  var valueArr = input[2].trim().split(" ").map(Number);
  var weightArr = input[3].trim().split(" ").map(Number);
  var obj = {};
  for (let i = 0; i < len; i++) {
    let weight = valueArr[i] / weightArr[i];
    if (!obj[weight]) {
      obj[weight] = i;
    }
  }
  console.log(obj);
  var sorted = Object.keys(obj).map(Number);
  // console.log("sorted", sorted);
  sorted.sort((a, b) => {
    return a - b;
  });
  // console.log("sorted", sorted);
  var sortedIndex = [];
  for (let i = 0; i < sorted.length; i++) {
    if (obj[sorted[i]] || obj[sorted[i]] === 0) {
      sortedIndex.push(obj[sorted[i]]);
    }
  }
  // console.log("index", sortedIndex);

  var weightedArrSort = [];
  var valueArrSort = [];

  for (let i = 0; i < weightArr.length; i++) {
    weightedArrSort[i] = weightArr[sortedIndex[i]];
    valueArrSort[i] = valueArr[sortedIndex[i]];
  }

  // console.log(weightArr);
  var finalWeight = weightedArrSort.reverse();
  var finalValue = valueArrSort.reverse();

  // console.log("V", finalValue);
  // console.log("W", finalWeight);

  // var sum = 0; // finding total weight
  var balance = max_weigth;
  var MAX_VAL = 0; // finding total value

  for (i = 0; i <= len - 1; i++) {
    if (finalWeight[i] < balance) {
      MAX_VAL = MAX_VAL + finalValue[i];
      balance = balance - finalWeight[i];
    } else {
      MAX_VAL = MAX_VAL + finalValue[i] * (balance / finalWeight[i]);
      break;
    }
  }

  console.log(Math.round(MAX_VAL));

  // for (let i = 0; i <= len - 1; i++) {
  //   if (balance < finalWeight[i]) {
  //     ans += (balance / sum) * finalValue[i];
  //     sum += (balance / sum) * finalWeight[i];
  //     break;
  //   } else {
  //     sum += finalWeight[i];
  //     balance -= finalWeight[i];
  //     ans += finalValue[i];
  //   }
  // }
}
if (process.env.USER === "huxly") {
  // runProgram(`50\n3\n60 100 120\n10 20 30`);
  // runProgram(`201\n8\n96 23 12 7 58 100 32 2\n90 51 20 23 4 100 21 58`);
  runProgram(`5\n10\n1 2 1 2 1 2 1 2 1 2\n2 1 2 1 2 1 2 1 2 1`);
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

// function runProgram(input) {
//   input = input.trim().split("\n");
//   let target = +input[0];
//   let values = input[2].trim().split(" ").map(Number);
//   let weights = input[3].trim().split(" ").map(Number);
//   let lookup = new Map();
//   console.log(knapSack(values, weights, values.length - 1, target, lookup));
// }
// if (process.env.USERNAME === "huxly") {
//   runProgram(`50 
// 3
// 60 100 120 
// 10 20 30`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
