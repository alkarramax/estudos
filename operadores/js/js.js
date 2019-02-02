var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelected = document.getElementById("estadoSelectBoot");

function selecionarCamposInputText() {
    console.log("TypeOf: " + typeof nomeBootInputText);
    console.log("Object Call: " + Object.prototype.toString.call(nomeBootInputText));
    //alert(nomeBootInputText)

    console.log("Recuperando resultado value: " + nomeBootInputText.value);
    //nomeBootInputText.disabled = true;
    console.log("Disabled: nomeBootInputText.disabled = true;");
    //nomeBootInputText.readOnly = true;
    console.log("readOnly: nomeBootInputText.readOnly = true;");
    console.log("Tag:" + nomeBootInputText.tagName);
    console.log("Tag type:" + nomeBootInputText.type);
}

function selecionarCamposSelect() {
    console.log("Object Call: " + Object.prototype.toString.call(estadoSelected));
    console.log("Recuperando resultado value: " + estadoSelected.value);
    console.log("estadoSelect.selectedIndex: " + estadoSelected.selectedIndex);
    console.log("Tag type:" + estadoSelected.type);
    console.log("TagName: " + estadoSelected.tagName);
}


var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot");


function selecionarCamposCheckbox() {
    console.log("Object type: ", Object.prototype.toString.call(emailPromocionalCheck));
    console.log("Tag name: ", emailPromocionalCheck.type);
    console.log("Tag type: ", emailPromocionalCheck.tagName);
    console.log("Value: ", emailPromocionalCheck.value);
    console.log("Value(Checked)", emailPromocionalCheck.checked);


}

var radio = document.querySelector("[name=formaContatoRadioBoot]");

function selecionarCamposRadio() {
    console.log("Object type: ", Object.prototype.toString.call(radio));
    console.log("Tag name: ", radio.type);
    console.log("Tag type: ", radio.tagName);
    console.log("Value: ", radio.value);
    console.log("Value(Checked)", radio.checked);
}

var radios = document.getElementsByName("formaContatoRadioBoot");

function selecionarCamposRadios() {
    console.log("Object type: ", Object.prototype.toString.call(radios));
    
}

var checkedbox = document.getElementsByClassName("checkbox");

var selects = document.getElementsByTagName("select");

var elementos = document.querySelectorAll("input[type=text]");

var elements = document.querySelectorAll("[name=formaContatoRadioBoot]");

var formulario = document.querySelector("#formBoot");

console.log("Form tipo: ", Object.prototype.toString.call(formBoot));

function exibirDados(elemento) {
    console.log(elemento);
}

var paragrafo = document.createElement("p");
var texto = document.createTextNode("Curso Javascript");

paragrafo.appendChild(texto);

document.body.appendChild(paragrafo);

var formFilhoNome = document.getElementById("nomeBoot");
var formPai = formFilhoNome.parentNode;

formPai.insertBefore(paragrafo, formFilhoNome);

formPai.replaceChild(formFilhoNome, paragrafo);


var paragrafo2 = document.createElement("p");
paragrafo2.innerText = "Teste";
document.body.appendChild(paragrafo2);
