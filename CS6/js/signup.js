import Form from "./Form.js";

class Register extends Form {
  constructor(data) {
    super();
    this.email = data.email;
    this.password = data.password;
    this.confirmPassword = data.confirmPassword;
    this.fname = data.fname;
    this.lname = data.lname;
    this.sexValue = data.sexValue;
    this.isAgreed = data.isAgreed;
  }
}

const subBtn = document.querySelector(".sub-btn");

subBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let register = new Register({
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    confirmPassword: document.querySelector("#confirm").value,
    fname: document.querySelector("#fname").value,
    lname: document.querySelector("#lname").value,
    sexValue: document.querySelector("#sex_value").value,
    isAgreed: document.querySelector("#isAgreed").checked,
  });

  document.querySelector("#error_email").innerHTML = register.validateEmail();
  document.querySelector("#error_pass").innerHTML = register.validatePassword();
  document.querySelector("#error_confirm").innerHTML =
    register.validateConfirm();
  document.querySelector("#error_fname").innerHTML = register.validateFname();
  document.querySelector("#error_lname").innerHTML = register.validateLname();
  document.querySelector("#error_sex").innerHTML = register.validateSex();
  document.querySelector("#error_isAgreed").innerHTML =
    register.validateAgreed();
});
