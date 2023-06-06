
function validarfor(){

var email = document.getElementById("email").value; 
var nombres = document.getElementsByName("nombres")[0].value;
var doc = document.getElementsByName("documento")[0].value;
var tel = document.getElementsByName("telefono")[0].value;
var acepta = document.getElementsByName("acepta")[0].value;
var sedes = document.getElementsByName("sedes")[0].value;


if ( validaVacio(correo.value) || validaVacio(nombres.value) || validaVacio(doc.value) || validaVacio(tel.value) || validaVacio(acepta.value) || validaVacio(sedes.value)) { 
    alert("Los campos no pueden quedar vacios");
    return false;
}
    return true;
}
