//no touch
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Button done?
generateBtn.addEventListener("click", function writePassword);
//password variables
var characters="Characters"
var lettersup ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var letterslow ="abcdefghijklmnopqrstuvwxyz"
var numerical ="0123456789"
var special ="!@#$%^&*"
///??
let chars = prompt("")
//Shift 1-8 are specials

//can this be for the whole variable array?
//if 
prompt "How many characters do you Want in your new password?"
if(chars <8) {
  console.log("Needs more Characters");
}else if (chars >128){
  console.log("Too many Characters")
} {alert ("Do you want uppercase letters?")}

if(lettersup) //?
//how to make it go to next?

//if categories
if (lettersup)

if (letterslow)

if (numerical)

if (special)

//hits head on keyboard repeatedly