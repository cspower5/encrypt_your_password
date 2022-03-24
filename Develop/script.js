// Assignment code here
var password = [];
var randomitem = [];
var totalset = [];
var charset = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upperset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Funciton Starts Here
function generatePassword() {
  //Get the length of the password.
  var passlength = prompt("How long do you want the password to be?");
  parseInt(passlength);
  //verify if the length is at least 8 characters
  while(passlength < 8 || passlength > 125) {
      passlength = prompt("Password must be between 8 and 125 characters long")
  };
  //Confirming charater types for the password
  var passwordInfo = {
    passchar: confirm("Do you want to use special characters?"),
    passupper: confirm("Do you want to use Upper Case Letters?"),
    passlower: confirm("Do you want to use lower case letters?"),
    passnum: confirm("Do you want to use numbers?")
  };
  //verify that at least one of the types returns true.
  while(!passwordInfo.passchar && !passwordInfo.passupper && !passwordInfo.passlower && !passwordInfo.passnum) {
    alert("You Must choose at least 1 character type!!")
    passwordInfo.passchar = confirm("Do you want to use special characters?")
    passwordInfo.passupper = confirm("Do you want to use Upper Case Letters?")
    passwordInfo.passlower = confirm("Do you want to use lower case letters?")
    passwordInfo.passnum = confirm("Do you want to use Numbers?")
  };
   //create if statments to verify if the type is true or false.
    //true true true true
    if(passwordInfo.passchar && passwordInfo.passupper && passwordInfo.passlower && passwordInfo.passnum) {
      totalset = charset.concat(upperset, lowerset, numset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //true true true false
    else if(passwordInfo.passchar && passwordInfo.passupper && passwordInfo.passlower && !passwordInfo.passnum) {
      totalset = charset.concat(upperset, lowerset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //true true false false
    else if(passwordInfo.passchar && passwordInfo.passupper && !passwordInfo.passlower && !passwordInfo.passnum) {
      totalset = charset.concat(upperset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //true false false false
    else if(passwordInfo.passchar && !passwordInfo.passupper && !passwordInfo.passlower && !passwordInfo.passnum) {
      for(let i = 0; i < passlength; i++) {
        password.push(charset[Math.floor(Math.random() * charset.length)]);
      };
      console.log(password);
    }
    //true true false true
    else if(passwordInfo.passchar && passwordInfo.passupper && !passwordInfo.passlower && passwordInfo.passnum) {
      totalset = charset.concat(upperset, numset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //false true true true
    else if(!passwordInfo.passchar && passwordInfo.passupper && passwordInfo.passlower && passwordInfo.passnum) {
      totalset = upperset.concat(lowerset, numset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //false true true false
    else if(!passwordInfo.passchar && passwordInfo.passupper && passwordInfo.passlower && !passwordInfo.passnum) {
      totalset = upperset.concat(lowerset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //false true false false
    else if(!passwordInfo.passchar && passwordInfo.passupper && !passwordInfo.passlower && !passwordInfo.passnum) {
      for(let i = 0; i < passlength; i++) {
        password.push(upperset[Math.floor(Math.random() * upperset.length)]);
      };
      console.log(password);
    }
    //false false true true
    else if(!passwordInfo.passchar && !passwordInfo.passupper && passwordInfo.passlower && passwordInfo.passnum) {
      totalset = lowerset.concat(numset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //false false true false
    else if(!passwordInfo.passchar && !passwordInfo.passupper && passwordInfo.passlower && !passwordInfo.passnum) {
      for(let i = 0; i < passlength; i++) {
        password.push(lowerset[Math.floor(Math.random() * lowerset.length)]);
      };
      console.log(password);
    }
    //false false false true
    else if(!passwordInfo.passchar && !passwordInfo.passupper && !passwordInfo.passlower && passwordInfo.passnum) {
      for(let i = 0; i < passlength; i++) {
        password.push(numset[Math.floor(Math.random() * numset.length)]);
      };
      console.log(password);
    }
    //true false true true
    else if(passwordInfo.passchar && !passwordInfo.passupper && passwordInfo.passlower && passwordInfo.passnum) {
      totalset = charset.concat(lowerset, numset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //false false true false
    else if(passwordInfo.passchar && !passwordInfo.passupper && passwordInfo.passlower && !passwordInfo.passnum) {
      totalset = charset.concat(lowerset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    //true false false true
    else if(passwordInfo.passchar && !passwordInfo.passupper && !passwordInfo.passlower && passwordInfo.passnum) {
      totalset = charset.concat(numset);
      for(let i = 0; i < passlength; i++) {
        password.push(totalset[Math.floor(Math.random() * totalset.length)]);
      };
      console.log(password);
    }
    password = password.join("");
    return(password);
};

// generatePassword();





//if all confirmatiion are false restart. (&&)
//Build an array for the each type.
//Generate a password based on the chosen types.
//
//return the password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();
