function palindrome(str) {
  str = str.toLowerCase();
  console.log(str);
  let left = 0;
  let right = str.length - 1;
  let sp = [
    "+",
    "-",
    "&&",
    "||",
    "!",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "^",
    "~",
    "*",
    "?",
    ":",
    "_",
    " ",
    ",",
  ];
  while (left < right) {
    while (sp.includes(str[left])) {
      left++;
    }
    while (sp.includes(str[right])) {
      right--;
    }
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(palindrome("A man, a plan, a canal. Panama"));