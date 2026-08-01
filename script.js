// =========================
// Pantalla de carga y disparo de la carta
// =========================
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        
        setTimeout(() => {
            loader.style.display = "none";
            // Iniciar la carta solo cuando la pantalla de carga haya desaparecido
            escribir();
        }, 800);
    }, 2000);
});

// =========================
// Contador desde el 22/05/2026
// =========================
const fechaInicio = new Date("2026-05-22T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;

    // Si la fecha es futura, mostrar un mensaje preventivo
    if (diferencia < 0) {
        document.getElementById("contador").innerHTML = "¡Muy pronto comenzará nuestra historia! ❤️";
        return;
    }

    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    let minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    let segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `${dias} días<br>${horas} horas<br>${minutos} minutos<br>${segundos} segundos ❤️`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// =========================
// Carta con tipado interactivo
// =========================
const texto = `Mi querida Fanny...

Gracias por llegar a mi vida.

Desde que estamos juntos cada día ha sido especial.

Tu sonrisa, tu forma de ser y todo lo que eres hacen que me enamore más de ti.

Quiero seguir construyendo recuerdos contigo.

Eres mi lugar seguro.

Te amo infinitamente.

Con todo mi corazón...
David ❤️`;

let i = 0;

function escribir() {
    if (i < texto.length) {
        const char = texto.charAt(i);
        // Si detecta un salto de línea, agrega un <br>, de lo contrario agrega el carácter
        document.getElementById("typing").innerHTML += (char === "\n") ? "<br>" : char;
        i++;
        setTimeout(escribir, 40);
    }
}

// =========================
// Control de Música
// =========================
const music = document.getElementById("music");
const boton = document.getElementById("musicButton");

boton.onclick = () => {
    if (music.paused) {
        music.play();
        boton.innerHTML = "⏸ Pausar música";
    } else {
        music.pause();
        boton.innerHTML = "🎵 Reproducir música";
    }
};

// =========================
// Corazones al hacer clic
// =========================
document.addEventListener("click", function (e) {
    // Evitar crear corazones si se hace clic en botones
    if (e.target.tagName === "BUTTON") return;

    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
});

// =========================
// Botón Sorpresa
// =========================
document.getElementById("surpriseButton").onclick = () => {
    alert("❤️ Gracias por ser el amor de mi vida ❤️");

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            let heart = document.createElement("div");
            heart.className = "heart burst-heart";
            heart.innerHTML = "💖";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = (window.innerHeight + window.scrollY) + "px";
            
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 50);
    }
};

// =========================
// Estrellas de fondo
// =========================
for (let i = 0; i < 80; i++) {
    let star = document.createElement("div");
    star.style.position = "fixed";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();
    star.style.pointerEvents = "none";
    star.style.zIndex = "0";
    document.body.appendChild(star);
}
