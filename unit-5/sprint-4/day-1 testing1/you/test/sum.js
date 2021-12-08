function summ(...args) {
  return args.reduce((acc, curr) => acc + curr);
}

console.log(summ(1,2,3,4,5));
module.exports=summ