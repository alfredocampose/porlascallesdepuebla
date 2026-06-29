const palabras = document.querySelectorAll('.palabra-clickeable');
const lightbox = document.getElementById('miLightbox');
const imagenLightbox = document.getElementById('imagenLightbox');
const botonCerrar = document.querySelector('.cerrar-lightbox');

// Agregamos el evento de clic a cada palabra que tenga la clase
palabras.forEach(palabra => {
  palabra.addEventListener('click', function() {
    // Obtenemos la ruta de la imagen desde el atributo data-img
    const rutaImagen = this.getAttribute('data-img');
    
    // Asignamos la ruta a la imagen del lightbox
    imagenLightbox.src = rutaImagen;
    
    // Mostramos el lightbox agregando la clase 'activo'
    lightbox.classList.add('activo');
  });
});

// Función para cerrar el lightbox
function cerrarLightbox() {
  lightbox.classList.remove('activo');
  // Limpiamos la imagen para que no parpadee la anterior al abrir una nueva
  setTimeout(() => { imagenLightbox.src = ""; }, 300); 
}

// Cerrar al dar clic en la 'X'
botonCerrar.addEventListener('click', cerrarLightbox);

// Cerrar al dar clic en cualquier parte del fondo oscuro (fuera de la imagen)
lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    cerrarLightbox();
  }
});
