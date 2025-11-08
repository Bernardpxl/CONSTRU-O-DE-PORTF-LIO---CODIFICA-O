function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    const switchBall = document.getElementById("switchBall");
    switchBall.textContent = isDark ? "🌙" : "🌞";
  }