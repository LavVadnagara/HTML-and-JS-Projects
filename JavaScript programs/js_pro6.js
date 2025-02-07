// This code demonstrates two versions of the Fibonacci series:
// 1. The normal Fibonacci series.
// 2. A modified Fibonacci series where each term is transformed by a specific formula.

// Total number of terms to generate in the series
let totalTerms = 10;

// Variables to store the first two terms of the normal Fibonacci series
let firstTermNormal = 0;
let secondTermNormal = 1;
let nextTermNormal;

// Output the first two terms of the normal Fibonacci series
console.log(`Normal Fibonacci Series: \n${firstTermNormal}\n${secondTermNormal}`);

// Loop to generate the remaining terms of the normal Fibonacci series
for (let index = 2; index < totalTerms; index++) {
    // Calculate the next term by summing the previous two terms
    nextTermNormal = firstTermNormal + secondTermNormal;

    // Update the terms for the next iteration
    firstTermNormal = secondTermNormal;
    secondTermNormal = nextTermNormal;

    // Output the calculated term
    console.log(`${nextTermNormal}`);
}

// Variables to store the first two terms of the modified Fibonacci series
let firstTermModified = 0;
let secondTermModified = 1;
let modifiedTerm;

console.log(`\nModified Fibonacci Series: \n${firstTermModified}\n${secondTermModified}`);

// Loop to generate the remaining terms of the modified Fibonacci series
for (let index = 2; index < totalTerms; index++) {
    // Calculate the next term of the Fibonacci series
    nextTermNormal = firstTermModified + secondTermModified;

    // Apply a transformation to the Fibonacci term
    // Here, each term is multiplied by 2 and increased by 2
    modifiedTerm = (nextTermNormal * 2) + 2;

    // Update the terms for the next iteration
    firstTermModified = secondTermModified;
    secondTermModified = modifiedTerm;

    // Output the calculated term
    console.log(`${modifiedTerm}`);
}
