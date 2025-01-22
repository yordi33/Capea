// Efecto 3D para el fondo
document.addEventListener('mousemove', function(e) {
    const fondo = document.body;

    // Obtener las dimensiones de la ventana
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    // Aplicar la transformación 3D en el fondo
    fondo.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
});
