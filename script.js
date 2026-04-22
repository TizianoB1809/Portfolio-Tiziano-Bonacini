// Scroll fluido
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Modale
const modal    = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc  = document.getElementById("modal-desc");
const closeBtn   = document.querySelector(".close-btn");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.getAttribute("data-title");
        modalDesc.textContent  = card.getAttribute("data-desc");
        modalImg.src           = card.getAttribute("data-img") || card.querySelector("img").src;
        modal.style.display    = "block";
    });
});

closeBtn.addEventListener("click", () => { modal.style.display = "none"; });

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});