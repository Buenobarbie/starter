let arr1 = [10 ,15 ,50] ;
let arr2 = [];

for(let i = 0; i < 3; i++){
    let temp = parseInt(prompt("Digite um número: "));
    arr2.push(temp);
}

let arr3 = arr1.concat(arr2);
console.log(arr3);