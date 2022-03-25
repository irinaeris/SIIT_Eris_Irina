


function getSelectedDropdownValue(){

            selectElement = document.getElementById("select1");
            output = selectElement.value;
            document.querySelector(".output").textContent = output;
            //var selectedText = availableValues.options[availableValues.selectedIndex].innerHtml;
            //var selectedValue = availableValues.value;
            //console.log(selectedValue)
        }
/*function getRandomDogs(){

 url = "https://random.dog/woof.json"

fetch(url) 
    .then(function(response) {
      //console.log(response);
      return response.json();
    })
  .then(function (data) {
   //console.log(data);
    displayImageDog(data.url)
   })

}

getRandomDogs();

function displayImageDog(image){
  document.getElementById("image").src = image

}*/


function getRandomCats(){

    url = "https://aws.random.cat/meow"
   
   fetch(url) 
       .then(function(response) {
         //console.log(response);
         return response.json();
       })
     .then(function (data) {
      //console.log(data);
       displayImageCat(data.file)
      })
   
   }
   
   getRandomCats();
   
   function displayImageCat(image){
     document.getElementById("image").src = image
   
   }

   function getRandomFox(){

    url = "https://randomfox.ca/floof/"
   
   fetch(url) 
       .then(function(response) {
         //console.log(response);
         return response.json();
       })
     .then(function (data) {
      //console.log(data);
       displayImageFox(data.image)
      })
   
   }
   
   getRandomFox();
   
   function displayImageFox(imageFox){
     document.getElementById("image").src = imageFox
   
   }