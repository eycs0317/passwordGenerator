
// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerCaseBase = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseBase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbersBase = '0123456789';
let symbolBase = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
