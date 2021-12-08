function password(str) {
  let flag = true;
  if (!/(?=.*[A-Z])/.test(str)) {
    return "Not have capital letters";
    flag = flag;
  }
  if (str.length < 6) {
    flag = false;
    return "Less than 6 characters";
  }
  if (!/(?=.*[a-z])/.test(str)) {
    flag = false;
    return "Not have small letters";
  }
  if (!/([!,%,@,#,$,^,*,?,_,~]+)/.test(str)) {
    flag = false;
    return "Not have special charaters";
  }
  if (!/(?=.*\d)/.test(str)) {
    flag = false;
    return "Not having numbers";
  }
  if (flag === true) {
    return "Accepted";
  }
}
module.exports=password