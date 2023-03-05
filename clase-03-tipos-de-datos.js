//Numbers

let edad = 30;
let salario = 1500.5;
const PI = 3.14;

//Notacion cientifica

const numeroGrande = 1e6; // 1 millón
const numeroPequeño = 1e-6; // 0.000001

//=================

//Strings
//Las cadenas de texto (strings) son un tipo de dato que representa una secuencia de caracteres.

const nombre = "Platzi"; //comilla doble
const apellido = "Academy"; //comilla simple

//Concatenar strings

console.log("Hola, " + nombre + " " + apellido + "!"); // "Hola, Platzi Academy!"

//Template literal
//También podemos utilizar la notación template literal para crear strings que incluyen variables y expresiones:

console.log(`Hola, ${nombre} ${apellido}!`); // "Hola, Platzi Academy!"

//=================

//Objetos
//Los objetos son estructuras de datos que nos permiten almacenar un conjunto de pares clave-valor. Estos pares son conocidos como propiedades del objeto. Utilizamos las llaves {}.

const persona = {
    nombre: "Fulanita",
    platziRank: 9567,
    cursoFavorito: {
        nombre: "Básico de JavaScript",
        clases: 30,
        duración: "2 horas",
    },
};

//Para acceder a las propiedades de un objeto, podemos utilizar el operador . o la notación de corchetes [].
console.log(persona.nombre); // "Fulanita"
console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
console.log(persona["platziRank"]); // 9567

//=================

//Booleanos
//Representan un valor verdadero o falso: true o false

let cursoCompletado = true;
let lecturaCompletada = false;

//typeof
typeof "#PlatziChallenge"; // "string"
typeof 30; // number
typeof true; // boolean
typeof {}; // "object"

// 👀 con los arrays nos devuelve que son un objeto
// Más adelante descubriremos la razón
typeof []; // "object"
