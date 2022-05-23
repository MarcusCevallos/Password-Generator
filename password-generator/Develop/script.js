var characterlength = 8;
var choiceArr = [];

var specialCharArr = ['@','#','!','$','%','^','&','*','(',')','-','_','=','+','?','!'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr =['1','2','3','4','5','6','7','8','9','0',]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

function getPrompts() {
  choiceArr = [];
  characterlength = parseInt(prompt("How long do you want your password to be? (8 - 128 chracters")); //NaN

  if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }

  if (confirm("Would you like uppercase letters in your password")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Would you like special character in your password")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Would you like numbers in your password")) {
    choiceArr = choiceArr.concat(numberArr);
  }
}