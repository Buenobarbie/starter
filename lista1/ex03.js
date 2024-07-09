let arr = [10 ,15 ,50] ;

let temp = parseInt(prompt("Digite um número: "));
arr.unshift(temp);

temp = parseInt(prompt("Digite outro número: "));
arr.push(temp);

console.log(arr);