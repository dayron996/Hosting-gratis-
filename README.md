<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hosting Gratis - Tu Web Fácil y Bonita</title>
  <link rel="stylesheet" href="styles.css">
  <!-- Google Fonts para diseño más bonito -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:600,400&display=swap" rel="stylesheet">
  <!-- Manifest para PWA y Add to Home Screen en Chrome -->
  <link rel="manifest" href="manifest.webmanifest">
  <!-- Import map para JS (si fuera necesario) -->
</head>
<body>
  <header>
    <div class="container">
      <h1>🌐 Hosting Gratis</h1>
      <p>¡Crea y lanza tu propia página web de forma gratuita, fácil y rápida!</p>
      <a href="#planes" class="cta-btn">Empieza Ahora</a>
    </div>
  </header>

  <section id="ventajas">
    <div class="container">
      <h2>¿Por qué elegirnos?</h2>
      <div class="ventajas-list">
        <div class="ventaja-item">
          <span class="emoji">🚀</span>
          <h3>Rápido y Seguro</h3>
          <p>Tu sitio estará disponible al instante, con protección básica incluida.</p>
        </div>
        <div class="ventaja-item">
          <span class="emoji">💸</span>
          <h3>100% Gratis</h3>
          <p>No necesitas tarjeta de crédito ni pagos ocultos.</p>
        </div>
        <div class="ventaja-item">
          <span class="emoji">🎨</span>
          <h3>Diseño Bonito</h3>
          <p>Plantillas modernas y personalizables para tu web.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="planes">
    <div class="container">
      <h2>Elige tu plan gratuito</h2>
      <div class="planes-grid">
        <div class="plan-card destacado">
          <h3>Web Básica</h3>
          <p>Ideal para portafolios, blogs, y páginas personales.</p>
          <ul>
            <li>1 sitio web</li>
            <li>Dominios .gratis.site</li>
            <li>1 GB almacenamiento</li>
            <li>SSL incluido</li>
          </ul>
          <a href="#signup" class="plan-btn">Crear Gratis</a>
        </div>
        <div class="plan-card">
          <h3>Emprendedor</h3>
          <p>Perfecto para pequeños negocios y tiendas.</p>
          <ul>
            <li>Hasta 3 sitios web</li>
            <li>Dominios personalizados</li>
            <li>5 GB almacenamiento total</li>
            <li>Soporte básico</li>
          </ul>
          <a href="#signup" class="plan-btn">Crear Gratis</a>
        </div>
      </div>
    </div>
  </section>

  <section id="signup">
    <div class="container">
      <h2>¡Crea tu hosting gratis ahora!</h2>
      <form id="registro-form">
        <input type="text" placeholder="Tu Nombre" required>
        <input type="email" placeholder="Correo Electrónico" required>
        <input type="text" placeholder="Nombre de tu sitio" required>
        <button type="submit">Empezar</button>
        <p id="respuesta-formulario"></p>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>Hosting Gratis &copy; 2024 – Hecho con ❤️ por tu equipo.</p>
    </div>
  </footer>

  <script src="main.js"></script>
  <script>
    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(
          function(reg) {
            // Success
          }, function(err) {
            // Error
          });
      });
    }
  </script>
</body>
</html>
