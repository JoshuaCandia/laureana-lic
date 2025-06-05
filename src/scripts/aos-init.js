// src/scripts/aos-init.js
import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
  });
});
