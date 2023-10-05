// Aplicar clases a las fechas visitadas al cargar la página
window.addEventListener('load', aplicarClaseAFechasVisitadas);

// Función para marcar una fecha como visitada y guardarla en el almacenamiento local
function marcarComoVisitada(fecha) {
    if (!localStorage.getItem('fechasVisitadas')) {
        localStorage.setItem('fechasVisitadas', JSON.stringify([]));
    }
    const fechasVisitadas = JSON.parse(localStorage.getItem('fechasVisitadas'));
    if (!fechasVisitadas.includes(fecha)) {
        fechasVisitadas.push(fecha);
        localStorage.setItem('fechasVisitadas', JSON.stringify(fechasVisitadas));
    }
}

// Función para aplicar la clase a las fechas visitadas al cargar la página
function aplicarClaseAFechasVisitadas() {
    const fechasVisitadas = JSON.parse(localStorage.getItem('fechasVisitadas'));
    if (fechasVisitadas) {
        fechasVisitadas.forEach(fecha => {
            const elemento = document.querySelector(`.fecha[href="./Fechas/${fecha}.html"]`);
            if (elemento) {
                elemento.classList.add('visited');
            }
        });
    }
}



   // Evento clic para marcar una fecha como visitada y luego redirigir
const fechas = document.querySelectorAll('.fecha');
fechas.forEach(fecha => {
    fecha.addEventListener('click', function (event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const fechaPartes = href.split('/');
        const fecha = fechaPartes[fechaPartes.length - 1].replace('.html', '');
        marcarComoVisitada(fecha);
        this.classList.add('visited');

        // Redirigir después de un retraso 
        setTimeout(() => {
            window.location.href = href;
        }, 50);
    });
});
