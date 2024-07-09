class Armadura{
    #defesa
    #peso
    #valor

    constructor(defesa , peso , valor){
        this.#defesa = defesa
        this.#peso = peso
        this.#valor = valor
    }


    
    getDefesa(){
        return this.#defesa
    }

    getPeso(){
        return this.#peso
    }

    getValor(){
        return this.#valor
    }

    setDefesa(defesa){
        this.#defesa = defesa
    }

    setPeso(peso){
        this.#peso = peso
    }

    setValor(valor){
        this.#valor = valor
    }
}

p1 = new Armadura (10 , 58 , 7)
console.log(p1.getDefesa())