
/* la idea es hacer un cotizador para vehiculos*/

/* Inicio declaracion de variables*/

const modeloAuto1 =2009;
let modeloAuto = Number  (prompt("Bienvenido/a al cotizador de seguros Kagler, ingresa el año de patentamiento de tu vehiculo"));

/* Fin declaracion de variables*/

/* Inicio ciclos*/

for (let i = 1; i <= 3; i++) {
alert("año de patentamiento " + modeloAuto);
console.log("año de patentamiento " + modeloAuto);


if (modeloAuto <= modeloAuto1) {
alert("Por el momento podemos ofrecerte polizas para vehiculos 2010 en adelante, te pedimos disculpas");
alert("Dale enter hasta regresar al inicio y recarga la pagina");


} else if (modeloAuto >= modeloAuto1) {
alert("Tu poliza anual, segun el año de tu vehiculo es de $60.000 pesos");
}
}

console.log("Gracias por elegirnos!");









