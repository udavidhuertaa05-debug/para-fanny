/* =====================================================
   PARA FANNY ❤️
   SCRIPT.JS
   PARTE 1/3
   ===================================================== */


/* =========================
   LOADER
   ========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);


    },2500);


});



/* =========================
   BOTÓN DE INICIO
   ========================= */


const startButton =
document.getElementById("startButton");


const music =
document.getElementById("music");



startButton.addEventListener("click",()=>{


    music.play();


    document
    .querySelectorAll(".hidden")
    .forEach(section=>{

        section.classList.add("show");

    });



    document
    .querySelector(".message")
    .scrollIntoView({

        behavior:"smooth"

    });


});



/* =========================
   MÚSICA
   ========================= */


music.volume = 0.4;



/* =========================
   CONTADOR
   ========================= */


const fechaInicio =
new Date("2026-05-22T00:00:00");



function actualizarContador(){


    const ahora =
    new Date();


    const diferencia =
    ahora - fechaInicio;



    if(diferencia < 0){

        return;

    }



    const dias =
    Math.floor(
        diferencia /
        (1000*60*60*24)
    );



    const horas =
    Math.floor(
        diferencia /
        (1000*60*60)
    ) % 24;



    const minutos =
    Math.floor(
        diferencia /
        (1000*60)
    ) % 60;



    const segundos =
    Math.floor(
        diferencia /
        1000
    ) % 60;



    document.getElementById("dias")
    .textContent=dias;



    document.getElementById("horas")
    .textContent=horas;



    document.getElementById("minutos")
    .textContent=minutos;



    document.getElementById("segundos")
    .textContent=segundos;



}



setInterval(
    actualizarContador,
    1000
);



actualizarContador();




/* =========================
   APARICIÓN AL SCROLL
   ========================= */


const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},{


    threshold:.2


});



document
.querySelectorAll(".hidden")
.forEach(el=>{


    observer.observe(el);


});



/* =========================
   ESTRELLAS
   ========================= */


const stars =
document.getElementById("stars");



for(let i=0;i<120;i++){


    const star =
    document.createElement("div");


    star.className="star";


    star.style.left =
    Math.random()*100+"vw";


    star.style.top =
    Math.random()*100+"vh";


    star.style.animationDelay =
    Math.random()*3+"s";



    stars.appendChild(star);



}



/* =========================
   CORAZONES DE FONDO
   ========================= */


const hearts =
document.getElementById("hearts");



setInterval(()=>{


    const heart =
    document.createElement("div");



    heart.className=
    "background-heart";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"vw";



    heart.style.fontSize =
    (15+Math.random()*25)+"px";



    hearts.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },12000);
/* =====================================================
   PARA FANNY ❤️
   SCRIPT.JS
   PARTE 2/3
   SOBRE - CARTA - RAZONES
   ===================================================== */


/* =========================
   SOBRE Y CARTA
   ========================= */


const envelope =
document.getElementById("envelope");


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



envelope.addEventListener("click",()=>{


    if(envelope.classList.contains("open"))
    return;



    envelope.classList.add("open");



    setTimeout(()=>{


        escribirCarta();


    },1000);



});




function escribirCarta(){


    if(escribiendo)
    return;



    escribiendo=true;


    const texto =
    document.getElementById("typing");


    let i=0;



    const intervalo =
    setInterval(()=>{


        if(i < textoCarta.length){


            texto.innerHTML +=
            textoCarta.charAt(i);


            i++;


        }

        else{


            clearInterval(intervalo);


        }



    },45);



}





/* =========================
   100 RAZONES
   ========================= */


const razones=[


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



const reasonText =
document.getElementById("reasonText");


const reasonButton =
document.getElementById("reasonButton");



reasonButton.addEventListener("click",()=>{


    const random =
    razones[
        Math.floor(
            Math.random()*razones.length
        )
    ];



    reasonText.style.opacity=0;



    setTimeout(()=>{


        reasonText.innerHTML=random;


        reasonText.style.opacity=1;


    },300);



});




/* =========================
   FOTOS ANIMADAS
   ========================= */


const photos =
document.querySelectorAll(".photo");



photos.forEach(photo=>{


    photo.addEventListener("mouseenter",()=>{


        photo.style.zIndex="5";


    });



    photo.addEventListener("mouseleave",()=>{


        photo.style.zIndex="1";


    });



});
/* =====================================================
   PARA FANNY ❤️
   SCRIPT.JS
   PARTE 3/3
   EFECTOS FINALES Y SORPRESA
   ===================================================== */


/* =========================
   BOTÓN SORPRESA
   ========================= */


const surpriseButton =
document.getElementById("surprise");



surpriseButton.addEventListener("click",()=>{


    lanzarCorazones();



    setTimeout(()=>{


        alert(
        "❤️ Fanny, gracias por existir. \n\nSiempre voy a cuidar nuestro amor. ❤️"
        );


    },800);



});




/* =========================
   LLUVIA DE CORAZONES
   ========================= */


function lanzarCorazones(){


    for(let i=0;i<120;i++){


        setTimeout(()=>{


            const heart =
            document.createElement("div");



            heart.className=
            "floating-heart";



            heart.innerHTML=
            ["❤️","💖","💕","💗","💘"]
            [
                Math.floor(
                Math.random()*5
                )
            ];



            heart.style.left =
            Math.random()*100+"vw";



            heart.style.fontSize =
            (20+
            Math.random()*35)
            +"px";



            document.body.appendChild(heart);



            setTimeout(()=>{


                heart.remove();


            },8000);



        },i*30);



    }


}





/* =========================
   CORAZONES AL TOCAR LA PANTALLA
   ========================= */


document.addEventListener(
"click",
(e)=>{


    if(
    e.target.tagName==="BUTTON" ||
    e.target.classList.contains("envelope")
    )
    return;



    const heart =
    document.createElement("div");



    heart.className=
    "click-heart";



    heart.innerHTML="❤️";



    heart.style.left =
    e.pageX+"px";



    heart.style.top =
    e.pageY+"px";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },2000);



});





/* =========================
   CORAZÓN CON EL CURSOR
   ========================= */


document.addEventListener(
"mousemove",
(e)=>{


    if(Math.random()>0.85){


        const cursorHeart =
        document.createElement("div");



        cursorHeart.className=
        "cursor-heart";



        cursorHeart.innerHTML="💗";



        cursorHeart.style.left =
        e.clientX+"px";



        cursorHeart.style.top =
        e.clientY+"px";



        document.body.appendChild(cursorHeart);



        setTimeout(()=>{


            cursorHeart.remove();


        },800);



    }


});





/* =========================
   MENSAJE SECRETO
   ========================= */


let clicks=0;



document
.body
.addEventListener("dblclick",()=>{


    clicks++;



    if(clicks===5){


        alert(
        "✨ Encontraste un secreto ✨\n\nFanny siempre tendrá un lugar especial en el corazón de David ❤️"
        );



        clicks=0;


    }



});





/* =========================
   EFECTO DE MÚSICA SUAVE
   ========================= */


music.addEventListener(
"play",
()=>{


    music.volume=0;


    let volumen=0;



    const subir=
    setInterval(()=>{


        if(volumen<0.4){


            volumen+=0.02;


            music.volume=volumen;


        }


        else{


            clearInterval(subir);


        }



    },100);



});





/* =========================
   EVITAR ERRORES SI FALTA ALGO
   ========================= */


window.addEventListener(
"error",
(e)=>{


    console.log(
    "Elemento no encontrado:",
    e.message
    );


});

},1500);
