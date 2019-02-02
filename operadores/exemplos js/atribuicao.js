//operador "="
var numero = 10;
var numero2 = 1;
var nome = "Moon";
var verdadeiro = true;

numero = numero = numero2;
//console.log(numero);

//Operador +=

var numero3 = 10;
//numero3 =  numero3 + 1;
//numero3 += 1
numero3 += 20
//console.log(numero3);
nome += "Silva"
//console.log("Nome completo: ", nome);
nome += true;
//console.log("Nome completo: ", nome);
numero3 += true;
//console.log("Numero3: ", numero3);

//Operador -=
var sub = 30;
sub -= 20;
//console.log("sub -= 20 = ", sub);

//Operador *=
var multi = 2;
multi *= 2;
//console.log("multi *= 2 = ", multi);

//Operador /=
var div = 5;
div /= 2;
//console.log("div /= 2 =",div);

//Operador %=
var mod = 9;
mod %= 2;
//console.log("mod %= 2 =", mod);

//Operador **=
var exp = 3;
exp **= 3;
//console.log("exp **= 3 =", exp);

//operador <<== left shit
console.log("##############################################")
var num1 = 320;
console.log("1 - num1 em base10: ", num1);
console.log("2 - num1 em base2: ", num1.toString(2));
num1 <<= 8;
console.log("3 - num1 em base2: ", num1.toString(2));
console.log("4 - num1 em base10: ", num1);

//operador >>== right shit
console.log("##############################################")
var num2 = 320;
console.log("1 - num2 em base10: ", num2);
console.log("2 - num2 em base2: ", num2.toString(2));
num2 >>= 7;
console.log("3 - num2 em base2: ", num2.toString(2));
console.log("4 - num2 em base10: ", num2);

//operador >>>== right shit sem sinal
console.log("##############################################")
var num3 = -320;
console.log("1 - num3 em base10: ", num3);
console.log("2 - num3 em base2: ", num3.toString(2));
num3 >>>= 7;
console.log("3 - num3 em base2: ", num3.toString(2));
console.log("4 - num3 em base10: ", num3);
