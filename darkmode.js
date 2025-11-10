function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    const switchBall = document.getElementById("switchBall");
    switchBall.textContent = isDark ? "🌙" : "🌞";

  }

 document.getElementById("btnWeb").addEventListener("click", () => {
  document.getElementById("modalWeb").style.display = "block";
});

document.getElementById("btnDesign").addEventListener("click", () => {
  document.getElementById("modalDesign").style.display = "block";
});

// Fecha o modal ao clicar no X
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const modalId = e.target.getAttribute("data-close");
    document.getElementById(modalId).style.display = "none";
  });
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
