const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const diagonalSum = matrix.reduce((acc, line, i) =>( acc + line[i]), 0);
console.log(diagonalSum);