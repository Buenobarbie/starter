class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

class Cidadao extends Pessoa{
    constructor(nome, cpf){
        super(nome)
        this.cpf = cpf
    }
}

class Cliente extends Cidadao{
    constructor(nome, cpf,login , senha){
        super(nome, cpf)
        this.login = login
        this.senha = senha
    }
}

p1 = new Cliente("jorge" , 4 , 5, 6)
console.log(p1.nome)