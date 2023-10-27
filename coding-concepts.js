// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: ["Hotel" "2023"]
// b) Verify and explain:It would output an array divided by the " " because of the method .split which splits an array depending on what value is inputed

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: error 
// b) Verify and explain: code would output and error because greeter is not invoked

//a) Answer: undefined
//b) because there was no error in the code but greeter was not invoked thats why it gave us an undefined output

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11,13,15]
// b) Verify and explain: output would be [11,13,15] because .filter would run through the array to create a different array with the results of the function invoked which in our case is (number) => numeber % 2 !==0) which will divied the number in the array looking for numbers with remainders and returning those numbers back to the array

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: it would output Javascript because it is asking for (myCodingSkills) with the key (languages) and at the [0] index which is JavaScript in our case

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: would have the outpute of "George" because it is only console loging (learnStudent) which is a variable on its own

//a) Answer: Learn { student: 'George', cohort: 'Hotel', year: 2023 }
//b) Explanation: because it is adding into the class Learn it is loggin the new equivalent of -Learn-
