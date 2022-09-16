//Desestructuracion de objetos y arreglos
interface Detalles{
    autor: string;
    anio: number;

}

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles:Detalles;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 60,
    cancion: 'Never gonna give you up',
    detalles:{
        autor:'Rick Astley',
        anio: 1999,
    }
}

//la forma corta para no ponerlo asi
//console.table('The name of the song is: '+reproductor.cancion);

const{cancion,volumen,segundo,detalles}=reproductor;

//console.table('The author of the song is: '+detalles.autor);
const{autor,anio}=detalles;
//con esto se quita destalles.autor y solo se deja autor

console.table(reproductor);
console.table('The name of the song is: '+cancion);
console.table('The volume of the song is: '+volumen);
console.table('The second of the song is: '+segundo);
console.table('The author of the song is: '+autor);

//Para mostrar cosas dentro de un arreglo
const dbz:string[]=['Goku','Vegeta','Krillin','Yamcha'];
console.log('Personaje 1: ',dbz[0]);
console.log('Personaje 2: ',dbz[1]);
console.log('Personaje 3: ',dbz[2]);
console.log('Personaje 4: ',dbz[3]);

//forma corta de lo de arriba
const[p1,p2,p3,p4]=dbz;
console.log('Personaje 1: ',p1);
console.log('Personaje 2: ',p2);
console.log('Personaje 3: ',p3);
console.log('Personaje 4: ',p4);