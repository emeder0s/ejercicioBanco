

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