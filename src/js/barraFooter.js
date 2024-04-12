// Import our custom CSS
import '../../styles.scss';

document.addEventListener('DOMContentLoaded', function() {
  const carrusel = document.getElementById("carrusel");
  if (carrusel) {
    carrusel.innerHTML = `
      <section id="banner" class="static">
        <div class="row">
          <div id="banner-promo" class="col-12 col-md-9 bg-info rounded-4 align-items-center mx-auto">
            <div id="carouselExampleIndicators" class="carousel slide w-150" data-ride="carousel">     
              <div class="carousel-inner">
                <div class="carousel-item">
                  <p class="">¡Todos los Sábados, 2x1!</p>
                </div>
                <div class="carousel-item active">
                  <p class="">Realiza tu examen de la vista completamente gratis en nuestra tienda</p>
                </div>
                <div class="carousel-item">
                  <p class="">Envío gratis a todo México</p>
                </div>
                <div class="carousel-item">
                  <p class="">Descuento del 20% en todas las gafas de sol</p>
                </div>
                <div class="carousel-item">
                  <p class="">Compra un par de lentes de contacto y lleva el segundo con 50% de descuento</p>
                </div>
                <div class="carousel-item">
                  <p class="">Promoción exclusiva: Compra un paquete de lentes graduados y recibe un par de lentes de sol gratis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  const barranavegacion = document.getElementById('barranavegacion');
  if (barranavegacion) {
    barranavegacion.innerHTML = `
      <div class="row d-flex justify-content-end">
        <div class="d-flex justify-content-end">
          <a class="p-2" href="../../src/pages/login-registro.html"><img src="../../assets/img/users_icon_152726.png" title="Tu perfil" alt="Login" style="width: 25px;"></a>
          <a class="p-2" href="../../src/pages/mi-perfil.html"><img src="../../assets/img/heart_icon_152827.png" title="Tus Favoritos" alt="Whishlist" style="width: 25px;"></a>
          <a class="p-2 text-black" href="../../src/pages/carrito-compras.html"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg></a>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <nav class="container-fluid pl-1">
          <a class="" href="../../index.html"><img class="" src="../../assets/img/Logo azul prusiano.png" alt="Logo" style="max-width: 150px;"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>  
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <a class="" href="../../index.html"><img src="../../assets/img/Logo azul prusiano.png" alt="Logo" style="max-width: 100px;"></a>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1">
                <li class="nav-item ">
                  <a class="nav-link" href="#"><img src="../../assets/img/Logo_fb_azulagua.png" title="Facebook" alt="Facebook" style="max-width: 10px;"></a> 
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src="../../assets/img/Logo_ig_azulagua.png" title="Instagram" alt="Instagram" style="max-width: 20px;"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../src/pages/catalogo.html">Lentes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../src/pages/agenda-cita.html">Agenda tu cita</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../src/pages/sucursal.html">Visítanos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../src/pages/contactos.html">Contáctanos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../src/pages/pag-nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../src/pages/form-creacionproductos.html">Agregar productos</a>
                </li>
                <li class="nav-item">
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar Salud y Vida..." aria-label="Buscar">
                    <button class="btn btn-outline-info" type="submit">🔎</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    `;
  }

  const piedepagina = document.getElementById('piedepagina');
  if (piedepagina) {
    piedepagina.innerHTML = `
      <footer class="footer container-fluid">
        <div class="row justify-content-evenly align-items-center">
          <div class="col-md-2 col-2">
            <img class="img-fluid rounded mt-5" src="../../assets/img/Logo azul prusiano.png" alt="Logo saludyvida" style="width: 100px; height: auto;">
            <p class="company-name1 mt-3">Todos los derechos reservados</p>
          </div>
          <div class="col-md-2 col-2 mt-0">
            <h5 class="mt-5 d-none d-sm-block">Menú</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-0 d-none d-sm-block"><a href="#" class="nav-item p-0 text-white text-decoration-none">Óptica</a></li>
              <li class="nav-item mb-0 d-none d-sm-block"><a href="#" class="nav-item p-0 text-white text-decoration-none">Lentes de Contacto</a></li>
              <li class="nav-item mb-0 d-none d-sm-block"><a href="#" class="nav-item p-0 text-white text-decoration-none">Promociones</a></li>
              <li class="nav-item mb-0"><a href="#" class="nav-item text-white text-decoration-none">Términos y condiciones</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-2 mt-0 d-none d-sm-block">
            <h5 class="mt-5">Pacientes</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Mi cuenta</a></li>
              <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Mis pedidos</a></li>
              <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Rastrea tu pedido</a></li>
              <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Agenda una cita</a></li>
              <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Mi historia de citas</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-2 mt-0 d-none d-sm-block">
            <h5 class="mt-5">Sobre Nosotros</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">¿Por qué Salud y Vida?</a></li>
              <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Visitanos</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-2 mt-0 mb-5 d-none d-sm-block">
            <h5 class="mt-5"><a href="./contactos.html">Contáctanos</a></h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-0">hola@saludyvida.com</li>
              <li class="nav-item mb-0">(55)24529545</li>
              <li class="nav-item mb-0">Lunes a Viernes:</li>
              <li class="nav-item mb-0">08:00 am a 8:00 pm</li>
              <li class="nav-item mb-0">Sábado y Domingo</li>
              <li class="nav-item mb-0">08:00 am a 2:00 pm</li>
            </ul>
          </div>
          <div class="col-md-2 col-2 mt-0">
            <h5 class="mt-5">Síguenos</h5>
            <ul class="nav flex-column">
              <li class="mt-3">
                <a href="#"><img class="img-fluid rounded" src="../../assets/img/Logo_fb_azulprus.png" alt="Facebook" style="width: 10px; height: auto;"></a>
                <a href="#" class="m-lg-3"><img class="img-fluid rounded" src="../../assets/img/Logo_ig_azulprus.png" alt="Instragram" style="width: 20px; height: auto;"></a>
              </li>
              <br>
            </ul>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-6 m-0 p-3">
            <p class="company-name m-0 align-content-center">&copy; 2024 Salud y Vida.</p>
          </div>
        </div>
      </footer>
    `;
  }
});