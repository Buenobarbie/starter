class Cliente{
    #nome
    #cpf
    #endereco

    constructor(nome , cpf , endereco){
        this.#nome = nome
        this.#cpf = cpf        
        if (endereco instanceof Endereco)
            this.#endereco = endereco
        else
            console.log("Não é um endereço válido")
   
    }


    getNome(){
        return this.#nome
    }

    getCpf(){
        return this.#cpf
    }

    getEndereco(){
        return this.#endereco
    }

    setNome(nome){
        this.#nome = nome
        
    }

    setCpf(cpf){
        this.#cpf = cpf
    }

    setEndereco(endereco){
        if (endereco instanceof Endereco)
            this.#endereco = endereco
        else
            console.log("Não é um endereço válido")
    }


}

class Endereco{
    construtctor(){

    }
}
