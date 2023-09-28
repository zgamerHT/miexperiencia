dinero = prompt("Ingresa el monto que posees para saber que helado puedes comprar")
dinero = parseInt(dinero);

if( dinero >= 0.6 && dinero < 1 ){
	alert("te puedes comprar el helado de agua");
	alert("te sobran "(dinero-0.6));
}

else if(dinero >= 1 && dinero < 1.6){
	alert("te puedes comprar un helado de crema");
	alert("te sobran "(dinero-1));
}

else if(dinero >= 1.6 && dinero < 1.7){
	alert("te puedes comprar un helado de heladix");
	alert("te sobran "(dinero-1.6));
}

else if(dinero >= 1.7 && dinero <1.8){
	alert("te puedes comprar un helado de haladovic");
	alert("te sobran "(dinero-1.7));
}

else if(dinero >= 1.8 && dinero < 2.9){
	alert("te puedes comprar un helado de helardo");
	alert("te sobran "(dinero-1.8));
}

else if(dinero >= 2.9){
	alert("te puedes comprar un helado con confites o un porte de helado de 1/4 KG");
	alert("te sobran "(dinero-2.9));
}
else{
	alert("no te alcanza para ningun helado");
}

//pose un error en la forma de dar el resultado el cual  no se solucionar

