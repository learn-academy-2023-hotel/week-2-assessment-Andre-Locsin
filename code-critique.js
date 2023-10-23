// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.


function findFirstVowelIndex(inputString) { 
const vowels = ['a', 'e', 'i', 'o', 'u']; // List of vowels
const lowercaseString = inputString.toLowerCase(); // Convert the input string to lowercase for case insensitivity

for (let i = 0; i < lowercaseString.length; i++) {
    if (vowels.includes(lowercaseString[i])) { // Check if the character is a vowel
        console.log(`Index of the first vowel: ${i}`);
        return;
    }
}

console.log('No vowels found in the string.'); // If no vowels are found in the string
}

// Example usage
const exampleString = 'Hello World';
findFirstVowelIndex(exampleString);


// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

//still using old method of function not using ES6 arrow has unecessary semi columns the output is what is to be expected and correct. I like that it gave an example run for the console.log to check what the output would be. I dislike all the excess syntaxes and uncertain why the return code on line 17 is there. I would add an else statement for a catch all.