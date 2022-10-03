


function direccion() {
    console.log("estoy dentro")
    var dir = document.getElementById("direccion").value
    var arrayDir = separarDireccion(dir)
    if (dir.length == 0) {
        alert("La direccción es una campo obligatorio")
    }else if(arrayDir.length != 7){
        alert("La direccción está incompleta")
    } else {
        var tipCalle = tipoCalle(arrayDir[0])
        console.log(arrayDir[4])
        var codPostal = codigoPostal(arrayDir[4])
        if (tipCalle && codPostal) {
            alert("La dirección está bien")
        } else {
            alert("La dirección está mal")
        }
    }


}


function tipoCalle(calle) {
    var validation = false
    switch (calle) {
        case "avenida":
            validation = true
            break;
        case "calle":
            validation = true
            break;
        case "paseo":
            validation = true
            break;
        default:

    }
    return validation
}


function esNumero(letra) {
    return letra >= 48 && letra <= 57;
}

function codigoPostal(codigo) {
    var i = 0;
    var validation = true;

    if (codigo.length == 5) {
        while (i < codigo.length && validation) {
            validation = esNumero(codigo.charCodeAt(i))
            i++

        }
    } else {
        validation = false;
    }
    return validation

}








function separarDireccion(sentence) {

    var i = 0;
    var sentenceArray = [];
    var word = "";

    while (i < sentence.length) {
        if (sentence[i] != ",") {
            word = word + sentence[i];
        }
        if (word.length > 0 && sentence[i] == "," || i == sentence.length - 1) {
            sentenceArray.push(word);
            word = "";
        }
        i++;
    }
    return sentenceArray;

}




function cogeNumero(dni) {
    var num = ""
    for (let i = 0; i <= dni.length - 2; i++) {
        num = num + dni[i];

    }
    return num
}



function joinCasero(letras) {
    var cadena = ""
    for (let i = 0; i < letras.length; i++) {
        cadena = cadena + letras[i];

    }
    return cadena
}



function dni() {

    var dni = document.getElementById("dni").value
    var letra = dni[dni.length - 1].toUpperCase()
    var numero = cogeNumero(dni);

    if (numero > "99999999") {
        //Si el número es mayor se le indica al usuario que es un dni incorrecto
        alert("El DNI introducido es incorrecto")
    }
    else {

        var resto = numero % 23;
        var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];


        letras = joinCasero(letras);// Ponemos join para que nos junte todos los elementos del array y pueda buscar la posición,que es el resto de la operación.


        var conjunto = letras.charAt(resto);//Conversión de letra en una cadena string para que confirme que la letra es la correcta.


        if (letra == conjunto) {

            alert("El dni es correcto");
        }
        else {
            alert("El dni es incorrecto");
        }


    }


}

//comprobaciones intereses
function separarIntereses(sentence){
    var i = 0;
    var sentenceArray = [];
    var word = "";

    while(i<sentence.length){
        if (sentence[i] != ","){
            word = word + sentence[i];
        }
        if (word.length>0 && sentence[i] == "," || i == sentence.length-1){
            sentenceArray.push(word);
            word = "";
        }
         i++;
    } 
    return sentenceArray;
}

function stripCasero(interes){
    var cadena = "";
    if(interes[0]==" "){
        for(let i=1; i<interes.length;i++){
            cadena += interes[i];
        }
    }else{
        cadena = interes;
    }
    
    return cadena
}

function intereses(){
    var intereses = separarIntereses(document.querySelector("#intereses").value);
    var interesesCorrectos = [];
    for(let i=0; i<intereses.length;i++){
        var interes = stripCasero(intereses[i]);
        switch(interes){
            case "mercado inmobilario":
                interesesCorrectos.push(interes);
                break;
            case "bolsa":
                interesesCorrectos.push(interes);
                break;
            case "bienes estatales":
                interesesCorrectos.push(interes);
                break;
            default:
        }
    }
    
    return interesesCorrectos.length != 0;
}

//comprobaciones contraseña
function longitudPassword(password){
    return password.length >= 8 && password.length <= 20
}

function esMayuscula(letra)
{
    return letra >= 65 && letra <= 90;
}

function mayusculas(password){
    var i = 0;
    var validation = false;
    while(i<password.length && !validation){
        validation = esMayuscula(password.charCodeAt(i));
        i++;
    }

    return validation;
}

function esMinuscula(letra)
{
    return letra >= 97 && letra <= 122;
}

function minusculas(password){
    var i = 0;
    var validation = false;
    while(i<password.length && !validation){
        validation = esMinuscula(password.charCodeAt(i));
        i++;
    }

    return validation;
}

function esNumero(letra){
    return letra >= 48 && letra <= 57;
}

function dosNumeros(password){
    var num = [];
    for(let i=0;i<password.length; i++){
        if(esNumero(password.charCodeAt(i))){
            num.push(password[i]);
        }
    }
    return num.length >=2;
}

function esCaracterEspecial(letra){
    return (letra >= 33 && letra <= 47) || (letra >= 58 && letra <= 64);
}

function caracteresEspeciales(password){
    var i = 0;
    var validation = false;
    while(i<password.length && !validation){
        validation = esCaracterEspecial(password.charCodeAt(i));
        i++;
    }

    return validation;

}

function password(){
    var password = document.querySelector("#password").value;
    var longPassword = longitudPassword(password);
    var tieneMayus = mayusculas(password);
    var tieneMinus = minusculas(password);
    var tieneNums = dosNumeros(password);
    var caracEspeciales = caracteresEspeciales(password);

    return longPassword && tieneNums && tieneMayus && tieneMinus && caracEspeciales;
}


// d. Email: Formato correcto: dirección(puede admitir puntos y guiones bajos)@nombreDominio.RestoDominio. Se trata de un campo obligatorio.

// e. Confirmar email: Mismo formato y además debe coincidir con el rellenado anteriormente, va a servir de usuario en el login. Se trata de un campo obligatorio.

var email = '';
var confirmarEmail = '';

function valoresEmail() {
    email = document.querySelector('#email').value;
    confirmarEmail = document.querySelector('#confirmar-email').value;

    if (email == '' || confirmarEmail == '') {
        alert('Es obligatorio introducir un email');
    }
}


function revisarEmail() {
    let contadorA = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            contadorA++;
        }
    }

    //let busquedaCOM = email.includes('.com');
    //let busquedaEs = email.includes('.es');

    if (contadorA > 1 || contadorA == 0) {
        alert('Por favor, introduzca el formato correcto: \n ejerciciogrupal@correoelectronico.com \n ejerciciogrupal@correoelectronico.es');
    } else if (email != confirmarEmail) {
        alert('Los emails introducidos no coinciden, por favor reviselos');
    } 
}

function crearEmail() {
    valoresEmail();
}

function comprobaciones() {
    nombreApellido();
    if (intereses() ==0){
        alert("Ningún intererés es correcto");
    }
    if (!password()){
        alert("La contraseña no cumple con los requisitios de seguridad");
    }
    if(email != '' || confirmarEmail != ''){
        revisarEmail();
    }
}


function vacio(valor) {
    if (valor == null) {
        return true;
    }
}

function soloLetras(valor) {
    var num = [];
    for (let i = 0; i < valor.length; i++) {
        if (esNumero(valor.charCodeAt(i))) {
            num.push(valor[i]);
        }
    }
    return num.length != 0;
}
function esNumero(letra){
    return letra >= 48 && letra <= 57;
}


// var nombre = "";
// var apellido = "";

function nombreApellido() {
    // nombre = document.getElementById("nombre").innerText;
    // apellido = document.getElementById("apellidos").innerText;
    var nombre = document.querySelector("#nombre").value
    var apellido = document.querySelector("#apellidos").value

    if (vacio(nombre)) {
        alert("No puede estar vacio.");
    }
    if (vacio(apellido)) {
        alert("No puede estar vacio.");
    }
    if (soloLetras(nombre)) {
        alert("No puede contener numeros");
    }
    if (soloLetras(apellido)) {
        alert("No puede contener numeros.");
    }



    if (nombre.charAt(0) === nombre.charAt(0).toUpperCase()) {
        return true;
    } else {
        alert("La primera letra del nombre tiene que ser mayuscula.");
    }
    console.log(nombre.charAt(0).toUpperCase())



    if (apellido.charAt(0) === apellido.charAt(0).toUpperCase()) {
        return true;
    } else {
        alert("La primera letra del apellido tiene que ser mayuscula.");
    }

}

function enviar(){
    intereses();
    password();
    crearEmail();
    comprobaciones();
}
//Fusionado

