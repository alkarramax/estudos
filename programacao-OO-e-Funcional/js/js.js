// Function Funcional
function teste(){
    console.log("Testando function funcional");
}
teste();

//POO - Programação Orientada a Objeto

var objAluno = {
    nome: "Max",
    curso: "Curso JavaScript",
    mistrarAula: function(){
        console.log("Ministrando aula de javaScript");
    }

};

console.log("Objeto Aluno");
console.log(objAluno);

console.log("Acessando propriedades do objeto: objAluno.nome ");
console.log(objAluno.nome);
console.log(objAluno.curso);

console.log("Chamando o método do objeto: objAluno.mistrarAula()");
objAluno.mistrarAula();