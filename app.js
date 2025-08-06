document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".ver-mas");

  // Obtener posición original antes de cambiar a fixed
  const rect = boton.getBoundingClientRect();
  let posX = rect.left;
  let posY = rect.top;

  // Velocidad de movimiento
  let dx = 3;
  let dy = 3;

  let yaMoviendose = false;

  // Evento al hacer clic por primera vez
  boton.addEventListener("click", () => {
    if (yaMoviendose) return;
    yaMoviendose = true;

    // Cambiar a posición fija en la misma coordenada
    boton.style.position = "fixed";
    boton.style.left = `${posX}px`;
    boton.style.top = `${posY}px`;
    boton.style.zIndex = "9999";

    const moveButton = () => {
      const btnWidth = boton.offsetWidth;
      const btnHeight = boton.offsetHeight;
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      // Rebote
      if (posX + dx <= 0 || posX + btnWidth + dx >= winWidth) {
        dx *= -1;
      }
      if (posY + dy <= 0 || posY + btnHeight + dy >= winHeight) {
        dy *= -1;
      }

      posX += dx;
      posY += dy;

      boton.style.left = `${posX}px`;
      boton.style.top = `${posY}px`;

      requestAnimationFrame(moveButton);
    };

    moveButton();
  });
});
