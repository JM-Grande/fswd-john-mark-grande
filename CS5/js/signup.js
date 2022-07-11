const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

const male = document.getElementById("male");
const female = document.getElementById("female");

const isAgreed = document.getElementById("isAgreed");

const form = document.getElementById("sign-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

const register = () => {
  // Email Validations
  if (email.value.length == 0) {
    document.getElementById("error_email").innerHTML = "Please Enter Email";
  } else if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    document.getElementById("error_email").innerHTML = "Please Enter Valid";
  } else {
    document.getElementById("error_email").innerHTML = "";
    console.log("Email Success");
  }
  // End of Email Validations

  // Password Validations
  if (
    !password.value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ) {
    document.getElementById("error_pass").innerHTML =
      "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
  } else {
    document.getElementById("error_pass").innerHTML = "";
    console.log("Password Success");
  }
  // End of Password Validations

  //Confirm Password Validations
  if (password.value !== confirmPass.value) {
    document.getElementById("error_confirm").innerHTML =
      "Please Confirm Password";
  } else if (!confirmPass.value) {
    document.getElementById("error_confirm").innerHTML =
      "Please Enter Confirm Password";
  } else {
    document.getElementById("error_confirm").innerHTML = "";
    console.log("Password Confirmed");
  }
  //End of Confirm Password Validations

  //First Name Validations
  if (!fname.value) {
    document.getElementById("error_fname").innerHTML =
      "Please Enter First Name";
  } else if (!fname.value.match(/^[a-zA-Z\s]*$/)) {
    document.getElementById("error_fname").innerHTML =
      "Please Enter Proper Name";
  } else {
    document.getElementById("error_fname").innerHTML = "";
    console.log("First Name Success");
  }
  //First Name Validations

  // Last Name Validations
  if (!lname.value) {
    document.getElementById("error_lname").innerHTML = "Please Enter Last Name";
  } else if (!lname.value.match(/^[a-zA-Z\s]*$/)) {
    document.getElementById("error_lname").innerHTML =
      "Please Enter Proper Last Name";
  } else {
    document.getElementById("error_lname").innerHTML = "";
    console.log("Last Name Success");
  }
  // End of Last Name Validations

  //Sex Validations
  if (!male.checked && !female.checked) {
    document.getElementById("error_sex").innerHTML =
      "Please Select Male or Female";
  } else if (male.checked == true) {
    console.log("You Select Male");
    document.getElementById("error_sex").innerHTML = "";
  } else if (female.checked == true) {
    console.log("You Select Female");
    document.getElementById("error_sex").innerHTML = "";
  }
  //End of Sex Validations

  // isAgreed Validations
  if (!isAgreed.checked) {
    document.getElementById("error_isAgreed").innerHTML =
      "Please Agree to Terms and Conditions";
  } else if (isAgreed.checked == true) {
    console.log("Agreed");
    document.getElementById("error_isAgreed").innerHTML = "";
  }
  // End of isAgreed Validations
};

//  Javascript Promises
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   register();
// });

// function register() {
//   const register = new Promise((resolve, reject) => {
//     if (email.value.length == 0) {
//       reject({ message: "Please Enter Valid Email" });
//     } else if (password.value.length == 0) {
//       reject({ message: "Please Enter Password" });
//     } else {
//       resolve("Success");
//     }
//   });

//   register
//     .then((message) => {
//       console.log(message);
//       document.getElementById("error_email").innerHTML = "";
//       document.getElementById("error").innerHTML = "";
//     })
//     .catch((error) => {
//       if (error.message == "Please Enter Valid Email") {
//         document.getElementById("error_email").innerHTML =
//           "Please Enter Valid Email";
//         document.getElementById("error").innerHTML = "";
//       } else if (error.message == "Please Enter Password") {
//         document.getElementById("error").innerHTML = "Please Enter Password";
//         document.getElementById("error_email").innerHTML = "";
//       }
//     });
// }
