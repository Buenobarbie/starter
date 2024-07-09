// Parte 1 

let vetor = new Array();
let aux = 0;
for(let i = 0; i < 3; i++){
    vetor.push([]);
    for(let j = 0; j < 3; j++){
        vetor[i][j] = aux;
        aux ++
    }
}

console.log(vetor);

// Parte 2

function make_vector(lines , columns){
    let vetor = new Array();
    let aux = 0;
    for(let i = 0; i < lines; i++){
        vetor.push([]);
        for(let j = 0; j < columns; j++){
            vetor[i][j] = aux;
            aux ++
    }
}
    return vetor;

}

const test = make_vector(5,4);
console.log(test);
