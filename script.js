// Define variables
let passwordLength = 0;
let charSelected = [];
let randomChar = 0;
let finalPassword = "";


//Create array of lowercase letters
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Create array of uppercase letters
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Create array of numbers
const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//Create array of special characters
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "="];


//Onclick of 'Generate Password' button to open popup window
function startPrompt() {
    getPrompt();
    getConfirms();
};

//Popup prompt
function getPrompt() {
    passwordLength = prompt("Password Length: How many characters would you like your password to be? (Must be between 8 and 128 characters.)");

    numberLength = parseInt(passwordLength);
    passwordLength = numberLength;

    while (passwordLength <= 7 || passwordLength >= 129) {
        alert("Try again, please. Must be a number between 8 and 128.");
        passwordLength = prompt("Password Length: How many characters would you like your password to be? (Must be between 8 and 128 characters.)");
    
        numberLength = parseInt(passwordLength);
        passwordLength = numberLength;   
    };

};

//Popup confirms
function getConfirms() {
    const hasLower = confirm("Character Type: Would you like to include lowercase letters?");

    const hasUpper = confirm("Character Type: Would you like to include uppercase letters?");
    
    const hasNumber = confirm("Character Type: Would you like to include numeric characters?");
    
    const hasSpecial = confirm("Character Type: Would you like to include special characters?");
   
    //Generate arrays of selected characters
    if (hasLower) {
        lowerArr = charSelected.concat(lowercase);
        charSelected = lowerArr;
    };
    
    if (hasUpper) {
        upperArr = charSelected.concat(uppercase);
        charSelected = upperArr;
    };
    
    if (hasNumber) {
        numberArr = charSelected.concat(number);
        charSelected = numberArr;
    };
    
    if (hasSpecial) {
        specialArr = charSelected.concat(special);
        charSelected = specialArr;
    };

    //Alert for if all of the above choices are false
    if ((hasLower === false) && (hasUpper === false) && (hasNumber === false) && (hasSpecial === false)) {
        alert("You need to select at least one character type to continue.");
        getPrompt();
    };


    //Create the fnal password
    for (let i = 0; i < passwordLength; i++) {
        randomChar = Math.floor(Math.random() * charSelected.length);
        finalPassword += charSelected[randomChar];
    };

    document.getElementById("password").value = finalPassword;
};

//function to copy password to clipboard
function copyClipboard() {
    copyPassword();
};

function copyPassword() {
    let copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Password Copied!")
};
