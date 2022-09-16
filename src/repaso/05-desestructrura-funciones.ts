//Desestructuracion de funciones

 export interface Producto{
    desc: string;
    precio: number;
}

const telefono:Producto={
    desc:'Nokia',
    precio: 1200
}

const tablet:Producto={
    desc: 'iPad Air',
    precio: 25000
}

function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+= producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono, tablet];
const totIva=calcularIva(articulos1);
console.log('IVA: ', totIva);

 export function calcularIVA(productos:Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*0.16];
}

const articulos=[tablet, telefono];
const [total, iva]=calcularIVA(articulos);
console.log('Total: ', total);
console.log('Total con IVA: ', iva+total);