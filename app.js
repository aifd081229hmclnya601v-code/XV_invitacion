
/*======================================
=         CUENTA REGRESIVA            =
======================================*/
const targetDate = new Date(2026, 7, 14, 18, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/*======================================
=          GSAP HERO                  =
======================================*/

gsap.from(".subtitle",{

  y:-60,
  opacity:0,

  duration:1.5

});

gsap.from(".hero h1",{

  y:100,
  opacity:0,

  duration:2

});

gsap.from(".date",{

  y:60,
  opacity:0,

  duration:1.5

});

/*======================================
=         GSAP SECCIONES              =
======================================*/

gsap.utils.toArray("section").forEach(section => {

  gsap.from(section,{

    scrollTrigger:section,

    y:80,

    opacity:0,

    duration:1.2

  });

});


/*======================================
=       TIMELINE ANIMATION            =
======================================*/

gsap.utils.toArray(".timeline-item").forEach(item => {

  gsap.from(item,{

    scrollTrigger:item,

    x:item.classList.contains("left")
      ? -100
      : 100,

    opacity:0,

    duration:1.2

  });

});

/*======================================
=          PARTICLES JS               =
======================================*/

particlesJS("particles-js",{

  particles:{

    number:{
      value:70
    },

    color:{
      value:"#DDE6F5"
    },

    shape:{
      type:"circle"
    },

    opacity:{
      value:0.5
    },

    size:{
      value:3
    },

    move:{
      enable:true,
      speed:1
    }

  }

});

/*======================================
=          HERO PARALLAX              =
======================================*/

window.addEventListener("scroll",()=>{

  const scroll =
  window.pageYOffset;

  const hero =
  document.querySelector(".hero");

  hero.style.backgroundPositionY =
  scroll * 0.4 + "px";

});

/*======================================
=          GALERIA HOVER              =
======================================*/

const gallery =
document.querySelector(".slider-track");

if(gallery){

  gallery.addEventListener("mouseenter",()=>{

    gallery.style.animationPlayState =
    "paused";

  });

  gallery.addEventListener("mouseleave",()=>{

    gallery.style.animationPlayState =
    "running";

  });

}

/*======================================
=        BOTON WHATSAPP               =
======================================*/

const btnWhatsapp =
document.querySelector(".btn-confirm");

if(btnWhatsapp){

  btnWhatsapp.addEventListener("click",(e)=>{

    e.preventDefault();

    const phone =
    "5214420000000";

    const message =
    "Hola, confirmo mi asistencia a los XV años.";

    const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

  });

}

/*======================================
=        BOTON MUSICA                 =
======================================*/
const music = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");

enterBtn.addEventListener("click", async () => {

    try {

        await music.play();

        intro.style.display = "none";

        console.log("Música iniciada correctamente");

    } catch (e) {

        console.log("Error al reproducir:", e);

    }

});

/*======================================
=         EFECTO BRILLO HERO          =
======================================*/

gsap.to(".hero h1",{

  textShadow:
  "0 0 30px rgba(221,230,245,.8)",

  repeat:-1,

  yoyo:true,

  duration:2

});




