const GLOSSARIO = require('./data/glossario.json');

function getTerminoBySlug(slug) {
  return GLOSSARIO.find((t) => t.slug === slug);
}

function getByCategoria(categoria) {
  return GLOSSARIO.filter((t) => t.categoria === categoria);
}

function search(query) {
  const q = String(query || '').toLowerCase().trim();
  if (!q) return [];
  return GLOSSARIO.filter(
    (t) =>
      t.termine.toLowerCase().includes(q) ||
      (t.titoloEsteso || '').toLowerCase().includes(q) ||
      t.definizione.toLowerCase().includes(q),
  );
}

module.exports = { GLOSSARIO, getTerminoBySlug, getByCategoria, search };
