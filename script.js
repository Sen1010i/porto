// ===== TOGGLE DARK MODE =====
const toggleBtn = document.getElementById("toggle-dark");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      document.body.style.background = "#202020ff";
      document.body.style.color = "#fff";
    } else {
      document.body.style.background = "#ffffffff";
      document.body.style.color = "#333";
    }
  });
}

// ===== SIMPLE CONTACT FORM SUBMIT (demo) =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (demo only)");
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== RIPPLE EFFECT =====
document.addEventListener("click", function(e) {
  const button = e.target.closest("button, .btn, .btn-outline");
  if (!button) return;

  const circle = document.createElement("span");
  circle.classList.add("ripple-circle");

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.left = `${e.clientX - rect.left - size / 2}px`;
  circle.style.top = `${e.clientY - rect.top - size / 2}px`;

  button.appendChild(circle);

  setTimeout(() => circle.remove(), 600);
});
