
// var num = prompt ("Ingrese un numero");

// alert ("su numero ingresado es " + num);

// var pepe = {
//   edad: 20,
//   peso : "100 kg",
// }

// console.log (pepe);


var string = 'onomatopellamente'

var array = string.split('')
let count = 0;
for (let i=0; i<array.length;i++){
  for (let j = i++; j<array.length; j++){
      if (array[j]===array[i]){
          count++;}
      }
    }
console.log (count)
