let sospechoso1 = prompt("Sospechoso 1 ¿mintió?");
let sospechoso2 = prompt("Sospechoso 2 ¿mintió?");
let cofla = prompt("Sospechoso 3 ¿mintió?");


if (sospechoso1 == "si")  {
	alert("sospechoso 1 mintió, darle descarga electrica")
}
else if (sospechoso1 == "no") {
	alert("sospechoso 1 no mintió, no darle descarga")
}

else {
	alert("no se si sospechoso 1 minitó, probemos de vuelta")
}


if (sospechoso2 == "si") {
	alert("sospechoso 2 mintió, darle descarga electrica")
}
else if (sospechoso2 == "no") {
	alert("sospechoso 2 no mintió, no darle descarga")
}

else {
	alert("no se si sospechoso 2 mintió, probemos de vuelta")
}


if (cofla == "si") {
	alert("cofla mintió, darle descarga")
}
else if (cofla == "no") {
	alert("cofla no mintió, no darle descarga")
}

else {
	alert("no se si cofla mintió, probemos de vuelta")
}