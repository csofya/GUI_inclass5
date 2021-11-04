// ADD NEW ITEM TO END OF LIST  |
//-------------------------------
// Create a <li> node
var new_li = document.createElement("li");
// Add text to that node    
var textnode = document.createTextNode("cream");
new_li.appendChild(textnode);
// Insert new node to the next sibiling of the last item in the list
let last_element = document.getElementById("four")
last_element.parentNode.insertBefore(new_li, last_element.nextSibling)

// ADD NEW ITEM START OF LIST |
//----------------------------
var new_li = document.createElement("li");
var textnode = document.createTextNode("kale");
new_li.appendChild(textnode);
let first_element = document.getElementById("one")
first_element.parentNode.insertBefore(new_li, first_element)

// ADD A CLASS OF COOL TO ALL LIST ITEMS |
//---------------------------------------
var style_class = document.querySelectorAll("li")
var i;
for (i = 0; i < style_class.length; i++) {
    style_class[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// var num_elements = document.querySelectorAll("li").length;
var header_two = document.querySelector("h2");
var text = document.createTextNode(" (" + style_class.length + ")");
header_two.appendChild(text);