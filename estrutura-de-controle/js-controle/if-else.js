//If - Else

var condicao = true;

if(condicao) {
    console.log("Entrou no bloco if");
} else {
    console.log("Entrou no bloco else");

}

var texto = "JS";

if (texto == "js") {
    console.log("Texto e igual a js!");
} else if (texto == "Js") {
    console.log("Texto e igual a Js!");
} else if (texto == "JS") {
    console.log("Texto e igual a JS!");
} else {
    console.log("Nao foi encontrado a combinacao!");
}


//-----

condicao = true;
var nome = "paulo";

if (condicao ==  true) {
    console.log("1- Condicao TRUE");
    if (nome == "monica") {
        console.log("Cliente selecionado e a monica");
    } else {
        console.log("Cliente selecionado nao e a monica");        
    }

} else {
    console.log("1- Condicao FALSE");
}

//----

var letra = "a";
var bool = true;


if (letra == "a" && bool == false) {
    console.log("a == a");
} else {
    console.log("Error");
}

if (letra == "a" || bool == false) {
    console.log("a == a");
} else {
    console.log("Error");
}