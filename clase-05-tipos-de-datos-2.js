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
//Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear identificadores únicos. Cada vez que se crea un símbolo, se genera un nuevo identificador único, lo que lo hace ideal para usar como claves de objetos o para identificar elementos de manera única en una aplicación.

const simbolo = Symbol();

let perrito = {
    nombre: "Firulais",
    edad: 3,
    [simbolo]: "Identificador único" };

console.log(perrito[simbolo]); // "Identificador único"

//BigInt (Big interger)
//Los bigint son un nuevo tipo de dato en JavaScript que se usa para representar números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa. Los bigint se escriben con el sufijo n, por ejemplo: 12345678901234567890n.

const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); // 411218936707805260n
