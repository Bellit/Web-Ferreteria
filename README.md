# Ferretería Pino — Web

Web de una sola página para **Ferretería Pino**, ferretería de barrio desde 1985, especialista en copias de llaves y miembro de Cadena88.

> Los datos del negocio (dirección, teléfonos, precios, cifras) son **de ejemplo**. Las fotos son de stock de Pexels y están pensadas para sustituirse por fotos reales de la tienda.

## Idea de diseño: «El panel de llaves»

La web está construida como el mostrador de llaves de la ferretería. Usa níquel, grafito y latón, siempre en colores planos.

- **Portada:** una fresa corta en directo una llave de latón con el código **1·9·8·5**, el año de apertura. El botón «Cortar otra llave» talla un código al azar.
- **Panel de llaves:** las llaves vírgenes cuelgan de ganchos con su etiqueta de precio y se balancean al pasar el ratón.
- **Catálogo:** lista de etiquetas de lineal con filtro por sección. La foto lateral cambia según la sección elegida.
- **Abierto / cerrado:** el estado se calcula en directo con la hora de Madrid (horario partido) y el día de hoy se marca en la tabla de horarios.
- **Móvil:** barra fija con «Llegar · Llamar · WhatsApp».

Tipografías servidas desde el propio proyecto: **Bricolage Grotesque** para los titulares y **Archivo** para el texto.

## Cómo verla

```bash
npm install
npm run dev        # http://localhost:3000
```

Versión de producción:

```bash
npm run build
npm run preview    # http://localhost:4173
```

## Estructura

```
index.html                  Página completa
public/img/                 Fotos (Pexels, con su origen en los metadatos)
src/main.js                 Entrada: fuentes, estilos y módulos
src/styles/main.css         Todos los estilos
src/data/products.json      Productos del catálogo
src/js/modules/
  key-cutter.js             La llave que se corta (portada)
  status.js                 Abierto/cerrado y horario de hoy
  board.js                  Balanceo del panel de llaves
  catalog.js                Catálogo y filtros
  navigation.js             Cabecera, menú móvil, sección activa
  contact.js                Validación del formulario (envío simulado)
```

## Qué cambiar por datos reales

- Dirección, teléfono, WhatsApp, email e Instagram en `index.html`.
- El horario: en `index.html` (la tabla) y en `HOURS`, dentro de `src/js/modules/status.js`.
- Los productos y precios en `src/data/products.json`.
- Las fotos de `public/img/`, sustituyéndolas por fotos propias con el mismo nombre.
- El formulario no envía nada todavía: hay que conectarlo a un servicio (Formspree, un backend propio…).
