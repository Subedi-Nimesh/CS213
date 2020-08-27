function addNewItem() {
    let newElement = document.createElement("newElement");
    newElement.id = "deleteElement";
    newElement.innerText = "New Item!";
    document.getElementById("addElements").appendChild(newElement);
  }

  function deleteItem() {
    let element = document.getElementById("deleteElement");
    if (element) { element.parentNode.removeChild(element); }
  }

  
  function changeFont() {
    var x = document.getElementsByTagName("newElement");
    for (var i = 0; i < x.length; i++) {
      x[i].style.fontFamily = "arial";
    }
  }