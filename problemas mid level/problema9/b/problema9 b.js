"use strict";

let alumnos = [{
	nombre: "karen",
	email: "karen@gmail.com",
	materia: "fisica"
},{
	nombre: "pedro",
	email: "pedro@gmail.com",
	materia: "fisica"
},{
	nombre: "roberto ",
	email: "roberto@gmail.com",
	materia: "fisica"
},{
	nombre: "maria",
	email: "maria@gmail.com",
	materia: "fisica"
}];
const boton = document.querySelector(".btn")
for (let alumno in alumnos) {
	let datos= alumnos[alumno]
	let nombre= datos["nombre"]	
	let email= datos["email"]
	let materia= datos["materia"]
	let htmlCode=`
 		<div class="grid-item nombre">${nombre}</div>
 		<div class="grid-item email">${email}</div>
 		<div class="grid-item materia">${materia}</div>
 		<div class="grid-item semana">
 			<select class="semana-elegida">
 				<option value="semana 1" >semana 1</option>
 				<option value="semana 2" >semana 2 </option>
 			</select>
 		</div>
 	`;
 	document.querySelector(".grid-container").innerHTML+= htmlCode;
	}

boton.addEventListener("click",()=>{
	let elementos = document.querySelectorAll(".semana")
	let semanaElegida = document.querySelectorAll(".semana-elegida")
	for(elemento in elementos){
		semana = elementos[elemento];
		semana.innerHTML= semanaElegida[elemento].value;
	}

})