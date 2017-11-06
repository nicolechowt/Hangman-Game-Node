var inquirer = require("inquirer");
var Word = require("./wordConstructor.js");
var GetWord = require("./words.js");

var question = [
  {
    type: "input",
    name: "guess",
    message: "Guess a Letter!"
  }
];


var hangmanGame ={ 
  // initialize
  wordForThisRound: null,
  guessesLeft: 10,
  guessedLetters: [],

  // get word from words.js
  word: GetWord.myWords.words,

  startGame: function (){
    // storing "this" at function definition time
    // rather than function execution time to 
    // retain its value
    // "that" here refers to the hangManGame obj
    // "this" here would refer to startGame obj
    var that = this;
    if(this.guessedLetters.length !== 0){
      this.guessedLetters = [];
    }
    console.log("Welcome!");
    that.newGame();
  },

  newGame: function(){
    var that = this;
    console.log("A Brand New Game!!");
        var randomVal = Math.floor(Math.random()*this.word.length);
        this.wordForThisRound = new Word(this.word[randomVal]);
        console.log("FOR DEMO PURPOSES: " + this.wordForThisRound.wordContent);
        this.wordForThisRound.pushLetters();
        console.log(this.wordForThisRound.showWord());
        this.askAgain();
  },

  askAgain: function() {
    var that = this;
    inquirer.prompt(question).then(function(answer){

      // initialize
      var guessedAlready = false;
      var letterFromUser = answer.guess;

        for(var i=0; i<that.guessedLetters.length;i++){
          if (letterFromUser === that.guessedLetters[i]) {
            guessedAlready = true;
          }
        }

        if (guessedAlready === false){
          that.guessedLetters.push(letterFromUser);

          var foundLetter = that.wordForThisRound.checkLetter(letterFromUser);

            if (foundLetter===0){
              console.log("Sorry,try again.");
              that.guessesLeft--;
              console.log("You have " + that.guessesLeft + " guesses left.");
              console.log(that.wordForThisRound.showWord());
              console.log("Letters guessed: " + that.guessedLetters);
            } else {
                console.log("Yay!");
                if(that.wordForThisRound.didWeSolveWord() === true ){
                  console.log(that.wordForThisRound.showWord());
                  console.log("You win!");
                  that.resetGuess();
                  that.startGame();
                } else {
                  console.log("You have " + that.guessesLeft + " guesses left.");
                  console.log(that.wordForThisRound.showWord());
                  console.log("letters guessed " + that.guessedLetters);
                }
            }

            if(that.guessesLeft > 0 && that.wordForThisRound.wordSolved === false) {
              that.askAgain();
            } else if (that.guessesLeft===0){
              console.log("Game over!");
              console.log("The word was: " + that.wordForThisRound.wordContent);
              that.startGame();
            }
        } else {
          console.log("You have guessed that letter already.");
          that.askAgain();
        }
    });
},        
    
  resetGuess: function() {
    var that=this;
    that.guessesLeft = 10;
  }
}

hangmanGame.startGame();
