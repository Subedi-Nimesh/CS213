window.onload = function() {
   document.getElementById("firstName").focus();
};

function validate() {
	var error = false;
	var fName = document.getElementById("firstName").value;
	var lName = document.getElementById("lastName").value;
	var add = document.getElementById("address").value;
	var phoneNum = document.getElementById("phone").value;
	var cardNum = document.getElementById("cardNumber").value;
	var month = parseInt(document.getElementById("cardMonth").value);
	var year = parseInt(document.getElementById("cardYear").value);
	
	if (fName == "") {
		document.getElementById("fNameValidate").innerHTML = "Enter your FIRST name";
		document.getElementById("firstName").focus();
		error = true;
	}
	else {
		document.getElementById("fNameValidate").innerHTML = "";
	}

	if (lName == ""){
		document.getElementById("lNameValidate").innerHTML = "Enter your LAST name";
		if (!error)
			document.getElementById("lastName").focus();
		error = true;
	}
	else {
		document.getElementById("lNameValidate").innerHTML = "";
	}

	if (add == "") { 
		document.getElementById("adrValidate").innerHTML = "Enter your Address";
		if (!error)
			document.getElementById("address").focus();
		error = true;
	}
	else {
		document.getElementById("adrValidate").innerHTML = "";
	}
	
	var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
	if (phoneNum.search(phonePattern) != 0) {
		document.getElementById("phoneValidate").innerHTML = "Enter your 10-digit phone number in the format 208-365-XXXX";
		if (!error)
			document.getElementById("phone").focus();
		error = true;
	}
	else {
		document.getElementById("phoneValidate").innerHTML = "";
	}

	if (isNaN(cardNum) || cardNum.length != 16) {
		document.getElementById("cardNumValidate").innerHTML = "Enter 16-digit of Your card (no spaces or dashes)";
		if (!error)
			document.getElementById("cardNumber").focus();
		error = true;
	}
	else {
		document.getElementById("cardNumValidate").innerHTML = "";
	}
										
	if (month < 1 || month > 12) {
		document.getElementById("monthValidationMessage").style.display = 'block';
		if (!error)
			document.getElementById("cardMonth").focus();
		error = true;
	}
	else {
		document.getElementById("monthValidationMessage").style.display = 'none';
	}

	if (year < 2018) {
		document.getElementById("yearValidationMessage").style.display = 'block';
		if (!error)
			document.getElementById("cardYear").focus();
		error = true;
	}
	else {
		document.getElementById("yearValidationMessage").style.display = 'none';
	}
									

	if (error)
		return false;
	return true;
}


function getTotalPrice(reset) {
	var total = 0;
	var Child = document.getElementById("Children").value;
	var Adult = document.getElementById("Adults").value;
	var Seniors = document.getElementById("Senior").value;
	
	if (reset) {
		document.getElementById("total").innerHTML = "$  " + total;
		return;
	}

	if (Child > 0)
		total += Child * 5.00;
	if (Adult > 0)
		total += Adult * 10.00;
	if (Seniors > 0)
		total += Seniors * 12.00;

	document.getElementById("total").innerHTML = "$  " + total.toFixed(2) + " Including TAX.";
}

function reset() {
	document.getElementById("firstName").focus();
}