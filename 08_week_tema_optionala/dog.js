let output;
function getSelectedDropdownValue() {
  selectElement = document.getElementById("select1");
  let output = selectElement.value;
  document.querySelector(".output").textContent = output;

  if (output === "Dog") {
    //function getRandomDogs() {
    url = "https://random.dog/woof.json";

    fetch(url)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayImageDog(data.url);
      });

    function displayImageDog(image) {
      document.getElementById("image").src = image;
    }
  } else if (output === "Cat") {
    //function getRandomCats() {
    url = "https://aws.random.cat/meow";

    fetch(url)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayImageCat(data.file);
      });

    function displayImageCat(image) {
      document.getElementById("image").src = image;
    }
  } else {
    //function getRandomFox() {
    url = "https://randomfox.ca/floof/";

    fetch(url)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayImageFox(data.image);
      });

    function displayImageFox(image) {
      document.getElementById("image").src = image;
    }
  }
}
