class Semaforo{
    #estado

    constructor(){
        this.#estado = "vermelho"
    }


    getEstado(){
        return this.#estado
    }

    changeEstado(){
        if (this.#estado == "amarelo")
            this.#estado = "vermelho"
        else if (this.#estado == "verde")
            this.#estado = "amarelo"
        else if (this.#estado == "vermelho")
            this.#estado = "verde"
            
    
    }
}

s1 = new Semaforo()
s1.changeEstado()
console.log(s1.getEstado())
s1.changeEstado()
s1.changeEstado()
console.log(s1.getEstado())