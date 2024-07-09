const movimentacao = [200, 450, -400, 3000, -650, -130, 70, 1300];
const maior = movimentacao.reduce((max , item) => { 
    if(max > item)
        return max;
    else
        return item;
    }, -Infinity);

console.log(maior); 