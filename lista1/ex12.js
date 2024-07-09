let password = "3141"

let guess = prompt("Digite a senha de 4 dígitos: ");
while(password != guess){
    console.log("Senha inválida, tente novamente!");
    guess = prompt("Digite a senha de 4 dígitos: ");
}
console.log("Senha correta");