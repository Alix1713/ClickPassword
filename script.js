// Assignment Code
var generateBtn = document.querySelector("#generate");

var wantsUppercase //needed variable to catch line 22
var wantsLowercase
var wantsNumbers
var wantsSpecial
var characters = "Characters";
var lettersup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLow = "abcdefghijklmnopqrstuvwxyz";
var numerical = "0123456789";
var special = "!@#$%^&*";//Shift 1-8 are specials

var chooseLength //no brackets since one answer
var charSet =[] //brackets to create an array to catch items
console.log(characters)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//when click happens this happens V
chooseLength = prompt("Please choose a number between 8 and 128 characters");
if (chooseLength < 8 || chooseLength > 128) {
  alert("Needs More Characters/Too many characters")//needs else
  } else { // ^ initial check
    //listening for event from user
console.log(promptone)
wantsUppercase = confirm("Do you want uppercase letters?"); // prompt opens a box to enter something
 {
  if (wantsUppercase === true) { //no confirm again, use triple equals!!!!
charSet.push("uppercase")
  }
  wantsLowercase = confirm("Do you want lowercase letters?"); //confirm is a yes or no use confirm not prompt
  {
    if (wantsLowercase===true){
      charSet.push("lowercase")
  }
  wantsNumbers = confirm("Do you want numbers?");
  {
    if (wantsNumbers ===true){
      charSet.push("numbers")
  }
  wantsSpecial = confirm("Do you want special characters?");
{
  if (wantsSpecial===true){
    charSet.push("special")
}}
  function writePassword() {
    var length = chooseLength
    charSet = charSet
    retVal = "";
    for (var i = 0, n = charSet.length; i < length; ++i) { ////charset
      retVal += charSet.charAt(Math.floor(Math.random() * n)); ///charset
    }
    return retVal;
  }
}
  var generateBtn = document.querySelector("generate");
// ^ has to be above event listener due to "generate"
// V creates variable "generate"
  generateBtn.addEventListener('click', function (writePassword) {
    console.log(generateBtn); //takes in type of event in this case its click
  } //function is what the event does



//commment out the basic structure of how the program should run
//write out every single step
