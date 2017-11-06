var Letters = require("./letterConstructor.js")

var Word = function (newWord){
	var that = this;
	this.wordContent = newWord;
	this.letters = [];
	this.wordSolved = false;

	this.pushLetters = function (){
		for (var i=0;i<that.wordContent.length;i++){
			var newLetter = new Letters(that.wordContent[i]);
			this.letters.push(newLetter);
		}
	};

	this.didWeSolveWord = function (){
		function isInWord(element){
			return element.show === true;
		}

		if(this.letters.every(isInWord)) {
			this.wordSolved = true;
			return true;
		}
	}

	this.checkLetter = function(guessedLetter){
		var doesLetterExist = 0;

		this.letters.forEach(function(eachLetterInLettersArr){
			if(eachLetterInLettersArr.letterContent === guessedLetter){
				eachLetterInLettersArr.show = true;
				doesLetterExist++;
			}
		})
		return doesLetterExist;
	};

	this.showWord = function (){
		var display = "";
		that.letters.forEach(function(eachLetterInLettersArr){
			var currentLetter = eachLetterInLettersArr.showLetter();
			display+=currentLetter;
		});

		return display;
	};
}

module.exports = Word;