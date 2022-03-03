var input1 = document.querySelector(".input_1");
var input2 = document.querySelector(".input_2");
var finalResult = document.querySelector(".finalResult");
var height, weight, BMI;

function calculateButton() {
  height = input1.value;
  weight = input2.value;
  BMI = weight / (height * height);

  if (BMI < 18.5) {
    console.log("Underweight");
  } else if (BMI > 18.5 && BMI < 24.9) {
    console.log("Normal range");
  } else if (BMI > 25 && BMI < 29.9) {
    console.log("Overweight range");
  } else {
    console.log("Obese range");
  }
}
