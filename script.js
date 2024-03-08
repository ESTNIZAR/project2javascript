// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.

function reverseString(str){ 
	const reversedString = 
	str.split("").reduce((acc, char) => char + acc, ""); 
	console.log(reversedString); 
} 

reverseString("TypeScript"); 
// Count Characters: Create a function that counts the number of characters in a string.
var str = "Hello, world!";

var count = 0;

for (var i = 0; i < str.length; i++) {

    count++;

}

console.log(count); // prints 13 to the console

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
//string arry function
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for empty array
    }
    
    let max = arr[0]; // Initialize max to the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }
    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for empty array
    }
    
    let min = arr[0]; // Initialize min to the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if a smaller element is found
        }
    }
    return min;
}
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage:
let numbers = [3, 7, 2, 9, 1, 5];

// Filter even numbers
let evenNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers); // Output: Even numbers: [2]

// Filter numbers greater than 5
let greaterThanFive = filterArray(numbers, function(num) {
    return num > 5;
});
console.log("Numbers greater than 5:", greaterThanFive); // Output: Numbers greater than 5: [7, 9]
//Mathematical Functions:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    } else {
        return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
    }
}
function isPrime(number) {
    if (number <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    if (number <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false; // Exclude multiples of 2 and 3
    }
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false; // Exclude multiples of i and i+2
        }
    }
    return true;
}
function generateFibonacci(numTerms) {
    let fibonacciSequence = [];
    if (numTerms === 1) {
        fibonacciSequence.push(0);
    } else if (numTerms >= 2) {
        fibonacciSequence.push(0, 1); // First two terms of Fibonacci sequence
        for (let i = 2; i < numTerms; i++) {
            let nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
            fibonacciSequence.push(nextTerm);
        }
    }
    return fibonacciSequence;
}