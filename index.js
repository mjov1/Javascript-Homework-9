function checkIfDigit(char) {
    if (char === "1" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9" ){
    return true;
    } else {
          return false;
    }
}

function validateName(name) {
    for (let i = 0; i < name.length; i++){
        if (checkIfDigit(name.charAt(i))){
            return false;
        }
    }
    return true;
}


function submit(){
    const htmlElementName = document.getElementById('name');
    const valueName = htmlElementName.value;

    if (valueName.length < 3 ){
         alert('The name must be at least 3 letters!');
         return;
    }

    if (validateName(valueName) === false){
        alert("The name has digits in it!")
    }
    
    const htmlElementEmail = document.getElementById('email');
    const valueEmail = htmlElementEmail.value;

    if (valueEmail.length < 6){
        alert('The email field must have at least 6 characters!');
        return;
    }
    if (valueEmail.indexOf('@') === -1 ){
        alert("The email must have '@' in it!");
        return;
    }
    if (valueEmail.indexOf('.') === -1 ){
        alert("The email must have '.' in it!");
        return;
    }


    const htmlElementEmail_2 = document.getElementById('email-2');
    const valueEmail_2 = htmlElementEmail_2.value;

    if (valueEmail_2 !== valueEmail){
        alert("Incorect email, please type the same email as above!");
        return;
    }


    const htmlElementPassword = document.getElementById('password');
    const valuePassword = htmlElementPassword.value;

    if (valuePassword.length < 6){
        alert('The password field must have at least 6 characters!');
        return;
    }
    
    const htmlElementPassword_2 = document.getElementById('password-2');
    const valuePassword_2 = htmlElementPassword_2.value;

    if (valuePassword_2 !== valuePassword){
        alert("Incorect password, please type the same password as above!");
        return;
    }

    console.log("Name: " + valueName);
    console.log("Email: " + valueEmail);
    console.log("Password: " + valuePassword);
}