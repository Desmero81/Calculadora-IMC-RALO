let numeroDado = 0;
let contador = 1;
let resultado = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Tabla de multiplicar');
    asignarTextoElemento('p','Ingresa cualquier número:');
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('valorUsuario').removeAttribute('disabled'); // Habilitar el input del usuario
}

function numeroUsuario() {
    
    numeroDado = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDado));
    console.log(`"El número de usuario es: ${numeroDado}"`);
    asignarTextoElemento('p',`El número de usuario es: ${numeroDado}`);
    limpiarCaja();
    calcularTabla();
    return (numeroDado);
}

function calcularTabla() {
    while (contador < 11){    
        resultado = numeroDado * contador;
        console.log(`${numeroDado} por ${contador} es igual a ${resultado}`);
        contador++; 
    }
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('valorUsuario').setAttribute('disabled', 'true');
    return(resultado);
}

function reiniciarCalculo() {
    numeroDado = 0;
    contador = 1;
    resultado = 0;
    condicionesIniciales();
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
}

condicionesIniciales();

/*
function inicio() {
    alert('¡Hola Mundo!');
    console.log('¡Hola Mundo!');
    let nombre = prompt('Escribe tu nombre:');
    alert(`¡Hola ${nombre}!`);
    let valorUno = parseInt(prompt('Escribe un número:'));
    console.log(typeof(valorUno));
    resultadoUno = valorUno * 2;
    alert(`${nombre}, el doble de ${valorUno} es ${resultadoUno}.`);
    let valorDos = parseInt(prompt(`${nombre}, vamos a encontrar el promedio de tres números cualesquiera. Escribe el primer número:`));
    console.log(typeof(valorDos));
    let valorTres = parseInt(prompt(`${nombre}, escribe el segundo número:`));
    console.log(typeof(valorTres));
    let valorCuatro = parseInt(prompt(`${nombre}, escribe el tercer número:`));
    console.log(typeof(valorCuatro));
    resultadoDos = (valorDos + valorTres + valorCuatro) / 3;
    alert(`${nombre}, el promedio de los números: ${valorDos}, ${valorTres} y ${valorCuatro} es igual a ${resultadoDos}.`);
    let valorCinco = parseInt(prompt(`${nombre}, vamos a encontrar el mayor de dos números cualesquiera. Escribe el primer número:`));
    console.log(typeof(valorCinco));
    let valorSeis = parseInt(prompt(`${nombre}, escribe el segundo número:`));
    console.log(typeof(valorSeis));
    if (valorCinco > valorSeis) {
        alert(`${nombre}, el número ${valorCinco} es mayor a ${valorSeis}.`);
    } else if (valorCinco < valorSeis) {
        alert(`${nombre}, el número ${valorSeis} es mayor a ${valorCinco}.`);
    } else {
        alert(`${nombre}, ambos números son iguales.`);
    }
    let valorSiete = parseInt(prompt(`${nombre}, escribe cualquier número:`));
    console.log(typeof(valorSiete));
    resultadoTres = valorSiete ** 2;
    alert(`${nombre}, el número ${valorSiete} multiplicado por si mismo es igual a ${resultadoTres}.`);
    return;

    <<button onclick="inicio();" class="container__boton">Nombre</button> <<<<<COLOCAR EN INDEX.HTML PARA EJECUTAR
} */