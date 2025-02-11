
    const fotosInicio = document.querySelector("#fotosInicio");
    const section = document.querySelectorAll("section");
    const coches = document.querySelectorAll(".boton");
    fotosInicio.style.opacity = '0';
    fotosInicio.style.transition = 'all 0.5s ease-in-out';

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        fotosInicio.style.opacity = '1';
        fotosInicio.style.transform = 'translateY(-25%)';
    } else {
        fotosInicio.style.opacity = '0';
        fotosInicio.style.transform = 'translateY(0)';
    }

    for (let i = 0; i < section.length; i++) {
        section[i].style.transition = 'all 0.5s ease-in-out';
        if (window.scrollY >= section[i].offsetTop - 850) {
            section[i].style.opacity = '1';
            section[i].style.transform = 'translateY(0)';
        } else {
            section[i].style.opacity = '0';
            section[i].style.transform = 'translateY(25%)';
        }
    }
});

coches.forEach((coche, index) => {
    coche.addEventListener('click', () => {
      const modal = document.querySelectorAll('.bg-modal')[index];
      const papi = document.querySelectorAll('.papi')[index];
  
      if (modal.classList.contains('animate-mostrar')) {
        modal.classList.remove('animate-mostrar');
        modal.classList.add('animate-ocultar');
        papi.classList.add('animate-hidear');
        papi.classList.remove('animate-showar');
      } else {
        modal.classList.remove('animate-ocultar');
        modal.classList.add('animate-mostrar');
        papi.classList.remove('animate-hidear');
        papi.classList.add('animate-showar');
      }
    });
  });

