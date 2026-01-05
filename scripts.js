/* ============================================
   PIA & ROMY - KINESIOLOGÍA DEPORTIVA
   JavaScript - Funciones de navegación
   ============================================ */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript cargado correctamente');
    
    // Inicializar smooth scroll para enlaces internos
    initSmoothScroll();
    
    // Inicializar efecto del navbar
    initNavbarScrollEffect();
});

// ============================================
// PAGE NAVIGATION
// ============================================
function showPage(pageId) {
    console.log('Mostrando página:', pageId);
    
    // Ocultar todas las páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar la página seleccionada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        console.error('Página no encontrada:', pageId);
    }
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Cerrar el menú móvil si está abierto
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}

// ============================================
// SCROLL TO SECTIONS
// ============================================
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToPrograma() {
    const programaSection = document.getElementById('programa-rendimiento');
    if (programaSection) {
        programaSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbarScrollEffect() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.5rem 0';
                navbar.style.boxShadow = '0 4px 30px rgba(20, 184, 166, 0.4)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = '0 4px 20px rgba(20, 184, 166, 0.3)';
            }
        }
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ============================================
// ABRIR WHATSAPP
// ============================================
function abrirWhatsApp() {
    // Número de teléfono (formato internacional sin + ni espacios)
    const numeroWhatsApp = '56949113727'; // +56 9 4911 3727
    
    // Mensaje predefinido
    const mensaje = '¡Hola! Me interesa obtener más información sobre el *Programa de Rendimiento* de kinesiología deportiva. ¿Podrían brindarme más detalles? 💪';
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir en nueva ventana
    window.open(urlWhatsApp, '_blank');
    
    console.log('✅ Abriendo WhatsApp...');
}

// ============================================
// DEBUG: Mostrar información útil en consola
// ============================================
console.log('Funciones disponibles:');
console.log('- showPage(pageId): Cambia entre páginas');
console.log('- scrollToServices(): Scroll a Servicios');
console.log('- scrollToAbout(): Scroll a Sobre Nosotras');
console.log('- scrollToFooter(): Scroll a Footer');
console.log('- abrirWhatsApp(): Abre WhatsApp con mensaje predefinido');