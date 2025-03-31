//Ejercicio 1
console.log("Hola Tizi")
console.log("------------------------------------------------------------")
//Ejercicio 2
let arrar = [1, 2, 3];
 console.log(arrar[2])

 console.log("------------------------------------------------------------")
//Ejercicio 3
 const mostrarArray = (pos) =>{
    console.log(arrar[pos])
 }

 mostrarArray(1);

 console.log("------------------------------------------------------------")
//Ejercicio 4
 let agregado = 4
 arrar.push(agregado)

 arrar.forEach(element => {
    console.log(element)
 });

 console.log(arrar.lastIndexOf(4))

 console.log("------------------------------------------------------------")
//Ejercicio 5

 const initialValue = 0;
 const sumWithInitial = arrar.reduce(
   (accumulator, currentValue) => accumulator + currentValue,
   initialValue,
 );
 
 console.log(sumWithInitial);
 
console.log("------------------------------------------------------------")
 //Ejercicio 6 
 console.log(arrar.reverse());
console.log("------------------------------------------------------------")

//Ejercicio 7 
console.log("------------------------------------------------------------")
let arrayDesordenado = [3,4,1,2]
console.log(arrayDesordenado.toSorted((a,b)=>a - b))


//Ejercicio 8 
console.log("------------------------------------------------------------")
const array=[134,343,8,1,0,3455]
const resultado = array.filter((numero) => numero>=100)
console.log(resultado)

//Ejercicio 9 
console.log("------------------------------------------------------------")
const contarElementos = (array, elemento) => {
    return array.reduce((contador, actual) => actual === elemento ? contador + 1 : contador, 0);
};

const numeros = [1, 2, 3, 4, 2, 3, 2, 1, 2, 4, 2];
const elementoBuscado = 2;
const cantidad = contarElementos(numeros, elementoBuscado);

console.log(cantidad);

