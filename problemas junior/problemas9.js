const procedimiento = parseInt(prompt("escriba el numero para 1.sumar 2.restar 3.multiplicar 4.dividir 5.potenciar 6.raiz cuadrada 7.raiz cubica"))

function potenciar(num,exp) {
	let numero = num;
	for (var i = 1; i < exp; i++) {
		numero = numero * num;
	}
	return numero;
}

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
let numero1 = prompt("numero a potenciar");
	let numero2 = prompt("exponente");
	resultado = potenciar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (procedimiento==6){
let	num1=parseInt(prompt("dame tu numero el cual que quieres la raiz cuadrada"))
	let resultado= Math.sqrt(num1)
	alert("el resultado de tu raiz cuadrada es "+ resultado)
}
else if (procedimiento==7){
let	num1=parseInt(prompt("dame tu numero del cual quier la raiz cubica "))
	let resultado= Math.cbrt(num1)
	alert("el resultado de tu raiz cubica es "+ resultado)
}
else{
	alert("PARECE QUE ACABAS DE REGISTRAR UN VALOR INCORRECTO  :(")
}

