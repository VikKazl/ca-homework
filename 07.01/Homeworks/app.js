// Alert button
function myFunction() {
    alert("Hello World!");
}
// To Upper Case
function capInputs() {
    let elements = document.querySelectorAll("input[type=text]")
    for (let i = 0, element; element = elements[i++];) {
        element.value = (element.value).toUpperCase();
    }
}
// To Lower Case
function lowInputs() {
    let elements = document.querySelectorAll("input[type=text]")
    for (let i = 0, element; element = elements[i++];) {
        element.value = (element.value).toLowerCase();
    }
}

// Email validation
function ValidateEmail(inputText)
{
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!");
        document.inputEmail.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.inputEmail.focus();
        return false;
    }
}

// Phone number validation (neveikia ?)
//function validatePhoneNumber(input_str) {
    //let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    //return re.test(input_str);
//}

//function validateForm(event) {
    //let phone = document.getElementById('inputPhoneNumber').value;
    //if (!validatePhoneNumber(phone)) {
        //document.getElementById('phone_error').classList.remove('hidden');
    //} else {
        //document.getElementById('phone_error').classList.add('hidden');
        //alert("validation success")
    //}
    //event.preventDefault();
//}

//document.getElementById('myform').addEventListener('buttonSave', validateForm);


// Block/Unblock
function disable(){
    document.getElementById("text_entered").disabled = "true";
}
function enable(){
    document.getElementById("text_entered").disabled = "";
}

// Picture change
let image = document.getElementById("image");

image.addEventListener('mouseover', function(){
    image.src = "https://i.imgur.com/PLDVxza.jpg"
})
image.addEventListener('mouseout', function(){
    image.src = "https://i.imgur.com/0DElr0H.jpg"
})
