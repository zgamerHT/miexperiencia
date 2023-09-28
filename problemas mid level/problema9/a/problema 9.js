const nombre = document.getElementById("Nombre");
const email = document.getElementById("Email");
const materia = document.getElementById("Materias");
const boton = document.getElementById("btn");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
	e.preventDefault()
	let error = validar();
   if (error[0]){
   	resultado.innerHTML = error[1]
   	resultado.classList.add("red")
   } else {
   	resultado.innerHTML = "solisitud enviada correctamente"
   	resultado.classList.add("green")
    resultado.classList.remove("red")
   }
})







 validar = ()=>{
 	let error=[]
 	if(nombre.value.length <5 || nombre.value.length >25){
 		error[0]=true
 		error[1]= "el nombre es invalido"
 		return error
 	} else if (email.value.length<5||
 					email.value.length>25||
 					email.value.indexOf("@")== -1||
 					email.value.indexOf(".")== -1) {

 						error[0]=true
 						error[1]="el email es invalido"
 						return error
 	}else if(materia.value.length<4 || materia.value.length>30){
                       error[0]=true
                        error[1]="la materia es invalida"
                        return error
    }


 	error[0]=false
	return error
}