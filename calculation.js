/*
Tanya Sahni -  This is javascript file which takes care of calculation and alerts.
*/
function onLoad(){

const button=document.getElementById("button-submit");
const input=document.getElementById("cal-input");	


button.disabled=true;


input.onchange=function(event){
	
	const isSolved=event.target.value==124
	button.disabled=!isSolved	
}
}

function onClick(){
		
const elements=document.getElementsByClassName("input");

for(const element of elements){
	if(!element.value){
		const name=element.getAttribute("name");
	alert("Please fill all the fields!");
	return;
	}
	
}

for(const element of elements){
element.value="";
}
alert("Thank you for your message!");
}

