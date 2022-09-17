class mul{
    private numero:number;
    private numero1:number;

    private res:number;
    
    setNumero(a:number){
        this.numero=a;
    }

    setNumero1(b:number){
        this.numero1=b;
    }

    getNumero():number{
        return this.numero;
    }

    getNumero1():number{
        return this.numero1;
    }

    public calcular():void{
        
        this.res=0;
        for(let i=1; i<=this.numero1; ++i){
            //this.res=(`${this.numero+this.numero}`);
            console.log(`EL resultado de 4 x 5 es: ${this.res=this.res+this.numero} se sumaron ${i} veces `);
            
        }
    }
    /*public imprimir(){
        console.log(`Salio el valor: ${this.res}`);
    }*/
}

let mul1=new mul();
mul1.setNumero(4);
mul1.setNumero1(5);
//console.log('Resultado de la multiplicacion: '+mul1.getNumero());
//console.log('Resultado de la multiplicacion: '+mul1.getNumero1());
mul1.calcular();
