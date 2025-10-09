(() => {
  const cfg = window.CAROUSEL_CONFIG;
  const loop = !!(cfg.options && cfg.options.loop);
  const interval = (cfg.options && parseInt(cfg.options.autoplay_ms, 10)) || 0;
  const isBlank = (v) =>
    v == null || (typeof v === 'string' && v.trim() === '');
  const parseDate = (d) =>
    isBlank(d) ? null : isNaN(new Date(d)) ? null : new Date(d);
  const now = new Date();
  const slides = cfg.slides
    .filter((s) => {
      const a = parseDate(s.start),
        b = parseDate(s.end);
      return (!a || now >= a) && (!b || now <= b);
    })
    .slice(0, 5);
  const root = document.getElementById('heroCarousel');
  const inner = root.querySelector('.carousel-inner');
  const ind = root.querySelector('.carousel-indicators');
  slides.forEach((s, i) => {
    const li = document.createElement('button');
    li.type = 'button';
    li.setAttribute('data-bs-target', '#heroCarousel');
    li.setAttribute('data-bs-slide-to', String(i));
    if (i === 0) li.className = 'active';
    li.setAttribute('aria-label', `Go to slide ${i + 1}`);
    ind.appendChild(li);
    const item = document.createElement('div');
    item.className = 'carousel-item' + (i === 0 ? ' active' : '');
    item.setAttribute('aria-label', `Slide ${i + 1} of ${slides.length}`);
    const frame = document.createElement('div');
    frame.className = 'frame';
    let parent = frame;
    if (s.link) {
      const a = document.createElement('a');
      a.href = s.link;
      if (s.target) a.target = s.target;
      if (s.target === '_blank') a.rel = 'noopener';
      a.style.display = 'block';
      frame.appendChild(a);
      parent = a;
    }
    const img = document.createElement('img');
    img.src = s.src;
    img.alt = s.alt || '';
    img.decoding = 'async';
    img.loading = i === 0 ? 'eager' : 'lazy';
    parent.appendChild(img);
    let ids = [];
    if (!isBlank(s.caption)) {
      const cap = document.createElement('div');
      cap.className = 'carousel-caption d-none d-md-block';
      cap.id = `cap-${i}`;
      cap.textContent = s.caption.trim();
      item.appendChild(cap);
      ids.push(cap.id);
    }
    if (!isBlank(s.sr_caption)) {
      const sr = document.createElement('div');
      sr.className = 'sr-only carousel-caption';
      sr.id = `sr-${i}`;
      sr.textContent = s.sr_caption.trim();
      item.appendChild(sr);
      ids.push(sr.id);
    }
    if (ids.length) img.setAttribute('aria-describedby', ids.join(' '));
    item.appendChild(frame);
    inner.appendChild(item);
  });
  new bootstrap.Carousel(root, {
    interval: interval || false,
    ride: interval ? 'carousel' : false,
    wrap: loop,
  });
})();
