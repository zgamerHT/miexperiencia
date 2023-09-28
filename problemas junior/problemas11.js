const materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}	

let respuesta= prompt("en que materia desea incribirse ")
function comprobar(){
	if (respuesta=="fisica"){
		res=alert("te inscribiste exitosamente")
		return res
	}
	else if(respuesta=="programacion"){
		res=alert("te no te puedes inscribister")
		return res
	}
	else if(respuesta=="logica"){
		res=alert("te no te puedes inscribister")
		return res
	}
	else if(respuesta=="quimica"){
		res=alert("te inscribiste exitosamente")
		return res
	}
}
comprobar()