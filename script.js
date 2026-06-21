console.log("JS is connected! 🚀");

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  document.body.setAttribute("data-theme", isDark ? "light" : "dark");
  toggleBtn.textContent = isDark ? "Dark Mode" : "Light Mode";
});