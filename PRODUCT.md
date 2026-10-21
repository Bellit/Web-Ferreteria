# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Vecinos del barrio, particulares que hacen bricolaje y profesionales (fontaneros, electricistas, pintores, pequeñas obras). Llegan desde el móvil o el ordenador y quieren saber si la ferretería tiene lo que buscan, dónde está, a qué hora abre y cómo contactar (llamada o WhatsApp). Muchos buscan una copia de llave urgente.

## Product Purpose
Web institucional de una ferretería de barrio. Tiene dos objetivos a la vez: que la gente **venga a la tienda** (o llame o escriba por WhatsApp) y construir una **imagen de marca que transmita confianza y oficio**. Funciona bien si el visitante sale sabiendo qué se vende, dónde está la tienda y cuándo abre, y si se queda con la sensación de que allí le van a atender profesionales.

## Positioning
Ferretería familiar de proximidad en Canovelles (Barcelona), fundada en 1985, con más de 40 años de oficio. Está especializada en copias de llaves y forma parte de la red Cadena88. Su diferencia frente a una gran superficie es la atención personal y el conocimiento técnico del mostrador.

## Operating Context
- Es un negocio físico y la compra se hace en la tienda. La web no tiene carrito ni venta online.
- Servicios: copias de llaves (planas, de seguridad, tubulares), asesoría técnica y el surtido de Cadena88 (folleto de temporada). **No hay reparto a domicilio**: no hay que ofrecerlo.
- Categorías del catálogo: Herramientas, Pinturas, Fontanería, Electricidad y Copias de llaves. Los productos están en `src/data/products.json`.
- Canales de contacto: teléfono, WhatsApp, email, Instagram, formulario y mapa.

## Capabilities and Constraints
- Stack actual: Vite 6, HTML, CSS y JS vanilla (ES modules), con PostCSS. Sin librerías de animación: todo el movimiento es CSS y SVG propio. Tipografías autoalojadas con @fontsource.
- Es una página única con secciones Inicio, Catálogo, Servicios, Nosotros y Contacto. El catálogo tiene filtros por categoría y el formulario solo valida en el cliente (no hay backend).
- **Datos reales** (de ferreteriapino.es): C/ Pino, 35 · 08420 Canovelles (Barcelona) · 93 849 52 50 (teléfono y WhatsApp) · ferreteriapino@ferreteriapino.es · Instagram @ferreteriapinosl · L–V 9:30–13:30 y 17:00–20:00, sáb 9:00–13:30. Los precios del catálogo siguen siendo de ejemplo. Textos en español de España.

## Brand Commitments
- Nombre: Ferretería Pino. Miembro de la red Cadena88.
- Fundada en 1985. Especialidad: copias de llaves.
- Tono: cercano, de barrio, con oficio. Nada de jerga tecnológica.

## Evidence on Hand
- Única foto real: la fachada (`public/img/fachada.jpg`, de la web antigua). El resto son **fotos de stock** (Pexels) autorizadas como muestra.
- Los productos y precios son de ejemplo; ya no hay cifras inventadas en «Taller». No hay testimonios, reseñas ni prensa reales, y no hay que inventarlos.

## Product Principles
1. Lo primero es poder llegar a la tienda: dirección, horario, teléfono y WhatsApp tienen que estar siempre a mano.
2. Transmitir oficio con hechos concretos (1985, copias de llaves, asesoría), no con adjetivos.
3. Ser claro antes que espectacular. El efecto "wow" está para reforzar la marca, nunca para tapar la información.
4. Debe ir rápido y ser cómoda en el móvil, que es desde donde entra la mayoría.
