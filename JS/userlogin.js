const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const btnclose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
btnclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
function clicklogin() {
  var email = document.getElementById("emaillogin").value;
  var password = document.getElementById("loginpassword").value;
  if (email == "sakhak@gmail.com" && password == "123") {
    alert("Login successfully");
    window.location.href = "../HTML/index.html";
  } else {
    alert("Invalid email and password");
  }
}
