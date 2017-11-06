var Letters = function(newLetter){
	this.letterContent = newLetter;
	this.show = false;
	this.showLetter = function (){
		if(this.letterContent ===  " "){
			this.show = true;
			return " ";
		}
		if(this.show === false) {
			return "_";
		} else {
			return this.letterContent;
		}

	};

};

module.exports = Letters;