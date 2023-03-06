//Null

//El valor null es un tipo de dato que representa un valor vacío o nulo. Utilizamos null para representar un valor que aún no ha sido inicializado o para representar un valor que no tiene sentido en el contexto actual.

const nombre = null;
console.log(nombre); // imprime "null"

//Undefined
//El valor undefined es un tipo de dato que representa un valor que aún no ha sido asignado o que no tiene un valor válido.

let apellido;
console.log(apellido); // imprime "undefined"

//Diferencias entre Null y Undefined
//Es importante tener en cuenta que null y undefined son valores diferentes en JavaScript. null representa un valor intencionalmente vacío, mientras que undefined representa un valor que aún no ha sido asignado o que no tiene un valor válido.

let gatito = {
    nombre: "Michi",
    edad: 3,
    dueño: null,
};

console.log(gatito.dueño); // "null"

let gato;
console.log(gato); // "undefined"

//Symbol
//Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear identificadores únicos.
