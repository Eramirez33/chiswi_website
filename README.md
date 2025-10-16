# Chiswi Catering Website

Repositorio del sitio web oficial de Chiswi Catering, una empresa especializada en soluciones gastronómicas para eventos corporativos y sociales.

## Descripción

Este proyecto es un sitio web estático de una sola página (Single Page Application) diseñado para presentar los servicios, la historia y la información de contacto de Chiswi Catering. El sitio es completamente responsivo y cuenta con diversas animaciones y secciones interactivas para ofrecer una experiencia de usuario moderna y atractiva.

## ✨ Características Principales

- **Diseño Responsivo:** Adaptable a dispositivos móviles, tabletas y computadoras de escritorio.
- **Navegación Elástica y Flotante:** Un menú de navegación moderno con efectos visuales al hacer scroll.
- **Banner de Campañas:** Un banner superior personalizable para anuncios importantes (ej. promociones de Navidad).
- **Carrusel de Servicios:** Sección de "Nuestro Catálogo" con un carrusel interactivo para mostrar los diferentes servicios.
- **Animaciones de Scroll:** Efectos de aparición y movimiento en elementos a medida que el usuario navega por la página (usando WOW.js).
- **Sección de Historia Interactiva:** Slideshow de imágenes y tooltips informativos.
- **Proceso Interactivo:** Una sección visual que muestra el proceso de trabajo de la empresa con animaciones de scroll.
- **Ticker de Clientes:** Carrusel infinito con los logos de los clientes que confían en Chiswi.
- **Contacto por WhatsApp:** Botones de llamada a la acción que abren una conversación de WhatsApp pre-configurada.
- **Botón "Volver Arriba":** Facilita la navegación en una página larga.

## 🚀 Tecnologías Utilizadas

Este proyecto está construido principalmente con tecnologías front-end estándar y algunas librerías para mejorar la interactividad y el diseño.

### Lenguajes
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

### Frameworks y Librerías
- **Tailwind CSS (vía CDN):** Framework CSS "utility-first" para un diseño rápido y responsivo.
- **jQuery (vía CDN):** Librería de JavaScript para simplificar la manipulación del DOM y la gestión de eventos.
- **Swiper.js (vía CDN):** Utilizado para el carrusel de logos de clientes en la sección "Quienes Confían en Nosotros".
- **Owl Carousel (vía CDN):** Utilizado para el carrusel de tarjetas de servicios en la sección "Un Servicio para Cada Ocasión".
- **WOW.js (vía CDN):** Librería para revelar animaciones al hacer scroll. Se apoya en Animate.css.
- **Animate.css (vía CDN):** Colección de animaciones CSS listas para usar.
- **Google Fonts:** Para la tipografía del sitio (Poppins, Dancing Script, Playfair Display, Roboto).
- **Font Awesome:** Para los íconos utilizados en todo el sitio.
- **Preline UI (vía CDN):** Algunos componentes y funcionalidades de UI.

## 📂 Estructura del Proyecto

El repositorio está organizado de la siguiente manera:

```
/
├── css/
│   ├── styles.css               # Hoja de estilos principal
│   └── components/              # Estilos para componentes específicos (botones, hero, etc.)
├── img/
│   └── ...                      # Todas las imágenes y logos del sitio
├── js/
│   ├── config.js                # Configuración central (ej. número de WhatsApp)
│   ├── campaign-config.js       # Configuración del banner de campaña
│   ├── ticker.js                # Lógica para el carrusel de clientes (Swiper.js)
│   ├── historia.js              # Lógica para el slideshow de la sección de historia
│   ├── mobile-nav.js            # Lógica para el menú de navegación en móviles
│   ├── ui-helpers.js            # Scripts para funcionalidades de UI (banner, scroll top, etc.)
│   └── ...                      # Otros scripts para componentes específicos
├── index.html                   # Archivo principal del sitio web
└── README.md                    # Este archivo
```

## 🔧 Configuración y Personalización

La mayor parte del contenido y la configuración se puede modificar fácilmente:

### Banner de Campaña
Para activar, desactivar o cambiar el texto del banner superior, edita el archivo `js/campaign-config.js`:
```javascript
const campaignConfig = {
    enabled: true, // Poner en false para desactivar
    text: "Tu texto aquí",
    ctaText: "Texto del botón",
    ctaSubject: "Asunto para WhatsApp"
};
```

### Información de Contacto
Para cambiar el número de WhatsApp utilizado en los botones de contacto, edita el archivo `js/config.js`:
```javascript
const config = {
    numeroWhatsApp: '598XXXXXXXX' // Reemplaza con tu número
};
```

### Contenido y Textos
Todo el contenido textual e imágenes se encuentran directamente en el archivo `index.html`. Puedes editar las secciones correspondientes para actualizar la información.

## 🛠️ Cómo Ejecutar Localmente

Al ser un proyecto web estático, no requiere un servidor complejo. Simplemente sigue estos pasos:

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en tu navegador web preferido (ej. Google Chrome, Firefox).

¡Y listo! El sitio debería funcionar localmente.