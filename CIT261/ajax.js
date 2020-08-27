function readFile() {
	var jsonName = document.getElementById("jsonInput").value;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET",jsonName,true);
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status != 404)
		{
			var value = xhttp.responseText;
			var college = JSON.parse(value);
			document.getElementById("display").innerHTML = "";
			for (var i = 0; i < value.length; i++)
			{
				document.getElementById("display").innerHTML += "Name: " + college.students[i].first + " ";
				document.getElementById("display").innerHTML += college.students[i].last + "<br>";
				document.getElementById("display").innerHTML += "Address: " + college.students[i].address.city + ", ";
				document.getElementById("display").innerHTML += college.students[i].address.state + " ";
				document.getElementById("display").innerHTML += college.students[i].address.zip + "<br>";
				document.getElementById("display").innerHTML += "Major: " + college.students[i].major + "<br>";
				document.getElementById("display").innerHTML += "GPA: " + college.students[i].gpa + "<br><br>";
			}
		}
	}
	xhttp.send();
}