



//Resets the fields to blank
function resetForm() {
    //reset handler clears the form
    document.getElementById("form").reset;
}
// Disable the submit button after a successful submit
function disableSubmitButton() {
    document.getElementByClassName("submit_form").disabled = true;
}

// Function that sets the focus to the first text box on page load.
window.onload = function () {
    document.getElementByID("firstname").focus();

};

// Function to check if the email is valid using a regular expression.
function validateEmail() {
    var valEmail = document.forms["form"]["email"].value;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(valEmail)) {
        alert("Please enter a valid email");
        document.form.email.focus();
        return false;
    }
}
;


// Function to validate the phone number. I should match the format in the place holder.
function validatePhone() {

    var valPhone = document.forms["form"]["telephone"].value;
    var regex = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;

    if (!regex.test(valPhone)) {
        alert("Please enter a valid phone number");
        document.form.telephone.focus();
        return false;
    }

}

// Form validation for blank fields
function validate()
{

    if (document.form.firstname.value === "")
    {
        alert("Please provide your first name!");
        document.form.firstname.focus();
        return false;

    }
    if (document.form.lastname.value === "")
    {
        alert("Please provide your last name!");
        document.form.lastname.focus();
        return false;

    }

    if (document.form.telephone.value === "")
    {
        alert("Please provide a telephone number");
        document.form.telephone.focus();
        return false;
    } else {
        var ret = validatePhone();
        if (ret === false) {
            return false;
        }
    }

    if (document.form.email.value === "")
    {
        alert("Please provide your Email!");
        document.form.email.focus();
        return false;
    } else {
        var ret = validateEmail();
        if (ret === false) {
            return false;
        }
    }
   disableSubmitButton();

// If you get to this point the form has been validated!!
    return(true);

 

}



// This is for the drop down menu that is on the home page and I was using on this page
// but have since changedto the stationary header.
$(function down() {
    $("#menu").hide();
    $(".rotate").click(function () {
        $("#menu").animate({height: 'toggle'}, 500);
    });
});

//Google analytics              
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-57384228-1', 'auto');
ga('send', 'pageview');
                  