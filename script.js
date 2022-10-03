// d. Email: Formato correcto: dirección(puede admitir puntos y guiones bajos)@nombreDominio.RestoDominio. Se trata de un campo obligatorio.

// e. Confirmar email: Mismo formato y además debe coincidir con el rellenado anteriormente, va a servir de usuario en el login. Se trata de un campo obligatorio.


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
    if(email != '' && confirmarEmail != ''){
        revisarEmail();
    }
}

