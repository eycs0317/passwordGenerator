
// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerCaseBase = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseBase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbersBase = '0123456789';
let symbolBase = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

// Write password to the #password input
function writePassword() {
  let password ='';
  let userRequestLength = null;
  let userRequestChar = [];
  let userRequirment = {
    lowerCase: null,
    upperCase: null,
    number: null,
    symbol: null
  }

  var userInputLength = prompt('Please input Password length between 8-128')
  userInputLength = Number(userInputLength);
  if(userInputLength <= 128 && userInputLength >= 8) {
    userRequestLength = userInputLength;
    userRequirment.lowerCase = confirm('Include lowercase?')
    userRequirment.upperCase = confirm('Include Uppercase?')
    userRequirment.number = confirm('Include Number?')
    userRequirment.symbol = confirm('Include Symbol?')
  } else {
    alert('Invalid Input')
  }
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
