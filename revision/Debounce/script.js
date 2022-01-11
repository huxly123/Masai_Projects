// Debounce  in Javascript
    let counter = 1;
const getData = () => {

    console.log("Fetching"+counter);
    counter++
};

// const doSomeMagic = function (fn, delay) {
//   let timer;
//     return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//     }, delay);
//   };
// };

// const betterFunction = doSomeMagic(getData, 1000);


///////////////////////////////////////////////////////


// Throttle in Javascript

const doSomeMagic = function (fn, limit) {
  let flag=true
    return function () {
        if (flag) {
            fn.apply(this,arguments)
            flag=false
            setTimeout(() => {
          flag=true
            }, limit)
        }
  };
};

const betterFunction = doSomeMagic(getData, 5800);


// here this is for global object

//arguments is from the fn() use for some edge cases
//we are not calling fn directly bt using apply for some edge cases
