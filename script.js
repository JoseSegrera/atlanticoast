// Slider
document.addEventListener("DOMContentLoaded", function() {
    let counter = 1;
    const totalSlides = 6;

    function changeSlide() {
        document.getElementById('radio' + counter).checked = true;

        // Restablece el color de todos los botones automáticos a su estado original
        const autoButtons = document.querySelectorAll('.navigation-auto div');
        autoButtons.forEach((btn) => {
            btn.style.background = 'transparent'; // Cambia a color original o deseado
        });

        // Cambia el color del botón activo
        document.querySelector('.navigation-auto .auto-btn' + counter).style.background = '#1f0e80'; // Azul especificado

        counter++;
        if (counter > totalSlides) {
            counter = 1;
        }
        setTimeout(changeSlide, 5000); // Cambia la imagen cada 5 segundos
    }

    changeSlide();

    // Link active y desplazamiento suave
    const sections = document.querySelectorAll('section'); // Selecciona todas las secciones
    const navLinks = document.querySelectorAll('.nav-link'); // Selecciona todos los enlaces de navegación

    function changeActiveLink() {
        let index = sections.length; // Comienza desde el final

        const scrollMargin = 100; // Ajusta este valor según necesites

        while (--index && window.scrollY + scrollMargin < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active')); // Elimina la clase activa de todos los enlaces

        if (navLinks[index]) {
            navLinks[index].classList.add('active'); // Agrega la clase activa al enlace correspondiente
        }
    }

    window.addEventListener('scroll', changeActiveLink); // Llama a la función al hacer scroll

    // Agregar un evento de clic a los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href'); // Obtener el ID del destino
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault(); // Evitar el comportamiento predeterminado
                const offset = targetId === '#inicio' ? 0 : targetElement.offsetTop; // Ajustar offset para "Inicio"
                // Desplazamiento suave al destino
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Color de las camisetas
const colorBoxes = document.querySelectorAll('.color');
colorBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const color = this.dataset.color; // Obtener el color del cuadro
        const camisetaDiv = this.closest('.camiseta'); // Encontrar el div .camiseta más cercano
        camisetaDiv.style.backgroundColor = color; // Cambiar el fondo
    });
});
