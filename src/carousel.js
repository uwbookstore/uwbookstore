(() => {
  const cfg = window.CAROUSEL_CONFIG;

  const isBlank = (v) =>
    v == null || (typeof v === 'string' && v.trim() === '');
  const parseDate = (dateString) => {
    if (!dateString) return null;
    // Assume Central if no offset of Z
    if (!dateString.includes('Z') && !/[+-]\d{2}:\d{2}$/.test(dateString)) {
      dateString += '-06:00'; // fallback
    }
    return new Date(dateString);
  };
  const getNowCentral = () => {
    const now = new Date();
    // Use Intl to get the time in America/Chicago (DST-aware)
    const centralString = now.toLocaleString('en-US', {
      timeZone: 'America/Chicago',
    });
    return new Date(centralString);
  };
  const now = getNowCentral();
  const slides = cfg.slides.filter((s) => {
    const a = parseDate(s.start),
      b = parseDate(s.end);
    return (!a || now >= a) && (!b || now <= b);
  });
  const root = document.getElementById('ubs-gallery');

  slides.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-cell';
    item.setAttribute('aria-label', `Slide ${i + 1} of ${slides.length}`);

    const imgPath = `https://i.univbkstr.com/img/pages/home/rotator/${s.imgName}`;

    let parent = item;

    const img = document.createElement('img');
    img.src = `${imgPath}.jpg`;
    img.className = 'img-fluid d-block';
    img.width = '640';
    img.height = '475';
    img.alt = s.alt || '';
    img.decoding = 'async';
    img.loading = i === 0 ? 'eager' : 'lazy';

    if (s.link) {
      const a = document.createElement('a');
      a.href = s.link;
      if (s.target) a.target = s.target;
      if (s.target === '_blank') a.rel = 'noopener';
      a.style.display = 'block';
      a.appendChild(img);
      parent.appendChild(a);
    } else {
      parent.appendChild(img);
    }

    let ids = [];
    if (!isBlank(s.sr_caption)) {
      const sr = document.createElement('div');
      sr.className = 'sr-only carousel-caption';
      sr.id = `sr-${i}`;
      sr.textContent = s.sr_caption.trim();
      item.appendChild(sr);
      ids.push(sr.id);
    }
    if (ids.length) img.setAttribute('aria-describedby', ids.join(' '));
    root.appendChild(item);
  });

  // Flickity options
})();
