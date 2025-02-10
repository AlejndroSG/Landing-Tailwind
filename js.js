
    const fotosInicio = document.querySelector("#fotosInicio");
    const section = document.querySelectorAll("section");
    const coches = document.querySelectorAll(".coches > button");
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

for (let i = 0; i < coches.length; i++) {
    coches[i].addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('.bg-modal').style.transition = 'all 0.5s ease-in-out';
        document.querySelector('.bg-modal').style.left = '0';
        alert('¡Gracias por tu compra!');
    });
}

