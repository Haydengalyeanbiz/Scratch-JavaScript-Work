/*
Define a function called selectElementsInRange that takes in three parameters.
The first parameter should be an array. 

The second parameter should be a
starting number in a range of indices, and the third parameter should be the
ending number in the range.

 The function should return all elements that have
indices within the range of indices defined by the starting and ending numbers,
inclusive.


//           Steps     

I: Three parameters , 1st one should be an array
O: return new array with defined indices.
*/

function selectElementsInRange(arr, num1, num2){
  return arr.slice(num1, num2 + 1);
}
  
  // console.log(selectElementsInRange([1, 2, 3], 0, 1));        // [1, 2]
  // console.log(selectElementsInRange([2, 6, 9, 3, 1], 0, 3));  // [2, 6, 9, 3]
  // console.log(selectElementsInRange([7, 9, 10, 4, 5], 2, 4)); // [10, 4, 5]
/*---------------------------------------------------------------------------------------------------------------------------*/ 
/*
Define a function called oddRange that takes in a number parameter and returns
an array  containing all positive odd numbers up to that number.
*/


function oddRange(num){
  let newArr = [];
  for (let i = 0; i <= num; i++){
    if (i % 2 !== 0){
      newArr.push(i);
    }
  }
  return newArr;
}

// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function sillyString that accepts a word as an argument. 
The function should return a new word where every vowel of the original word is followed by 'b' and that same vowel. 
For example, 'siren' would turn into 'sibireben'.

I: A word 
O: a new word that adds a "b" after every vowel.

1. declare a function that accepts a word as an argument.
  1.2 declare all of the vowels to a variable.
2. declare a new variable for the new word 
3. Write a for loop to loop through the word and find a vowel.
4. See if the index of that word is a vowel.
5. If it is not a vowel add that letter to the new word.
5. If it is a vowel then add that vowel, followed by a "b" and that same vowel.
6. return the new word.
*/

let sillyString = function(word){
  let sillyWord = ""
  for(let i = 0; i < word.length; i++) {
      let vowel = "aeiou"
      let char = word[i]
    
    if(!vowel.includes(char)) {
      sillyWord += char 
    } else {
      sillyWord += char + "b" + char
    }
  }
    
  return sillyWord;
}

// console.log(sillyString('stop'));       // stobop
// console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
// console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. 
The function should return the total product of all numbers multiplied together.

I: A 2D array
O: Return Product of All numbers in array Multiplied.

1. declare the function twoDimensionalProduct(array) that takes in an array
2 declare a variable that stores the product sum and set it to 0!
3 loop through the outer array to target the inner array
  3.2 assign a variable to that outer array to keep track of which inner array[index] we are on.
4. loop through the inner array to target the indicies inside of that array. 
5. Multiply all of the inner array numbers together and store it in the sum variable. 
6. return the sum variable.
*/
let twoDimensionalProduct = function(arr){
  let productSum = 1;
  for (let i = 0; i < arr.length; i++){
    let outer = arr[i];
    for (let j = 0; j <outer.length; j++){
      productSum *= arr[i][j];
    }
  }
  return productSum;
}

let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
//console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [[11, 4],[2]];
// console.log(twoDimensionalProduct(arr2)); // 88
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. 
The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.

I: Function that takes in a 2D array (MATRIX)
O: Array containing the MAXIMUM value in each COLUMN.

1. define the fucntion maxColumn(matrix)
2. define a NEW array to store the max value of columns.
3. loop the outer array
    3.1 create a variable to hold the index of the array.
      4. loop through the INNER array
      4.1 target the index of the inner array.
      4.2 find IF that indice is GREATER than the indice in the next inner array.
      4.3 IF IS greater, add to new array.
        5. return new array. 
*/

function maxColumn(matrix) {
  let newArr = [0, 0, 0];
  for (let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
     if(matrix[j][i] > newArr[i]){
      newArr[i] = matrix[j][i]
     }
    }
  }
  return newArr; 
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

//console.log(maxColumn(matrix)); // [12, 19, 21]
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function twoSum(arr, target) that accepts an array and a target number as args. 
The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. 
You can assume that input array contains only unique numbers.

I:Array and a target number.
O: A BOOLEAN true OR false.

*/
function twoSum(arr, target){
  let sum = 0;
  let bool = false;
  for (let i = 0; i < arr.length; i++){
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++){
     let num2 = arr[j];
     sum = num1 + num2;
     if (sum === target){
      bool = true;
     };       
    };                                   
  };
  return bool;                                       
};

//console.log(num1 + " plus " + num2 + " eq " + sum)
// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Define a function doubler that takes an array of numbers and returns the
same array but every element of the array is multiplied by 2.

I: An ARRAY of numbers
O: Same ARRAY multiplied by 2.

1.Define a function doubler that takes in an ARRAY.
  2. declare a new ARRAY to hold the variables.
    3.loop through the array.
    4.multiply the Indice by 2.
      4.2 push the doubled indice to the new ARRAY 
        5. return new array.
*/

function doubler(array){
  for (let i = 0; i < array.length; i++){
    array[i] *= 2;
  }
  return array;
}

// let nums1 = [1, 2, 3, 4];
// let doubled1 = doubler(nums1)
// console.log(doubled1);          // => [2, 4, 6, 8]
// console.log(nums1 === doubled1) //=> true

// let nums2 = [7, 1, 8];
// let doubled2 = doubler(nums2)
// console.log(doubled2);          // => [14, 2, 16]
// console.log(nums2 === doubled2) //=> true

// let nums3 = [];
// let doubled3 = doubler(nums3)
// console.log(doubled3);          // => []
// console.log(nums3 === doubled3) //=> true
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function additionMutator that accepts an array and a number as an arguments. 
The function should mutate the input array such that every element has the given number added to it.

I: An ARRAY and A NUMBER.
O: SAME ARRAY MUTATED

1. Define the function that accepts an ARRAY and a NUMBER.
  2. loop through the ARRAY 
  2.3 add the NUMBER with the ARRAY indice
    3. return mutated array.

*/

let additionMutator = function(array, number){
  for(let i = 0; i < array.length; i++){
    array[i] += number;
  }
  return array;
}

// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2);     // [ 10, 8, 3 ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function tripler(nums) that takes in an array as an arg. 
The function should return a new array containing three times every number of the original array.

I: Array
O: NEW array

1.define the function Tripler, that accepts an array.
  2.declare a NEW array variable.
    3.Loop through the array
    3.2 take the array indice and multiply times 3.
      4.Push that value to the new array.
        5. return the new Array.
*/

let tripler = function(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 3);
  };
  return newArray;
};

// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Define a function yeller that takes in an array of words. The function should
return a NEW array where each element of the original array is yelled.

I: Array of words.
O: NEW array of YELLED words.

1. Define a function yelled that takes in an array of words.
  2. declare a NEW Array to store the yelled words.
  2.1 loop through the array.
    3. Push the array indice UPPERCASED + !,
    4. Return the new array.
*/

let yeller = function(array){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    newArray.push(array[i].toUpperCase() + "!")
  }
  return newArray;
}

// let words1 = ['hello', 'world'];
// let yelled1 = yeller(['hello', 'world']);
// console.log(yelled1);              //=> [ 'HELLO!', 'WORLD!' ]
// console.log(words1 === yelled1);   //=> false
// console.log(words1[0] === 'hello'); //=> true

// let words2 = ['hello', 'world'];
// let yelled2 = yeller(['kiwi', 'orange', 'mango']);
// console.log(yelled2);              //=> [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
// console.log(words2 === yelled2);   //=> false
// console.log(words2[0] === 'hello'); //=> true
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Define a function called mirror that takes in an array as a parameter and
returns a new array where all the elements in the original array added to the
new array twice with the second set of elements in reverse order.

I: Array containing words.
O : NEW array with an added MIRRORED word after the original word.

1. define the function mirror that takes in an array.
  2. declare a NEW ARRAY.
    3. Loop through the array to each Indice of the array.
    3.2 Push the original indice to the new array FOLLOWED by that word reversed. 
      4. return the new array.
*/

let mirror = function(array){
  let newArray = [];
  newArray = array;
  for (let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

// console.log(mirror([1,2,3])); //=> [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirror(['a', 'b', 'c', 'd']));
// => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/* 
Write a function alternatingWords that accepts an array of words as an argument. 
The function should mutate the input array such that the words alternate between fully uppercase or lowercase. 
The first word should be uppercase.

I: ARRAY of words
O: same ARRAY MUTATED

1. define the function alternatingWords that takes in an array.
  2.loop through the array
  3.1 Use a conditional to check IF the word is UpperCase
    3.2 If is uppercase then switch lower case.
      4.1 Use a conditional to check IF the word is LowerCase
      4.2 IF is lowercase then switch to UpperCase 
        5. return the array.
*/

let alternatingWords = function(array){
  for(let i = 0; i < array.length; i++){
    if (i % 2 === 0){
      array[i] = array[i].toUpperCase();
    }else if (i % 2 !== 0){
      array[i] = array[i].toLowerCase();
    }
  }
  return array;
}



// let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
// alternatingWords(words1);
// // console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

// let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Define a function lessThan5 that takes an array of numbers and returns a NEW
array containing all the numbers in the input array that are less than 5.

I: a ARRAY
O: NEW ARRAY

1. define the function lessThan5 that takes in an ARRAY.
  2.declare a NEW array.  
    3. Loop through the array's indices.
      4. see IF the array indice is LESS than 5.
      4.2 IF it is PUSH the indice to the new array.
        5 return the NEW array.
*/

let lessThan5 = function(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] < 5){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// let nums1 = [1, -5, 10, 6, 2];
// let filteredNums1 = lessThan5(nums1);
// console.log(filteredNums1);           //=> [1, -5, 2]
// console.log(nums1 === filteredNums1); //=> false

// let nums2 = [1, 2, 3, 4, 5, 6];
// let filteredNums2 = lessThan5(nums2);
// console.log(filteredNums2);           //=> [1, 2, 3, 4]
// console.log(nums2 === filteredNums2); //=> false
/*---------------------------------------------------------------------------------------------------------------------------*/
/* 
Define a function wordsLongerThan5 that takes in an array of words. 
The function should return a NEW array containing only the words that are longer
than 5 characters.

I: ARRAY of words
O: NEW ARRAY

*/

let wordsLongerThan5 = function(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if (array[i].length > 5){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// let words1 = ['bike', 'skateboard','scooter', 'moped'];
// let longerWords1 = wordsLongerThan5(words1);
// console.log(longerWords1);            //=> [ 'skateboard', 'scooter' ]
// console.log(words1 === longerWords1); //=> false

// let words2 = ['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'];
// let longerWords2 = wordsLongerThan5(words2);
// console.log(longerWords2);            //=> [ 'couscous', 'ceviche', 'solyanka' ]
// console.log(words2 === longerWords2); //=> false
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function fizzBuzz(max) that accepts a number as an arg. 
The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.

I: A NUMBER 
O: AN ARRAY

1. define the function that takes in a number.
  2. declare a NEW ARRAY variable.
    3. LOOP through the number from 0 to less than number. 
    3.1 find IF the indice is divisble by either 3 OR 5 !NOT both
      4.1 IF the number is divisble by 3 OR 5 store it in the NEW array.
        5. Return the new Array.
*/

let fizzBuzz = function(max){
  let newArray  = [];
  for(let i = 0; i < max; i++){
    if((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)){
      newArray.push(i);
    }
  }
  return newArray;
}


// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function isPerfectSquare that accepts a number as an argument. 
The method should return a boolean indicating whether or not the argument is a perfect square. 
A perfect square is a number that is the product of some number multiplied by itself. 
For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares; 35 is not a perfect square.

I: A NUMBER
O: A BOOLEAN

1. write the function isPerfectSquare that takes in a number.
  2. 
*/

let isPerfectSquare = function(num){
  for(i = 1; i <= num; i++){
      if(i * i === num){
        return true;
      }
  }
  return false;
}




// console.log(isPerfectSquare(1))     // true
// console.log(isPerfectSquare(4))     // true
// console.log(isPerfectSquare(64))    // true
// console.log(isPerfectSquare(100))   // true
// console.log(isPerfectSquare(169))   // true
// console.log(isPerfectSquare(2))     // false
// console.log(isPerfectSquare(40))    // false
// console.log(isPerfectSquare(32))    // false
// console.log(isPerfectSquare(50))    // false
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2). 
The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.

I: THREE arguments (MAX, NUM1, NUM2)
O: AN ARRAY

1. define the function dynamicFizzBuzz 
  2. declare a NEW ARRAY variable.
    3.loop through the index thats LESS THAN the max. 
      3.1 See IF the the indices are divisble by NUM1 and NUM2 but !NOT both.
        4. IF it is then PUSH that number to the NEW ARRAY. 
          5. return the NEW ARRAY.
*/

let dynamicFizzBuzz = function(max, num1, num2){
  let newArray = [];
  for(let i = 1; i < max; i++){
    if ((i % num1 === 0 && i % num2 !== 0) || (i % num2 === 0 && i % num1 !== 0)){
      newArray.push(i);
    }
  }
  return newArray;
}



// console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
// console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ] 
/*---------------------------------------------------------------------------------------------------------------------------*/
/* 
Write a function evenNumbers(max) that takes in a number as an arg. 
The function should return an array containing all positive, even numbers that are less than max. 

I: An Array
O: a NEW Array
*/

let evenNumbers = function(max){
  let newArray = [];
  for (let i = 1; i < max; i++){
    if(i % 2 === 0){
      newArray.push(i);
    }
  }
  return newArray;
}


// console.log(evenNumbers(7)); // [ 2, 4, 6 ]
// console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
// console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/* 
Write a function factorsOf(num) that takes in a number as an arg. 
The method should return an array containing all positive numbers that are able to divide into num with no remainder. 

Define this function using function expression syntax.

I: A NUMBER
O: A NEW ARRAY
*/

let factorsOf = function(number){
  let newArray = [];
  for (let i = 1; i <= number; i++){
    console.log(i);
    if(number % i === 0){
      newArray.push(i);
    }
  }
  return newArray;
}

// console.log(factorsOf(5)); // [ 1, 5 ]
// console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
// console.log(factorsOf(9)); // [ 1, 3, 9 ]
// console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
// console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
// console.log(factorsOf(2017)); // [ 1, 2017 ]
/*---------------------------------------------------------------------------------------------------------------------------*/
/* 
Write a function pitPat(max) that accepts a number as an arg. 
The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.

I: A NUMBER
O: A NEW ARRAY

1. define the function that takes in a number.
  2. declare a NEW ARRAY variable.
    3. loop through the indice's of number ( <= )
    3.2 see IF indice is divisble by 4 || 6 !NOT both. 
    3.3 IF it is then PUSH to new Array.
      4.return the NEW ARRAY.
*/

let pitPat = function(number){
  let newArray = [];
  for (let i = 1; i <= number; i++){
    if ((i % 4 === 0 && i % 6 !== 0) || (i % 6 === 0 && i % 4 !== 0)){
      newArray.push(i)
    }
  }
  return newArray;
}

// console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
// console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
/*
Write a function mostVowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.

I: A sentence string
O: a word string

1.define a function mostVowels that takes in a sentence.
  2. declare VOWELS variable.
    3. .SPLIT the sentence into an ARRAY
      4. loop through the arrays [i]ndex. 
        5.loop through the second arrays [i + 1] ndex words.
        5.2 see IF the arrays[index] vowels are >GREATER than the word before. 
          6. 

*/

let mostVowels = function(sentence){
  let vowels = 'aeiou';
  let splitSen = sentence.split(' ');  // ['what', 'a', 'wonderful', 'life']
  for(let i = 0; i < splitSen.length; i++){
    let word1 = splitSen[i];
    for(let j = i + 1; j < splitSen.length; j++){
      let word2 = splitSen[j];
      if(vowels.includes(word1) > vowels.includes(word2)){
        let foundWord = splitSen.join('')
        return foundWord;
      }
    }
  }
}


// console.log(mostVowels("what a wonderful life")); // "wonderful"
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
THESE NEXT PROBLEMS ARE A LITTLE BIT HARDER GOING ON ;)
*/
/*---------------------------------------------------------------------------------------------------------------------------*/

/* 
Write a function pairProduct that accepts an array of numbers and a product as arguments. 
The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. 
You may assume that the input array contains unique elements.

I: AN ARRAY of NUMBERS, and A PRODUCT
O: A BOOLEAN

1. define the function pairProduct that takes in an array and a number. 
  2. 1st LOOP should start at index 0 up to array LENGTH
    2.2 2nd LOOP should also start at 0.
      3. see IF loop1 + loop2  === number. 
        3.2 IF it does return true.
*/

let pairProduct =  function(array, number){
  for(let i = 0; i < array.length; i++){
    let number1 = array[i];
    for(let j = 1; j < array.length; j++){
      let number2 = array[j];
      if( number1 * number2 === number){
        return true; 
      } 
    }
  }
  return false;
}

// console.log(pairProduct([4, 2, 5, 8], 16))    // true
// console.log(pairProduct([8, 1, 9, 3], 8))     // true
// console.log(pairProduct([3, 4], 12))          // true
// console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
// console.log(pairProduct([4, 2, 5, 7], 16))    // false
// console.log(pairProduct([8, 4, 9, 3], 8))     // false
// console.log(pairProduct([3], 12))             // false

/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function strangeSums that accepts an array of numbers as an argument. 
The method should return a count of the number of distinct pairs of elements that have a sum of zero. 
You may assume that the input array contains unique elements.

I: AN ARRAY
O: A NUMBER (COUNT)

1. Define the function strangeSums that takes in a array.
  2. declare a COUNTER variable.
    3. LOOP through the 1st array (i)
    3.2 LOOP through the array again (j)
      4. see IF array)(i) + array(j) === 0
        5. IF it does counter += 1;
        return counter;
*/
let strangeSums = function(array){
  let counter = 0;
  for(let i = 0; i < array.length; i++){
    let number1 = array[i];
    for(let j = i + 1; j < array.length; j++){
      let number2 = array[j];
      if(number1 + number2 === 0){
        counter += 1;
      }
    }
  }
  return counter;
}

// console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
// console.log(strangeSums([42, 3, -1, -42]));      // 1
// console.log(strangeSums([-5, 5]));               // 1
// console.log(strangeSums([19, 6, -3, -20]));      // 0
// console.log(strangeSums([9]));  
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Write a function unique that accepts an array as an argument. 
The function should return a new array containing elements of the input array, without duplicates.

I: AN ARRAY
O: A NEW ARRAY

1. Define the function unique that takes in an array.
  2. declare a NEW ARRAY variable.
    3. 1st loop through the index [i]
    3.1. 
    3.2 2nd loop through the index [j]
      4. see IF index[i] !== index[j]
      4.2 IF it does === skip it
      4.3 IF it does !NOT then newArray.push the value.
        5. return the newArray.
*/

let unique = function(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      console.log(array[i])
      console.log("   " + array[j])
      if(!newArray.includes(array[i])){
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
/*---------------------------------------------------------------------------------------------------------------------------*/
/*
Define a function called intersect that takes in two array parameters and
returns a new array containing the elements common to both arr1 and arr2.

I: two ARRAYS
O: one ARRAY

1.define the function intersect that takes in TWO ARRAYS
  2.declare a newARRAY variable.
    3. loop through the 1st array
    3.2 loop through the second array
      4.see IF array[i] and array[j] === the same
      4.2 IF they do then Push to the new array.
        5. return the newArray.
*/

let intersect = function(array1, array2){
  let newArray = [];
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      if (array1[i] === array2[j]){
        newArray.push(array1[i])
      }
    }
  }
  return newArray;
}

// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); //=> [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z']));      //=> []