
const cloud = document.getElementById("cloud");
const barralateral = document.querySelector(".barra-lateral");
const span = document.querySelectorAll("span");
const palanca = document.querySelector(".switch")
const circulo = document.querySelector(".circulo")
const menu = document.querySelector(".menu");
const main = document.querySelector("main")

menu.addEventListener("click", () => {
  barralateral.classList.toggle("max-barra-lateral");
  if(barralateral.classList.contains("max-barra-lateral")){
    menu.children[0].style.display = "none";
    menu.children[1].style.display = "block";
  }
  else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if (window.innerWidth <= 320){
        barralateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto")
        })
    }
});


palanca.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");


})

cloud.addEventListener("click", () => {
    barralateral.classList.toggle("mini-barra-lateral");
   main.classList.toggle("min-main");
    span.forEach((span) => {
        span.classList.toggle("oculto");
    });

    navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: "1000",
    };

    ScrollReveal().reveal(".header__image img", {
        ...scrollRevealOption,
        origin: "right",
    });
    ScrollReveal().reveal(".header__container h1", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".header_content .section_description", {
        ...scrollRevealOption,
        delay: 1000,
    });
    ScrollReveal().reveal(".header__btns", {
        ...scrollRevealOption,
        delay: 1500,
    });
    ScrollReveal().reveal(".header__stats", {
        ...scrollRevealOption,
        delay: 2000,
    });

    ScrollReveal().reveal(".genre__card", {
        ...scrollRevealOption,
        interval: 500,
    });

    ScrollReveal().reveal(".feature__image img", {
        ...scrollRevealOption,
        origin: "right",
    });
    ScrollReveal().reveal(".feature_content .section_header", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".feature__list li", {
        ...scrollRevealOption,
        delay: 1000,
        interval: 500,
    });

    const swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });
});
