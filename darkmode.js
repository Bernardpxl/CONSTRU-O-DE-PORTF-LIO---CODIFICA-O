function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    const switchBall = document.getElementById("switchBall");
    switchBall.textContent = isDark ? "🌙" : "🌞";

  }


    const modal = document.getElementById('modal');
    const fecharBtn = document.querySelector('.fechar');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        document.querySelector('.modal-content h2').innerText = card.innerText;
        modal.style.display = 'flex';
      });
    });

    fecharBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
