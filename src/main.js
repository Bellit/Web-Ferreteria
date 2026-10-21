/**
 * Ferretería Pino — Entrada
 * Fuentes servidas desde el propio proyecto, sin librerías de animación.
 */
import '@fontsource-variable/montserrat';
import '@fontsource-variable/archivo/wdth.css';
import './styles/main.css';

import { initNavigation } from './js/modules/navigation.js';
import { initStatus } from './js/modules/status.js';
import { initKeyCutter } from './js/modules/key-cutter.js';
import { initBoard } from './js/modules/board.js';
import { initCatalog } from './js/modules/catalog.js';
import { initContactForm } from './js/modules/contact.js';
import { initMap } from './js/modules/map.js';

initNavigation();
initStatus();
initBoard();
initCatalog();
initContactForm();
initMap();

// La llave se corta cuando la fuente del sello ya está lista
(document.fonts?.ready ?? Promise.resolve()).then(initKeyCutter);
