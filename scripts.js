// ===============================
// PORTFOLIO GRISSEL PROVENZZA
// VERSION MÁS ANIMADA
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // 1. REVEAL SUAVE CON INTERSECTION OBSERVER
  // ===============================

  const thumbnails = document.querySelectorAll(".thumbnail");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.15}s`;
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  thumbnails.forEach(el => {
    observer.observe(el);
  });


  // ===============================
  // 2. EFECTO PARALLAX HERO
  // ===============================

  const intro = document.querySelector(".intro");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (intro) {
      intro.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
  });


  // ===============================
  // 3. HOVER 3D TARJETAS
  // ===============================

  thumbnails.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 10;
      const rotateY = ((x / rect.width) - 0.5) * -10;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
      card.style.transition = "transform 0.4s ease";
    });
  });


  // ===============================
  // 4. BOTÓN CON EFECTO PULSE
  // ===============================

  const button = document.querySelector(".button");

  if (button) {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.boxShadow = "0 0 20px rgba(255, 204, 0, 0.7)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    });
  }


  // ===============================
  // 5. LIGHTBOX CON TRANSICIÓN
  // ===============================

  const images = document.querySelectorAll(".cards");

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  images.forEach(image => {
    image.addEventListener("click", () => {

      lightbox.classList.add("active");

      const img = document.createElement("img");
      img.src = image.src;
      img.style.animation = "zoomIn 0.4s ease";

      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }

      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
document.addEventListener("DOMContentLoaded", function(){

  // Scroll suave
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

});
});
