function stringify()
{
    var obj = { name: "John", age: 30, city: "New York" };
    var myJSON = JSON.stringify(obj);
    document.getElementById("text2").innerHTML = myJSON;
}

function parse()
{
    var obj = '{ "name": "John", "age": 30, "city": "New York" }';
    var myJSON = JSON.parse(obj);
    document.getElementById("text1").innerHTML = myJSON.name + ", " + myJSON.age + "<br>" + myJSON.city;
}