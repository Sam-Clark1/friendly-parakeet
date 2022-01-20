// Assignment code here

var generatePassword = function() {
  passwordLength();

  
}

var passwordLength = function() {
  passLength = window.prompt("Enter desired password legnth (must be between 8 and 128 characters long");
  if (passLength >= 8 && passLength <= 128 ) {
    charType.lowerChar();
  }
  else {
    window.alert("Invalid, please try again.");
    passwordLength();
  }
}


var charType = {
lower: "abcdefghijklmnopqrstuvwxyz",
upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
number: "1234567890",
special: " !'#$%&()*+,-./:;<>=?@[]{}^_|~",

lowerChar:  function() {
window.prompt
},

upperChar: function() {

},

numberChar: function() {

},

specialChar: function() {

}
}


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
