
    const fotosInicio = document.querySelector("#fotosInicio");
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
    });