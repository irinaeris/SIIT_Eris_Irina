/*
//create the input field
function createInput(){
var inputField = document.createElement('input');
inputField.type= "text";
inputField.value = ("");

var elementPage = document.querySelector('.container').appendChild(inputField)
//elementPage.appendChild(inputField);


//inputField.innerHTML= ("Aici");
inputField.style.padding=  "20px";
inputField.style.width="40%";
inputField.style.marginTop= "30px";
inputField.style.marginLeft= "50px";
inputField.style.boxSizing= "border-box";
inputField.style.borderRadius = "4px";
inputField.style.color = "black";
inputField.style.backgroundColor = "lightGrey";
inputField.style.fontSize = "16px";
}
createInput();


function createButton(){
//create the submit buuton
var clickButton = document.createElement('button');


var elementButton = document.querySelector('.container');
elementButton.appendChild(clickButton);

clickButton.innerHTML= ("Add");
clickButton.style.padding = "20px";
clickButton.style.width = "100px";
clickButton.style.borderColor= "#008CBA";
clickButton.style.marginLeft= "40px";
clickButton.style.textAlign= "center";
clickButton.style.borderRadius = "4px";
clickButton.style.display = "in-line-block";
clickButton.style.fontSize = "16px";
clickButton.style.backgroundColor= "lightBlue"
}
createButton();
*/
/*
function insertText(){
    var comment = document.getElementById("text_id").value;
    document.getElementById("GFG").innerHTML = comment;

}
*/

var toDoInput = document.getElementById("text_id");
var todoButton = document.getElementById("second_button");

function eventButton() {
  //var a =[];
  var commentSection = document.createElement("ul");
  document.body.appendChild(commentSection);

  var img = document.createElement("IMG");
  img.setAttribute("src", "pic1.png");
  img.setAttribute("width", "80");
  img.setAttribute("height", "60");
  img.setAttribute("alt", "Image");
  img.style.borderRadius = "25px";
  img.style.float = "left";
  commentSection.appendChild(img);

  var email = document.createElement("span");
  email.innerHTML = "test@email.com";
  commentSection.appendChild(email);

  var txt = document.createElement("li");
  txt.innerHTML = toDoInput.value;
  //a= toDoInput.value;
  //console.log(array[a]);
  commentSection.appendChild(txt);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  commentSection.appendChild(deleteButton);

  deleteButton.onclick = function (event) {
    commentSection.removeChild(event.target);
  }

}
