//display message when form is submitted
function popup() {
    document.getElementById("thank-you").style.display = "block" ;
}
btnSubmit.addEventListener("click", popup);

// play audio when form is submitted
function playAudio() {
    document.querySelector("#myAudio").play();
}
//linkComment.addEventListener("click", playAudio);

// validate form data
function cleanData(userInput) {
    return DOMPurify.sanitize(userInput, {ALLOWED_TAGS: ['']});
}

// name
function val_name() {
    let valName = document.querySelector("#txtname").value;
    let name = document.querySelector("#txtname");

    // name cannot be empty
    if (valName == "" || valName == null) {
        name.focus();
        name.style.background = "pink";
        name.placeholder = "Name cannot be empty!";
        return false;
    } else {
        name.style.background = "";
        cleanName = cleanData(valName);
        console.log(cleanName);
        return true;
    }
}

// email
function val_email() {
    let emailVal = document.querySelector("#txtemail").value;
    let email = document.querySelector("#txtemail");

    let regex = /^[\w\._-]+@[\w\._-]+\.[a-zA-Z]{2,7}$/;

    if (!emailVal.match(regex)) {
        email.focus();
        
        if (emailVal.length > 0) {
            email.style.background = "pink";
            document.getElementById("email-err").style.display = "block";
        } else {
            email.style.background = "pink";
            email.placeholder = "Please enter a valid email address.";
        }
        return false;
    } else {
        document.getElementById("email-err").style.display = "none";
        email.style.background = "";
        cleanEmail = cleanData(emailVal);
        console.log(cleanEmail);
        return true;
    }
}

// review must not be greater than 150 characters
function review_length() {
    let reviewVal = document.querySelector("#txtreview").value;
    let review = document.querySelector("#txtreview");

    if (reviewVal.length > 150) {
        //console.log("greater than 15");
        review.focus();
        review.style.background = "pink";
        document.getElementById("review-err").style.display = "block";
        return false;
    } else {
        document.getElementById("review-err").style.display = "none";
        review.style.background = "";
        cleanText = cleanData(reviewVal);
        console.log(cleanText);
        return true;
    }
}

