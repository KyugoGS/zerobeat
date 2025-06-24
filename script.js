document.addEventListener('DOMContentLoaded', function() {

    // 1. Funcionalidad del Menú Hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('is-active');

            // Cambiar el icono de hamburguesa a 'X' y viceversa
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('is-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Cerrar el menú si se hace clic en un enlace (para SPAs)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-active')) {
                mainNav.classList.remove('is-active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });


    // 2. Animación de "Fade In" al hacer scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // usa el viewport como el área de observación
        rootMargin: '0px',
        threshold: 0.1 // el elemento se considera visible si el 10% es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que la animación se ha disparado
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});