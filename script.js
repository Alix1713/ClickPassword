// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = "Characters";
var lettersup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letterslow = "abcdefghijklmnopqrstuvwxyz";
var numerical = "0123456789";
var special = "!@#$%^&*";//Shift 1-8 are specials
var chooseLength
console.log (characters)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


prompt ("Please choose a number between 8 and 128 characters");
if (chooseLength < 8 || chooseLength > 128){
chooseLength = 5
};

 if confirm ("Do you want uppercase letters?")
   ==true; {
    lettersup = lettersup.concat
    //lettersup.concat? or something else
  } 
  //console.log lettersup.concat??
  if letterslow = prompt alert4
  if (confirm.alert4 ==true;) {
    letterslow = letterslow.concat
  }
  if numerical = prompt alert5
  if (confirm.alert5 ==true;) {
    numerical = numerical.concat
    }
  if special = prompt alert6
  if (confirm.alert6 ==true;) {
    special = special.concay
  }


alert1.textContent="Needs more Characters";
alert2.textContent="Too Many Characters";
alert3.textContent="Do you want uppercase letters?";
alert4.textContent="Do you want lowercase letters?";
alert5.textContent="Do you want numbers?";
alert6.textContent="Do you want special characters?";
//is this where I list my var? does it need to be above?

function writePassword() {
  var length = 8,
      charset = //?????
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) { ////charset
      retVal += charset.charAt(Math.floor(Math.random() * n)); ///charset
  }
  return retVal; 
}

  var generateBtn = document.querySelector("generate");


generateBtn.addEventListener('click', function(newPassword){
    console.log (generateBtn);
});
