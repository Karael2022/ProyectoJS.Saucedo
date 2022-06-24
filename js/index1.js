
//Declaro el objeto// 

/*const producto ={
    categoria: "Para compartir",
    nombre: "Duo box",
    precio: 1000,
    stock:100,
}*/
//Creo la funcion constructora. This asigna los valores//

/*class Producto {
    constructor(categoria, nombre, precio, stock) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    /*this.modificarStock = (nuevoStock) => {
        this.stock = nuevoStock;
    }*/
    /*this.sumarIvaprecio = () => {
        this.precioDelProducto = this.precioDelProducto + (this.precioDelProducto * 0,21);
    }*/
    /*this.mostrarMensaje = () => {
        alert("El producto: " +this.nombre + " tiene el precio: $"+ this.precio)
    }
    }
    }


/*producto.modificarStock(nuevoStock=100);*/

// los atributos del obj se modifican desde el obj no invividualmente//
//sumo nuevos productos al objeto//
//const producto = new Producto ("Individuales", "Pop", 500, 10);
//producto.mostrarMensaje();

/*const nombreCategoria = prompt("Ingrese nombre de la categoria:");
const nombreDelProducto = prompt("Ingrese nombre del producto");
const precioDelProducto = parseInt(prompt("Ingrese precio del producto:"));
const nuevoStock = parseInt(prompt( "Ingrese nuevo stock"));

const producto = new Producto({nombreCategoria,nombreDelProducto,precioDelProducto,nuevoStock});
//asi obtengo cada dato desde un ingreso de promt//*/


/*alert("La categoria elegida es: " +nombreCategoria  + "\n" + "Su producto es: "+nombreDelProducto + "\n" + "El precio es: "+precioDelProducto + "\n" + "Tiene un stock de: "+nuevoStock);*/

//para devolucion de numero debe ir el parseInt. En caso de pedir string va sin el parseInt//
/*alert("El stock actual es: " + producto.stock)
const nuevoStock = parseInt(prompt( "Ingrese nuevo stock"));
producto.stock = nuevoStock;
alert("El nuevo stock es: " + producto.stock)*/


//Utilizando DOM //
//al colocar un id al h1 puedo modificar mi titulo
/*let titulo = document.getElementById("titulo")
titulo.innerText = " Los mejores productos"*/
/*document.body.innerHTML = "<p>Producto1</p> <button>Comprar</button>" */

/*let subtitulo = document.createElement("h4")
subtitulo.innerText = "Bienvenidos....."
document.body.prepend(subtitulo)

/*let listaProductosMenu ="estos son nuestros Productos: "*/

/*const pjs = [
    {id:1, 
    nombre:"Xiaomi Band 6", 
    precio: 5.000,
    imagen:"https://stylewatch.vtexassets.com/arquivos/ids/174852-800-auto?width=800&height=auto&aspect=true",
    button:"Comprar",
},
{
    id:2, 
    nombre:"Samsung Wach 4", 
    precio: 40.000,
    imagen:"https://stylewatch.vtexassets.com/arquivos/ids/214962-800-auto?width=800&height=auto&aspect=true", 
    button:"Comprar",
},
    {id:3,
    nombre:"Smartwactch Garmin Rose", 
    precio: 234.295,
    imagen:"https://stylewatch.vtexassets.com/arquivos/ids/214962-800-auto?width=800&height=auto&aspect=true", 
    button:"Comprar",
}];
/*{
    id:4,
    nombre:"Smartwact Garmin Solar", 
    precio: 234.295,
    imagen:"https://stylewatch.vtexassets.com/arquivos/ids/214960-500-auto?v=637902012625330000&width=500&height=auto&aspect=true",
    button:"Comprar",
}
]
    /*{
    id:5, 
    nombre: "Comlmi 2", 
    precio:15000,
    imagen:"https://www.stylestore.com.ar/reloj-garmin-vivoactive-4s-100217202/p"
    },] /*
                {id:6, nombre: "Comlmi 2", precio:15000},
                {id:7, nombre: "Comlmi 2", precio:15000},
                {id:8, nombre: "Comlmi 2", precio:15000},
                {id:9, nombre: "Comlmi 2", precio:15000},
                {id:10, nombre: "Comlmi 2", precio:15000},
                {id:11, nombre: "Comlmi 2", precio:15000},
                {id:12, nombre: "Comlmi 2", precio:15000},
                {id:13, nombre: "Comlmi 2", precio:15000},
                {id:14, nombre: "Comlmi 2", precio:15000},
                {id:15, nombre: "Comlmi 2", precio:15000},
                {id:16, nombre: "Comlmi 2", precio:15000},
                {id:17, nombre: "Comlmi 2", precio:15000},
                {id:18, nombre: "Comlmi 2", precio:15000}];*/

// Busco el contenedor principal
const mainCont = document.querySelector(".cont");

for (let p of pjs){
    //Creo mi elemento div, contenedor del producto
    const pjCont = document.createElement('div');
    pjCont.classList.add("pj_cont");

// Creo el titulo
const pjTitle = document.createElement("h2");
pjTitle.classList.add("pj_title");
pjTitle.innerText = p.nombre;

//CREO LA IMAGEN
const pjImg = document.createElement("img");
//LE DOY LA CLASE Y EL LINK
pjImg.classList.add("pj_img");
pjImg.setAttribute('src',p.imagen);

// CREO EL APPEND DE LA INFO
pjCont.appendChild(pjTitle);
pjCont.appendChild(pjImg);



//HAGO EL APPEND DEL PERSONAJE AL CONTENEDOR
mainCont.appendChild(pjCont);
}



//Formulario//
//(# para Id - . para clases )
const form = document.querySelector("#formulario");
form.addEventListener("submit",() =>{
})



/*const listaProductos = [id, nombre,precio]
let listaDeCategorias = prompt("Ingrese Id")
const categoriaDeProducto = productos.find(x => {
    return x.listaDeCategorias == categoriaDeProducto
})*/       







/*let card;

for (let index = 0; index < productos.length; index++) {
    card = '<p>Producto1</p>'+' <button>Comprar</button>';
}
document.body.innerHTML = card



/*let cart = []*/



/*function MostrarProducto() {
    productos.forEach(producto) ;{
        let card = document.createElement("div")
        showAllProductos.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", producto.img)
        let nombre = document.createElement("h3")
        nombre.innerText = (producto.nombre)
        let precio = document.createElement("p")
        precio.innerText = (producto.precio)
        let buyButton = document.createElement("button")
        buyButton.innerText("Comprar")
        card.append(img,nombre,precio,buyButton)
    }
    showAllProductos();
}
MostrarProducto();*/


//2da forma de hacerlo//                
/*for (const producto of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = <h3>" id: ${producto.id}</h3>"
                        <p>"  ${producto.nombre}</p>"
                        <b>"$${producto.precio}</b>";
document.body.appendChild(contenedor);
}*/
























/*function PedirNombre() {
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
elegirSeccion();*/
