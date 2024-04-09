// Import our custom CSS
import '../../styles.scss'

const carrusel = document.getElementById("carrusel");
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

`

const barranavegacion = document.getElementById('barranavegacion');
barranavegacion.innerHTML =
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-white navbar-custom justify-content-around mb-sm-4">
    <nav class="container-fluid">
      <a class="nav-link" href="../../index.html"><img src="../../assets/img/Logo azul prusiano.png" alt="Logo" style="max-width: 150px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-nav social-media">    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-lg-5">
          <li class="nav-item">
            <a class="nav-link" href="#"><img src="../../assets/img/Logo_fb_azulagua.png" alt="Facebook" style="max-width: 10px;"></a> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><img src="../../assets/img/Logo_ig_azulagua.png" alt="Instagram" style="max-width: 20px;"></a>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="./sobre-nosotros.html">Salud y Vida</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./catalogo.html">Lentes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./agenda-cita.html">Agenda tu cita</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./sucursal.html">Visítanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contactos.html">Contáctanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pag-nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./form-creacionproductos.html">Agregar productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./testNavFooter.html">Test Navbar y footer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./busqueda.html"><img src="../../assets/img/zoom_out_icon_152713.png" alt="Buscar"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./login-registro.html"><img src="../../assets/img/users_icon_152726.png" alt="Login"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./mi-perfil.html"><img src="../../assets/img/heart_icon_152827.png" alt="Whishlist"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./carrito-compras.html"><img src="../../assets/img/truck_icon_152733.png" alt="Carrito"></a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </nav>
`

const piedepagina = document.getElementById('piedepagina');
piedepagina.innerHTML =
    `
      <footer class="footer container-fluid">
    <div class="row justify-content-evenly align-items-center">
    <div class="col-md-2 col-2">
      <img class="img-fluid rounded mt-5" src="../../assets/img/Logo azul prusiano.png " alt="Logo saludyvida"
        style="width: 100px; height: auto;">
      <p class="company-name1 mt-3">Todos los derechos reservados</p>
    </div>
    <div class="col-md-2 col-2 mt-0">
      <h5 class="mt-5 d-none d-sm-block" >Menú</h5>
      <ul class="nav flex-column ">
        <li class="nav-item mb-0 d-none d-sm-block"><a href="#" class="nav-item p-0 text-white text-decoration-none">Óptica</a></li>
        <li class="nav-item mb-0 d-none d-sm-block"><a href="#" class="nav-item p-0 text-white text-decoration-none">Lentes de Contacto</a></li>
        <li class="nav-item mb-0 d-none d-sm-block"><a href="#" class="nav-item p-0 text-white text-decoration-none">Promociones</a></li>
        <li class="nav-item mb-0"><a href="#" class="nav-item text-white text-decoration-none">Términos y condiciones</a></li>
      </ul>
    </div>
    <div class="col-md-2 col-2 mt-0 d-none d-sm-block">
      <h5 class="mt-5" >Pacientes</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Mi cuenta</a></li>
        <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Mis pedidos</a></li>
        <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Rastrea tu pedido</a></li>
        <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Agenda una cita </a></li>
        <li class="nav-item mb-0"><a href="#" class="nav-item p-0 text-white text-decoration-none">Mi historia de citas </a></li>
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
          <a href="#" ><img class="img-fluid rounded" src="../../assets/img/Logo_fb_azulprus.png" alt="Facebook"
            style="width: 10px; height: auto;"></a>
          <a href="#" class=" m-lg-3"><img class="img-fluid rounded" src="../../assets/img/Logo_ig_azulprus.png" alt="Instragram"
            style="width: 20px; height: auto;"></a>
        </li>
        <br>
      </ul>
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-6 m-0 p-3"><p class="company-name m-0 align-content-center">&copy; 2024 Salud y Vida.</p></div>
  </div>
</footer>
    `