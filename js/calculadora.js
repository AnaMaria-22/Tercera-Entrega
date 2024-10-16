let saludo = "Hola mundo";

console.log(saludo);


// Calculadora - Nivel I

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
        return a / b;
}




// Calculadora - Nivel II

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));


//Punto 1
console.log("-------------- Testeo de funcionalidad / Calculadora --------------");

//Punto 2
console.log("Suma:"+ sumar(numero1, numero2));

//Punto 3
console.log("Multiplicación:"+ multiplicar(numero1, numero2));

//Punto 4
console.log("División:"+ dividir(numero1, numero2));

//Punto 5
console.log("División con cero:"+ dividir(numero1, 0));





// Calculadora - Nivel III

//Punto 1
function numeroCuadrado(a) {
    return a * a;
}

console.log("Número al cuadrado: "+ numeroCuadrado(numero1));


//Punto 2
function promedioDeTresNumeros(sumar, restar, numero3) {
    return (sumar + restar + numero3) / 3;
}

let numero3 = parseFloat(prompt("Ingrese el tercer número: "));

console.log("Número promedio:"+ promedioDeTresNumeros(numero1, numero2, numero3));


//Punto 3
function calcularPorcentaje(porcentaje1, porcentaje2) {
    return (porcentaje1 * porcentaje2) /100;
}

let numPorcentaje1 = parseFloat(prompt("Ingrese el número Total: "));
let numPorcentaje2 = parseFloat(prompt("Ingrese el número del porcentaje: "));

console.log("Número Porcentaje 1: "+ calcularPorcentaje(numPorcentaje1, numPorcentaje2));



//Punto 4
function generadorDePorcentaje(parte, total) {
    return (numPorcentaje2 * 100) / numPorcentaje1;
}

console.log("Número Generador de porcentaje: "+ generadorDePorcentaje(numPorcentaje2, numPorcentaje1));




// Calculadora - Nivel VI

let numeroPar = parseFloat(prompt("Ingrese un número para saber si es par: "));

function verificarNumeroPar(numeroPar) {
    if (numeroPar % 2 === 0) {
        return "El número " + numeroPar + " es par.";
    } else {
        return "El número " + numeroPar + " es impar.";
    }
}

console.log(verificarNumeroPar(numeroPar));