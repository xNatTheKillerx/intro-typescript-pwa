
class formula{
    private a: number =2;
    private b: number=3;
    private c: number=4;

    private res1:number;
    private res2:number;
    

    public imprimir(){
        console.log(`Resultado con menos: ${this.res1}`);
        console.log(`Resultado con mas: ${this.res2}`);
    }
    public resultados(){
        this.menos();
        this.mas();
    }

    private menos(){
        //this.res1=(-this.b-(Math.sqrt(this.b*this.b-(4*this.a*this.c)/2*this.a)));
        this.res1=this.b*this.a
    }

    private mas(){
        this.res2=(-this.b+Math.sqrt(this.b*this.b-(4*this.a*this.c)/2*this.a));
    }
    
}

let total=new formula();
total.imprimir();
total.resultados();
//menos.setNumber=2;
//console.log(menos.getNumber());
//let mas=new formula(2, 3,4);

//menos.imprimir();
//mas.imprimir();