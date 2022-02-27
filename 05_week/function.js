
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
function eventButton(){

    var txt = document.getElementById("text_id").value;
    document.getElementById("allComments").innerHTML = txt;
  
    function myFunction() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "pic1.png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Image");
        document.body.appendChild(x);
      }
    }


