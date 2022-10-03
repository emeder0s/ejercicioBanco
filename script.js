function comprobaciones() {
    nombreApellido();
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



