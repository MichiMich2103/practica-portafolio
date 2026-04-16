// SCROLL SUAVE PARA NAVEGACIÓN
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// DETECTAR SECCIÓN ACTIVA EN NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});


// ANIMACIÓN AL HACER SCROLL (REVEAL)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section, article").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// HEADER DINÁMICO (CAMBIA AL HACER SCROLL)
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.opacity = "0.7";
    } else {
        header.style.opacity = "1";
    }
});


// EFECTO SUTIL EN PROYECTOS (PARALLAX LIGERO)
document.querySelectorAll("article img").forEach(img => {
    img.addEventListener("mousemove", (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        img.style.transform = `scale(1.05) translate(${(x - rect.width/2)/20}px, ${(y - rect.height/2)/20}px)`;
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1) translate(0,0)";
    });
});