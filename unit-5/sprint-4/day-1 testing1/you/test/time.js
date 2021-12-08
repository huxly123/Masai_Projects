

function timee(n) {
    let seconds = Math.floor(n / 1000);
    let minutes =Math.floor( seconds / 60)
    seconds = seconds % 60;
    let hr =Math.floor(  minutes / 60)
    minutes=minutes%60
//   return `${hr}hrs ${minutes}minutes ${seconds}seconds`
    if (hr == 0 && minutes != 0) {
      return `${minutes} minutes ${seconds} seconds`;
    } else if (hr == 0 && minutes == 0) {
      return `${seconds} seconds`;
    }
  
}

console.log(timee(5200));

module.exports=timee