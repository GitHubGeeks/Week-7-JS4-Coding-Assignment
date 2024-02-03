// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages)

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.




let result = ages[ages.length - 1] - ages[0];
console.log(result);

// Add a new age to the array
let newAge = 45;
ages.push(newAge);

// Repeat the subtraction for the updated array
let resultDynamic = ages[ages.length - 1] - ages[0];
console.log(resultDynamic);

// Use a loop to calculate the average age
let sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
}

let averageAge = sumOfAges / ages.length;
console.log(`Average age: ${averageAge}`);


// Create an array called names
let names = ["Kelly", "Sam", "Kate"];

// Create a new array called nameLengths
let nameLengths = [];

// Write a loop to iterate over the names array and add the length of each name to the nameLengths array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log("Name lengths:", nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all elements
let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}

console.log("Sum of name lengths:", sumOfNameLengths);

// Write a function to concatenate a word to itself n number of times
function concatenateWord(word, n) {
    return word.repeat(n);
}

console.log("Concatenated word:", concatenateWord('Hello', 3));

// Write a function that returns a full name
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log("Full name:", getFullName('John', 'Doe'));

// Write a function that returns true if the sum of numbers in an array is greater than 100
function isSumGreaterThan100(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0) > 100;
}

console.log("Sum greater than 100:", isSumGreaterThan100([30, 40, 35]));

// Write a function that returns the average of numbers in an array
function calculateAverage(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

console.log("Average:", calculateAverage([10, 20, 30]));

// Write a function that compares the averages of two arrays
function compareAverages(array1, array2) {
    return calculateAverage(array1) > calculateAverage(array2);
}

console.log("Average of array1 > Average of array2:", compareAverages([10, 20, 30], [5, 15, 25]));

// Write a function called willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log("Will buy a drink:", willBuyDrink(true, 15.00));

// Create a function that finds the maximum value in an array
function findMaxValue(arr) {
    return Math.max(...arr);
}

console.log("Maximum value:", findMaxValue([5, 10, 8, 15]));
