const vector = [["1", "2", "3"],[true], [4, 5, 6]] ;
const joinedVector = vector.reduce((acc , arr) => acc.concat(arr) , []);
console.log(joinedVector);