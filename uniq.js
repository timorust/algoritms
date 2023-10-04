function isUnique(str) {
  // for (var i = 0; i < str.length; i++) {
  //   const char = str[i];

  //   if (str.lastIndexOf(char) != i) {
  //     return false;
  //   }
  // }

  // const set = new Set();

  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];
  //   if (set.has(char)) {
  //     return false;
  //   }
  //   set.add(char);
  // }

  // return true;

  return new Set(str).size === str.length;
}

console.log(isUnique("abcdef")); // true
console.log(isUnique("1234567")); //true
console.log(isUnique("abcABC")); //true
console.log(isUnique("abcadef")); //false
