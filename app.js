let numeroSecreto = 0;
let listaNumerosSorteados =[];
let intentos = 0;
let numeroMax =10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // obtener desde el ID, necesitamos el .value o valor.
    //numerosIngresados[intentos-1]=numeroDeUsuario;
    //console.log(numerosIngresados[intentos-1]);
    //typeof('variable'); retorna el tipo del valor
    if (numeroDeUsuario === numeroSecreto) {// el triple igual; igual en valor y en el tipo de dato.
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        console.log('Acertaste el número!');
        document.getElementById('reiniciar').removeAttribute('disabled'); // remover le inhabilitado del boton nuevo juego
        //console.log(numerosIngresados.length);
    } else{
        // el usuario no acertó
        limpiarCaja();
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p',"el numero secreto es menor");
        }else{
            asignarTextoElemento('p',"el numero secreto es mayor");
        }
        intentos++;
    }
    return;
}

function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = "";
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //ya sorteamos todos los números?
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','ya fueron sorteados todos los númros posibles');

    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
           return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();

//agregar a la lista nombreLista.push(elemento_agregado);

//Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos
/*
function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);

//**************CÓDIGO COMPLETO**************************

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
*/

//**************DESAFIOS**************************
/*
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);

  */