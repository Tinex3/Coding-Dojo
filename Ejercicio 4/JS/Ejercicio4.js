/* Codigo 1*/
function hello() {
    console.log('hello');//se imprime en consola la cadena "hello"
   }
   hello(); //se llama la funcion hello
   console.log('Dojo');//se escribe la cadena "Dojo" posterior a la cadena "hello"

/* Codigo 2 */
function hello() {
    console.log('hello');// al llamar la funcion hello se escribe en consola la cadena "hello"
    return 15;//se retorna el valor "15" a result 
   }
   var result = hello(); //decimos que result es igual al retorno de hello
   console.log('result is', result);//se escribe "result is 15" ya que result es equivalente al return de la funcion hello

   /*Codigo 3 */
   function numPlus(num) {
    console.log('num is', num);//re imprime en consola "num is 3", siendo el valor inial el valor de num
    return num+15;//se retorna como variable la suma de num + 15,
   }
   var result = numPlus(3);/*se llama a la funcion numPlus para que el return le ingrese un valor a 
   result, ademas, se agrega que la funcion debe tener como valor inicial 3.
   ademas el valor que resulta aqui es el valor de 18*/
   console.log('result is', result);/* se imprime en consola el valor de*/

//codigo 4

var num = 15; // iniciamos una variable con el valor de 15
console.log(num); //imprimimos el valor de num  (15)
function logAndReturn(num2){
 console.log(num2); //Se imprime el valor de num2
 return num2;//se retorna el valor 
}
var result = logAndReturn(10);//llamamos a la funcion logAndReturn 
console.log(result); // se imprime en consola el valor de result (10)
console.log(num);//se imprime en consola el valor de num(15)

//codigo 5

var num = 15;
console.log(num);//se imprime en consola el valor de 15
function timesTwo(num2){
 console.log(num2);//se imprime el valor inicial que hace result (equivalente a 10)
 return num2*2; //retorna el valor inicial de 10 multiplicado por 2, quedando en 20
}
var result = timesTwo(10)//se llama a la funcion timesTwo con el valor inicial de 10;
console.log(result);//imprime el valor de 20
console.log(num);//imprime el valor de 15

//codigo 6

function timesTwoAgain(num) {
    console.log('num is', num);//en el primer llamado se escribe "num is 3", en el segundo "num is 5"
    var y = num*2;//se multiplica el valor de num y se guarda en y, en el primer caso quedaria 3*2 y en el segundo 5*2
    return y;//se devuelve el valor de y como resultado de la funcion
   }
   var result = timesTwoAgain(3) + timesTwoAgain(5); // hace el llamado dos veces a la funciom timeTwoAgain, la primera con el valor de 3 y la segunda con el valor de 5;
   console.log('result is', result);//se imprime en consola "result is 16"


//codigo 7
function sumNums(num1, num2) {
    return num1+num2;
   }

console.log(sumNums(2,3))//se llama a la funcion sumnum y se suman nmr1 y nmr2(5) 
console.log(sumNums(3,5))//se llama a la funcion sumnum y se suman nuevamente num1 y num2 (8 )

//codigo 8
function printSumNums(num1, num2) {
    console.log(num1);//imprime el primer valor del primer llamado y el segundo del segundo llamado
    return num1+num2;//retorna la suma de los numeros de cada llamado a la funcion
   }
   console.log(printSumNums(2,3))//llama a la funcion para imprimir el valor de return con los valores 2,3
   console.log(printSumNums(3,5))//imprime en consola el valor del del return de la funcion
//codigo 9

function sumNums(num1, num2) {
    var sum = num1 + num2; //suma los dos valores que se entregan a la funcion
    console.log('sum is', sum); // imprime en consola "sum is el valor de la suma"
    return sum; //retorna el valor de sum 
   }
   var result = sumNums(2,3) + sumNums(3,5);//asigna el valor de result como la suma de los return de la funcion sumNums
   console.log('result is', result);//se imprime en consola "result is 13" 

   //codigo 10
   function sumNums(num1, num2) {
    var sum = num1 + num2;//realiza la suma de num1 y num2
    console.log('sum is', sum);//imprime en pantalla reiterada veces "sum is ...""
    return sum;//retorna sum
   }
   var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3)); /*se llama a la funcion
   retirada veces cb¿on diversos valores para sumarlos entre si*/
   console.log('result is', result); //consola imprime el valor de "result is 19"