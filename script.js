const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page
function generatePassword() {
    const askPwdLength = prompt("How long do you want your password to be? Your password MUST be 8 to 128 characters.");

    if (askPwdLength >= 8 && askPwdLength <= 128) {
        alert("Your password will have " + askPwdLength + " characters");
        console.log(askPwdLength);

        const upperCase = confirm("Do you want uppercase characters in your password?")
        const lowerCase = confirm("Do you want lowercase characters in your password?")
        const special = confirm("Do you want special characters in your password?")
        const number = confirm("Do you want numbers in your password?")

        let charSelected = ""
        let password = ""

        if (upperCase) {
            charSelected += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }

        if (lowerCase) {
            charSelected += "abcdefghijklmnopqrstuvwxyz"
        }

        if (special) {
            charSelected += "!#$%&'()*+,-./:;<=>?@_`{|}[]~"
        }

        if (number) {
            charSelected += "0123456789"
        }

        for (i = 0; i < askPwdLength; i++) {
            console.log("i" + i);
            password += charSelected.charAt(Math.floor(Math.random() * charSelected.length));
            console.log("password" + password)
            console.log("charSelected" + charSelected)
        }

        return (password);
    } 
    else {
        alert("Your password needs to be 8-128 characters long. Try again.");
    }
}

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

//Copy password to Clipboard
function copyToClipboard() {
    let password = document.getElementById("password");
    password.select();
    password.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + password.value);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);