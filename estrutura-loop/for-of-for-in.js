// FOR IN
var objCliente = {nome: "Monica", idade: 23, dataNasc: new Date("1999-08-19")}; 

for(var i in objCliente){
   // console.log("Resultado: ", i);
    //console.log("Valores: ", objCliente[i]);
}


var array = [`a`, `b`, `c`, 1, 2, 3];

for(var i in array){
    //console.log("Resultado", array[i]);
}

// FOR OF
for(var i of array){
    console.log("Resultado:", i);
}