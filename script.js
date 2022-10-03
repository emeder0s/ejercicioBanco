//comprobaciones intereses
function separarIntereses(sentence){
    var i = 0;
    var words = 0;
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

function comprobaciones(){
    if (intereses() ==0){
        alert("Ningún intererés es correcto");
    }
    if (!password()){
        alert("La contraseña no cumple con los requisitios de seguridad");
    }
    
}