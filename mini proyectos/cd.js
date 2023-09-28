"use strict";
 let num1 = parseInt(prompt("dime cuantos numeros sumaras"))
 var arr = []
 const ObtenerNumero = (num1)=>{
	for (let i = 0 ; i < num1; i++) {
 		 let obtenerNumeros = parseInt(prompt(`dame tu numero ${i} para sumar`))
 		 arr.push(obtenerNumeros)
 		}
}
const sumar = () => {
  const resultado = arr.reduce((acumulador, numero) => acumulador + numero, 0);
  console.log(resultado);
};
ObtenerNumero(num1)
sumar()
