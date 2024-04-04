// take a sentence as input
const sentence = "the start of the sentence must start with a capital";

// reverse the input sentence
const reversedSentence = sentence.split(" ").reverse().join(" ");

// capitalize the first letter of the reversed sentence
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);

const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

// Pull names out of the data array
const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);

// Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);

