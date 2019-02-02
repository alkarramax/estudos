var regexpLiteral = /js/; //Literal 
var regexpConstrutor = new RegExp("Testando");

var stringCurso = "Testando cursos - js";




console.log(regexpLiteral.test(stringCurso));
console.log(regexpConstrutor.exec(stringCurso));

