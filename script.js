//your JS code here. If required.
const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
function submitForm(){
	  var result = "First Name: " + fname + "\n" +
                     "Last Name: " + lname + "\n" +
                     "Phone Number: " + phoneNumber + "\n" +
                     "Email ID: " + email;

    alert(result);
}

