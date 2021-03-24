
    
window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
	
	form.onsubmit = validateForm;
}

function validateForm() {
		//ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var y = document.forms["myForm"]["password"];
    if(y[0].value != y[1].value){
		alert("Password doesn't match retry password");
		return false;
    }
}

