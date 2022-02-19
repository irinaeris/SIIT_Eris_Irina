/*var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1] 
Using control structures (if, for, while), do the following:

1. display in the console the numbers from 1 to 20 */


var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];

var lungime=array.length;
for (i=0; i< lungime; i=i+1) {

    if (array[i] < 20) {
        console.log(array[i])
    }
   
}

