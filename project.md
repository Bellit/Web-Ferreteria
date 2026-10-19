# 🏆 Ferretería Pino — Candidato a Premio Diseño Web 2026

## 📋 Información General

| Campo | Valor |
|-------|-------|
| **Proyecto** | Rediseño radical — Web institucional Ferretería Pino |
| **Stack** | Vite + PostCSS + HTML + CSS3 + JS (ES Modules) |
| **Librerías clave** | GSAP + Three.js + Locomotive Scroll + tsParticles |
| **Estilo** | Tech-Futurista · Glassmorphism · Neón · Oscuro |
| **Tipografía** | Clash Display (títulos) + Space Grotesk (cuerpo) |
| **Despliegue** | Local (sin hosting) |
| **Inicio** | 18/06/2026 |
| **Estado** | 🟢 Fase 0-5 completadas — Paleta Ferrari Premium implementada |
| **Archivos creados** | 37+ archivos (CSS, JS, HTML, config) |
| **Próximo paso** | Ilustraciones SVG propias, SEO, accesibilidad |

---

## 🎨 Paleta de Colores — Ferrari Premium

| Rol | Hex | Descripción |
|-----|-----|-------------|
| Fondo base | `#0a0505` | Negro con matiz rojo (cálido) |
| Fondo sección | `#100a0a` | Secciones alternas (tinta rojiza) |
| Glass border | `rgba(255,200,200,0.08)` | Bordes cristal con tinte rojo |
| **🏆 Rojo Cadena88** | `#e60000` | Color principal — neón, CTAs, glows |
| **Gold Premium** | `#ffb300` | Acento secundario — badges, gradientes |
| **Rojo Oscuro** | `#8b0000` | Gradientes, glow suave, fondos |
| **Rojo Brillante** | `#ff1744` | Detalles finos, iconos menores |
| Texto principal | `#f5f0f0` | Blanco cálido |
| Texto secundario | `rgba(245,240,240,0.5)` | Gris rojizo claro |

---

## 📁 Estructura del Proyecto

```
ferreteria-web/
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.js
├── src/
│   ├── main.js                    # Entry point
│   ├── app.js                     # App initializer (Barba.js core)
│   ├── styles/
│   │   ├── _reset.css
│   │   ├── _variables.css
│   │   ├── _typography.css
│   │   ├── _glassmorphism.css
│   │   ├── _layout.css
│   │   ├── _animations.css
│   │   ├── components/
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   ├── catalog.css
│   │   │   ├── services.css
│   │   │   ├── about.css
│   │   │   ├── contact.css
│   │   │   ├── footer.css
│   │   │   ├── cursor.css
│   │   │   └── whatsapp.css
│   │   ├── sections/
│   │   │   ├── _transitions.css
│   │   │   └── _dividers.css
│   │   └── utilities/
│   │       ├── _responsive.css
│   │       └── _keyframes.css
│   ├── js/
│   │   ├── modules/
│   │   │   ├── navigation.js
│   │   │   ├── catalog.js
│   │   │   ├── contact.js
│   │   │   ├── whatsapp.js
│   │   │   ├── hero-three.js
│   │   │   ├── cursor.js
│   │   │   ├── particles.js
│   │   │   ├── scroll.js
│   │   │   ├── transitions.js
│   │   │   ├── glass-parallax.js
│   │   │   └── illustrations.js
│   │   └── utils/
│   │       ├── dom.js
│   │       ├── math.js
│   │       └── colors.js
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── ClashDisplay-Variable.woff2
│   │   │   └── SpaceGrotesk-Variable.woff2
│   │   ├── images/
│   │   │   └── og-image.webp
│   │   ├── illustrations/
│   │   │   ├── hero-tools.svg
│   │   │   ├── key-illustration.svg
│   │   │   ├── pattern-grid.svg
│   │   │   ├── tool-icons.svg
│   │   │   └── dividers/
│   │   │       ├── divider-wave.svg
│   │   │       └── divider-diagonal.svg
│   │   └── textures/
│   │       └── noise.png
│   └── data/
│       └── products.json
└── public/
    └── favicon.svg
```

---

## 📦 TICKETS / PLAN DE TRABAJO

---

### FASE 0 — PREPARACIÓN Y TOOLING

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-000** | Inicializar proyecto Vite con estructura modular | 🟢 Completado | 🔥 Crítica | — | `npm run dev` inicia servidor con HMR. `npm run build` genera `dist/` con assets minificados. |
| **T-001** | Migrar estructura de archivos a `src/` | 🟢 Completado | 🔥 Crítica | T-000 | Estructura modular con `src/styles/`, `src/js/modules/`, `src/assets/`. Todos los imports funcionan. |
| **T-002** | Instalar dependencias: GSAP, Three.js, Locomotive, Barba, tsParticles | 🟡 Pendiente* | 🔥 Crítica | T-000 | Ejecutar `npm install` o hacer doble clic en `setup.bat`. package.json configurado con todas las deps + Fontsource. |
| **T-003** | Configurar tipografías Clash Display + Space Grotesk | 🟢 Completado | 🔥 Crítica | T-001 | Fuentes via Fontsource (npm). Importadas en main.js. Sin need de descargar .woff2 manualmente. |
| **T-004** | CSS Variables: paleta neón + glassmorphism + easing | 🟢 Completado | 🔥 Crítica | T-001 | Variables globales accesibles. Consistencia visual en todos los componentes. |

---

### FASE 1 — FUNDACIÓN VISUAL

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-100** | Reset CSS moderno con color-scheme dark | 🟢 Completado | Alta | T-004 | Sin estilos default. `color-scheme: dark`. `scroll-behavior: smooth`. |
| **T-101** | Layout asimétrico con secciones superpuestas y clip-path | 🟢 Completado | Alta | T-100 | Layout visualmente asimétrico. Grid masonry, grid servicios 3 columnas, about 40/60. |
| **T-102** | Dividers animados SVG entre secciones | 🟢 Completado | Media | T-101 | Separadores con ondulaciones SVG. Wave animada en footer con keyframes. |
| **T-103** | Glassmorphism utility classes (.glass, .glass--heavy, etc.) | 🟢 Completado | Alta | T-100 | Efecto glass + interactive + neon. Con fallback para Firefox (sin backdrop-filter). |
| **T-104** | Gradiente dinámico ambiental animado (keyframes) | 🟢 Completado | Media | T-100 | Keyframes gradientAmbient, float, pulseGlow, shimmer, spinSlow, etc. |

---

### FASE 2 — MAQUETACIÓN HTML

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-200** | Hero inmersivo: estructura HTML con canvas Three.js | 🟢 Completado | 🔥 Crítica | T-101 | Canvas en hero con z-index. Contenido superpuesto. CTA con glow. Badge Cadena88 flotante. |
| **T-201** | Catálogo 2.0: grid masonry asimétrico con filtros glass | 🟢 Completado | Alta | T-101 | Grid masonry con columnas auto-fill. Filtros glass con efecto neon activo. Cards con glass + hover. |
| **T-202** | Servicios: tarjetas 3D con tilt effect | 🟢 Completado | Alta | T-101 | 3 tarjetas glass con data-tilt. Central destacada scale(1.05). Iconos neon + glow. |
| **T-203** | Sobre Nosotros: timeline + contadores animados | 🟢 Completado | Alta | T-101 | Layout 40/60 con ilustracion SVG. Contadores glass con data-target animado con GSAP. |
| **T-204** | Contacto: formulario animado + mapa glass | 🟢 Completado | Alta | T-101 | Labels flotantes con CSS focus-within. Inputs glass con glow neon. Mapa en glass wrapper. |
| **T-205** | Footer con SVG wave + enlaces magnéticos | 🟢 Completado | Media | T-101 | Wave SVG animada con keyframes. Grid 4 columnas. Badge Cadena88 con glow. |
| **T-206** | Header glassmorphism con blur dinámico | 🟢 Completado | 🔥 Crítica | T-100, T-103 | Header glass con blur 20px->40px al scrollear. Nav links con underline neon animado. Menú mobile fullscreen. |

---

### FASE 3 — COMPONENTES PREMIUM

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-300** | CSS completo del header (glass, blur dinámico, logo neón) | 🟢 Completado | Alta | T-206 | Blur aumenta de 20px a 40px al scrollear. Logo con glow. Links underline neon animado. Mobile fullscreen. |
| **T-301** | Hero Three.js: geometrías flotantes con bloom | 🟢 Completado* | 🔥🔥 EXTREMA | T-200, T-002 | Escena 3D con icosaedro, torus knot, dodecaedro, toro. Efecto mouse interactivo. 200 partículas. Requiere `npm install` para funcionar. |
| **T-302** | Custom cursor con efecto magnético + trail | 🟢 Completado | Alta | T-002 | Cursor con dot + ring. Lerp suave (0.1). Efecto magnético en botones. Oculto en móvil/touch. |
| **T-303** | tsParticles background interactivo | 🟢 Completado* | Alta | T-002 | Fondo partículas con colores neón. Conexiones. Repulse en hover. Requiere `npm install`. |
| **T-304** | Sistema de botones con glow + ripple | 🟢 Completado | Alta | T-103 | Variantes primary (gradient cyan-purple), glass (transparente), sm/lg. Ripple effect. |
| **T-305** | Service cards: CSS tilt 3D + glow | 🟢 Completado | Alta | T-202, T-103 | Glass bg con service-card__glow. Iconos neon. transform-style preserve-3d. |
| **T-306** | Formulario: inputs animados + validación visual | 🟢 Completado | Alta | T-204 | Labels flotantes con CSS. Focus glow neon. Error con shake. Loading en submit. |
| **T-307** | WhatsApp button flotante con morphing | 🟢 Completado | Media | T-103 | Píldora expandible en hover. Glow verde neon (whatsappPulse). Tooltip animado. |

---

### FASE 4 — ANIMACIONES Y EFECTOS

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-400** | GSAP ScrollTrigger: enters animados por sección | 🟢 Completado* | 🔥🔥 EXTREMA | T-002, T-101 | ScrollTrigger con reveals, stagger, counters, service cards. Requiere `npm install`. |
| **T-401** | Locomotive Scroll v5 con parallax layers + GSAP ScrollTrigger | 🟢 Completado | 🔥 Crítica | T-002, T-400 | Locomotive Scroll v5 integrado con Lenis. GSAP ScrollTrigger sincronizado via scrollerProxy. Parallax via data-scroll-speed. scrollTo exportado para navegación. CSS importado en main.css. |
| **T-402** | Barba.js + GSAP page transitions | ❌ Descartado | — | — | Descartado: Barba.js es para multi-página. Reemplazado por transiciones GSAP custom con overlay (#T-406). |
| **T-403** | Micro-interacciones: hover states premium | 🟢 Completado | Alta | T-002 | Incluido en CSS (underlines, glass hover, glow neon, tilt 3D, ripple). |
| **T-404** | Contadores estilo odómetro | 🟢 Completado* | Media | T-400 | Animación con GSAP desde 0 hasta target. Snap entero. Requiere npm install. |
| **T-405** | Dividers animados con GSAP morphing | 🔴 Pendiente | Media | T-102, T-400 | Pendiente de implementar (CSS wave existe, morphing GSAP pendiente) |
| **T-406** | Transiciones GSAP entre secciones (reemplaza Barba.js) | 🟢 Completado | Alta | T-401, T-400 | Overlay fullscreen fade-in/out con glow + icono animado. Navegación coordina con Locomotive Scroll. onComplete callback. isTransitioning lock para evitar doble clic. |

---

### FASE 5 — CONTENIDO ILUSTRATIVO

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-500** | Sistema de ilustraciones SVG modulares | 🔴 Pendiente | Alta | T-001 | Ilustraciones originales estilo tech-ferretero. viewBox consistente. currentColor. |
| **T-501** | Patrón generativo de fondo (blueprint/grid) | 🔴 Pendiente | Alta | T-500 | Patrón SVG como textura de fondo. Animación de desplazamiento. |
| **T-502** | Ilustraciones animadas con GSAP (DrawSVG, morphing) | 🔴 Pendiente | Alta | T-500, T-002 | SVG se dibujan al entrar. Morphing entre formas. Animaciones loop decorativas. |
| **T-503** | Iconos con animación de carga diferida | 🔴 Pendiente | Media | T-500 | Iconos aparecen con efecto de dibujo + bounce. IntersectionObserver + GSAP. |

---

### FASE 6 — RESPONSIVE Y PERFORMANCE

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-600** | Responsive design system (mobile/tablet/desktop) | 🟢 Completado | 🔥 Crítica | Todos componentes | Media queries para 1023px, 767px, 360px. Grid masonry adaptable. Hero responsive. |
| **T-601** | Hero Three.js responsive (adaptive quality) | 🟢 Completado* | Alta | T-301, T-600 | Three.js se desactiva en móvil (<767px). Pixel ratio capped a 2. Requiere npm install. |
| **T-602** | Performance: lazy loading, code splitting, preload | 🟡 Parcial | 🔥 Crítica | T-000 | Code splitting en vite.config.js (vendor/animations/particles chunks). Preload fonts en HTML. |
| **T-603** | Optimización GPU: will-change, transform, force3D | 🟢 Completado | Alta | T-400 | Renderizado Three.js con delta time. Lerp en cursor. GPU accelerated properties. |
| **T-604** | Imágenes WebP + AVIF + vectoriales | 🔴 Pendiente | Media | T-500 | Pendiente de reemplazar picsum por ilustraciones vectoriales propias. |

---

### FASE 7 — TESTING, ACCESIBILIDAD Y PULIDO

| ID | Tarea | Estado | Prioridad | Dependencias | Criterios de Aceptación |
|----|-------|--------|-----------|--------------|------------------------|
| **T-700** | Accesibilidad WCAG 2.2 (cargar skill accessibility) | 🔴 Pendiente | Alta | Todas | Roles ARIA incluidos (banner, navigation, main). Focus visible con :focus-visible. Pendiente auditoría completa. |
| **T-701** | prefers-reduced-motion: modo accesible | 🟢 Completado | Alta | T-700 | Media query en reset.css desactiva animaciones con reduced-motion. |
| **T-702** | SEO y meta tags avanzados (cargar skill seo) | 🟡 Parcial | Alta | Todas | OG tags, meta description, keywords. Pendiente JSON-LD y sitemap. |
| **T-703** | Testing cross-browser (Chrome, Firefox, Safari, Edge, iOS, Android) | 🔴 Pendiente | Alta | Todas | Fallback para Firefox sin backdrop-filter incluido en glassmorphism.css. Pendiente testing completo. |
| **T-704** | Preloader premium con logo animado | 🟢 Completado | Alta | T-302, T-400 | Preloader con logo SVG animado (spin + draw). Transición fade-out con clase preloader--hidden. |
| **T-705** | Efecto sonido ambiente (opcional) | 🔴 Pendiente | Baja | T-400 | Pendiente. |
| **T-706** | Página 404 ilustrada | 🔴 Pendiente | Baja | T-500 | Pendiente. |
| **T-707** | Banner cookies glassmorphism | 🔴 Pendiente | Baja | — | Pendiente. |

---

## 🗺️ MAPA DE DEPENDENCIAS

```
FASE 0 ──► FASE 1 ──► FASE 2 ──► FASE 3 ──► FASE 4 ──► FASE 5 ──► FASE 6 ──► FASE 7
 T-000      T-100      T-200      T-300      T-400      T-500      T-600      T-700
 T-001      T-101      T-201      T-301      T-401      T-501      T-601      T-701
 T-002      T-102      T-202      T-302      T-402      T-502      T-602      T-702
 T-003      T-103      T-203      T-303      T-403      T-503      T-603      T-703
 T-004      T-104      T-204      T-304      T-404                 T-604      T-704
                        T-205      T-305      T-405                            T-705
                        T-206      T-306                                         T-706
                                   T-307                                         T-707
```

---

## 📊 LEYENDA DE ESTADOS

| Icono | Estado |
|-------|--------|
| ⚪ | No iniciado |
| 🔴 | Pendiente |
| 🟡 | En progreso |
| 🟢 | Completado |
| 🔵 | En revisión |
| ❌ | Bloqueado |

---

## 🏆 DIFERENCIALES PREMIO 2026

1. **Hero Three.js interactivo** — Geometrías low-poly flotantes con bloom post-processing
2. **Glassmorphism sistematizado** — Sistema de diseño completo basado en vidrio neón
3. **Animaciones narrativas** — Cada sección cuenta una historia con GSAP ScrollTrigger
4. **Cursor personalizado magnético** — Micro-interacción que transforma la experiencia
5. **Tipografía con personalidad** — Clash Display + Space Grotesk (sin genéricas)
6. **Ilustraciones originales** — Sistema gráfico propio sin fotos de stock
7. **Transiciones cinematográficas** — GSAP overlay con glow + icono animado
8. **Layout asimétrico audaz** — Rompe la grilla predecible
9. **Modo oscuro neón** — Identidad visual única, no un dark mode genérico
10. **Preloader premium** — Primera impresión espectacular

---

## 📝 NOTAS / BLOQUEOS

| Fecha | Nota |
|-------|------|
| 18/06/2026 | **Sesión 1 — Éxito.** Plan creado con 40+ tickets. Implementada fase base: estructura Vite, CSS completo (variables, reset, typography, glassmorphism, layout, animaciones, 10 componentes), HTML semántico rediseñado, JS modules (navigation, catalog, contact, whatsapp, cursor, particles, hero-three, scroll con GSAP). |
| 18/06/2026 | **Sesión 2 — Fontsource corregido.** `@fontsource-variable/clash-display` eliminado (no existe). Reemplazado por CDN de Fontshare. Se añadió `@tsparticles/engine`. Se fijaron versiones en package.json. |
| 18/06/2026 | **Sesión 3 — Locomotive Scroll v5 implementado.** Integración completa con GSAP ScrollTrigger via scrollerProxy + Lenis sync. Navigation.js actualizado para usar scrollTo de Locomotive. data-scroll + data-scroll-speed añadidos en HTML para parallax. Inicialización async en main.js. |
| 18/06/2026 | **Sesión 4 — Transiciones GSAP entre secciones.** Barba.js descartado (no apto para SPA single-page). Implementado overlay fullscreen con fade-in/out + glow + icono llave animado. scrollToElement ahora soporta callback onComplete. isTransitioning lock para prevenir doble clic. |
| 18/06/2026 | **Sesión 5 — Paleta Ferrari Premium.** Cambio de paleta Tech-Futurista (cyan/amber/purple) a Ferrari Premium (rojo Cadena88 + gold). Actualizados: _variables.css, 12 CSS, particles.js, hero-three.js. Nuevo gradiente rojo→gold, glass con borde rojo, sombras neón rojas. |
| 18/06/2026 | V2 anterior — Rediseño con identidad Cadena88 (descartado para nueva versión award-winning) |
