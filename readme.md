# 🏥 Pia & Romy - Kinesiología Deportiva & Movimiento

## 📁 Estructura del Proyecto

```
proyecto/
│
├── index.html          # Página principal (HTML)
├── styles.css          # Estilos (CSS)
├── scripts.js          # Funcionalidad (JavaScript)
└── README.md           # Este archivo
```

## 🚀 Cómo Usar en Visual Studio Code

### 1️⃣ **Descargar los Archivos**
Descarga los 3 archivos principales:
- `index.html`
- `styles.css`
- `scripts.js`

### 2️⃣ **Crear la Carpeta del Proyecto**
Crea una carpeta en tu computadora, por ejemplo:
```
C:/Proyectos/pia-romy/
```

### 3️⃣ **Colocar los Archivos**
Coloca los 3 archivos en la misma carpeta:
```
pia-romy/
├── index.html
├── styles.css
└── scripts.js
```

### 4️⃣ **Abrir en VS Code**
1. Abre Visual Studio Code
2. File → Open Folder
3. Selecciona la carpeta `pia-romy`

### 5️⃣ **Visualizar la Página**
Tienes 2 opciones:

**Opción A: Live Server (Recomendado)**
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"
4. Se abrirá en tu navegador con recarga automática

**Opción B: Abrir Directamente**
1. Doble click en `index.html`
2. Se abrirá en tu navegador predeterminado

## 📄 Descripción de Archivos

### **index.html**
- Estructura completa de la página web
- Logo animado en navbar
- Sección Hero
- Servicios
- Programa de Rendimiento
- Cursos/Educación
- Sobre Nosotras
- Footer con contacto

### **styles.css**
- Todos los estilos visuales
- Variables CSS de colores
- Responsive design
- Animaciones
- Efectos hover

### **scripts.js**
- Navegación entre páginas
- Scroll suave a secciones
- Efecto navbar al hacer scroll
- Manejo del menú móvil

## 🎨 Colores de la Marca

```css
--primary-color: #14B8A6   /* Turquesa/Verde agua */
--secondary-color: #FF6B9D /* Rosa */
--accent-color: #10B981    /* Verde */
--dark-color: #1F2937      /* Gris oscuro */
--light-color: #F9FAFB     /* Gris claro */
```

## 📱 Secciones de la Página

### **Home (Página Principal)**
1. **Navbar** - Logo animado + menú de navegación
2. **Hero** - Encabezado impactante con llamado a acción
3. **Servicios** - Rehabilitación y Entrenamiento
4. **Programa Rendimiento** - Programa destacado con pilares y metodología
5. **Sobre Nosotras** - Información de Pia & Romy
6. **Footer** - Contacto y redes sociales

### **Educación**
- 6 cursos online disponibles
- Información de precio y duración
- Categorías: Rehabilitación, Entrenamiento, Prevención, etc.

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript Vanilla** - Funcionalidad
- **Bootstrap 5.3.2** - Framework CSS
- **Bootstrap Icons** - Iconografía
- **Google Fonts (Poppins)** - Tipografía

## ✏️ Cómo Editar el Contenido

### **Cambiar Textos**
Abre `index.html` y busca el texto que quieres cambiar.
Ejemplo: Para cambiar el título del hero:
```html
<h1>Recupera tu Movimiento, <br>Supera tus Límites</h1>
```

### **Cambiar Colores**
Abre `styles.css` y modifica las variables CSS al inicio:
```css
:root {
    --primary-color: #14B8A6;  /* Cambia este valor */
}
```

### **Cambiar Información de Contacto**
En `index.html`, busca la sección del footer:
```html
<li><i class="bi bi-telephone-fill"></i> +56 9 4911 3727</li>
<li><i class="bi bi-envelope-fill"></i> kine.pia.vallejos@gmail.com</li>
```

## 🎬 Animaciones

### **Logo Animado**
El logo tiene 3 animaciones SVG:
1. Círculo rosa que rebota verticalmente
2. Línea blanca con efecto pulso
3. Texto con fade-in progresivo

### **Efectos Hover**
- Tarjetas de servicio se elevan
- Iconos rotan ligeramente
- Enlaces del navbar tienen línea inferior
- Botones con sombra al hacer hover

## 📲 Responsive Design

La página se adapta automáticamente a:
- 💻 **Desktop** (1200px+)
- 💻 **Laptop** (992px - 1199px)
- 📱 **Tablet** (768px - 991px)
- 📱 **Móvil** (< 768px)

## 🔧 Funciones JavaScript

### **Navegación**
```javascript
showPage('home')      // Muestra página Home
showPage('education') // Muestra página Educación
```

### **Scroll Suave**
```javascript
scrollToServices()  // Scroll a Servicios
scrollToAbout()     // Scroll a Sobre Nosotras
scrollToFooter()    // Scroll a Footer
```

## 📞 Información de Contacto

- **Teléfono:** +56 9 4911 3727
- **Email:** kine.pia.vallejos@gmail.com
- **Instagram:** @kine.pia.vallejos
- **Ubicación:** Valparaíso, Chile

## ⚡ Próximos Pasos Sugeridos

1. ✅ Agregar imágenes reales de las kinesiólogas
2. ✅ Conectar formulario de contacto funcional
3. ✅ Integrar sistema de pago para cursos
4. ✅ Agregar testimonios de pacientes
5. ✅ Implementar blog/noticias
6. ✅ Conectar con redes sociales reales

## 💡 Tips de Desarrollo

- Usa **Live Server** para ver cambios en tiempo real
- Comenta tu código cuando hagas cambios importantes
- Guarda copias de respaldo antes de editar
- Prueba en diferentes navegadores (Chrome, Firefox, Safari)
- Verifica responsive en herramientas de desarrollo (F12)

## 🐛 Solución de Problemas

### **El logo no se ve animado**
- Asegúrate de que el navegador soporte animaciones SVG
- Prueba en Chrome o Firefox

### **Los estilos no cargan**
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Revisa la consola del navegador (F12) para errores

### **El menú móvil no funciona**
- Verifica que Bootstrap JS esté cargando correctamente
- Comprueba la conexión a internet (usa CDN)

---

## 📝 Licencia

© 2024 Pia & Romy. Todos los derechos reservados.

---

**¡Listo para comenzar a trabajar! 🚀**