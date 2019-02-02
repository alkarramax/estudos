var periodo = "matutino";

var mensagem = periodo == "matutino" ? "Bom dia!" : "Olá"; 
console.log(mensagem);


periodo =  "vespertino";
var mensagem2 = periodo == "matutino" ? "Bom dia!" : (periodo == "vespertino" ? "Boa tarde!" : "Boa noite!"); 
console.log(mensagem2);