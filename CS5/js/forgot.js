const forgotEmail = document.getElementById("forgot_email");

const forgotForm = document.getElementById("forgot_form");

forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();

  forgot();
});

function forgot() {
  const logEmail1 = "marco@gmail.com";
  const forgotPromise = new Promise((resolve, reject) => {
    if (forgotEmail.value !== logEmail1) {
      reject("failed");
    } else {
      resolve("success");
    }
  });

  forgotPromise
    .then(() => {
      document.getElementById("success_forgot").innerHTML =
        "Password Reset! Please Checked your Email. Please Wait....";
      document.getElementById("error_forgot").innerHTML = "";
      setTimeout(() => {
        window.location = "../CS5/login.html";
      }, 2000);
    })
    .catch(() => {
      document.getElementById("error_forgot").innerHTML =
        "Please Enter Registered Email";
      setTimeout(() => {
        document.getElementById("error_forgot").innerHTML = "";
      }, 2000);
      document.getElementById("success_forgot").innerHTML = "";
    });
}
