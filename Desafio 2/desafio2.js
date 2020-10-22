let num = prompt ("Ingrese un numero: ")

if (num > 1000 ){
    alert ('el numero es mayor a mil');
}
else { 
    alert ('el numero no es mayor a mil')
}

let texto = prompt ("Ingrese un texto: ")

if (texto === "hola" || texto === "Hola" ){
    console.log("el texto es igual a Hola")
}
else {
    console.log ("el texto es dinstito de hola")
}

let num2 = prompt ("Ingrese un numero: ")

if (num2 >= 10 && num2 <=50 ){
    alert ('el numero esta entre 10 y 50');
}
else { 
    alert ('el numero esta fuera del rango')
}