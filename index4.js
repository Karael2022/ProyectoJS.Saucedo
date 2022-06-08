let Producto1;
let Producto2;
let Producto3;
let Producto4;

const precio_Producto1 = 100;
const precio_Producto2 = 200;
const precio_Producto3 = 150;
const precio_Producto4 = 250;

function PedirNombre() {
    let nombre = prompt("Vamos al super!! Ingresa tu nombre");
    while (nombre === "" && !isNaN(nombre)) {
        nombre = ("Ingrese su nombre");
    }
}
PedirNombre();

function Productos() {
    let Producto1 = prompt("Ingresa 1er producto para comprar " );
    let Producto2 = prompt("Ingresa 2do producto para comprar");
    let Producto3 = prompt("Ingresa 3er producto para comprar");
    let Producto4 = prompt("Ingresa 4to producto para comprar");
        if ((Producto1 != "") && (Producto2 != "") && (Producto3 != "") && (Producto4 != ""))  { 
    let carrito = " 1) "+ Producto1 + " " + ": $" +precio_Producto1+  
                "\n 2) "+ Producto2 + " " + ": $" +precio_Producto2+ 
                "\n 3) "+ Producto3 + " " + ": $" +precio_Producto3+ 
                "\n 4) "+ Producto4 + " " + ": $" +precio_Producto4;
                alert(carrito);
}
        else {
            alert ("Se esta olvidando algun producto");
}
}
Productos();

let descuento20 = precio_Producto1 - (precio_Producto1 * 0,2);
let descuento30 = precio_Producto2 - (precio_Producto2 * 0,3);
alert("Ganaste un 20% descuento en el 1er producto Total $" +descuento20);
alert("Te haremos un 30% de descuento en el 2do producto Total $" +descuento30);

let Subtotal_productos = descuento20 + descuento30 + precio_Producto3 + precio_Producto4;
alert ("Total a pagar" + " $ "+Subtotal_productos);
alert ("Te esperamos pronto!")
