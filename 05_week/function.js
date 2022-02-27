//create the inout field
var inputField = document.createElement('input');


inputField.innerHTML= ("Aici scrie userul...");
inputField.style.padding=  "20px";
inputField.style.width="40%";
inputField.style.marginTop= "30px";
inputField.style.marginLeft= "50px";
inputField.style.boxSizing= "border-box";
inputField.style.borderRadius = "4px";


var elementPage = document.querySelector('.container');
elementPage.appendChild(inputField);

//create the submit buuton

var clickButton = document.createElement('button');


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


var elementButton = document.querySelector('.container');
elementButton.appendChild(clickButton);

