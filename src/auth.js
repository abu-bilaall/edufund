document.addEventListener("DOMContentLoaded", () => {
  const rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"));

  if (rememberedUser) {
    // Redirect to dashboard if user is remembered
    window.location.href = "pages/dashboard.html";
  }
});
