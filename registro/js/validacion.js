function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const button=document.querySelector('#regBtn')
let p1= document.getElementById('password1')
let p2= document.getElementById('password2')
let ap= document.getElementById('apellido')
let em= document.getElementById('email')
let tr= document.getElementById('terminos')
let no= document.getElementById('nombre')

function validator(){
	if(no.value !=""&& ap.value!=""&&em.value!="" && tr.checked===true && p1.value===p2.value){
		showAlertSuccess();
	}else{
		showAlertError();
	}

	}

button.addEventListener('click',validator)
