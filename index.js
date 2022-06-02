let sunombre = prompt ("Ingrese su nombre")
alert("Bienvenido " + sunombre)
alert("Ahora quiero conocer tu edad")
let edad = prompt ("Ingresa tu edad")
alert("Para salir escribe ESC")
alert("vamos a multiplicar y a dividir entonces! " + sunombre)

for (let operacion = 0; operacion < 3; operacion++) {
    
    if(operacion == 1){
        let num1 = prompt("Vamos a multiplicar: Ingrese un numero");
        let num2 = prompt("Ingrese el segundo numero a multiplicar");
        let result = (parseInt(num1) * parseInt(num2));
        alert("El resultado es: " + result);
    }

    else (operacion == 2)
        let num1 = prompt("Vamos a dividir: Ingrese un numero");
        let num2 = prompt("Ingrese el segundo numero a dividir");
        let result = (parseInt(num1) / parseInt(num2));
alert("El resultado es: " + result);
}

alert("Ha sido un gusto! si necesitas continuar pulsa F5")

