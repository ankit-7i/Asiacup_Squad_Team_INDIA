document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".animated-title", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.to(".bcci-logo", {
    scale: 1.1,
    rotation: 360,
    duration: 1.5,
    ease: "back.out(1.7)",
    delay: 0.5,
  });
});

// Card flip animation with delay
document.querySelectorAll(".card").forEach((card) => {
  let timeoutId;

  card.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    card.classList.add("hover");
  });

  card.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      card.classList.remove("hover");
    }, 300);
  });
});
