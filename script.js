// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);(){
  
let passwordLength = prompt (alert.7)
//is this where I list my var?//password variables //global variables
var characters = document.querySelector("Characters");
var lettersup = document.querySelector("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var letterslow = document.querySelector("abcdefghijklmnopqrstuvwxyz");
var numerical = document.querySelector("0123456789");
var special = document.querySelector("!@#$%^&*");//Shift 1-8 are specials

//betwween 8-128
if(chars <8) {
  alert1("Needs more Characters");
}else if (chars >128){
  alert2 ("Too many Characters");
} else //do I need an else statement? if number between 8-128
{
  alert3 ("Do you want uppercase letters?");}//how to make it go to uppercase?

  var lettersup "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if confirm.alert3 ==true; {
    lettersup 
  }
//uppercase
confirm alert3

//lowercase
confirm alert4

//special
confirm alert5

//numbers
confirm alert6

//alerts?
alert7.textContent="Please choose a number between 8 and 128 characters"
alert1.textContent="Needs more Characters";
alert2.textContent="Too Many Characters";
alert3.textContent="Do you want uppercase letters?";
alert4.textContent="Do you want lowercase letters?";
alert5.textContent="Do you want numbers?";
alert6.textContent="Do you want special characters?";

function generate() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//code snippet from website
if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  //We use the method createElement() to create new elements, as follows:
  var tag = document.createElement(tagName);

  var completePassword = ' ';
  var elements = [
    characters, lettersup, letterslow, numerical, special
  ];
  elements.forEach