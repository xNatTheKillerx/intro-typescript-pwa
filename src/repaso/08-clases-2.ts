class table{
    private numero:number;
    public tem:number;
    
    setNumero(a:number){
        this.numero=a;
    }

    getNumero():number{
        return this.numero;
    }
    calcular():void{
        for(let i=1; i<11; ++i){
            console.log(`${this.numero} x ${i} = ${i*this.numero}`);
        }
        /*let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${s*this.numero}`);
            ++s;
        }*/
    }
}

let table1=new table();
table1.setNumero(7);
console.log('Vaiable privada: '+table1.getNumero());

table1.tem=6;
console.log('Vaiable publica: '+table1.tem);
table1.calcular();