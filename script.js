function comprobaciones(){
    nombreApellido();
}


function vacio(valor){

if( valor == null) {
return true;
}
}


// var nombre = "";
// var apellido = "";

function nombreApellido(){
// nombre = document.getElementById("nombre").innerText;
// apellido = document.getElementById("apellidos").innerText;
var nombre = document.querySelector("#nombre").value
var apellido = document.querySelector("#apellidos").value
console.log(nombre)
console.log(apellido)
if (vacio(nombre)){
    alert("No puede estar vacio.");
}
if (vacio(apellido)){
    alert("No puede estar vacio.");
}



if(nombre.charAt(0) === nombre.charAt(0).toUpperCase){
    return true;
}else{
    alert("La primera letra tiene que ser mayuscula.");
}
console.log(nombre.charAt(0).toUpperCase)
    


if(apellido.charAt(0) === apellido.charAt(0).toUpperCase){
    return true;
}else{
    alert("La primera letra tiene que ser mayuscula.");
}

}
