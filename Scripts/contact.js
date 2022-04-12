// form vaildation


function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;
    if (name == "" || name == null || name.length<1) {
        alert("Name must be filled out");
        return false;
    }else if(email== "" || email == null || email.length<5) {
        alert("Email must be filled out");
        return false;
    }else if (phone.length != 10 || phone == "" || phone == null) {
        alert("Phone number must be 10 digits");
        return false;
    }else if(message.length<10 || message == null){
        alert("Message must be at least 10 characters");
        return false;
    }
    window.location.href = "thankyou.html";

}

// on submit window location