const dogAge = [5, 2, 4, 1, 15, 8, 3];
const humanAge = dogAge.map( age => {
    if (age < 2)
        return 2 * age;
    else
        return 16 + 4 * age;
});

const adultDogs = humanAge.filter( age => age >= 18);
const mean = adultDogs.reduce((acc, age , index) => (acc + age) / (index + 1) );

console.log(humanAge);
console.log(adultDogs);
console.log(mean);
