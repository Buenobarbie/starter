let arr1 = [5,7,3];
let arr2 = [2,2];
let finalArr =[];

if (arr1.length < arr2.length)
    finalArr = arr1.map((item , index ) => item * arr2[index] );
else
    finalArr = arr2.map((item , index ) => item * arr1[index] );


console.log(finalArr);