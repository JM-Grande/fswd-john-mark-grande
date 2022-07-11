const logEmail = document.getElementById("log_email");
const logPass = document.getElementById("log_pass");

const logForm = document.getElementById("log_form");

logForm.addEventListener("submit", (e) => {
  e.preventDefault();
  LogIn();
});

function LogIn() {
  const logIn = new Promise((resolve, reject) => {
    const logEmail1 = "marco@gmail.com";
    const logPass1 = "Qwerty@0";
    if (logEmail.value !== logEmail1) {
      reject("Please Enter Registered Email");
    } else if (logPass.value !== logPass1) {
      reject("Please Enter Password");
    } else {
      resolve("Successfully Log In. Please Wait....");
    }
  });

  logIn
    .then((message) => {
      document.getElementById("success_log").innerHTML = message;
      setTimeout(() => {
        window.location = "../CS5/index.html";
      }, 3000);
    })
    .catch((error) => {
      if (error === "Please Enter Registered Email") {
        document.getElementById("error_log").innerHTML =
          "Please Enter Registered Email";
        setTimeout(() => {
          document.getElementById("error_log").innerHTML = "";
        }, 2000);
      } else if (error === "Please Enter Password") {
        document.getElementById("error_log2").innerHTML =
          "Please Enter Valid Password";
        setTimeout(() => {
          document.getElementById("error_log2").innerHTML = "";
        }, 2000);
      }
    });
}

// Promise All
// function LogIn() {
//   let error = false;
//   const emailValid = new Promise((resolve, reject) => {
//     const logEmail1 = "marco@gmail.com";
//     if (logEmail.value !== logEmail1) {
//       error = true;
//       reject("Please Enter Registered Email");
//     }
//   });

//   const passValid = new Promise((resolve, reject) => {
//     const logPass1 = "Qwerty@0";
//     if (logPass.value !== logPass1) {
//       error = true;
//       reject("Please Enter Password");
//     }
//   });

//   Promise.all([emailValid, passValid]).catch((value) => console.log(value));
// }
