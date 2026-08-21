const portfolioConfig = {
  email: "kelsigooden@utexas.edu",
  linkedin: "https://www.linkedin.com/in/kelsigooden/"
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const emailLink = document.querySelector('[data-contact="email"]');
if (emailLink && portfolioConfig.email) {
  emailLink.href = `mailto:${portfolioConfig.email}`;
  emailLink.querySelector("strong").textContent = portfolioConfig.email;
  emailLink.classList.remove("is-placeholder");
}

const linkedinLink = document.querySelector('[data-contact="linkedin"]');
if (linkedinLink && portfolioConfig.linkedin) {
  linkedinLink.href = portfolioConfig.linkedin;
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noreferrer";
  linkedinLink.querySelector("strong").textContent = "Connect on LinkedIn";
  linkedinLink.classList.remove("is-placeholder");
}

const contactNote = document.querySelector(".contact-note");
if (contactNote && portfolioConfig.email && portfolioConfig.linkedin) {
  contactNote.hidden = true;
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
