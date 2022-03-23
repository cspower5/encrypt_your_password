// Assignment code here

function generatePassword(){
  var passwordInfo = {
    passlength: prompt("How long do you want the password to be?"),
    passchar: prompt("Do you want to use special characters?"),
    passupper: prompt("Do you want to use Upper Case Letters?"),
    passlower: prompt("Do you want to use lower case letters?")
  };
while(passlength < 8 || passlength > 125) {
  generatePassword();
}
while(!passchar && !passupper && !passlower) {
  generatePassword();
};
console.log(passwordInfo.passlength, passwordInfo.passchar);
console.log(passwordInfo.passupper, passwordInfo.passlower)
generatePassword();

//Confirming charater type of the password
//verify if he length is at least 8 characters
// confirm();
// confirm();
// confirm();
// confirm();
//verify that at least one of the types returns true.
//create an if statment to verify if the type is true or false.
//if all confirmatiion are false restart. (&&)
//Build an array for the each type.
//Generate a password based on the chosen types.
//
//return the password
};

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
