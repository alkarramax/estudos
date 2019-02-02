var cliente = "Pedro";
console.log(window.cliente);
var msgVenda = "Olá" + cliente;
console.log(msgVenda, "Global");

function realizarVenda(item, valor){
    var msgVenda = "Venda realizar com sucesso!";
    console.log(msgVenda, "LOCAL");
    console.log("Cliente: ", cliente);
    console.log("Item: ", item)
    console.log("Valor: ", valor)

    function total(){
        var msgVenda = "Total 6.6";
        console.log(msgVenda, "Escopo function interna!");
    }
    
    total();
}

realizarVenda("Arroz", 3.3);