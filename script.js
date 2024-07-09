class Pilha{
    constructor(){
        this.pilha = [];
        this.count = 0;

    }

    push(item){
        this.pilha.push(item);
        this.count++;
    }

    getLength(){
        return this.count;
    }

    pop(){
        this.count--;
        return this.pilha.pop();
        
       
    }

    reverse(){
        let temp = [];
        for(let i = 0 ; i < this.count ; i++){
            temp.push(this.pilha.pop());
        }
        this.pilha = temp;
    }
}

class Fila{
    constructor(){
        this.fila = [];
        this.count = 0;

    }

    push(item){
        this.fila.push(item);
        this.count++;
    }

    getLength(){
        return this.count;
    }

    pop(){
        this.count--;
        return this.fila.shift();
       
    }
}

p1 = new Fila()
p1.push(1);
p1.push(2);
p1.push(3)
p1.pop();
console.log(p1.fila);

