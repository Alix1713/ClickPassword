//Lines 2 and 4 point to the html element by its id and create a variable to use later on in the code
var generateBtn = document.getElementById("generate");
var textArea = document.getElementById("password");
var password = "";
//these are undefined until they are assigned value
var wantsUppercase;
var wantsLowercase;
var wantsNumbers;
var wantsSpecial;
var passwordLegenth = 0;
//these are variables that point to the string value of what they can be
var lettersup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLow = "abcdefghijklmnopqrstuvwxyz";
var numerical = "0123456789";
var special = "!@#$%^&*"; //Shift 1-8 are specials
var chooseLength; //no brackets since one answer
var charSet = ""; //brackets to create an array to catch items

function startPassword() {
  var chooseLength = prompt(
    "Please choose a number between 8 and 128 characters"
  );
  if (chooseLength < 8 || chooseLength > 128) {
    alert("Needs More Characters/Too many characters"); //needs else
  } else {
    wantsUppercase = confirm("Do you want uppercase letters?"); // prompt opens a box to enter something
    console.log(wantsUppercase);
    if (wantsUppercase === true) {
      //no confirm again, use triple equals!!!!
      charSet += lettersup;
    }
    wantsLowercase = confirm("Do you want lowercase letters?"); //confirm is a yes or no use confirm not prompt
    if (wantsLowercase === true) {
      charSet += lettersLow;
    }
    wantsNumbers = confirm("Do you want numbers?");
    if (wantsNumbers === true) {
      charSet += numerical;
    }
    wantsSpecial = confirm("Do you want special characters?");
    if (wantsSpecial === true) {
      charSet += special;
    }
    retVal = "";
    for (var i = 0, n = charSet.length; i < chooseLength; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * n)); ///charset
    }
    var newPass = retVal;
    console.log(newPass);
  }
  var showPass = document.getElementById("password");
showPass.value = retVal;
}
//newPass using innerhtml
//display a generated password
// Add event listener to generate button
generateBtn.addEventListener("click", startPassword);
