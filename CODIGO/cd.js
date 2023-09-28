const materiasHTML = document.querySelector(".materias");
const materias = [
	{
		Nombre: "FISICA 3",
		Nota: 9
	},{
		Nombre: "PROGRAMACION 1",
		Nota: 7
	},{
	Nombre: "BIOLOGIA 2",
		Nota: 2
	},{
		Nombre: "CALCULO 4",
	Nota: 3
	}
];

const obtenerMaterias  = (id)=>{
	return new Promise((resolve,reject)=>{
		 	materia=materias[id];
			if (materias == undefined ) reject("la materia no existe");
			else setTimeout(()=>{resolve[materia]},Math.random()*1000);
	})
};

const delvoverMaterias = async ()=>{
	let materia = [];
	for (let i = 0; i < materias.length; i++) {
			materia[i] = await obtenerMaterias(i);
		 let newHTMLCode = `<div class="materia">
								<div class="nombre">${materia[i].nombre}</div>
								<div class="nota">${materia[i].nota}</div>
						</div>`;

		materiasHTML.innerHTML += newHTMLCode;
	}
}

delvoverMaterias()