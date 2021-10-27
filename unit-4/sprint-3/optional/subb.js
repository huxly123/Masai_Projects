const getAllSubsets = 
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

let  ss=(getAllSubsets([1,2,3]))
for(let i=0;i<ss.length;i++){
    let str=""
    for(let j=0;j<ss[i].length;j++){
       
        str+=ss[i][j]
       
    }
    console.log(str);
}