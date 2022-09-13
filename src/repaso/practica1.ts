interface utlAlumno{
    nombre:string,
    edad:number,
    direccion:{
        calle:string,
        pais:string,
        estado:string,
        numero:number,
    },
    mostrarDireccion:()=>void;
}
    
const pruebaAlumnos:utlAlumno={
    nombre:'Nat',
    edad:22,
    direccion:{
        calle:'veracruz',
        pais:'MX',
        estado:'GTO',
        numero:2621,
    },
    mostrarDireccion(){
        //return this.nombre+','+this.direccion.estado+','+this.direccion.pais;
        console.log("adentro");
        
    }
}
console.table(pruebaAlumnos.nombre);
console.table( pruebaAlumnos.direccion.estado);
console.table( pruebaAlumnos.direccion.pais);