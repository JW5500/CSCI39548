//we will add the items you want into the recipes 
function addItem(){

    let ul = document.getElementById("recipe-list");
    let ingre = document.getElementById("ingre");
    let li = document.createElement("li");
    li.setAttribute('id', ingre.value);
    li.appendChild(document.createTextNode(ingre.value));
    ul.appendChild(li);

}

//it will remove the ingredient that you don't want 
function removeItem(){

    let ul = document.getElementById("recipe-list");
    let ingre = document.getElementById("ingre");
    let item = document.getElementById(ingre.value);
    if (item) {
        ul.removeChild(item);
    } else {
        alert("Item not found in the list.");
    }
   

}