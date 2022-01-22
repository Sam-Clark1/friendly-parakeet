// Assignment code here

var generatePassword = function() {
  // resets generated password from previous attempts
  charType.chosenChars = "";
  charType.genPass = "";
  // calls function that prompts choosing desired password legnth
  passwordLength();
  // calls method inside charType object to begin the process of choosing character types
  charType.lowerChar();
  console.log(charType.genPass.length)
  // Displays generated password in the box on the website
  return charType.genPass;
  
}
// function for asking for desired password length
var passwordLength = function() {
  passLength = window.prompt("Enter desired password legnth (must be between 8 and 128 characters long");
  if (passLength >= 8 && passLength <= 128 ) {
    
  }
  else {
    window.alert("Invalid, please try again.");
    passwordLength();
  }
}

// Object that holds the properties and methods of choosing character types
var charType = {
lower: "abcdefghijklmnopqrstuvwxyz",
upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
number: "1234567890",
special: " !'#$%&()*+,-./:;<>=?@[]{}^_|~",
chosenChars: "",
genPass:"",
// methods that ask for desired types of characters and concatenates the strings that include those characters to be used to generate the password. 
lowerChar:  function() {
lChar = window.prompt("should it inclue lower case characters (y/n)?").toLocaleLowerCase().trim();
if (lChar === "y"){
  window.alert("You have chosen to include lower case characters.");
  this.chosenChars += this.lower;
  this.upperChar();
}
else if (lChar === "n") {
  window.alert("You have chosen not to include lower case characters.");
  this.upperChar();
}
else {
  window.alert("Invalid, please try again.");
  this.lowerChar();
}
},

upperChar:  function() {
  uChar = window.prompt("should it inclue upper case characters (y/n)?").toLocaleLowerCase().trim();
  if (uChar === "y"){
    window.alert("You have chosen to include upper case characters.");
    this.chosenChars += this.upper;
    this.numberChar();
  }
  else if (uChar === "n") {
    window.alert("You have chosen not to include upper case characters.");
    this.numberChar();
  }
  else {
    window.alert("Invalid, please try again.");
    this.upperChar();
  }
  },

numberChar:  function() {
  nChar = window.prompt("should it inclue numbers (y/n)?").toLocaleLowerCase().trim();
  if (nChar === "y"){
    window.alert("You have chosen to include numbers.");
    this.chosenChars += this.number;
    this.specialChar();
  }
  else if (nChar === "n") {
    window.alert("You have chosen not to include numbers.");
    this.specialChar();
  }
  else {
    window.alert("Invalid, please try again.");
    this.numberChar();
  }
  },

specialChar:  function() {
  sChar = window.prompt("should it inclue special characters (y/n)?").toLocaleLowerCase().trim();
  if (lChar === "n" && uChar === "n" && nChar === "n" && sChar === "n"){
    window.alert("Must pick at least one character type, please try again.");
    this.lowerChar();
  
  }
  else if (sChar === "y"){
    window.alert("You have chosen to include special characters.");
    this.chosenChars += this.special;
    passwordGenerator(); 
 
  }
  else if  (sChar === "n") {
    window.alert("You have chosen not to include special characters.");
    passwordGenerator();
  }
  else {
    window.alert("Invalid, please try again.");
    this.specialChar();
  }
  }
}
// function that contains the for loop that takes the concatenated chosen characters and chooses randomly single characters from that string until the length reaches the inputed length
var passwordGenerator = function() {
  for (var i = 0; i < passLength; i++) {
    charType.genPass += charType.chosenChars.charAt(Math.floor(Math.random() * charType.chosenChars.length))
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
