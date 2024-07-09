function triangle(size){
    for(let i = 0; i < size; i++){
        console.log(" ".repeat(size - 1 - i) + "*".repeat(1 + 2*i) + " ".repeat(size - 1 - i));
    }

    return triangle;

}

triangle(8)
