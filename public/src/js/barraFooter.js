// Import our custom CSS
import '../../../styles.scss';

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
          <div class="row">
  <div class="d-flex justify-content-between contenedor-head">
  <div class="d-flex justify-content-start mx-3">
    <a class="" href="/index.html"><img class="" src="../../assets/img/Logo azul prusiano.png" alt="Logo" style="max-width: 150px;"></a>
                  <a class="red-social align-content-center px-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg></a> 
                  <a class="red-social align-content-center px-3"href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg></a>
    </div>
    <div class="d-flex justify-content-end mx-3"> 
    <a class=" align-content-center px-2" href="/src/pages/login-registro.html" style="color:#003A5D;"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
  </svg></a>
    <a class="align-content-center px-2" href="./../../src/pages/mi-perfil.html" style="color:#003A5D;"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
  </svg></a>
    <a class="align-content-center px-2" href="../../src/pages/carrito-compras.html" style="color:#003A5D;"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
  </svg></a></div> 
  </div>
</div> 
  <nav class="navbar navbar-expand-lg navbar-dark">
    <nav class="container-fluid mx-1 my-2 justify-content-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>  
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <a class="" href="../../index.html"><img src="../../assets/img/Logo azul prusiano.png" alt="Logo" style="max-width: 100px;"></a>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-around flex-grow-1">
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
                    <button class="btn btn-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg></button>
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