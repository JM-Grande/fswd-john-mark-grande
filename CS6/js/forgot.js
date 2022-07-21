import Form from "./Form.js";
const forgotBtn = document.querySelector(".sub-btn");

class Forgot extends Form {
  constructor(data) {
    super();
    this.email = data.email;
  }

  validateEmail() {
    const logEmail = "marco@gmail.com";
    if (this.email !== logEmail) {
      return "Please Enter Registered Email";
    } else {
      return "";
    }
  }
}

forgotBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const forgot = new Forgot({
    email: document.querySelector("#forgot_email").value,
  });

  document.querySelector("#error_forgot").innerHTML = forgot.validateEmail();
});
