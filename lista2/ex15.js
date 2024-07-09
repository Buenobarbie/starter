const numArr = [1, 2, 3, 4] ;
const numStr = numArr.reduce( (acc, num) => acc + num, "");
console.log(numStr);