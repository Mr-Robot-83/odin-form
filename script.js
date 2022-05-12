//Basic idea taken from here https://www.w3schools.com/howto/howto_js_toggle_password.asp

const showPasswordButton = document.querySelector('#showPassword');
const pw1 = document.querySelector('#userPassword');
const pw2 = document.querySelector('#userPasswordConfirm');

showPasswordButton.addEventListener('change', showPassword);
pw1.addEventListener('focusout', checkPasswords);
pw2.addEventListener('focusout', checkPasswords);


function showPassword() {
  if (pw1.type === "password") {
    pw1.type = "text";
  } else {
    pw1.type = "password";
  }
  if (pw2.type === "password") {
    pw2.type = "text";
  } else {
    pw2.type = "password";
  }
}

//This adds an invalid class to the "userPasswordConfirm" input if it doesn't match the "userPassword" input
function checkPasswords() {
  if (pw2.value !== pw1.value) {
    pw2.setCustomValidity("Passwords do not match");
  } else {
    pw2.setCustomValidity("");
  }
}
