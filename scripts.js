/* ============================================
   PIA & ROMY - KINESIOLOGÍA DEPORTIVA
   JavaScript con Animaciones GSAP
   ============================================ */

console.log('🚀 GSAP Loaded - Navbar Animations Ready!');

// ============================================
// GSAP ANIMATIONS
// ============================================

// Registrar plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ============================================
// ANIMACIÓN INICIAL DEL NAVBAR
// ============================================
window.addEventListener('load', function() {
    console.log('✨ Iniciando animaciones GSAP...');
    
    // 1. Animación del navbar completo - Entrada desde arriba
    gsap.to('.navbar', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        onComplete: () => console.log('✅ Navbar animado')
    });
    
    // 2. Animación del logo - Entrada con rotación
    gsap.to('.navbar-brand', {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        delay: 0.3,
        ease: 'back.out(1.7)',
        onComplete: () => console.log('✅ Logo animado')
    });
    
    // 3. Animación de los links - Entrada escalonada
    gsap.to('.nav-link', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1, // Cada link aparece 0.1s después del anterior
        delay: 0.6,
        ease: 'power2.out',
        onComplete: () => console.log('✅ Nav links animados')
    });
    
    // 4. Animación del botón hamburguesa (móvil)
    gsap.to('.navbar-toggler', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out'
    });
    
    // 5. Efecto hover en el logo usando GSAP
    const logoHoverAnimation = gsap.to('.navbar-brand svg', {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        paused: true,
        ease: 'power2.out'
    });
    
    document.querySelector('.navbar-brand').addEventListener('mouseenter', () => {
        logoHoverAnimation.play();
    });
    
    document.querySelector('.navbar-brand').addEventListener('mouseleave', () => {
        logoHoverAnimation.reverse();
    });
});

// ============================================
// ANIMACIÓN AL HACER SCROLL
// ============================================

// Cambio del navbar al hacer scroll con GSAP
gsap.to('.navbar', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => {
            gsap.to('.navbar', {
                padding: '0.5rem 0',
                boxShadow: '0 4px 30px rgba(20, 184, 166, 0.4)',
                duration: 0.3,
                ease: 'power2.out'
            });
            document.querySelector('.navbar').classList.add('navbar-scrolled');
            console.log('🔽 Navbar compacto');
        },
        onLeaveBack: () => {
            gsap.to('.navbar', {
                padding: '1rem 0',
                boxShadow: '0 4px 20px rgba(20, 184, 166, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
            document.querySelector('.navbar').classList.remove('navbar-scrolled');
            console.log('🔼 Navbar expandido');
        }
    }
});

// ============================================
// BARRA DE PROGRESO DE SCROLL
// ============================================
gsap.to('.scroll-progress', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3, // Animación suave al hacer scroll
        onUpdate: (self) => {
            gsap.to('.scroll-progress', {
                width: (self.progress * 100) + '%',
                duration: 0.1
            });
        }
    }
});

// ============================================
// ANIMACIÓN DEL DROPDOWN
// ============================================

// Detectar cuando se abre el dropdown
const dropdownElements = document.querySelectorAll('.dropdown');

dropdownElements.forEach(dropdown => {
    dropdown.addEventListener('show.bs.dropdown', function () {
        const menu = this.querySelector('.dropdown-menu');
        const items = menu.querySelectorAll('.dropdown-item');
        
        // Animar la entrada del dropdown
        gsap.fromTo(menu, 
            {
                opacity: 0,
                y: -10,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            }
        );
        
        // Animar cada item del dropdown
        gsap.fromTo(items,
            {
                opacity: 0,
                x: -10
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.out'
            }
        );
    });
    
    dropdown.addEventListener('hide.bs.dropdown', function () {
        const menu = this.querySelector('.dropdown-menu');
        
        // Animar la salida del dropdown
        gsap.to(menu, {
            opacity: 0,
            y: -5,
            duration: 0.2,
            ease: 'power2.in'
        });
    });
});

// ============================================
// ANIMACIÓN HOVER EN NAV LINKS
// ============================================

document.querySelectorAll('.nav-link').forEach(link => {
    // Animación al hacer hover
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ============================================
// ANIMACIÓN HOVER EN DROPDOWN ITEMS
// ============================================

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        gsap.to(this, {
            x: 5,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', function() {
        gsap.to(this, {
            x: 0,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
});

// ============================================
// NAVBAR QUE SE OCULTA/MUESTRA AL SCROLL
// (Opcional - descomenta si quieres este efecto)
// ============================================

/*
let lastScrollY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (lastScrollY > 100) {
                if (lastScrollY > lastScrollY) {
                    // Scroll hacia abajo - ocultar navbar
                    gsap.to('.navbar', {
                        y: -100,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                } else {
                    // Scroll hacia arriba - mostrar navbar
                    gsap.to('.navbar', {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            }
            ticking = false;
        });
        ticking = true;
    }
});
*/

// ============================================
// PAGE NAVIGATION
// ============================================
function showPage(pageId) {
    console.log('📄 Cambiando a página:', pageId);
    
    // Ocultar todas las páginas con animación
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            gsap.to(page, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    page.classList.remove('active');
                    page.style.display = 'none';
                }
            });
        }
    });
    
    // Mostrar la página seleccionada con animación
    setTimeout(() => {
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.style.display = 'block';
            targetPage.classList.add('active');
            
            gsap.fromTo(targetPage,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                }
            );
            
            console.log('✅ Página mostrada:', pageId);
        }
    }, 300);
    
    // Scroll al inicio con scroll nativo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Cerrar menú móvil
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
        // Usar scroll nativo suave (sin GSAP scrollTo)
        servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        console.log('✅ Scroll a Servicios');
    }
}

function scrollToPrograma() {
    const programaSection = document.getElementById('programa-rendimiento');
    if (programaSection) {
        programaSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        console.log('✅ Scroll a Programa de Rendimiento');
    }
}

function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        console.log('✅ Scroll a Sobre Nosotras');
    }
}

function scrollToFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        console.log('✅ Scroll a Footer');
    }
}

// ============================================
// ANIMACIONES ADICIONALES AL SCROLL
// ============================================

// Animar secciones cuando entran en viewport
gsap.utils.toArray('.service-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Animar las tarjetas de cursos
gsap.utils.toArray('.course-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Usar RequestAnimationFrame para mejor performance
ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
});

console.log('✅ Todas las animaciones GSAP cargadas');
console.log('🎨 Funciones disponibles:');
console.log('   - showPage(pageId)');
console.log('   - scrollToServices()');
console.log('   - scrollToPrograma()');
console.log('   - scrollToAbout()');
console.log('   - scrollToFooter()');