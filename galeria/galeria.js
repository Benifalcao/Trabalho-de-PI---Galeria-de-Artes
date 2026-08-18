<script>
  document.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.querySelector('.btn-proximo');
    
    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = btnNext.getAttribute('href');
        
        // Aplica o fade-out antes de redirecionar
        document.body.classList.add('fade-out');
        
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 300); // Aguarda o tempo da animação CSS (0.3s)
      });
    }
  });
</script>