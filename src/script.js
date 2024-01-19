const passwordBox = document.getElementById("password_box");
const passwordLength = 12;

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=[]{}|;:,.<>/?";

const allchars = UPPERCASE + lowercase + numbers + symbols;

function createPassword(){
    let password = "";

    password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(passwordLength > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.innerHTML = password;
}


function copyPassword() {
    // Get the text content from the password_box element
    const passwordBox = document.getElementById("password_box");
    const passwordText = passwordBox.value || passwordBox.innerText;

    // Create a textarea element
    const dummy = document.createElement("textarea");

    // Set the value of the textarea to the password text
    dummy.value = passwordText;

    // Append the textarea to the body
    document.body.appendChild(dummy);

    // Select the text content of the textarea
    dummy.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(dummy);
}



// Copied div ------=======================
document.addEventListener('DOMContentLoaded', function () {
    const copyIcon = document.getElementById("copy_icon");

    copyIcon.addEventListener('click', function(){
        
        alert("Copied To Clipboard 👏")

    })
});
// -==============================


// Toggler 

const ToggleBtn = document.querySelector(".toggle-button");
const Menu = document.querySelector(".dropdown_menu");


// Function to toggle the menu visibility based on screen size
function toggleMenu() {
    if (window.innerWidth <= 940) {
        Menu.classList.toggle('hidden');
    } else {
        // If the screen size is larger than 900px, ensure the menu is visible
        Menu.classList.remove('hidden');
    }
}

// Initially hide the menu if the screen size is less than or equal to 900px
toggleMenu();


ToggleBtn.addEventListener("click", () =>{
    Menu.classList.toggle('hidden');
})
