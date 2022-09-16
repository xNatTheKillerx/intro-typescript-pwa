class Persona{
    nombre: string;
    edad: number;

    //esto hace que se requiera campos
    constructor(a:string, b:number){
        this.nombre=a;
        this.edad=b;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
    }
}

let persona1:Persona;
persona1=new Persona('Najimi', 22);
//en vez de hacer en una linea lo hio en 2
let persona2=new Persona('Nox', 27);

persona1.nombre='Nat';
persona1.edad=21;
persona1.imprimir();
persona2.imprimir();

//la interface es como una plantilla

class Dado{
    //las privadas solo se pueden usar dentro de la misma clase
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();