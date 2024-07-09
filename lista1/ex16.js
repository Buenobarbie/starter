let arr1 = [1,2,3,4];
let arr2 = [2,4,3,6,8];

function commmonElements(arr1,arr2){
    let count = 0;

    for(let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i]))
        count++;
    }
    return count;
}

console.log(commmonElements(arr1,arr2));