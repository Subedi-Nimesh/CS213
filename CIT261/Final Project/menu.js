var restaurant = '';
function save(index) {
    var item = restaurant.menu[index];
    var favorites = localStorage.getItem('fav');
    if (!favorites) {
        favorites = [item.name];
        localStorage.setItem('fav', JSON.stringify(favorites));
    }
    var favArr = JSON.parse(favorites);
    favArr.push(item.name);
    localStorage.setItem('fav', JSON.stringify(favArr));

    
    // var text = document.getElementById("myText").value;
    // if (typeof(Storage) !== "undefined") {
    //     localStorage.setItem("Name", text);
    //     document.getElementById("display").innerHTML = "Hi, " + localStorage.getItem("Name") + "!" + '<br>' + "Now try refreshing the browser!!!";
    //     alert("Saved!");
    // } else {
    //     document.getElementById("display").innerHTML = "Sorry, your browser does not support Web Storage...";
    // }

}

function onLoad(){
    var URL = "menu.txt";
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", URL, true);
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status != 404)
		{
			var value = xhttp.responseText;
			restaurant = JSON.parse(value);
            document.getElementById("display").innerHTML = '<div class="center"><h1>Appetizer</h1></div> <br>';
			for (var i = 0; i < restaurant.menu.length; i++)
			{
                document.getElementById("display").innerHTML += '';
                if(i+1 < restaurant.menu.length){
                    if (restaurant.menu[i].category != restaurant.menu[i+1].category)
                    {
                        document.getElementById("display").innerHTML += '<div class="centered red"><input type="Checkbox" onclick="save('+ i + ')" name="' + restaurant.menu[i].name + '" value = "' + restaurant.menu[i].name + '">' + restaurant.menu[i].name + " " + restaurant.menu[i].price + "</div>";
                        document.getElementById("display").innerHTML += '<p class="centered">' + restaurant.menu[i].description + '</p><br><br>';
                        document.getElementById("display").innerHTML += '<div class="centered center"><h1>' + restaurant.menu[i+1].category + "</h1></div> ";

                    } else {
                        document.getElementById("display").innerHTML += '<div class="centered red"><input type="Checkbox" onclick="save('+ i +')" name="' + restaurant.menu[i].name + '" value = "' + restaurant.menu[i].name + '">' + restaurant.menu[i].name + " " + restaurant.menu[i].price + "</div>";
                        document.getElementById("display").innerHTML += '<p class="centered">' + restaurant.menu[i].description + '</p><br><br>';
                    }
                }else{
                    document.getElementById("display").innerHTML += '<div class="centered red"><input type="Checkbox" onclick="save('+ i +')" name="' + restaurant.menu[i].name + '" value = "' + restaurant.menu[i].name + '">' + restaurant.menu[i].name + " " + restaurant.menu[i].price + "</div>";
                    document.getElementById("display").innerHTML += '<p class="centered">' + restaurant.menu[i].description + '</p><br><br>';
                }
            }
		}
	}
	xhttp.send();
    
}