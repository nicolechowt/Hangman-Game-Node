# HW - {Advanced JavaScript Assignment: Constructor Hangman}

## Description
#### Create a hangman game using Node.js and JavaScript constructors.

## To Use The App
#### Node.js must be installed
#### CLI “npm install” for package dependencies
#### CLI “node hangman” to start game

## Requirements
#### The completed game should meet the following criteria:

1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

2. Create the following constructor functions:

  * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

  * **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

3. Keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

4. Each constructor function should be in its own file and be exported and required wherever needed.


## Technologies Used
-Node.js
-Inquirer NPM Package
