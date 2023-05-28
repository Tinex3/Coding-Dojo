/*Paso 1, crear variable */ 
var alturaNiño = 52;
/* paso 2, se crea la funcion*/
function muestraSiElNiñoPuedeSubirALaMontañaRusa(){
    let altura_minima = 52
    /*paso 3, se hace una comparacion que permita ver si el niño es mas alto o mas bajo
    que cierto nivel de altura usando una variable tipo let para hacer el codigo algo mas escalable y
    sostenible a largo tiempo*/
    if( altura_minima <= alturaNiño ){
        console.log("¡Súbete, chico!");
    }
    else{
        console.log("Lo siento, chico. Tal vez el próximo año")
    }
}
muestraSiElNiñoPuedeSubirALaMontañaRusa()