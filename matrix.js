const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/*

[1, 2, 3]    [7, 4, 1]
[4, 5, 6] -> [8, 5, 2]  
[7, 8, 9]    [9, 6, 3]   

* 0:0 0:1 0:2      0:2 1:2 2:2
* 1:0 1:1 1:2 ->   0:1 1:1 2:1
* 2:0 2:1 2:2      0:0 1:0 2:0 

*/

function rotate(source) {
  const rotated = source[0].map((_) => []);
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      const value = source[i][j];
      rotated[j][source.length - 1 - i] = value;
    }
  }
  return rotated;
}

function rotate180(source) {
  return rotate(rotate(source));
}
function rotate270(source) {
  return rotate(rotate180(source));
}
function rotate360(source) {
  return rotate(rotate270(source));
}

function print(array) {
  array.forEach((i) => console.log(i));
}

print(rotate(matrix));
console.log("-----------");
print(rotate180(matrix));
console.log("-----------");
print(rotate270(matrix));
console.log("-----------");
print(rotate360(matrix));
