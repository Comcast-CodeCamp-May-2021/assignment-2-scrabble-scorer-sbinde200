// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

//update a program that asks a user for a word and outputs a score. 

//fun fact Scrabble was made 1933 and it was one of the favorite games my grandmother and I would play together. 

const input = require("readline-sync");//This is for collecting user input

// original scoring object used in oldScrabbleScorer
// this is the older point structure which will eventually need to be revamped into a better point structure 
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}; 

// the following function is never edited and is a good example of how the score is calculate for a given word using oldPointStructure


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		  if (oldPointStructure[pointValue].includes(word[i])) {
			 letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  // console.log({letterPoints}); //for testing
	return letterPoints;
 
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  // let enterWord = "";
  enterWord = input.question("Let's play some scrabble!\nEnter a word to score: "); //used the input syntax to ask a question 

  // console.log(oldScrabbleScorer.enterWord); //for testing
  // console.log(oldScrabbleScorer(enterWord));
  return enterWord;
};


let enterWord = ""; // the variable that stores my question response

// function thta will calculate simple score from a provided word
function simpleScore(word) {

  let simplestScore = word.length;
  return simplestScore;

};

// function that will calculate Vowel Bonus score from a provided word
function vowelBonusScore(userWord) {
 let score = 0;
 let vowel = ["a", "e", "i", "o", "u"];
 for (let i = 0; i < userWord.length; i++) {
   if (vowel.includes(userWord[i].toLowerCase())) {
     score += 3;
    } else {
     score += 1;
   }
 }
 return(score);

};

// function that originally calls the oldScrabbleScorer() function, but is later updated to use the newPointStructure (not a part of oldScrabbleScorer())
function scrabbleScore(word) {
 word = word.toUpperCase();
 let letterScore = 0;

 for (let i = 0; i < word.length; i++) {
	  for (const pointValue in newPointStructure) {
      
      if (pointValue.includes(word[i])) {
        letterScore += Number(newPointStructure[pointValue]) 
      }
 
	  }
	}
  // console.log({letterPoints}); //for testing
	return letterScore;

}

const scoringAlgorithms = [ 

  simpleScoreOb = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.	",
  scorerFunction: simpleScore },

  bonusVowelOb = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt. ",
  scorerFunction: vowelBonusScore },

  scrabbleOb = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.	",
  scorerFunction: scrabbleScore }

]

// create new objects (object literal) inside of scoring Algorithms

// each should have:
// property-> name (value provided in table)
// property-> description (value provided in table)
// method-> scorerFunction (value should align with one of the scoring functions (simpleScore, vowelBonusScore, odlScrabbleScorer)


// this function should allow the user to select from a list the three scoring options -> it should return the coinciding object the user has selected

function scorerPrompt(word) {

selectionPrompt = input.question("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

// ** I think the problem you're possibly running into here is that you're calling that scorerFunction and passing it the specific string value of "word"... it's likely only ever scoring "word" as a result. IF you want to use a parameter of word, like you did in your scoring functions, then you need to declare it as a parameter, and make sure it get's passed to this function as an argument. 
if (selectionPrompt === "0") {
  console.log("You entered 0");
  console.log("algorithm name: ", scoringAlgorithms[0].name);
  console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction(word));
  
  // console.log(("algorithm name: ", scoringAlgorithms[0].name);
  // console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction("JavaScript"));

  //DOESNT RETURN APPROPRIATE RESULTS YET
// ** this one is probably actually scoring "userWord" as it's string value. 
} else if (selectionPrompt === "1") {
  console.log("You entered 1");
  console.log("algorithm name: ", scoringAlgorithms[1].name);
  console.log("scorerFunction result: ", scoringAlgorithms[1].scorerFunction(word));

  //DOESNT RETURN APPROPRIATE RESULTS YET

} else if (selectionPrompt === "2") {
  console.log("You entered 2");
  console.log("algorithm name: ", scoringAlgorithms[2].name);
  console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction(word));

  //DOESNT RETURN APPROPRIATE RESULTS YET

} else {
  console.log("You entereed an invalid option");
}

} // you will need to invoke (call) this function inside of the runProgram() function below

// a function that takes an object as a parameter (the oldPointStructure) and returns a new object with lowercase versions of the values
function transform(transformOne) {
  let obejctList = {};
  for(let item in transformOne) { 
    let objectListTwo = transformOne[item] 
    for(let i = 0; i < objectListTwo.length; i++) {
      obejctList[objectListTwo[i]] = Number(item)

    }
  }
  return obejctList;
};



// newPointStructure should be the return value of the transform() function & will be used in scrabbleScore during part C
let newPointStructure = transform(oldPointStructure);


function runProgram() {
  console.clear(); //to clearn the Node warning code 
  let userWord = initialPrompt();
  //  console.log(`Scrabblescore is: ${initialPrompt(userWord)}`)
  scorerPrompt(userWord);

 

   
  // console.log(`Simplescore is: ${simpleScore(userWord)}`);

  // console.log(`VowelBonusScore is: ${vowelBonusScore(userWord)}`);
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

