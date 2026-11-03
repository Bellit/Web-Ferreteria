/**
 * Genera las fotos de la web a partir de los originales de src/photos (npm run images).
 * Para cambiar una foto: sustituye el original con el mismo nombre y vuelve a ejecutarlo.
 */
import sharp from 'sharp';

const SRC = 'src/photos';
const OUT = 'public/img';
const WEBP = { quality: 72 };

// nombre: anchos que se generan; un solo ancho se guarda sin sufijo
const PHOTOS = {
  'cerrajero.jpg': [800, 1400],
  'fachada.jpg': [940],
  'llaves-panel.jpg': [1000],
  'herramientas.jpg': [1000],
  'pinturas.jpg': [1000],
  'fontaneria.jpg': [1000],
  'electricidad.jpg': [1000],
};

for (const [file, widths] of Object.entries(PHOTOS)) {
  const name = file.replace('.jpg', '');
  for (const width of widths) {
    const suffix = widths.length > 1 ? `-${width}` : '';
    const info = await sharp(`${SRC}/${file}`).resize({ width, withoutEnlargement: true }).webp(WEBP).toFile(`${OUT}/${name}${suffix}.webp`);
    console.log(`${name}${suffix}.webp`, info.width, info.height, `${Math.round(info.size / 1024)} KiB`);
  }
}

// Las redes sociales piden JPG para la imagen al compartir
await sharp(`${SRC}/llaves-panel.jpg`).resize({ width: 1200, height: 630, fit: 'cover' }).jpeg({ quality: 78, mozjpeg: true }).toFile(`${OUT}/compartir.jpg`);
await sharp('public/favicon.svg', { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
