//Predicción 1: ¿Qué indicará console.log cuando se llame a esta función?


function myBirthYearFunc(){
    console.log("Nací en " + 1980);
   }

console.log(myBirthYearFunc());
//Lo que deberia salir en consola seria "Naci en 1980"   

function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
   }

   //el console.log indicaria que "nací en x" siendo x la edad que se defina cuando se llame la funcion, en caso de no definirse saldra undefined

function add(num1, num2){//num1 = 10 num2 = 20
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);//el console.log indicaria que seria 30

   }
