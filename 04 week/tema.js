/*var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1] 
Using control structures (if, for, while), do the following:*/

//1. display in the console the numbers from 1 to 20 


/*
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];

var lungime=array.length;
for (i=0; i< lungime; i=i+1) {

    if (array[i] < 20) {
        console.log(array[i])
    }
}
*/

//2. display in the console the odd numbers from 1 to 20

/*
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];

var lungime=array.length;

for (i=0; i< lungime; i=i+1) {

    if (array[i] < 20) {

        if (array[i]%2===0)

        console.log(array[i])
    }
}
*/

//3. compute the sum of the elements of an array and display it in the console

/*
var array = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];
var result=0;

for (let i=0; i < array.length; i++) {
       
        result += array[i];


    }

    console.log(result)
*/

//4. compute the maximum of the elements of an array and display it in the console

/*
var array = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];
var max=array[0];



for (let i=0; i < array.length; i++) {
       

        if (array[i] > max){
        
            max=array[i];
            
        }
    }
console.log(max)
*/

//5. compute how many times a certain element appears in an array - tips: use object, var element = 2



/*
var arr = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];
const countNumber=(arr, value) => {

    let count=0;
    for (let i=0; i < arr.length; i++) {

        if (arr[i] ===value){

            count++
            continue;
        }
    }
    return count;
}

console.log(countNumber(arr, 8));
*/

//6. Using nested control structures (doua for + if) for generate the following pattern

  //  0 1 0 1

  //  1 0 1 0

  //  0 1 0 1

  // 1 0 1 0


  /*
  var x = [
    [0,1,0,1],
    [1,0,1,0],
    [0,1,0,1],
    [1,0,1,0],
];
var result;

for (var i = 0; i < x.length; i++) {

    var result = "";

    for (var j = 0; j < x[i].length; j++) {
        result += x[i][j] + " ";
    }

    console.log(result);
} 
*/
