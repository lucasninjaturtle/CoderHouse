// let nombre = "pepe"
// let nombreCompleto = "El luquitas"
// let array = [1, 2]

// var numero = prompt ('Ingresar un numero: ')

// if (numero>10){
//     alert ('si da');
// }
// else {console.log("errado")}

//alert
//prompt
//confirm = igual a alert, pero da 'Aceptar' o  'Cancelar'
let num = prompt ("Ingrese un numero: ")

if (num > 10000 ){
    alert ('el numero es mayor a mil');
}
else { 
    alert ('el numero no es mayor a mil')
}

let texto = prompt ("Ingrese un texto: ")

if (texto === "Hola" ){
    console.log("el texto es igual a Hola")
}
else {
    console.log ("el texto es dinstito de hola")
}

let num2 = prompt ("Ingrese un numero: ")

if (num >= 10 && num <=50 ){
    alert ('el numero esta entre 10 y 50');
}
else { 
    alert ('el numero esta fuera del rango')
}