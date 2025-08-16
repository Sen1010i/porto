// Toggle Dark Mode
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.body.style.background = "#111";
    document.body.style.color = "#fff";
  } else {
    document.body.style.background = "#fff";
    document.body.style.color = "#333";
  }
});

// Simple Contact Form Submit (demo)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (demo only)");
});
