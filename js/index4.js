let Producto1;
let Producto2;
let Producto3;
let Producto4;

const precio_Producto1 = 100;
const precio_Producto2 = 200;
const precio_Producto3 = 150;
const precio_Producto4 = 250;




function PedirNombre() {
    let nombre = prompt("Bienvenidos a nuestra Tienda!! Ingresa tu nombre");
    while (nombre === "" && !isNaN(nombre)) {
        nombre = ("Ingrese su nombre");
    }
    alert("Un gusto " + nombre + " por favor ingresa seccion y productos a comprar")
}
PedirNombre();




const Secciones =["Panificados", "Bebidas", "Verduleria","Pastas"];
for (let index = 0; index < 4; index++) {
    alert("Seccion N° " + index + ": " + Secciones[index]);
    
}

alert(Secciones.join ( "\n" ))

function elegirSeccion () {
    let seccion = prompt("Elija una seccion del 0 al 3");
    switch (seccion) {
        case "0":
            alert ("Su eleccion: Panificados")
            break;
        case "1":
            alert  ("Su eleccion: Verduleria")
            break;
        case "2":
            alert("Su eleccion: Bebidas")
            break;
        case "3":
            alert(" Su eleccion: Pastas")
            break;
        default:
            break;
    }
}
elegirSeccion();

class Pedido {
    constructor(){
        this.producto = []
        this.precio = []
        this.total = 0
    }
}


/*agregarProductos(Productos){ this.Productos.push(Pedido)}
obtenerTotal() {
    for (const producto of this.Secciones) {
        this.total = this.total + producto.precio
    }
}
alert(this.total)*/

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






function descuento() {
    let descuento20 = precio_Producto1 - (precio_Producto1 * 0,2);
    let descuento30 = precio_Producto2 - (precio_Producto2 * 0,3);
    let Subtotal_productos = descuento20 + descuento30 + precio_Producto3 + precio_Producto4;
    alert("Ganaste un 20% descuento en el 1er producto: " + "Total $ " +descuento20);
    alert("Te haremos un 30% de descuento en el 2do producto: " + "Total $ " +descuento30);
    alert ("Total a pagar" + " $ "+Subtotal_productos);
    alert ("Te esperamos pronto!")
}
descuento();

