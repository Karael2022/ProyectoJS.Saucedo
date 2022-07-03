
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
document.body.prepend(subtitulo)*/

/*let listaProductosMenu ="estos son nuestros Productos: "*/


let productos = [
    {id:1, 
    nombre:"Xiaomi Band 6", 
    precio: "5.000",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/174852-800-auto?width=800&height=auto&aspect=true",
    
},
{
    id:2, 
    nombre:"Smartwatch Colmi Sky 5", 
    precio: "14.795",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/214078-800-auto?width=800&height=auto&aspect=true", 
    
},
    {id:3,
    nombre:"Smartwactch Garmin Rose", 
    precio: "234.295",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/214962-800-auto?width=800&height=auto&aspect=true", 
    
},
{
    id:4,
    nombre:"Smartwatch Colmi P28 Plus", 
    precio: "15.095",
    img:"https://stylewatch.vtexassets.com/arquivos/ids/209935-800-auto?width=800&height=auto&aspect=true",
    
},]

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




let carrito;

if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {

    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        const { id, nombre, precio, img } = element
        const card = `
        <div class='card'>
            <p>${nombre}</p>
            <div>
                <img class='imgProducto' src=${img} alt=''/>
            </div>
            <div>
                <p>$${precio.toLocaleString()}</p>
            </div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'>Comprar</button>
            </div>
        </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
}

desplegarProductos()

const btnAgregar = document.getElementsByClassName('btnAgregar')

for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i];
    element.addEventListener('click', agregarAlCarrito)
}


function agregarAlCarrito(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const prodEncontrado = productos.find(prod => prod.id == idBoton)
    const enCarrito = carrito.find(prod => prod.id == prodEncontrado.id)
    if(!enCarrito) {
        carrito.push({...prodEncontrado, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}]
    }
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.length        


/*if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

const body = document.getElementById('carrito');
if(carrito.length == 0){
    const texto = `
    <div class='cartContainer'>
        <h1 class='txtCarrito'>No hay productos en el carrito</h1>
        <a class='btnVolver' href='index.html'>
            <button>VOLVER</button>
        </a>
    </div>`;    
body.innerHTML += texto;
} else {
    const titulo = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>Carrito de compras</h1>
        </div>`;
    body.innerHTML += titulo;
    const table = `
        <div class='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class='txtTabla'>PRODUCTOS</th>
                        <th class='txtTabla'>CANTIDAD</th>
                        <th class='txtTabla'>PRECIO</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalCarrito().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div class='btn-container'>
                <button class='btnTerminar'>TERMINAR COMPRA</button>
            </div>`;
            body.innerHTML += table
            const tbody = document.getElementById('tbody')
            for (let i = 0; i < carrito.length; i++) {
                const element = carrito[i];
                const { id, nombre, img, precio, cantidad } = element;
                const cart = `
                <tr id=${id}>
                    <th><img class='trash' src='./multimedia/trash.png' alt='foto de borrar'></th>
                    <th class='detallesTabla'><img class='producto_imagen' src=${img} alt='foto del producto'><span class='nombreProd'>${nombre}</span></th>
                    <th>${cantidad}</th>
                    <th>$${(cantidad * precio).toLocaleString()}</th>
                </tr>`
                tbody.innerHTML += cart
            }
}                
                
                










































// Busco el contenedor principal
const mainCont = document.querySelector(".cont");

/*for (let producto of productos){
    //Creo mi elemento div, contenedor del producto
    const productoCont = document.createElement('div');
    productoCont.classList.add("producto_cont");

// Creo el titulo
const productoTitle = document.createElement("h2");
productoTitle.classList.add("producto_title");
productoTitle.innerText = producto.nombre;

//CREO LA IMAGEN
const productoImg = document.createElement("img");
//LE DOY LA CLASE Y EL LINK
productoImg.classList.add("producto_img");
productoImg.setAttribute('src',producto.imagen);

// CREO EL APPEND DE LA INFO
productoCont.appendChild(productoTitle);
productoCont.appendChild(productoImg);


// Creo el precio
const productoPrecio = document.createElement("h3");
productoPrecio.classList.add("producto_precio");
productoPrecio.innerHTML = producto.precio;
productoPrecio.innerText = productoPrecio



//HAGO EL APPEND DEL Producto AL CONTENEDOR
mainCont.appendChild(productoCont);
}*/

/*for(let producto of productos){
    mainCont.innerHTML += `
        <div class="producto__cont">
            <h2 class="producto_title">${producto.nombre}</h2>
            <img class="producto_img" src="${producto.imagen}" alt="">
            <h4 class ="producto_precio">${producto.precio}</h4>
            <button class = "boton">Comprar</buttton>
        </div>
    `
}





//Formulario//
//(# para Id - . para clases )
const form = document.querySelector("#formulario");
form.addEventListener("submit",() =>{
})
document.getElementById


/*const listaProductos = [id, nombre,precio]
let listaDeCategorias = prompt("Ingrese Id")
const categoriaDeProducto = productos.find(x => {
    return x.listaDeCategorias == categoriaDeProducto
})*/       

/*let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo");
console.log(div.innerHTML);
console.log(parrafo,innerHTML);*/





/*let card;

for (let index = 0; index < productos.length; index++) {
    card = '<p>Producto1</p>'+' <button>Compral</button>';
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
    contenedor.innerHTML = `<h3> id: ${producto.id}</h3>
                        <p> ${producto.nombre}</p>
                        <b>$${producto.precio}</b>
                        <button>"Comprar"</button>;`

document.body.appendChild(contenedor);
}




//primeros desafios




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
