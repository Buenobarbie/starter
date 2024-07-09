
//Retorna a linha de índice n do triângulo
function triangleLine(n){
    let lineN = [];

    //Loop de n interações , pois a linha n tem n elementos
    for (let i = 0; i < n; i++){
        //O primeiro e o último número de toda linha é sempre 1
        if(i == 0 || i == n - 1 )
        lineN.push(1);

        //Os demais elementos são a soma dos elementos de índice anterior(i-1) e igual(i) da linha anterior(n-1)
        else{
            lineN.push(triangleLine(n-1)[i-1] + triangleLine(n-1)[i]);
        }
        
    }
    return lineN;
}

function PascalTriangle(n){
    let triangle = [];
    //Pega cada linha da função que retorna a linha n do triangulo
    for(let i = 1; i <= n; i++){
        triangle.push(triangleLine(i));

    }
    return triangle;
}

console.log(PascalTriangle(10));