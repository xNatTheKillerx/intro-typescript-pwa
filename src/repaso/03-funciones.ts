//si pones : lo que va despues es especificando lo que es la funcion
function nombres():void{
    console.log('nombre');
}
console.log(nombres());

function sumar(num1:number, num2:number):number{
    return num1+num2;
}
//si pones otro dato que no es establecido marca error
console.log(sumar(10,5));

function resta(num1:number, num2:number, num3?:number):number{
    if(num3)
    {
       return num1-num2-num3; 
    }
    else
    {
        return num1-num2;
    }   
}
console.log(resta(10,5));
console.log(resta(10,5, 2));

const sumaFlecha=(a:number,b:number):number=>{
    return a+b;
}

//console.log(sumaFlecha());

interface escuelaAlumno{
    nombre:string;
    email:string;
    edad:number;
    //define un metodo dentro
    saludar:()=>void;
}

function alumnosUTL(alumno:escuelaAlumno,calificar:number):void{
    alumno.nombre='Mario',
    alumno.email='mario@gmail.com';
    alumno.edad=calificar;
}

const nuevoAlumno:escuelaAlumno={
    nombre:'Dario',
    email:'dario@gmail.com',
    edad:23,
    saludar(){
        console.log('Hola Mundo!');
    },
}