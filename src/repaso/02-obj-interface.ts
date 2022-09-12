

let amaterno:string|number;

amaterno='Gama';
amaterno=100;

let mascotas =['perro', 'gato', 100, true];
//para que tenga varios tipos de datos y agrega mas variables al arreglo
let tem2:(boolean|number|string)[]=['rata', 100];

tem2.push(200);

//Un arreglo que solo acepta un tipo de dato
let acciones:string[]=['dormir', 'comer', 'volar'];

//una interfaz (es como un molde para poder crear mas objetos, molde base)
interface Alumno{
    matricula:number|string,
    nombre3:string,
    apaterno2:string,
    acciones?:string[],
    email:string;
    //si se coloca signo de ? es porque es opcional
}

//definir un objeto con datos, la interfaz actua como un tipo de dato
const alumno:Alumno={
    matricula:12345,
    nombre3:'Mario',
    apaterno2:'Chavez',
    email:'xxxxx@gmail.com'
}

alumno.nombre3='Dario';

console.table(alumno);

//npm start en la terminal para encender el servidor

/*
    ===== Código de TypeScript =====
*/

