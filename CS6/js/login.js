import Form from "./Form.js";

class Login extends Form {
  constructor(data) {
    super();
    this.email = data.email;
    this.password = data.password;
  }

  validateEmail() {
    const logEmail = "marco@gmail.com";
    if (this.email !== logEmail) {
      return "Please Enter Registered Email";
    } else {
      return "";
    }
  }

  validatePassword() {
    const logPass = "Qwerty@0";
    if (this.password !== logPass) {
      return "Please Enter Registered Password";
    } else {
      return "";
    }
  }
}

const logButton = document.querySelector(".sub-btn");

logButton.addEventListener("click", (e) => {
  e.preventDefault();
  let logIn = new Login({
    email: document.querySelector("#log_email").value,
    password: document.querySelector("#log_pass").value,
  });

  document.querySelector("#error_log").innerHTML = logIn.validateEmail();
  document.querySelector("#error_log2").innerHTML = logIn.validatePassword();
});
