document.body.style.overflow = "hidden"; // Evita scroll no início

const preloader = document.getElementById("preloader");
const el = document.getElementById("text");
const finalText = el.textContent;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let iterations = 0;

const interval = setInterval(() => {
  let display = "";
  for (let i = 0; i < finalText.length; i++) {
    if (i < iterations) {
      display += finalText[i];
    } else if (finalText[i] === " ") {
      display += " ";
    } else {
      display += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  el.textContent = display;

  if (iterations >= finalText.length) {
    clearInterval(interval);
    setTimeout(() => {
      preloader.style.transition = "transform 1s ease";
      preloader.style.transform = "translateY(-100%)";

      // Espera a animação terminar para remover totalmente
      setTimeout(() => {
        preloader.style.display = "none";
        document.body.style.overflow = "auto"; // Libera o scroll
      }, 1000);
    }, 800);
  }

  iterations += 1 / 3;
}, 30);
