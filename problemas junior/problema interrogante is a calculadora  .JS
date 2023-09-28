const procedimiento = parseInt(prompt("escriba el numero para 1.sumar 2.restar 3.multiplicar 4.dividir 5.potenciar 6.raiz cuadrada 7.raiz cubica"))



if (procedimiento==1) {
let	num1=parseInt(prompt("dame tu primer numero"))
let num2=parseInt(prompt("dame tu segundo numero"))

	let resultado= num1+num2
	alert("el resultado de tu suma es "+ resultado)
} 
else if (procedimiento==2){
let	num1=parseInt(prompt("dame tu primer numero"))
let num2=parseInt(prompt("dame tu segundo numero"))

	let resultado= num1-num2
	alert("el resultado de tu resta es "+ resultado)
}
else if (procedimiento==3){
let	num1=parseInt(prompt("dame tu primer numero"))
let num2=parseInt(prompt("dame tu segundo numero"))

	let resultado= num1*num2
	alert("el resultado de tu multiplicacion es "+ resultado)
}
else if (procedimiento==4){
let	num1=parseInt(prompt("dame tu primer numero"))
let num2=parseInt(prompt("dame tu segundo numero"))

	let resultado= num1/num2
	alert("el resultado de tu division es "+ resultado)
}
else if (procedimiento==5){
let	num1=parseInt(prompt("dame tu primer numero"))
let exp=parseInt(prompt("dame tu segundo numero"))
for (i = 0; i < exp; i++) {
	resultado=num1*num1
}
	alert("el resultado de tu division es "+ resultado)
}
else if (procedimiento==4){
let	num1=parseInt(prompt("dame tu primer numero"))
let num2=parseInt(prompt("dame tu segundo numero"))

	let resultado= num1/num2
	alert("el resultado de tu division es "+ resultado)
}
else if (procedimiento==4){
let	num1=parseInt(prompt("dame tu primer numero"))
let num2=parseInt(prompt("dame tu segundo numero"))

	let resultado= num1/num2
	alert("el resultado de tu division es "+ resultado)
}
else{
	alert("PARECE QUE ACABAS DE REGISTRAR UN VALOR INCORRECTO  :(")
}

