var commentList = ["my first comment"];

for (var i = 0; i < commentList.length; i++) {
  var comment = commentList[i];
  var ulHTML = document.createElement("ul");
  document.body.appendChild(ulHTML);

  var img = document.createElement("IMG");
  img.setAttribute("src", "pic1.png");
  img.setAttribute("width", "80");
  img.setAttribute("height", "60");
  img.setAttribute("alt", "Image");
  img.style.borderRadius = "25px";
  img.style.float = "left";
  ulHTML.appendChild(img);

  var email = document.createElement("span");
  email.innerHTML = "test@email.com";
  ulHTML.appendChild(email);

  var commentHTML = document.createElement("li");
  commentHTML.innerHTML = comment;
  ulHTML.appendChild(commentHTML);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  ulHTML.appendChild(deleteButton);

  deleteButton.onclick = function (event) {
    ulHTML.removeChild(event.target);
  };
}

var toDoInput = document.getElementById("text_id");
var todoButton = document.getElementById("second_button");

function eventButton() {
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
  commentSection.appendChild(txt);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  commentSection.appendChild(deleteButton);

  deleteButton.onclick = function (event) {
    commentSection.removeChild(event.target);
  };
}
