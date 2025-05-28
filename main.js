// Simulación de registro de hosting gratis
document.getElementById("registro-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const respuesta = document.getElementById("respuesta-formulario");
  respuesta.textContent = "¡Listo! Tu web será creada en unos minutos. Revisa tu correo para instrucciones 👏";
  setTimeout(() => {
    respuesta.textContent = "";
    document.getElementById("registro-form").reset();
  }, 6000);
});

