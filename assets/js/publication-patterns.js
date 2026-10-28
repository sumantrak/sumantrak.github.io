const PUBLICATION_THEME_COLORS = {
  bandits_uq: [80, 101, 119],
  causal_learning: [169, 71, 53],
  event_modeling: [103, 114, 83],
  adjacent_interests: [167, 123, 64],
};

function createGradient(context, canvas, colors) {
  const angle = (128 * Math.PI) / 180;
  const x = Math.cos(angle) * canvas.width;
  const y = Math.sin(angle) * canvas.height;
  const gradient = context.createLinearGradient(canvas.width / 2 - x / 2, canvas.height / 2 - y / 2, canvas.width / 2 + x / 2, canvas.height / 2 + y / 2);
  const palette = colors.length > 1 ? colors : [colors[0], [238, 229, 213]];

  palette.forEach((color, index) => {
    const position = palette.length === 1 ? 0 : index / (palette.length - 1);
    const alpha = index === palette.length - 1 ? 0.68 : 0.56;
    gradient.addColorStop(position, `rgba(${color.join(',')}, ${alpha})`);
  });

  return gradient;
}

function drawGradient(canvas, colors) {
  const context = canvas.getContext('2d', { alpha: false });
  context.fillStyle = createGradient(context, canvas, colors);
  context.fillRect(0, 0, canvas.width, canvas.height);
  return context;
}

function renderPublicationVisual(canvas) {
  const themes = canvas.dataset.themes.split('|').filter(Boolean);
  const colors = themes.map((theme) => PUBLICATION_THEME_COLORS[theme] || PUBLICATION_THEME_COLORS.adjacent_interests);
  drawGradient(canvas, colors);
}

function renderPublicationVisuals() {
  document.querySelectorAll('.publication-theme-card__canvas').forEach(renderPublicationVisual);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPublicationVisuals, { once: true });
} else {
  renderPublicationVisuals();
}

window.addEventListener('pageshow', renderPublicationVisuals);
