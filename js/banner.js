// Lista de imágenes del banner
const bannerImages = [
"img/banner/argentinaworldcup.jpg",
"img/banner/copa.jpg",
"img/banner/colombia.jpg"
];

let currentSlide = 0;

const banner = document.getElementById("banner");
const dotsContainer = document.getElementById("bannerDots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Crear los puntos dinámicamente según el número de imágenes
function crearDots() {
bannerImages.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => irASlide(index));
    dotsContainer.appendChild(dot);
});
}

// Actualizar imagen de fondo y el dot activo
function actualizarBanner() {
    banner.style.backgroundImage = `url('${bannerImages[currentSlide]}')`;

    // Quita las clases anteriores
    banner.classList.remove("banner-1", "banner-2", "banner-3");

    // Agrega la clase de la imagen actual
    banner.classList.add(`banner-${currentSlide + 1}`);

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function irASlide(index) {
currentSlide = index;
actualizarBanner();
}

function siguienteSlide() {
currentSlide = (currentSlide + 1) % bannerImages.length;
actualizarBanner();
}

function anteriorSlide() {
currentSlide = (currentSlide - 1 + bannerImages.length) % bannerImages.length;
actualizarBanner();
}

nextBtn.addEventListener("click", siguienteSlide);
prevBtn.addEventListener("click", anteriorSlide);

// Cambio automático cada 5 segundos
setInterval(siguienteSlide, 5000);

// Inicializar
crearDots();
actualizarBanner();