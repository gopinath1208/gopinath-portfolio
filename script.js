document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card, .project, .skill");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

});
