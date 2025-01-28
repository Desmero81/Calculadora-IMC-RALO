let estatura = 0;
let peso = 0;
let iMc = 0;
let iMc2 = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Calculadora de IMC');
    asignarTextoElemento('p','Ingresa tu estatura en cm y tu peso en kg');
    document.getElementById('estatura').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}

function estaturaUsuario() {
    
    let estatura1 = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(`"La estatura del usuario es igual a ${estatura1} cm"`);

    estatura = estatura1 / 100;

    console.log(estatura);
    
    document.querySelector('#estatura').setAttribute('disabled','true');

    limpiarCaja();

    document.getElementById('peso').removeAttribute('disabled');

    return (estatura);
}

function pesoUsuario() {
    
    let peso1 = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(`"El peso del usuario es igual a ${peso1} kg"`);

    peso = peso1;

    console.log(peso);

    document.querySelector('#peso').setAttribute('disabled','true');

    limpiarCaja();
    calcularIMC();

    return (peso);
}

function calcularIMC() {
    iMc = parseFloat(peso / (estatura ** 2));
    let iMc2 = iMc.toFixed(4);
    console.log(iMc2);
    asignarTextoElemento('p',`Tu IMC es igual a: ${iMc2}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    return(iMc);
}

function reiniciarCalculo() {
    condicionesIniciales();
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
}

condicionesIniciales();