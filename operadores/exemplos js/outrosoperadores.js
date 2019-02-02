//typeof

var numero = new String("20");
console.log("Tipo", typeof numero);

//Instanceof
console.log("Instance", numero instanceof String);

//in

var objPessoa = {nome: "Max", teste: true}
console.log("nome in objPessoa ", "nome" in objPessoa );

//delete
delete objPessoa.teste;
console.log("Delete 'teste' ", objPessoa);

//operador de membro '.' e '[]'
console.log("objPessoa.nome", objPessoa.nome);
console.log("objPessoa[nome]", objPessoa["nome"]);

//void
//()

function teste(){
    return 10
}
console.log("teste():", void(teste()));

//new
var stringNome = new String("Max");
var array = new Array();

console.log("new ", stringNome);





