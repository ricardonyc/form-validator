const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm");

// check if email is valid
function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase())
  if (re.test(email.value.trim())) {
    showSuccess(input);
  } else {
    showError(email, "Email is not valid");
  }
}

// shows input success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "sections success";
}

// shows input error
function showError(input, string) {
  const formControl = input.parentElement;
  formControl.className = "sections error";
  const p = formControl.querySelector("p");
  p.innerText = string;
}

// if input empty, shows
function checkRequired(array) {
  array.forEach((item) => {
    if (item.value.trim() === "") {
      showError(item, `${upperCase(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
}

// uppercase error message
function upperCase(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function matchPasswords(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match")
    }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${upperCase(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${upperCase(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, passwordConfirm]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  validEmail(email);
  matchPasswords(password, passwordConfirm)
});
