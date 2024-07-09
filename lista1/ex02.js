const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

// Dados da Luciana
console.log(alunos[3]);

//Idade de Letícia
console.log(alunos[1][1]);

//Modificando o curso de Pedro
alunos[2][3] = "Data Science";