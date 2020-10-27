let arraysemana = ['0',"Lunes","Martes","Miercoles","Jueves", "Viernes", "Sabado", "Domingo"]

function diasdelasemana (){
    
    for (let i = 1; i<arraysemana.length; i++){
        if (i === 7){
        alert ("el dia " + arraysemana[i] + " es el Septimo dia")
        }
    }
    
for (let i = 1; i<arraysemana.length; i++){
    if (i % 2 === 0){
        console.log ("el dia " + arraysemana[i] + " es par " );
        continue;
    }
    else {
        console.log ("el dia " + arraysemana[i] + " es Impar " );
    }
}
return arraysemana;
}

//function diasdelasemana2 (){
//alert ("hola")
//}