document.addEventListener("DOMContentLoaded", () => {
  const botonOriginal = document.querySelector(".ver-mas");

  // Función para iniciar el movimiento de un botón
  function iniciarMovimiento(boton, startX, startY) {
    let posX = startX;
    let posY = startY;
    let dx = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 2); // Velocidad aleatoria
    let dy = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 2);

    boton.style.position = "fixed";
    boton.style.left = `${posX}px`;
    boton.style.top = `${posY}px`;
    boton.style.zIndex = "9999";

    function mover() {
      const btnWidth = boton.offsetWidth;
      const btnHeight = boton.offsetHeight;
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      // Rebote
      if (posX + dx <= 0 || posX + btnWidth + dx >= winWidth) dx *= -1;
      if (posY + dy <= 0 || posY + btnHeight + dy >= winHeight) dy *= -1;

      posX += dx;
      posY += dy;

      boton.style.left = `${posX}px`;
      boton.style.top = `${posY}px`;

      requestAnimationFrame(mover);
    }

    mover();
  }

  // Cuando se hace clic en el botón original o sus clones
  botonOriginal.addEventListener("click", (e) => {
    const rect = e.target.getBoundingClientRect();
    const nuevoBoton = e.target.cloneNode(true);

    document.body.appendChild(nuevoBoton);
    iniciarMovimiento(nuevoBoton, rect.left, rect.top);
  });
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
