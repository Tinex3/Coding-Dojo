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

var num = 15;
console.log(num);
function logAndReturn(num2){
 console.log(num2);
 return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);



