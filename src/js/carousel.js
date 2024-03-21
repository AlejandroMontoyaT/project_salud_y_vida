// Seleccionamos todos los elementos con la clase "carousel-item"
const carouselItems = document.querySelectorAll('.carousel-item');

// Función para cambiar el estado del carrusel
function changeCarouselItemState() {
  // Iteramos sobre cada elemento del carrusel
  carouselItems.forEach(item => {
    // Si el elemento tiene la clase "active", la quitamos y le añadimos "no-activate"
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      item.classList.add('no-activate');
    } else { // Si no tiene la clase "active", hacemos lo opuesto
      item.classList.remove('no-activate');
      item.classList.add('active');
    }
  });
}

// Ejecutamos la función cada 20 segundos
setInterval(changeCarouselItemState, 20000);
