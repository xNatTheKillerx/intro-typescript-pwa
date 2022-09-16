import { calcularIVA, Producto } from "./05-desestructrura-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio: 1270
    },
    {
        desc:'Telefono2',
        precio: 1270
    }
];

const [total,iva]=calcularIVA(carrito);
console.log('Total: ',total);
console.log('Total + IVA: ', iva+total);