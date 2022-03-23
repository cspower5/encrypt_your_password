// Assignment code here
var password = "";
var charset = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upperset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Funciton Starts Here
function generatePassword()
  passlength = prompt("How long do you want the password to be?");
  //verify if he length is at least 8 characters
  while(passlength < 8 || passlength > 125) {
      passlength = prompt("Password must be between 8 and 125 characters long")
  };
  //Confirming charater types for the password
  var passwordInfo = {
    passchar: confirm("Do you want to use special characters?"),
    passupper: confirm("Do you want to use Upper Case Letters?"),
    passlower: confirm("Do you want to use lower case letters?")
  };
  //verify that at least one of the types returns true.
  while(!passwordInfo.passchar && !passwordInfo.passupper && !passwordInfo.passlower) {
    alert("You Must choose at least 1 character type!!")
    passwordInfo.passchar = confirm("Do you want to use special characters?")
    passwordInfo.passupper = confirm("Do you want to use Upper Case Letters?")
    passwordInfo.passlower = confirm("Do you want to use lower case letters?")
  };

  console.log(passlength);
  console.log( passwordInfo.passchar, passwordInfo.passupper, passwordInfo.passlower);
  //create an if statment to verify if the type is true or false.
  var password = [];
  while(var i > 0; i = passlength; i--;) {
    if(passwordInfo.passchar) {
      password = charset.push([Math.floor(Math.random() * items.length)]);
    };
    if(passwordInfo.passupper) {
      password = upperset.push([Math.floor(Math.random() * items.length)]);
    };
    if(passwordInfo.passlower) {
      password = lowerset.push([Math.floor(Math.random() * items.length)]);
    };
  };
  console.log(password);
};



generatePassword();





//if all confirmatiion are false restart. (&&)
//Build an array for the each type.
//Generate a password based on the chosen types.
//
//return the password


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
