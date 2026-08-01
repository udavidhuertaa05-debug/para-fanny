// =========================
// Pantalla de carga
// =========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});

// =========================
// Contador desde el 22/05/2026
// =========================

const fechaInicio = new Date("2026-05-22T00:00:00");

function actualizarContador() {

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);

    let minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    let segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `${dias} días<br>${horas} horas<br>${minutos} minutos<br>${segundos} segundos ❤️`;

}

setInterval(actualizarContador,1000);

actualizarContador();

// =========================
// Carta
// =========================

const texto = `

Mi querida Fanny...

Gracias por llegar a mi vida.

Desde que estamos juntos cada día ha sido especial.

Tu sonrisa, tu forma de ser y todo lo que eres hacen que me enamore más de ti.

Quiero seguir construyendo recuerdos contigo.

Eres mi lugar seguro.

Te amo infinitamente.

Con todo mi corazón...

David ❤️

`;

let i = 0;

function escribir(){

    if(i < texto.length){

        document.getElementById("typing").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir,40);

    }

}

escribir();

// =========================
// Música
// =========================

const music = document.getElementById("music");

const boton = document.getElementById("musicButton");

boton.onclick = () => {

    if(music.paused){

        music.play();

        boton.innerHTML = "⏸ Pausar música";

    }else{

        music.pause();

        boton.innerHTML = "🎵 Reproducir música";

    }

};

// =========================
// Corazones flotando
// =========================

document.addEventListener("click",function(e){

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = e.pageX + "px";

    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

});

// =========================
// Botón sorpresa
// =========================

document.getElementById("surpriseButton").onclick = () => {

    alert("❤️ Gracias por ser el amor de mi vida ❤️");

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            let heart=document.createElement("div");

            heart.className="heart";

            heart.innerHTML="💖";

            heart.style.left=Math.random()*window.innerWidth+"px";

            heart.style.top=window.innerHeight+"px";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },5000);

        },i*40);

    }

};

// =========================
// Estrellas
// =========================

for(let i=0;i<120;i++){

    let star=document.createElement("div");

    star.style.position="fixed";

    star.style.width="2px";

    star.style.height="2px";

    star.style.background="white";

    star.style.borderRadius="50%";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.pointerEvents="none";

    document.body.appendChild(star);

}
