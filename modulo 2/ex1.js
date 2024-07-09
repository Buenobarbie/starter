const Carro = function(marca, velocidade){
    this.marca = marca;
    this.velocidade = velocidade;


    this.acelerar = function () {
        this.velocidade += 10;
        console.log(this.velocidade);
    }

    this.frear = function() {
        this.velocidade -= 5;
        console.log(this.velocidade);
    }


}

const carro1 = new Carro("BMW" , 120);
const carro2 = new Carro("Mercedes" , 95);
carro2.frear();
carro1.acelerar();