/* =====================================================================
   Portfolio behaviour. Content lives in js/data.js; you rarely need to edit this file.
   ===================================================================== */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Icons (Lucide-style line icons) ---------------- */
  const P = {
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    tiktok: '<path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    wifi: '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.86a10 10 0 0 1 14 0"/><path d="M8.5 16.43a5 5 0 0 1 7 0"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    cctv: '<path d="M16.75 12h3.63a1 1 0 0 1 .9 1.45l-2.04 4.07a1 1 0 0 1-1.7.13l-2.13-2.97"/><path d="M17.1 9.05a1 1 0 0 1 .45 1.34l-3.1 6.21a1 1 0 0 1-1.35.45L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"/><path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"/><path d="M2 21v-4"/><path d="M7 9h.01"/>',
    satellite: '<path d="M4 10a7.31 7.31 0 0 0 10 10Z"/><path d="m9 15 3-3"/><path d="M17 13a6 6 0 0 0-6-6"/><path d="M21 13A10 10 0 0 0 11 3"/>',
    network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
    cable: '<path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  };
  const logo = () => `<img src="assets/logo.svg" alt="" class="brand__img" />`;
  const icon = name => name === "logo" ? logo() : `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[name] || ""}</svg>`;
  const hydrateIcons = (root = document) => $$("[data-icon]", root).forEach(el => { if (!el.firstElementChild) el.innerHTML = icon(el.dataset.icon); });

  /* ---------------- Hide unfinished content ---------------- */
  // Entries still marked PLACEHOLDER in data.js stay off the page until they're filled in,
  // so the public site never shows template text. Fill them in and they appear automatically.
  const S = SITE;
  const isPlaceholder = v => /PLACEHOLDER/.test(v || "");
  const isRealYear = v => v && !/20XX/.test(v);
  S.projects = S.projects.filter(p => !isPlaceholder(p.description));
  S.certificates = S.certificates.filter(c => c.title !== "Certificate Title" && !isPlaceholder(c.description));
  S.timeline.forEach(t => { if (isPlaceholder(t.project)) t.project = ""; });

  /* ---------------- Bind simple fields ---------------- */
  const fields = {
    name: S.name, location: S.location, email: S.email, botName: S.botName,
    titleTop: S.titleTop, titleBottom: S.titleBottom,
  };
  $$("[data-bind]").forEach(el => {
    const key = el.dataset.bind;
    if (key === "brand") el.innerHTML = `${esc(S.brand.main)}<b>${esc(S.brand.accent)}</b>`;
    else el.textContent = fields[key] ?? "";
    if (el.dataset.href === "mailto") el.href = "mailto:" + S.email;
  });
  $$("[data-bind-html]").forEach(el => { el.innerHTML = S[el.dataset.bindHtml] || ""; });
  $$('[data-href="map"]').forEach(el => { el.href = S.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(S.location)}`; });
  $("#letsTalk").href = "mailto:" + S.email;
  $("#year").textContent = new Date().getFullYear();

  if (S.availabilityNote) $("#availNote").textContent = S.availabilityNote;
  const pill = $("#statusPill");
  if (!S.available) { pill.classList.add("busy"); pill.lastElementChild.textContent = "Busy"; }

  /* ---------------- Socials ---------------- */
  const socialsHTML = S.socials.map(s => s.url
    ? `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}" title="${esc(s.name)}">${icon(s.icon)}</a>`
    : `<a href="#" class="is-empty" aria-label="${esc(s.name)} (link coming soon)" title="${esc(s.name)}: coming soon">${icon(s.icon)}</a>`).join("");
  $$("[data-socials]").forEach(el => (el.innerHTML = socialsHTML));
  document.addEventListener("click", e => { if (e.target.closest("a.is-empty")) e.preventDefault(); });

  /* ---------------- Code window ---------------- */
  const str = v => `<span class="tk-s">"${esc(v)}"</span>`;
  $("#codeBlock").innerHTML =
`<span class="tk-k">const</span> <span class="tk-v">Developer</span> <span class="tk-p">= {</span>
  <span class="tk-p">name:</span> ${str(S.name)},
  <span class="tk-p">role:</span> ${str(`${S.titleTop} ${S.titleBottom}`)},
  <span class="tk-p">passion:</span> ${str(S.code.passion)},
  <span class="tk-p">skills:</span> <span class="tk-p">[</span> ${S.code.skills.map(str).join(", ")} <span class="tk-p">]</span>,
  <span class="tk-p">status:</span> <span class="tk-g">"${esc(S.code.status)}"</span><span class="caret"></span>
<span class="tk-p">}</span>`;

  /* ---------------- About: photo, CV, stats ---------------- */
  const parts = S.name.trim().split(/\s+/);
  const initials = (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase(); // first + last name
  $("#photo").innerHTML = S.photo
    ? `<img src="${esc(S.photo)}" alt="Portrait of ${esc(S.name)}" />`
    : `<div class="photo__ph"><span>${esc(initials)}</span></div>`;

  const cvBtn = $("#cvBtn");
  if (S.cv) cvBtn.href = S.cv;
  else cvBtn.remove(); // reappears once data.js has a cv path

  const stats = [
    { icon: "code", value: S.projects.length, title: "Total Projects", sub: "Real-world projects delivered", color: "#22d3ee", link: "projects" },
    { icon: "award", value: S.certificates.length, title: "Certificates", sub: "Professional skills validated", color: "#a78bfa", link: "certificates" },
    { icon: "globe", value: S.yearsExperience, title: "Years of Experience", sub: "Continuous learning journey", color: "#38bdf8", link: "experience" },
  ];
  $("#stats").innerHTML = stats.filter(s => s.value > 0).map((s, i) => `
    <a href="#portfolio" class="stat card" data-reveal style="--d:${i * 0.12}s" data-goto="${s.link}">
      <div class="stat__top"><span class="stat__icon" style="color:${s.color}">${icon(s.icon)}</span><span class="stat__num" data-count="${s.value}">0</span></div>
      <div><h4>${s.title}</h4><p>${s.sub}</p></div>
      <span class="stat__arrow">${icon("arrow")}</span>
    </a>`).join("");

  /* ---------------- Academic ---------------- */
  const ed = S.education;
  $("#degree").innerHTML = `<h3>${esc(ed.degree)}</h3><p class="major">${esc(ed.major)}</p><p class="school">${esc(ed.school)}</p><p class="years">${esc(ed.years)}</p>`;
  $("#timeline").innerHTML = S.timeline.map((t, i) => `
    <div class="tl">
      <div class="card" data-reveal="${i % 2 ? "right" : "left"}">
        <div class="tl__year"><span data-icon="${esc(t.icon)}"></span>${esc(t.year)}${t.current ? `<em class="tl__now"><i class="dot"></i>In progress</em>` : ""}</div>
        <h3>${esc(t.title)}</h3>
        <p class="sub">${esc(t.subtitle)}</p>
        ${t.subjects ? `<small class="label">Major Subjects</small><ul class="subjects">${t.subjects.map(s => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
        ${t.stack && t.stack.length ? `<small class="label">Tech Stack</small><div class="tags">${t.stack.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>` : ""}
        ${t.project ? `<small class="label">Major Project</small><p>${esc(t.project)}</p>` : ""}
      </div>
      ${t.image ? `
      <figure class="tl__photo" data-reveal="${i % 2 ? "left" : "right"}">
        <div class="tl__photo-bg" style="background-image:url('${esc(t.image)}')"></div>
        <img src="${esc(t.image)}" alt="${esc(t.year)} at ${esc(S.education.school)}" loading="lazy" />
        <figcaption class="mono">${esc(t.year)}</figcaption>
      </figure>` : ""}
    </div>`).join("");

  /* ---------------- Portfolio ---------------- */
  const STATUS = { deployed: "Deployed", developing: "Developing", completed: "Completed" };
  $("#projects").innerHTML = S.projects.map((p, i) => {
    const st = STATUS[p.status] ? p.status : "developing";
    const imgs = p.images || [];
    const media = imgs.length
      ? `<div class="slider" data-slider>
           <div class="slider__track">${imgs.map((src, k) => `
             <div class="slide">
               <div class="slide__bg" style="background-image:url('${esc(src)}')"></div>
               <img src="${esc(src)}" alt="${esc(p.title)}, photo ${k + 1} of ${imgs.length}" loading="lazy" />
             </div>`).join("")}</div>
           ${imgs.length > 1 ? `<div class="slider__dots">${imgs.map((_, k) => `<button class="${k ? "" : "active"}" aria-label="Show photo ${k + 1}"></button>`).join("")}</div>` : ""}
         </div>`
      : `<div class="project__ph">${icon("code")}</div>`;
    return `
    <article class="project card" style="--d:${i * 0.1}s">
      <div class="project__media">
        ${media}
        <span class="status status--${st}"><i class="dot"></i>${STATUS[st]}</span>
        <div class="project__tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
      <div class="project__body">
        ${isRealYear(p.period) ? `<small class="project__period mono">${esc(p.period)}</small>` : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        ${p.live || p.repo ? `<div class="project__links">
          ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Live demo ${icon("external")}</a>` : ""}
          ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Source ${icon("github")}</a>` : ""}
        </div>` : ""}
      </div>
    </article>`;
  }).join("");

  // project image sliders: auto-advance every 3s (5s on hover), dots + swipe.
  // A copy of the first photo sits after the last one, so looping always slides forward
  // (last → copy of first), then silently snaps back to the real first photo.
  $$("[data-slider]").forEach(sl => {
    const track = $(".slider__track", sl), dots = $$(".slider__dots button", sl), n = track.children.length;
    if (n < 2) return;
    const clone = track.children[0].cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);

    let pos = 0, paused = false, hovered = false, startX = null, last = performance.now();
    const setPos = (p, animate = true) => {
      track.style.transition = animate ? "" : "none";
      pos = p;
      track.style.transform = `translateX(-${p * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle("active", j === p % n));
    };
    const snap = p => { setPos(p, false); void track.offsetWidth; }; // jump without animation
    track.addEventListener("transitionend", e => { if (e.target === track && pos === n) snap(0); });
    const go = k => {
      if (k > pos && pos >= n) { snap(0); k = 1; } // missed a snap-back (e.g. tab was hidden)
      if (k < 0) { snap(n); k = n - 1; }          // going back from the first photo
      setPos(k);
    };
    const i = () => pos; // current position, used by swipe/autoplay below
    dots.forEach((d, j) => d.addEventListener("click", e => { e.stopPropagation(); go(j); last = performance.now(); }));
    sl.addEventListener("mouseenter", () => (hovered = true));
    sl.addEventListener("mouseleave", () => (hovered = false));
    sl.addEventListener("touchstart", e => { startX = e.touches[0].clientX; paused = true; }, { passive: true });
    sl.addEventListener("touchend", e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(i() + (dx < 0 ? 1 : -1));
      paused = false;
    });
    // 3s per photo normally, 5s while the mouse is over the card
    if (!reduceMotion) setInterval(() => {
      if (paused || document.hidden || !sl.offsetParent) { last = performance.now(); return; }
      if (performance.now() - last >= (hovered ? 5000 : 3000)) { go(i() + 1); last = performance.now(); }
    }, 200);
  });

  $("#experience").innerHTML = (S.experience || []).map((x, i) => {
    const ini = x.company.split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
    return `
    <article class="exp card" style="--d:${i * 0.1}s">
      <div class="exp__logo${x.logo ? " exp__logo--img" : ""}">${x.logo ? `<img src="${esc(x.logo)}" alt="${esc(x.company)} logo" />` : `<span>${esc(ini)}</span>`}</div>
      <div class="exp__body">
        <small class="mono exp__period">${esc(x.period)}</small>
        <h3>${esc(x.role)}</h3>
        <p class="exp__company">${esc(x.company)}</p>
        <p class="exp__desc">${esc(x.description)}</p>
        <div class="tags">${(x.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </article>`;
  }).join("");

  $("#certs").innerHTML = S.certificates.map((c, i) => `
    <article class="cert card" style="--d:${i * 0.08}s">
      ${c.image
        ? `<button class="cert__media" data-zoom="${esc(c.image)}" aria-label="View ${esc(c.title)} full size">
             <img src="${esc(c.image)}" alt="${esc(c.title)} certificate" loading="lazy" />
             <span class="cert__zoom">${icon("external")} View full size</span>
           </button>`
        : `<div class="cert__media cert__media--ph">${icon("award")}<small class="mono">Certificate image coming soon</small></div>`}
      <span class="cert__num">${String(i + 1).padStart(2, "0")}</span>
      <div class="cert__body">
        <small class="cert__meta mono">${esc(c.issuer)} · ${esc(c.year)}</small>
        <h3>${esc(c.title)}</h3>
        ${c.description ? `<p>${esc(c.description)}</p>` : ""}
        ${c.url ? `<div class="project__links"><a href="${esc(c.url)}" target="_blank" rel="noopener">Verify ${icon("external")}</a></div>` : ""}
      </div>
    </article>`).join("");
  if (!S.certificates.length) { // no finished certificates yet: hide the tab instead of showing an empty panel
    $('[data-tab="certificates"]').remove();
    $("#panel-certificates").remove();
  }

  // full-size certificate viewer
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.hidden = true;
  lb.innerHTML = `<button class="icon-btn lightbox__close" aria-label="Close">${icon("x")}</button><img alt="" />`;
  document.body.appendChild(lb);
  const closeLb = () => { lb.hidden = true; document.body.style.overflow = ""; };
  document.addEventListener("click", e => {
    const z = e.target.closest("[data-zoom]");
    if (z) {
      const img = $("img", lb);
      img.src = z.dataset.zoom; img.alt = (z.matches("img") ? z : $("img", z)).alt;
      lb.hidden = false; document.body.style.overflow = "hidden";
    } else if (!lb.hidden && !e.target.closest(".lightbox img")) closeLb();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLb(); });

  $("#stack").innerHTML = S.techStack.map(g => `
    <div class="stack-group">
      <h3>${esc(g.category)}</h3>
      <div class="stack-grid">${g.items.map((t, i) => `<div class="tech card" style="--d:${i * 0.06}s">${t.svg ? `<span class="tech__svg">${icon(t.svg)}</span>` : `<i class="${esc(t.icon)}"></i>`}<span>${esc(t.name)}</span></div>`).join("")}</div>
    </div>`).join("");

  const tabs = $$(".tab");
  const showTab = name => {
    tabs.forEach(t => {
      const on = t.dataset.tab === name;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
    });
    $$(".panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + name));
  };
  tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));
  $$("[data-goto]").forEach(a => a.addEventListener("click", () => showTab(a.dataset.goto)));

  hydrateIcons();

  /* ---------------- Typewriter ---------------- */
  function typeLoop(el, words, { type = 70, erase = 35, hold = 1600 } = {}) {
    let w = 0, i = 0, del = false;
    (function tick() {
      const word = words[w];
      el.textContent = word.slice(0, i);
      if (!del && i === word.length) { del = true; return setTimeout(tick, hold); }
      if (del && i === 0) { del = false; w = (w + 1) % words.length; }
      i += del ? -1 : 1;
      setTimeout(tick, del ? erase : type);
    })();
  }

  /* ---------------- Intro loader ---------------- */
  const loader = $("#loader");
  let delay = 0.45;
  $$(".loader__line", loader).forEach(line => {
    line.innerHTML = [...line.dataset.letters].map(ch => {
      const html = `<span style="animation-delay:${delay.toFixed(2)}s">${ch === " " ? "&nbsp;" : ch}</span>`;
      delay += 0.045;
      return html;
    }).join("");
    delay += 0.15;
  });

  const typed = $("#loaderType");
  let ti = 0;
  setTimeout(function typeDomain() {
    typed.textContent = S.domainTyped.slice(0, ++ti);
    if (ti < S.domainTyped.length) setTimeout(typeDomain, 70);
  }, 900);

  const DURATION = reduceMotion ? 300 : 3200;
  const bar = $("#loaderBar");
  const t0 = performance.now();
  let finished = false;
  (function grow(now) {
    const p = Math.min(1, (now - t0) / DURATION);
    bar.style.width = (p * 100) + "%";
    if (p < 1 && !finished) requestAnimationFrame(grow);
    else finishLoading();
  })(t0);
  loader.addEventListener("click", finishLoading);
  if (location.search.includes("nointro")) finishLoading(); // handy while editing: index.html?nointro

  function finishLoading() {
    if (finished) return;
    finished = true;
    loader.classList.add("done");
    document.body.classList.remove("is-loading");
    setTimeout(() => loader.remove(), 900);
    startPage();
  }

  /* ---------------- Page interactions ---------------- */
  function startPage() {
    typeLoop($("#roleType"), S.roles);

    // stagger hero items
    $$("#home [data-reveal]").forEach((el, i) => el.style.setProperty("--d", (0.1 + i * 0.1) + "s"));

    // reveal on scroll + count-up
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      // drop the stagger delay once revealed so hover effects respond instantly
      setTimeout(() => en.target.style.setProperty("--d", "0s"), 1500);
      const num = $("[data-count]", en.target);
      if (num) countUp(num);
      io.unobserve(en.target);
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$("[data-reveal]").forEach(el => { if (!el.closest(".tl")) io.observe(el); });

    // Academic timeline: animate in AND out every time, following the scroll direction.
    // data-out remembers which edge the item left from ("up" = top, "down" = bottom),
    // so it eases back in from that same side.
    const tlIO = new IntersectionObserver(entries => entries.forEach(en => {
      const el = en.target;
      if (en.isIntersecting) el.classList.add("in");
      else {
        el.dataset.out = en.boundingClientRect.top < 0 ? "up" : "down";
        el.classList.remove("in");
      }
    }), { threshold: 0.15, rootMargin: "-6% 0px -6% 0px" });
    $$(".tl [data-reveal]").forEach(el => tlIO.observe(el));
  }

  function countUp(el) {
    const target = +el.dataset.count, start = performance.now(), dur = 1400;
    (function step(now) {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  // scroll progress
  const prog = $("#scrollProgress");
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // scrollspy
  const links = $$("#navLinks a");
  const spy = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  // mobile menu
  const navLinks = $("#navLinks"), burger = $("#burger");
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    burger.innerHTML = icon(open ? "x" : "menu");
  });
  links.forEach(a => a.addEventListener("click", () => { navLinks.classList.remove("open"); burger.innerHTML = icon("menu"); }));

  /* ---------------- Chatbot (rule-based, runs in the browser) ---------------- */
  const bot = $("#bot"), body = $("#botBody"), botLabel = $("#botLabel");
  const toggleBot = force => {
    const open = force ?? bot.hidden;
    bot.hidden = !open;
    botLabel.classList.toggle("show", open);
    if (open && !body.childElementCount) greet();
    if (open) setTimeout(() => $("#botInput").focus(), 50);
  };
  $("#botToggle").addEventListener("click", () => toggleBot());
  $("#botClose").addEventListener("click", () => toggleBot(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") toggleBot(false); });

  const say = (html, who = "bot") => {
    const m = document.createElement("div");
    m.className = "msg msg--" + who;
    m.innerHTML = html;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
    return m;
  };
  const QUICK = ["Skills", "Projects", "Experience", "Education", "Availability", "Contact"];
  function greet() {
    say(`Hi! I'm <strong>${esc(S.botName)}</strong>. I can tell you about ${esc(S.firstName)}'s work, skills and projects. What would you like to know?`);
    const c = say(`<div class="chips">${QUICK.map(q => `<button class="chip" data-q="${q}">${q}</button>`).join("")}</div>`);
    c.style.background = "none"; c.style.border = "0"; c.style.padding = "0";
  }
  body.addEventListener("click", e => { const b = e.target.closest("[data-q]"); if (b) ask(b.dataset.q); });

  function answer(q) {
    q = q.toLowerCase();
    const has = (...w) => w.some(x => q.includes(x));
    if (has("skill", "stack", "tech", "language", "tool")) return `${esc(S.firstName)} works with: ${S.techStack.flatMap(g => g.items.map(t => esc(t.name))).join(", ")}.`;
    if (has("experience", "job", "xfiber", "quadcore", "business", "company")) return `${esc(S.firstName)}'s experience:<br>${(S.experience || []).map(x => `• <strong>${esc(x.role)}</strong>, ${esc(x.company)} (${esc(x.period)})`).join("<br>")}`;
    if (has("availab", "schedule", "when", "free time")) return esc(S.availabilityNote || "") + ` Reach out via the <a href="#contact">contact form</a>.`;
    if (has("project", "work", "portfolio", "built", "install")) return `Here are ${esc(S.firstName)}'s projects:<br>${S.projects.map(p => `• <strong>${esc(p.title)}</strong> (${(STATUS[p.status] || "Developing").toLowerCase()})`).join("<br>")}<br><a href="#portfolio">See the showcase</a>`;
    if (has("cert") && !S.certificates.length) return `${esc(S.firstName)}'s certificates are being added soon. Check back later!`;
    if (has("cert")) return `${S.certificates.length} certificate(s):<br>${S.certificates.map(c => `• ${esc(c.title)} (${esc(c.issuer)}, ${esc(c.year)})`).join("<br>")}`;
    if (has("school", "educat", "study", "degree", "college", "universit")) return `${esc(S.education.degree)}, ${esc(S.education.major)} at ${esc(S.education.school)} (${esc(S.education.years)}).`;
    if (has("contact", "email", "hire", "reach", "talk", "available")) return `You can reach ${esc(S.firstName)} at <a href="mailto:${esc(S.email)}">${esc(S.email)}</a> or through the <a href="#contact">contact form</a>. ${S.available ? `${esc(S.firstName)} is currently open to new opportunities.` : ""}`;
    if (has("where", "location", "based", "live")) return `${esc(S.firstName)} is based in <a href="${esc(S.mapUrl)}" target="_blank" rel="noopener">${esc(S.location)}</a>.`;
    if (has("who", "about", "yourself", "name")) return S.aboutBio;
    if (has("hello", "hi", "hey", "kumusta")) return `Hello! Ask me about skills, projects, certificates, education or how to get in touch.`;
    return `I'm not sure about that one. Try asking about <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong> or <strong>contact</strong>.`;
  }
  function ask(q) {
    say(esc(q), "me");
    setTimeout(() => say(answer(q)), 450);
  }
  $("#botForm").addEventListener("submit", e => {
    e.preventDefault();
    const inp = $("#botInput"), q = inp.value.trim();
    if (q) { ask(q); inp.value = ""; }
  });
  body.addEventListener("click", e => { if (e.target.matches('a[href^="#"]')) toggleBot(false); });

  /* ---------------- Contact form ---------------- */
  // Opens the visitor's email app. After deploying, you can switch this to Formspree/Netlify Forms.
  $("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = f.get("subject") || `Portfolio inquiry from ${f.get("name")}`;
    const text = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    location.href = `mailto:${S.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    $("#formNote").textContent = "Opening your email app...";
  });
})();
