var luz1 = false //False es apagado.  0
var luz2 = true // true es prendido.  1



//Hay 3 operadores
//OR
//AND
//NOT, es contrario

//NOT
console.log(!luz1)

//OR (Como si fuera una suma)
if(luz1 || luz2){
  console.log("Si hay una luz prendida")
} else {
  console.log("no hay luces prendidas")
}

//AND (Como si fuera una multiplicación)
if(luz1 && luz2){
 console.log("todas las luces están prendidas")
} else {
console.log("no están prendidas todas las luces")
}



