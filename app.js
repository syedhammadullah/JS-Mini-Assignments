// Addition of Matrices
let matrix1 = [
  [3, 5, 1],
  [4, 8, 9],
  [3, 2, 7],
];
let matrix2 = [
  [5, 6, 4],
  [9, 0, 7],
  [9, 6, 1],
];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matrix1[i][j] + matrix2[i][j]);
  }
}
console.log('FIRST QUESTION END');

// // Squares of Numbers in Matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] = matrix[i][j] ** 2;
  }
}
// Print The Result
console.log(matrix);
console.log('SECOND QUESTION END');

// Print Dynamically
let Array1 = [
  [3, 4, 5, 6, 9, 0],
  [1, 4, 3],
  [5, 7, 6, 9],
  [4, 6, 8, 1],
  [1, 6],
];

for (let i = 0; i < Array1.length; i++) {
  for (let j = 0; j < Array1[i].length; j++) {
    console.log(Array1[i][j]);
  }
}
console.log('THIRD QUESTION END');