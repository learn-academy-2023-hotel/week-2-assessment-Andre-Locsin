// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:
// jest anatomy to run jest
// //describe allows us to set our paremters
// describe('multipliedByThree', () => {
//     // it - informs us of what the function should be doing
//     it('takes in an array and multiplies the values by 3', () => {
//         // input: array of numbers
//         const numsArray1 = [6, 7, 8, 9, 10]
//         // Expected output: [18, 21, 24, 27, 30]
//         const numsArray2 = [24, 27, 30, 33, 36]
//         // Expected output: [72, 81, 90, 99, 108]
//         // output: array with all numbers multiplied by three
//     // expect allows us to invoke our paremeter and compare it to the outputed array for the jest test
//       expect(multipliedByThree(numsArray1)).toEqual([18, 21, 24, 27, 30])
//       expect(multipliedByThree(numsArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })
  
//   // b) Create the function that makes the test pass.
  
//   // create a function that takes in an array of numbers
//   const multipliedByThree = (arr) => {
//     // iterate using .map
//     return arr.map((value) => {
//         // return product in the new array created by .mapx
//         //return an array with all the numbers multiplied by 3
//         return value * 3
//     })
//   }

// Pseudo code:




// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


// Function to check if a number inside an object is evenly divisible by three
// const checkDivisibileByThree = (divisible) => {
//   const { number } = divisible
//   if (number % 3 === 0) {
//     return `${number} is divisible by 3`
//   } else {
//     return `${number} is not divisible by 3`
//   }
// }

// // jest test using describe
// describe('Check Divisibile By Three', () => {
//   const object1 = { number: 15 }
//   // Expected output: "15 is divisible by three"
//   const object2 = { number: 0 }
//   // Expected output: "0 is divisible by three"
//   const object3 = { number: -7 }
//   // Expected output: "-7 is not divisible by three"
// // jest test using it
//   it('should return "15 is divisible by three"', () => {
//     //jest test using expect with
//       expect(checkDivisibileByThree(object1)).toBe("15 is divisible by 3")
//   })

//   it('should return "0 is divisible by three"', () => {
//       expect(checkDivisibileByThree(object2)).toBe("0 is divisible by 3")
//   })

//   it('should return "-7 is not divisible by three"', () => {
//       expect(checkDivisibileByThree(object3)).toBe("-7 is not divisible by 3")
//   })
// })

// // Pseudo code:
// // a) Create a test with expect statements for each of the variables provided.
// // b) Create the function that makes the test pass.
// // c) Create the anatomy of a Jest Test with describe statement to set a parameter
// // d) Create a -it- Jest Test to inform us what the describe statement should be doing
// e) Create an -expect- Jest Test to have a argument to invoke
  
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:


// a) Create a test with expect statements for each of the variables provided.
// Function to capitalize all words in an array
function capitalizeWords(wordArray) {
  // .map to use on all values of the array
  // .charAt(0) to pinpoint the first letter and index of each string
  // .toUppercase() once we are able to access each string from the array we can target the first letter with .charAt to capitaliaze it
  //  .slice() method returns selected elements in an array as a new array
  return wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))
}

// Jest test with describe, it, and expect statements
describe('Capitalize Words', () => {
  
  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
  // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

  it('capitalize all words in the array', () => {
      expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
  })

  it('capitalize all words in the array', () => {
      expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

