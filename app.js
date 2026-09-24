function renderWorks() {
  const grid = document.getElementById('work-grid');
  grid.innerHTML = WORKS.map(w => {
    let media;
    if (w.video) {
      const poster = w.poster ? ` poster="${w.poster}"` : '';
      media = `<video src="${w.video}"${poster} autoplay loop muted playsinline></video>`;
    } else if (w.img) {
      media = `<img src="${w.img}" alt="${w.title}">` +
        `<svg class="play-icon" width="44" height="44" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="rgba(11,11,12,0.55)"/>
          <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#F2F1ED"/>
        </svg>`;
    } else {
      media = `<div class="placeholder" style="background:${w.color}">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" style="opacity:.85">
          <circle cx="12" cy="12" r="11" stroke="#0B0B0C" stroke-width="1.5"/>
          <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#0B0B0C"/>
        </svg>
      </div>`;
    }
    return `
      <div class="card">
        <a class="card-media" href="${w.url}" target="_blank" rel="noopener" style="background:${w.color}">
          ${media}
          <div class="card-tool">${w.tool}</div>
        </a>
        <div class="card-body">
          <div class="card-title">${w.title}</div>
          <div class="card-desc">${w.desc}</div>
        </div>
      </div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderWorks);
