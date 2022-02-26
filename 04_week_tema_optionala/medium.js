// 1. https://edabit.com/challenge/4gzDuDkompAqujpRi
 // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number 
 // you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

 /*
 function addUp(num) {
 var  sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
	return sum;
}
*/

// 2. https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

/*
function minMax(arr) {
  var min = arr[0];
  var max = arr[0];
	var returnNum=[]
  for (var i = 1; i < arr.length; i++) {
  			if (arr[i] < min) {
    min = arr[i];
				}
	
				 if (arr[i] > max) {
    max = arr[i];
  			}
	}
	  returnNum.push(min);
    returnNum.push(max);
  
  return returnNum;
  */

  // 3. https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
  // Create a function that takes a string and returns a string in which each character is repeated once.

  /*
  function doubleChar(str) {
	 var newArr= "";
	 for (var i=1; i< str.length; i++){
		 
		 newArr = str[i]+ str[i];
	 }
	return newArr;
}*/

// 4. https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

/*
function set(arr) {
	var newArr = [];
	var num = arr[0];
  newArr.push(num);
	
	for (var i=0; i< arr.length; i++){
		if (num !== arr[i] ){
			num = arr[i];
			newArr.push(num);
		}
	}
	return newArr;
}
*/

// 5. https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
/* Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".*/

/*
function chatroomStatus(users) {
  if (users.length == 0) {
     return "no one online"
   }
   if (users.length == 1) {
     return "${users[0]} online"
   }
   if (users.length == 2) {
     return "${users[0]} and ${users[1]} online"
   }
    if (users.length > 2) {
     return "${users[0]}, ${users[1]} and ${users.length - 2} more online"
   }
  }*/