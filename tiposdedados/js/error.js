console.log("Linha 1");
//throw new Error("Ocorreu um erro na aplicacao!");
console.log("Linha 2");

try {
    console.log(soma(10,new Array(10)));

} catch (error) {
    //console.log(error);
    console.log(error.name);
    console.log(error.message);
    
}finally{
    console.log("Sempre sera executado!")
}

function soma(a, b){
    return a / b 
}