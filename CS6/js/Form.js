export default class Form {
  constructor(
    email,
    password,
    confirmPassword,
    fname,
    lname,
    sexValue,
    isAgreed
  ) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.fname = fname;
    this.lname = lname;
    this.seValue = sexValue;
    this.isAgreed = isAgreed;
  }

  validateEmail() {
    if (
      !this.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return "Please Enter Valid Email";
    } else {
      return "";
    }
  }

  validatePassword() {
    if (
      !this.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      return "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
    } else {
      return "";
    }
  }

  validateConfirm() {
    let pass = (document.querySelector("#password").value = this.password);
    let confirm = (document.querySelector("#confirm").value =
      this.confirmPassword);

    if (pass !== confirm) {
      return "Password Does Not Match";
    } else if (confirm === "") {
      return "Please Confirm Password";
    } else {
      return "";
    }
  }

  validateFname() {
    if (this.fname === "") {
      return "Please Enter Your First Name";
    } else if (!this.fname.match(/^[a-zA-Z\s]*$/)) {
      return "Please Enter Proper First Name";
    } else {
      return "";
    }
  }

  validateLname() {
    if (this.lname === "") {
      return "Please Enter Your Last Name";
    } else if (!this.lname.match(/^[a-zA-Z\s]*$/)) {
      return "Please Enter Proper Last Name";
    } else {
      return "";
    }
  }

  validateSex() {
    const inputMale = document.querySelector("#male");
    const inputFemale = document.querySelector("#female");

    inputMale.addEventListener("click", () => {
      document.querySelector("#sex_value").value = "Male";
    });

    inputFemale.addEventListener("click", () => {
      document.querySelector("#sex_value").value = "Female";
    });

    if (this.sexValue === "") {
      return "Please Select Male or Female";
    } else if (this.sexValue === "Male") {
      return "";
    } else if (this.sexValue === "Female") {
      return "";
    }
  }

  validateAgreed() {
    if (this.isAgreed === false) {
      return "Please Check I Agree";
    } else {
      return "";
    }
  }
}
