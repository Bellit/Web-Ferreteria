# Ferretería Pino — Web

Web de una sola página para **Ferretería Pino**, ferretería de proximidad en Canovelles (Barcelona) desde 1985, especialista en copias de llaves y miembro de Cadena88.

> La dirección, el teléfono (también WhatsApp: 93 849 52 50), el email, Instagram y el horario son **reales**. Siguen siendo **de ejemplo** los precios del catálogo. Las fotos son de stock de Pexels, salvo la fachada.

## Idea de diseño: «El panel de llaves»

La web está construida como el mostrador de llaves de la ferretería. Usa níquel, el azul pizarra del logo y latón, con el rojo del pino como color de marca, siempre en colores planos.

- **Portada:** una fresa corta en directo una llave de latón con el código **1·9·8·5**, el año de apertura. El botón «Cortar otra llave» talla un código al azar.
- **Panel de llaves:** las llaves vírgenes cuelgan de ganchos con su etiqueta de precio y se balancean al pasar el ratón.
- **Catálogo:** lista de etiquetas de lineal con filtro por sección. La foto lateral cambia según la sección elegida.
- **Abierto / cerrado:** el estado se calcula en directo con la hora peninsular (horario partido) y el día de hoy se marca en la tabla de horarios.
- **Móvil:** barra fija con «Llegar · Llamar · WhatsApp».

Tipografías servidas desde el propio proyecto: **Montserrat** para los titulares (la misma voz geométrica del logo) y **Archivo** para el texto.

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

## Publicación

Cada `push` a `main` publica la web en GitHub Pages (`.github/workflows/deploy.yml`):
https://bellit.github.io/Web-Ferreteria/

La compilación usa la base `/Web-Ferreteria/` (en `vite.config.js`). Si cambia el nombre del repositorio, hay que cambiarla allí y en la etiqueta `og:image` de `index.html`.

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
  map.js                    Mapa de Google que solo se carga al pulsar «Ver el mapa»
```

## Pendiente

- **Textos legales:** el pie enlaza de momento al aviso legal, la privacidad y las cookies de la web antigua (ferreteriapino.es). Cuando esta web la sustituya, hay que crear esas páginas aquí con los textos de la asesoría (NIF, datos registrales…). El formulario necesitará además una casilla de aceptación de la política de privacidad.
- **Formulario:** no envía nada todavía; hay que conectarlo a un servicio (Formspree, un backend propio…).
- **Precios del catálogo:** son de ejemplo, en `src/data/products.json`.
- **Fotos:** las de `public/img/` son de stock, salvo `fachada.jpg`. Se sustituyen por fotos propias con el mismo nombre.
- **Horario:** si cambia, hay que tocarlo en tres sitios: la tabla y el texto de la portada en `index.html`, `HOURS` en `src/js/modules/status.js` y el bloque JSON-LD del `<head>`.
