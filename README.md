# Ferretería Pino — Web

Web de una sola página para **Ferretería Pino**, ferretería de proximidad en Canovelles (Barcelona) desde 1985, especialista en copias de llaves y miembro de Cadena88.

> La dirección, el teléfono (también WhatsApp: 93 849 52 50), el email, Instagram y el horario son **reales**. La web no muestra precios: el catálogo es una muestra y para precios se contacta o se pasa por la tienda. Las fotos son de stock de Pexels, salvo la fachada.

## Idea de diseño: «El panel de llaves»

La web está construida como el mostrador de llaves de la ferretería. Usa níquel, el azul pizarra del logo y latón, con el rojo del pino como color de marca, siempre en colores planos.

- **Portada:** una fresa corta en directo una llave de latón con el código **1·9·8·5**, el año de apertura. El botón «Cortar otra llave» talla un código al azar.
- **Panel de llaves:** las llaves vírgenes cuelgan de ganchos con su etiqueta y se balancean al pasar el ratón.
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
src/photos/                 Originales de las fotos (Pexels, salvo la fachada)
public/img/                 Fotos optimizadas, generadas con npm run images
src/main.js                 Entrada: fuentes, estilos y módulos
src/styles/main.css         Todos los estilos
src/data/products.json      Productos del catálogo
src/js/modules/
  key-cutter.js             La llave que se corta (portada)
  status.js                 Abierto/cerrado y horario de hoy
  board.js                  Balanceo del panel de llaves
  catalog.js                Catálogo y filtros
  navigation.js             Cabecera, menú móvil, sección activa
  contact.js                Validación del formulario y envío a contacto.php
  map.js                    Mapa de Google que solo se carga al pulsar «Ver el mapa»
  since.js                  Las llaves de «Desde 1985», que caen en sus ganchos al entrar en pantalla
```

## Publicar en el dominio

`npm run build:dominio` compila para `ferreteriapino.es`; hay que subir el contenido de `dist/`. Después:

- En `dist/.htaccess`, activar la redirección a https y HSTS cuando el certificado funcione.
- Enviar un mensaje de prueba real con el formulario (límite: 5 por hora y visitante).
- Desactivar GitHub Pages. Hasta entonces, esa copia lleva `noindex` para que Google no la indexe.

## Pendiente

- **Textos legales:** `aviso-legal/` y `politica-de-privacidad/` copian los textos de la web antigua. `politica-de-cookies/` está adaptada a esta web, que no usa Google Analytics. Falta que los revise la asesoría.
- **Formulario:** lo envía `public/contacto.php` con `mail()` a la dirección de la tienda, así que necesita un hosting con PHP. En GitHub Pages y con `npm run dev` no hay PHP: el formulario avisa de que no se ha podido enviar y da el teléfono y WhatsApp. Hay que probar un envío real al subirlo al hosting.
- **Catálogo:** la muestra de productos está en `src/data/products.json`, sin precios a propósito.
- **Fotos:** las de `src/photos/` son de stock, salvo `fachada.jpg`. Para cambiar una, sustituye el original con el mismo nombre y ejecuta `npm run images`.
- **Horario:** si cambia, hay que tocarlo en tres sitios: la tabla y el texto de la portada en `index.html`, `HOURS` en `src/js/modules/status.js` y el bloque JSON-LD del `<head>`.
