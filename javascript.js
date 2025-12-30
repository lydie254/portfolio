const fadeTitles = document.querySelectorAll(".fade-title");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
fadeTitles.forEach((title) => {
  appearOnScroll.observe(title);
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Créer l'overlay si il n'existe pas
let overlay = document.querySelector(".menu-overlay");
if (!overlay) {
  overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);
}

// Toggle du menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
  overlay.classList.toggle("active");

  // Empêcher le scroll quand le menu est ouvert
  document.body.style.overflow = navLinks.classList.contains("active")
    ? "hidden"
    : "";
});

// Fermer le menu en cliquant sur l'overlay
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  menuToggle.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

// Fermer le menu en cliquant sur un lien
const navLinksItems = navLinks.querySelectorAll("a");
navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Fermer le menu avec la touche Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});
