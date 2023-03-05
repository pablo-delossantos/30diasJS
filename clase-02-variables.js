//Function declaration

function suma(a, b) {
    return a + b;
}

let resultado = suma(2, 3);
console.log(resultado); // Imprime 5

//IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida. Esta función es anónima y no se puede reutilizar.

(function () {
    console.log("Soy una IIFE");
})();

//Función expresión: una función que se define como una expresión y puede ser asignada a una variable. Esta función también puede ser llamada y reutilizada.

let saluda = function () {
    console.log("Hola");
};

saluda();

//Arrow function: una función que se define utilizando la sintaxis () =>. Esta función es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.

let saludar = () => console.log("Hola");

saluda();