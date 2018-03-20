//VARIABLES
var turno=1;
var queTurno;
var celdas = document.getElementsByClassName("triqui");
var arregloTriqui= new Array(9);

//FUNCIONES

function gana(letra){
	if(arregloTriqui[0] == letra && arregloTriqui[1] == letra && arregloTriqui[2] == letra ||
       arregloTriqui[3] == letra && arregloTriqui[4] == letra && arregloTriqui[5] == letra ||
       arregloTriqui[6] == letra && arregloTriqui[7] == letra && arregloTriqui[8] == letra ||
       arregloTriqui[0] == letra && arregloTriqui[3] == letra && arregloTriqui[6] == letra || 
       arregloTriqui[1] == letra && arregloTriqui[4] == letra && arregloTriqui[7] == letra ||
       arregloTriqui[2] == letra && arregloTriqui[5] == letra && arregloTriqui[8] == letra ||
       arregloTriqui[0] == letra && arregloTriqui[4] == letra && arregloTriqui[8] == letra ||
       arregloTriqui[2] == letra && arregloTriqui[4] == letra && arregloTriqui[6] == letra){
		alert("gano: " + letra);
		window.location.reload();
	}

}

function triqui(evento){
	var celda=evento.target;
	var idCelda=evento.target.id;
	var marcaPosicion = idCelda[1]-1;

	queTurno =turno%2;

	if(queTurno != 0){
		celda.innerHTML= "X";
		arregloTriqui[marcaPosicion] = "X";
		turno++;
		gana("X");

	}else if(queTurno == 0){
		celda.innerHTML= "O";
		arregloTriqui[marcaPosicion] = "O";
		turno++;
		gana("O");
	}

	if(turno == 10){
		alert("empatee!");
		window.location.reload();
	}
}
function cargarDocumento(){
	var n=0;
	while(n<celdas.length){
		celdas[n].addEventListener("click",triqui);
		n++;
	}
}

//EVENTOS
window.addEventListener("load", cargarDocumento);