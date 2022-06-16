let precio_Producto1 = 120;
let precio_Producto2 = 110;
let precio_Producto3 = 150;
let precio_Producto4 = 290;

let Productos = []

class Producto {
    constructor(producto, precio){
        this.producto = producto
        this.precio = precio
    }
MostrarProducto(){
}
}

const Producto1 = new Producto ("Papas", 120);
const Producto2 = new Producto("Lechuga", 110);
const Producto3 = new Producto("Pera", 150);
const Producto4 = new Producto("Uva", 300);



Productos.push(Producto1);
Productos.push(Producto2);
Productos.push(Producto3);
Productos.push(Producto4);


class DetalledePedido {
    constructor( producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    calcularSubtotal(){
        let Subtotal = this.producto.precio * this.cantidad;
        return Subtotal;
    }
    MostrarDetalledePedido(){
        let DetalledePedido = this.producto + this.cantidad
    }
}

const DetalledePedido1 = new DetalledePedido(Producto1,1);
const DetalledePedido2 = new DetalledePedido(Producto2,1);
const DetalledePedido3 = new DetalledePedido(Producto3,1);
const DetalledePedido4 = new DetalledePedido(Producto4,1);


/*class Pedido {
    constructor(cliente, detalle){
        this.cliente = cliente;
        this.detalle = detalle;
    }
    calcularTotal(){
        for const DetalledePedido of Subtotal
    }
    MostrarPedido(){}
}

const array = [];
array.push(DetalledePedido1);
array.push(DetalledePedido2);
array.push(DetalledePedido3);
array.push(DetalledePedido4);

const pedido1 = new Pedido(cliente, array);
const pedido2 = new Pedido(cliente, array);
const pedido3 = new Pedido(cliente, array);
const pedido4 = new Pedido(cliente, array);*/


function PedirNombre() {
    let nombre = prompt("Bienvenidos a nuestra Tienda!! Ingresa tu nombre");
    while (nombre === "" && !isNaN(nombre)) {
        nombre = ("Ingrese su nombre");
    }
    alert("Un gusto " + nombre + " por favor ingresa seccion y productos a comprar")
}
PedirNombre();


const Secciones =[" 0) Verduleria", " 1) Bebidas", " 2) Pastas"," 3) Lacteos"];
for (let index = 0; index < 4; index++) {
    alert("Seccion N° " +  ": " + Secciones[index]);
    
}

alert(Secciones.join ( "\n" ))

function elegirSeccion () {
    let seccion = prompt("Elija una seccion del 0 al 3");
    switch (seccion) {
        case "0":
            alert ("Su eleccion: Verduleria")
            break;
        case "1":
            alert  ("Su eleccion: Bebidas")
            break;
        case "2":
            alert("Su eleccion: Pastas")
            break;
        case "3":
            alert(" Su eleccion: Lacteos")
            break;
        default:
            break;
    }
}
elegirSeccion();

function suma() {
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
suma();






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

