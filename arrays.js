//Arrays
const nums = [1,2,3,4];

//Add ao final
nums.push(5);

//Add no início
nums.unshift(0);

//Remove o último
nums.pop();

//Remove o primeiro
nums.shift();

//Ver index
let x = nums.indexOf(2);

//Ver se um elemento exite t/f
let isThere = nums.includes(8);

//criar novo array
const new_nums = [...nums];


//Métodos

const arr1 = ['a','b','c'];

console.log(arr1.slice(1)); // b, c

console.log(arr1.slice(1,2)); // b