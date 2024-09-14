// Milestone4
var dynamicForm = document.getElementById("form");
var displayElement = document.getElementById("resumeOutput");
//Handling
dynamicForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var myName = document.getElementById("name").value;
    var myEmail = document.getElementById("email").value;
    var myContact = document.getElementById("phone")
        .value;
    var myEducation = document.getElementById("education")
        .value;
    var myExperience = document.getElementById("Experience").value;
    var mySkills = document.getElementById("Skills")
        .value;
    var resume = "\n<h2><b> Editable Resume</b></h2>\n<h3><i>Personal Information<i></h3>\n<p><b>Name:</b><span contenteditable=\"tue\">".concat(myName, "</span></p>\n<p><b>Email:</b><span contenteditable=\"tue\">").concat(myEmail, "</span></p>\n<p><b>Contact:</b><span contenteditable=\"tue\">").concat(myContact, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"tue\">").concat(myEducation, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"tue\">").concat(myExperience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"tue\">").concat(mySkills, "</p>");
    //Display
    if (displayElement) {
        displayElement.innerHTML = resume;
    }
    else {
        console.error('Some element is missing. ');
    }
});
