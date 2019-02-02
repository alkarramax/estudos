var meta = 10;
var realizado = 12;
var comissao = 0.0;

do {
    
    if (realizado >= meta) {
        console.log("Valor da comissao em: R$", ++comissao)
    } else {
        console.log("Valor da comissao em: R$", comissao += 2)
        break;
    }

} while (comissao < realizado);