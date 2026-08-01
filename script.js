/* =====================================================
   PARA FANNY ❤️
   SCRIPT.JS - VERSIÓN CORREGIDA Y OPTIMIZADA
   ===================================================== */

/* =========================
   LOADER
   ========================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        }, 2500);
    }
});

/* =========================
   BOTÓN DE INICIO Y MÚSICA
   ========================= */
const startButton = document.getElementById("startButton");
const music = document.getElementById("music");

if (startButton && music) {
    startButton.addEventListener("click", () => {
        // Fijamos el volumen directo antes de reproducir
        music.volume = 0.4;
        
        // Intentamos reproducir el audio
        music.play().then(() => {
            console.log("Música reproduciéndose correctamente.");
        }).catch(e => {
            console.log("Error al reproducir música:", e);
        });

        // Muestra los elementos ocultos
        document.querySelectorAll(".hidden").forEach(section => {
            section.classList.add("show");
        });

        const messageSection = document.querySelector(".message");
        if (messageSection) {
            messageSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

/* =========================
   CONTADOR DE TIEMPO
   ========================= */
const fechaInicio = new Date("2026-05-22T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia < 0) return;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const segundos = Math.floor(diferencia / 1000) % 60;

    const elDias = document.getElementById("dias");
    const elHoras = document.getElementById("horas");
    const elMinutos = document.getElementById("minutos");
    const elSegundos = document.getElementById("segundos");

    if (elDias) elDias.textContent = dias;
    if (elHoras) elHoras.textContent = horas;
    if (elMinutos) elMinutos.textContent = minutos;
    if (elSegundos) elSegundos.textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* =========================
   APARICIÓN AL SCROLL
   ========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* =========================
   ESTRELLAS DE FONDO
   ========================= */
const stars = document.getElementById("stars");
if (stars) {
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDelay = Math.random() * 3 + "s";
        stars.appendChild(star);
    }
}

/* =========================
   CORAZONES FLOTANTES DE FONDO
   ========================= */
const hearts = document.getElementById("hearts");
if (hearts) {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "background-heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);
    }, 1500);
}

/* =========================
   SOBRE Y CARTA MAQUINADA
   ========================= */
const envelope = document.getElementById("envelope");
const textoCarta = `Mi querida Fanny...

Desde que llegaste a mi vida,
todo empezó a ser mucho más bonito.

Gracias por cada sonrisa,
cada momento,
cada palabra y cada abrazo.

Me encanta la persona que eres.

Tu forma de querer,
tu manera de hacerme feliz
y la tranquilidad que siento contigo
son cosas que siempre voy a valorar.

Quiero seguir creando recuerdos,
cumplir sueños contigo
y estar presente en cada etapa de tu vida.

Nunca olvides lo importante que eres para mí.

Te amo muchísimo.

Con todo mi corazón...

David ❤️`;

let escribiendo = false;

if (envelope) {
    envelope.addEventListener("click", () => {
        if (envelope.classList.contains("open") || escribiendo) return;

        envelope.classList.add("open");

        setTimeout(() => {
            escribirCarta();
        }, 1000);
    });
}

function escribirCarta() {
    escribiendo = true;
    const texto = document.getElementById("typing");
    if (!texto) return;

    texto.innerHTML = ""; // Limpia el texto previo por seguridad
    let i = 0;

    const intervalo = setInterval(() => {
        if (i < textoCarta.length) {
            texto.innerHTML += textoCarta.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 45);
}

/* =========================
   GENERADOR DE RAZONES
   ========================= */
const razones = [
    "❤️ Amo tu sonrisa.",
    "❤️ Amo la forma en que me haces sentir.",
    "❤️ Amo poder ser yo contigo.",
    "❤️ Amo tus mensajes.",
    "❤️ Amo escuchar tu voz.",
    "❤️ Amo cada momento juntos.",
    "❤️ Amo tu forma de querer.",
    "❤️ Amo tus abrazos.",
    "❤️ Amo cuando me haces reír.",
    "❤️ Amo tu manera de ver la vida.",
    "❤️ Amo tus pequeños detalles.",
    "❤️ Amo cuando te preocupas por mí.",
    "❤️ Amo que seas mi persona favorita.",
    "❤️ Amo crear recuerdos contigo.",
    "❤️ Amo imaginar nuestro futuro.",
    "❤️ Amo que llegaste a mi vida.",
    "❤️ Amo tu corazón.",
    "❤️ Amo tu sinceridad.",
    "❤️ Amo tu personalidad.",
    "❤️ Amo cada parte de ti.",
    "❤️ Amo cómo haces especiales los días normales.",
    "❤️ Amo sentir que puedo confiar en ti.",
    "❤️ Amo cuando hablamos por horas.",
    "❤️ Amo nuestras conversaciones.",
    "❤️ Amo tu forma de hacerme feliz.",
    "❤️ Amo que seas tú.",
    "❤️ Amo cada foto contigo.",
    "❤️ Amo nuestros momentos juntos.",
    "❤️ Amo tus ocurrencias.",
    "❤️ Amo tus sueños.",
    "❤️ Amo verte feliz.",
    "❤️ Amo acompañarte.",
    "❤️ Amo aprender cosas contigo.",
    "❤️ Amo que me inspires.",
    "❤️ Amo que me motives.",
    "❤️ Amo tu cariño.",
    "❤️ Amo tu ternura.",
    "❤️ Amo tu forma de abrazarme.",
    "❤️ Amo tus palabras bonitas.",
    "❤️ Amo cada día contigo."
];

const reasonText = document.getElementById("reasonText");
const reasonButton = document.getElementById("reasonButton");

if (reasonButton && reasonText) {
    reasonButton.addEventListener("click", () => {
        const random = razones[Math.floor(Math.random() * razones.length)];
        reasonText.style.opacity = 0;

        setTimeout(() => {
            reasonText.innerHTML = random;
            reasonText.style.opacity = 1;
        }, 300);
    });
}

/* =========================
   FOTOS ANIMADAS (HOVER)
   ========================= */
const photos = document.querySelectorAll(".photo");
photos.forEach(photo => {
    photo.addEventListener("mouseenter", () => photo.style.zIndex = "5");
    photo.addEventListener("mouseleave", () => photo.style.zIndex = "1");
});

/* =========================
   BOTÓN SORPRESA Y LLUVIA
   ========================= */
const surpriseButton = document.getElementById("surprise");
if (surpriseButton) {
    surpriseButton.addEventListener("click", () => {
        lanzarCorazones();
        setTimeout(() => {
            alert("❤️ Fanny, gracias por existir. \n\nSiempre voy a cuidar nuestro amor. ❤️");
        }, 800);
    });
}

function lanzarCorazones() {
    for (let i = 0; i < 120; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.innerHTML = ["❤️", "💖", "💕", "💗", "💘"][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (20 + Math.random() * 35) + "px";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 8000);
        }, i * 30);
    }
}

/* =========================
   CORAZONES AL DAR CLIC
   ========================= */
document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.closest("#envelope")) return;

    const heart = document.createElement("div");
    heart.className = "click-heart";
    heart.innerHTML = "❤️";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
});

/* =========================
   CORAZÓN EN EL CURSOR
   ========================= */
document.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.85) {
        const cursorHeart = document.createElement("div");
        cursorHeart.className = "cursor-heart";
        cursorHeart.innerHTML = "💗";
        cursorHeart.style.left = e.pageX + "px";
        cursorHeart.style.top = e.pageY + "px";

        document.body.appendChild(cursorHeart);

        setTimeout(() => {
            cursorHeart.remove();
        }, 800);
    }
});

/* =========================
   MENSAJE SECRETO (DOBLE CLIC)
   ========================= */
let clicks = 0;
document.body.addEventListener("dblclick", () => {
    clicks++;
    if (clicks === 5) {
        alert("✨ Encontraste un secreto ✨\n\nFanny siempre tendrá un lugar especial en el corazón de David ❤️");
        clicks = 0;
    }
});
