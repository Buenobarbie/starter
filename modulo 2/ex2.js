class Carro {
    constructor(marca , velocidade){
    this.marca = marca;
    this.velocidade = velocidade;
    
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`${this.marca} esá andando a ${this.velocidade} km/h`);
    }

    frear() {
        this.velocidade -= 5;
        console.log(`${this.marca} esá andando a ${this.velocidade} km/h`);
    
    }

    get velocidadeMi() {
        return (this.velocidade / 1.6);
    }

    set velocidadeMi(velMi){
        this.velocidade = velMi * 1.6;
    }
}

let carro1 = new Carro("FORD" , 120);
carro1.acelerar();
carro1.frear();

carro1.velocidadeMi = 60;

console.log(carro1.velocidadeMi);