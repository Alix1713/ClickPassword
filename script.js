// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = "Characters";
var lettersup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLow = "abcdefghijklmnopqrstuvwxyz";
var numerical = "0123456789";
var special = "!@#$%^&*";//Shift 1-8 are specials
var chooseLength
console.log (characters)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


chooseLength = prompt ("Please choose a number between 8 and 128 characters");
if (chooseLength > 8 || chooseLength < 128){
alert ("Needs More Characters/Too many characters")
};
console.log (promptone)
 lettersup = prompt ("Do you want uppercase letters?");
   (lettersup==true); {
  
lettersLow = prompt ("Do you want lowercase letters?");
  (confirm lettersLow==true); {
    
  }
numerical = prompt ("Do you want numbers?");
   (confirm numerical==true); {
  
    }
special = prompt ("Do you want special characters?");
  (confirm special ==true); {
  }

function writePassword() {
  var length = chooseLength
      charset = genList
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
