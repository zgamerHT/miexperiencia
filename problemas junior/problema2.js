boleto = 1 ;
dineroCofla= parseInt(prompt("DIME CUANTO DINERO TENES COFLA"));
vuelto= dineroCofla-1
vuelto1=dineroCofla-2
vuelto2=dineroCofla-3

if(dineroCofla >=1 && dineroCofla<2){
	alert("aqui esta tu boleto y te sobro $"+vuelto);
} 
else if(dineroCofla >=2 && dineroCofla<3){
	alert("aqui estan tus dos boletos y te sobro $"+vuelto1);
}
else if (dineroCofla >=3) {
	alert("aqui esta tu boleto y te sobraron $"+vuelto2+" para regalar")

}