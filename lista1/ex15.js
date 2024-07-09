function tempMaxMin(temp){
    let max = -Infinity;
    let min = Infinity;

    for(let i = 0; i < temp.length; i++){
        if(temp[i] > max)
        max = temp[i];

        if(temp[i] < min)
        min = temp[i];

    }
    console.log(`A maior temperatura do dia foi ${max} e a menor temperatura do dia foi ${min}`);

}