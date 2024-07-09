const prices = [];

for(let i = 0; i < 3; i++){
    prices.push(prompt("Insira um preço :"));
}

const apllyDiscount = function (price){

    if (price < 200)
        return price - price * 0.05;

    else if(price < 400)
        return price - price * 0.1;

    else if(price < 2000)
        return price - price * 0.15;

    else 
        return price - price * 0.2;


}    

const pricesWithDiscount = prices.map(apllyDiscount);
console.log(pricesWithDiscount);