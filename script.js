function toggleDark(){ document.body.classList.toggle('dark'); }

function openModal(type){
  const modal = document.getElementById('modalContent');
  if(type === 'web') modal.innerHTML = '<h3>Desenvolvimento Web</h3><p>Criação de sites modernos, responsivos e otimizados, utilizando HTML, CSS, JavaScript e boas práticas de design e SEO para garantir a melhor experiência ao usuário.</p>';
  if(type === 'design') modal.innerHTML = '<h3>Design de Interface</h3><p>Criação de interfaces intuitivas e atraentes, com foco em usabilidade e identidade visual, utilizando ferramentas como Figma e princípios de UI/UX.</p>';
  document.getElementById('modalBg').style.display = 'flex';
}
function closeModal(e){ if(e.target.id === 'modalBg'){ e.target.style.display='none'; } }

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {
    let value = telefone.value.replace(/\D/g, ""); // Remove tudo que não é número

    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica a máscara automaticamente
    if (value.length > 6) {
        telefone.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
        telefone.value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        telefone.value = value.replace(/(\d{0,2})/, "($1");
    }
});

 function baixarCurriculo() {
      const link = document.createElement('a');
      link.href = 'curriculo.pdf'; // Nome do seu arquivo
      link.download = 'Curriculo - Bernardo Garajau.pdf';
      link.click();
    }




