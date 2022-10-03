
// d. Email: Formato correcto: dirección(puede admitir puntos y guiones bajos)@nombreDominio.RestoDominio. Se trata de un campo obligatorio.

// e. Confirmar email: Mismo formato y además debe coincidir con el rellenado anteriormente, va a servir de usuario en el login. Se trata de un campo obligatorio.

class FormularioEmail {
    constructor(email, confirmarEmail) {
        this.email = email;
        this.confirmarEmail = confirmarEmail;

    }
}

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

    let busquedaCOM = email.includes('.com');
    let busquedaEs = email.includes('.es');

    if (busquedaCOM == false && busquedaEs == false || (contadorA > 1 || contadorA == 0)) {
        alert('Por favor, introduzca el formato correcto: \n ejerciciogrupal@correoelectronico.com \n ejerciciogrupal@correoelectronico.es');
    } else if (email != confirmarEmail) {
        alert('Los emails introducidos no coinciden, por favor reviselos');
    } else {
        alert('se ha iniciado sesion correctamente')
    }
}

function crearEmail() {
    valoresEmail();
    if(email != '' || confirmarEmail != ''){
        revisarEmail();
    }
}

=======
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
