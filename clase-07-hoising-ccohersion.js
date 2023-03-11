//El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas al comienzo del ámbito actual antes de que cualquier otro código sea ejecutado. Esto significa que las declaraciones de variables y funciones pueden ser utilizadas antes de haber sido declaradas en el código.

console.log(x);
var x = 5;

//JavaScript interpreta este código como si estuviera escrito de la siguiente manera:

var x;
console.log(x);
x = 5;

//Por otro lado, coercion es el proceso en el cual JavaScript intenta convertir automáticamente un valor de un tipo a otro, para que puedan ser comparados o operados. Esto puede dar lugar a algunos resultados inesperados si no se tiene en cuenta.

console.log(1 == "1");

//El resultado sería verdadero, ya que JavaScript intenta convertir el string “1” en el número 1 antes de compararlos.

console.log(true == 1);

//Aquí, el valor booleano true es convertido en el número 1 antes de compararlos, dando como resultado verdadero.
