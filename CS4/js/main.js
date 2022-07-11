// Sign Up JS Validations
let email = "marco@gmail.com";
let password = "Qwerty@0";
let confirmPass = "Qwerty@0";
let fname = "Marco Fire";
let lname = "Dela Vega";
let sex = true;
let isAgreed = true;

function register() {
  let validationResponse = { code: 200, Message: "Successfully Register!" };

  //   Email Validation
  if (email.length == 0) {
    validationResponse = { code: 400, Message: "Please Enter Email Address" };
    console.log(validationResponse);
  } else if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    validationResponse = {
      code: 400,
      Message: "Please Enter Valid Email Address",
    };
    console.log(validationResponse);
  }
  // End of Email Validation

  //   Password Validations
  if (
    !password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ) {
    validationResponse = {
      code: 400,
      message:
        "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters",
    };
    console.log(validationResponse);
  }
  // End of  Password Validations

  //  Confirm Password Validations
  if (password !== confirmPass) {
    validationResponse = {
      code: 400,
      message: "Password Mismatch ",
    };
    console.log(validationResponse);
  }
  // End of Confirm Password Validations

  // First Name Validations
  if (fname.length == 0) {
    validationResponse = { code: 400, Message: "Please Enter First Name" };
    console.log(validationResponse);
  } else if (!fname.match(/^[a-zA-Z\s]*$/)) {
    validationResponse = {
      code: 400,
      Message: "Please Input a Proper First Name",
    };
    console.log(validationResponse);
  }
  // End of First Name Validations

  // Last Name Validations
  if (lname.length == 0) {
    validationResponse = { code: 400, Message: "Please Enter Last Name" };
    console.log(validationResponse);
  } else if (!lname.match(/^[a-zA-Z\s]*$/)) {
    validationResponse = {
      code: 400,
      Message: "Please Input a Proper Last Name",
    };
    console.log(validationResponse);
  }
  // End of Last Name Validations

  // Sex Validations
  if (sex == false || sex == undefined) {
    validationResponse = { code: 400, Message: "Please Select Male or Female" };
    console.log(validationResponse);
  }
  // End of Sex Validations

  // Agreement Validations
  if (isAgreed == false) {
    validationResponse = {
      code: 400,
      Message: "Please Select Agree on Terms and Conditions",
    };
    console.log(validationResponse);
  }
  // End of Agreement Validations
  return console.log(validationResponse);
}

// End of Sign Up JS Validations

// Log In JS Validations
function login() {
  let validationResponse = { code: 200, Message: "Successfully Log In!" };
  const logEmail = "marco@gmail.com";
  const logPass = "Qwerty@0";
  // Email Validations
  if (email !== logEmail) {
    validationResponse = {
      code: 400,
      Message: "Please Correct Email Address!",
    };
    console.log(validationResponse);
  }
  // End of Email Validations

  // Password Validations
  if (password !== logPass) {
    validationResponse = {
      code: 400,
      Message: "Please Correct Password!",
    };
    console.log(validationResponse);
  }
  // End of Password Validations
  return console.log(validationResponse);
}

// End of Log In JS Validations

// Forgot Password Validations
function forgotPass() {
  let validationResponse = {
    code: 200,
    Message: "Successfully Reset Password!",
  };
  const forgotEmail = "marco@gmail.com";

  if (email !== forgotEmail) {
    validationResponse = {
      code: 400,
      Message: "Please Enter Registered Email Address!",
    };
    console.log(validationResponse);
  }
  return console.log(validationResponse);
}
// End of Forgot Password Validations
