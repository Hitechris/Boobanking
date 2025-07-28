// login.js
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.querySelector("input[type='email']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    // Simple login logic
    if (email === "admin" && password === "admin123") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password!");
    }
  });
});
