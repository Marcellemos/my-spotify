const toggle = document.getElementById("profileToggle");
const menu = document.getElementById("profileMenu");

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
});

document.addEventListener("click", () => {
    menu.classList.remove("open");
});