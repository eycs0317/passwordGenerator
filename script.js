// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

let lowerCaseBase = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseBase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbersBase = '0123456789';
let symbolBase = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';


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

  //prompt user
  var userInputLength = prompt('Please input Password length between 8-128')
  userInputLength = Number(userInputLength);
  if(userInputLength <= 128 && userInputLength >= 8 && Number.isInteger(userInputLength)) {
    userRequestLength = userInputLength;
    userRequirment.lowerCase = confirm('Include lowercase?')
    userRequirment.upperCase = confirm('Include Uppercase?')
    userRequirment.number = confirm('Include Number?')
    userRequirment.symbol = confirm('Include Symbol?')

    //Create a array with all characters that user required
    for(let key in userRequirment) {
      if(userRequirment[key]) {
        if(key[0] === 'l') {
          userRequestChar.push(lowerCaseBase)
        } else if(key[0] === 'u') {
          userRequestChar.push(upperCaseBase)
        } else if(key[0] === 'n') {
          userRequestChar.push(numbersBase)
        } else {
          userRequestChar.push(symbolBase)
        }
      }
    }

    //Make sure user pick at least one type of characters
    if(userRequestChar.length === 0) {
      alert('You need to have at least one option')
    } else {
      // Generate random password
      for(var i = 0; i < userRequestLength; i++) {
        let randomChar = randomNumberFunc(userRequestChar);
        let randomIndex = randomNumberFunc(userRequestChar[randomChar]);
        password += userRequestChar[randomChar][randomIndex]
      }
      // Display the password
      passwordText.innerText = password;
    }
  } else {
    alert('Invalid Input')
  }
}

//function to create random number base on the length of the array/string
const randomNumberFunc = (input) => {
  let randomNumber = Math.floor(Math.random() * input.length);
  return randomNumber;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
