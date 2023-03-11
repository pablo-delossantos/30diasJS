//En JavaScript no todas las variables son iguales y es importante entender cómo funciona el alcance de las variables.

//En este lenguaje existen dos tipos de scope (alcance) de variables: global y local.

//Las variables declaradas fuera de cualquier función tienen alcance global, lo que significa que pueden ser accedidas y modificadas desde cualquier parte del código. Por otro lado, las variables declaradas dentro de una función tienen alcance local, lo que significa que solo pueden ser accedidas y modificadas dentro de esa función.

function miFuncion() {
    console.log(x);
    var x = 10;
}

miFuncion();

//Javascript movería la declaración de x al inicio de miFuncion, lo que significa que la línea console.log(x) daría como resultado “undefined”, ya que x aún no ha sido inicializada en ese momento.
