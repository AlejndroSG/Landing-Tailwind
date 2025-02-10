
    const fotosInicio = document.querySelector("#fotosInicio");
    const section = document.querySelectorAll("section");
    const coches = document.querySelectorAll(".coches");
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

coches.forEach((coche) => {
    const boton = coche.querySelector('div > button');
    if (boton) {
      boton.addEventListener('click', () => {
        const bgModal = coche.querySelector('.bg-modal');
        bgModal.style.display = 'flex';
        bgModal.style.transition = 'all 0.5s ease-in-out';
        bgModal.style.left = '0';
        alert('¡Gracias por tu compra!');
      });
    } else {
      console.log('No se encontró el botón dentro del elemento .coches');
    }
  });

