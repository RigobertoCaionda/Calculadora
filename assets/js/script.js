function clique(numero){
	let visor = document.querySelector(".visor");
	if(visor.value=='0'){
		visor.value = numero;
	}else{
		visor.value += numero;
	}
}
function calcular(){
	let visor = document.querySelector(".visor");
	let resultado = eval(visor.value);
	visor.value = resultado;
}
function limpar(){
	let visor = document.querySelector(".visor");
	visor.value = '0';
}
function signalToggler(){
	let visor = document.querySelector(".visor");
	visor.value *= -1;
}
function apagar(){ 
	let visor = [document.querySelector(".visor").value];
	alert(a);
}