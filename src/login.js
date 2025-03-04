document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form"); // Your login form ID
  const rememberMeCheckbox = document.querySelector("#remember-me"); // Checkbox ID

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Hardcoded user details
    const users = [
      { email: "user@example.com", password: "password123" },
      { email: "admin@example.com", password: "adminpass" },
    ];

    // Get input values
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Check if user exists
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      alert("Login successful!");

      // Store in Local Storage if "Remember Me" is checked
      if (rememberMeCheckbox.checked) {
        localStorage.setItem("rememberedUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("rememberedUser");
      }

      // Redirect to dashboard
      window.location.href = "/src/pages/dashboard.html";
    } else {
      alert("Invalid email or password!");
    }
  });
});
