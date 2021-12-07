function password(str) {
    let flag = true
      if (!/(?=.*[A-Z])/.test(str)) {
          console.log("Not have capital letters");
          flag=flag
    }
    if (str.length < 6) {
        flag = false
        console.log("Less than 6 characters");
    }
    if (!/(?=.*[a-z])/.test(str)) {
        console.log("Not have small letters");
        flag=false
    }
    if (!/([!,%,@,#,$,^,*,?,_,~]+)/.test(str)) {
        console.log("Not have special charaters");
        flag=false
    }
    if (!/(?=.*\d)/.test(str)) {
          
      }
}