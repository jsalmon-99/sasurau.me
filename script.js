/* ═══════════════════════════════════════════════════════════
   Edit your work here. Everything else reads from this object.
   ═══════════════════════════════════════════════════════════ */
const SERIES = {
  tokyo: { title: "Tokyo", frames: [
    { src:"images/tokyo-01.jpg", alt:"Tokyo skyline stretching to the horizon.", cap:"From the 45th floor" },
    { src:"images/tokyo-02.jpg", alt:"Black and white road running toward Tokyo Tower.", cap:"Toward the tower" },
    { src:"images/tokyo-03.jpg", alt:"Five-storey pagoda at Sensō-ji against a bright sky.", cap:"Sensō-ji" },
    { src:"images/tokyo-04.jpg", alt:"Exterior apartment stairwell in flat afternoon light.", cap:"Stairwell" },
    { src:"images/tokyo-05.jpg", alt:"The same stairwell, wider, in colour.", cap:"Stairwell, again" },
    { src:"images/tokyo-06.jpg", alt:"Dark corridor with a single lit doorway at the end.", cap:"Corridor" },
    { src:"images/tokyo-07.jpg", alt:"Unlit interior with figures at distant tables.", cap:"Late" },
    { src:"images/tokyo-08.jpg", alt:"City lights seen through a window at night.", cap:"Lights off" },
    { src:"images/tokyo-09.jpg", alt:"Escalator descending into a green-lit passage.", cap:"Passage" },
    { src:"images/tokyo-10.jpg", alt:"Public telephone booth overgrown at the edges.", cap:"Still connected" },
    { src:"images/tokyo-11.jpg", alt:"Black and white elevated walkway crossing water.", cap:"Walkway" },
  ]},
  portrait: { title: "Portraits", frames: [
    { src:"images/portrait-01.jpg", alt:"Portrait lit from one side against a black ground.", cap:"One light" },
    { src:"images/portrait-02.jpg", alt:"Portrait lit by a red neon sign.", cap:"Red sign, 2 a.m." },
    { src:"images/portrait-03.jpg", alt:"Black and white portrait in a bright atrium.", cap:"Atrium" },
    { src:"images/portrait-04.jpg", alt:"Street portrait, peace sign held near the eye.", cap:"On the corner" },
    { src:"images/portrait-05.jpg", alt:"Woman reclining on a sofa in black and white.", cap:"Sunday" },
    { src:"images/portrait-06.jpg", alt:"Man standing in a tall doorway beside a window.", cap:"Doorway" },
    { src:"images/portrait-07.jpg", alt:"Portrait washed in orange light, eyes lowered.", cap:"Orange" },
    { src:"images/portrait-08.jpg", alt:"Portrait in glasses against a pale wall.", cap:"Glasses" },
    { src:"images/portrait-09.jpg", alt:"Laughing portrait against a painted brick wall.", cap:"Brick" },
    { src:"images/portrait-10.jpg", alt:"Two friends laughing beside a curtained window.", cap:"Both of them" },
    { src:"images/portrait-11.jpg", alt:"Two figures in near-darkness, black and white.", cap:"Almost nothing" },
    { src:"images/portrait-12.jpg", alt:"Two friends leaning together, black and white.", cap:"Kitchen floor" },
    { src:"images/portrait-13.jpg", alt:"Outdoor portrait in soft overcast light.", cap:"Overcast" },
    { src:"images/portrait-14.jpg", alt:"Portrait in a dark green sweater, hand at the temple.", cap:"Green" },
    { src:"images/portrait-15.jpg", alt:"Portrait against a dark window, half in shadow.", cap:"Window seat" },
  ]},
  california: { title: "California", frames: [
    { src:"images/california-01.jpg", alt:"Shuttered roadside market in flat desert light.", cap:"MARKET" },
    { src:"images/california-02.jpg", alt:"Coastal headlands meeting the ocean.", cap:"Headlands" },
    { src:"images/california-03.jpg", alt:"Figure looking upward in open desert.", cap:"Looking up" },
    { src:"images/california-04.jpg", alt:"City skyline seen from a hill at dusk.", cap:"From the hill" },
    { src:"images/california-05.jpg", alt:"Desert hills in low gold light.", cap:"An hour before dark" },
    { src:"images/california-06.jpg", alt:"Black and white desert basin under a wide sky.", cap:"Basin" },
    { src:"images/california-07.jpg", alt:"Black and white desert ridgeline.", cap:"Ridge" },
    { src:"images/california-08.jpg", alt:"Black and white figure on a beach, hair in the wind.", cap:"Wind" },
    { src:"images/california-09.jpg", alt:"Black and white ocean, long low waves.", cap:"Swell" },
    { src:"images/california-10.jpg", alt:"Black and white sea stack under a low sun.", cap:"Stack" },
    { src:"images/california-11.jpg", alt:"Single folding chair on a white sunlit patio.", cap:"One chair" },
  ]},
  europe: { title: "Paris / Berlin", frames: [
    { src:"images/europe-01.jpg", alt:"Paris rooftops receding into haze.", cap:"Zinc" },
    { src:"images/europe-02.jpg", alt:"Figure crossing an empty Paris street.", cap:"Crossing" },
    { src:"images/europe-03.jpg", alt:"Man standing on the Oberbaum bridge, Berlin.", cap:"Oberbaum" },
    { src:"images/europe-04.jpg", alt:"Black and white Paris street with scaffolding.", cap:"Scaffold" },
    { src:"images/europe-05.jpg", alt:"Soviet war memorial at Treptower Park.", cap:"Treptower" },
    { src:"images/europe-06.jpg", alt:"Figure seated below a stone relief at the memorial.", cap:"Reading" },
    { src:"images/europe-07.jpg", alt:"Black and white avenue of trees, wet ground.", cap:"Avenue" },
    { src:"images/europe-08.jpg", alt:"Plattenbau facade with a single tree.", cap:"Plattenbau" },
    { src:"images/europe-09.jpg", alt:"Figure standing far off in a green field.", cap:"Far off" },
    { src:"images/europe-10.jpg", alt:"Figure on a curving path lined with trees.", cap:"The path" },
    { src:"images/europe-11.jpg", alt:"Passengers on a train, late light through the windows.", cap:"Last train" },
    { src:"images/europe-12.jpg", alt:"Single round chair on a red carpeted floor.", cap:"Waiting" },
  ]},
  newyork: { title: "New York", frames: [
    { src:"images/newyork-01.jpg", alt:"Friends under a large tree in warm afternoon light.", cap:"October" },
    { src:"images/newyork-02.jpg", alt:"Empty benches along a waterfront promenade.", cap:"Promenade" },
    { src:"images/newyork-03.jpg", alt:"Woman at the East River with a bridge behind her.", cap:"East River" },
    { src:"images/newyork-04.jpg", alt:"Ice cream on a street corner at night.", cap:"Soft serve" },
    { src:"images/newyork-05.jpg", alt:"Skyline seen through park trees.", cap:"Through the park" },
    { src:"images/newyork-06.jpg", alt:"Portrait at an outdoor table surrounded by planting.", cap:"Outside" },
    { src:"images/newyork-07.jpg", alt:"Figure lying in fallen leaves, seen from above.", cap:"Leaves" },
    { src:"images/newyork-08.jpg", alt:"Portrait at dusk, lights beginning behind.", cap:"Dusk" },
    { src:"images/newyork-09.jpg", alt:"Figure on a sloping street at night.", cap:"Walking home" },
  ]},
};

const TOTAL = Object.values(SERIES).reduce((n, s) => n + s.frames.length, 0);

/* ── Lightbox ──────────────────────────────────────────────── */
const lb        = document.getElementById("lb");
const lbImg     = document.getElementById("lbImg");
const lbSeries  = document.getElementById("lbSeries");
const lbIndex   = document.getElementById("lbIndex");
let current = { key: null, i: 0 };
let lastFocus = null;

function show(key, i) {
  const s = SERIES[key];
  if (!s) return;
  current = { key, i: (i + s.frames.length) % s.frames.length };
  const f = s.frames[current.i];

  lbImg.classList.remove("ready");
  lbImg.onload = () => lbImg.classList.add("ready");
  lbImg.src = f.src;
  lbImg.alt = f.alt;
  lbSeries.textContent = `${s.title} — ${f.cap}`;
  lbIndex.textContent  = `${String(current.i + 1).padStart(2, "0")} / ${String(s.frames.length).padStart(2, "0")}`;

  // preload the neighbours so arrow-keying feels instant
  [current.i + 1, current.i - 1].forEach(n => {
    const nf = s.frames[(n + s.frames.length) % s.frames.length];
    new Image().src = nf.src;
  });
}

function openLb(key, i) {
  lastFocus = document.activeElement;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  show(key, i);
  document.getElementById("lbClose").focus();
}

function closeLb() {
  lb.hidden = true;
  document.body.style.overflow = "";
  lbImg.src = "";
  if (lastFocus) lastFocus.focus();
}

document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", () => openLb(btn.dataset.open, Number(btn.dataset.i) || 0));
});

document.getElementById("lbClose").addEventListener("click", closeLb);
document.getElementById("lbPrev").addEventListener("click", () => show(current.key, current.i - 1));
document.getElementById("lbNext").addEventListener("click", () => show(current.key, current.i + 1));
lb.addEventListener("click", e => { if (e.target === lb || e.target.classList.contains("lb__stage")) closeLb(); });

document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape")     closeLb();
  if (e.key === "ArrowRight") show(current.key, current.i + 1);
  if (e.key === "ArrowLeft")  show(current.key, current.i - 1);
  if (e.key === "Tab") {                       // keep focus inside the viewer
    const f = lb.querySelectorAll("button");
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus();  e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  }
});

/* ── Scroll reveals ────────────────────────────────────────── */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".band").forEach(band => {
  const items = [...band.querySelectorAll(".band__head > *, .frame, .band__all")];
  items.forEach((el, n) => {
    el.classList.add("reveal");
    el.style.setProperty("--d", `${Math.min(n, 5) * 70}ms`);
  });
});

if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
}

/* ── The rail: which roll are we standing in ───────────────── */
const mark  = document.getElementById("edgeMark");
const count = document.getElementById("edgeCount");

function setRail(title, sub) {
  if (mark.textContent === title) return;
  [mark, count].forEach(el => (el.style.opacity = 0));
  setTimeout(() => {
    mark.textContent = title;
    count.textContent = sub;
    [mark, count].forEach(el => (el.style.opacity = ""));
  }, reduce ? 0 : 180);
}

const railIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const t = en.target;
    if (t.classList.contains("band")) setRail(t.dataset.title, `${t.dataset.count} / ${TOTAL}`);
    else if (t.classList.contains("contact")) setRail("Contact", "— / —");
    else setRail("Archive", `${TOTAL} frames`);
  });
}, { rootMargin: "-45% 0px -45% 0px" });

document.querySelectorAll(".opening, .band, .contact").forEach(el => railIO.observe(el));
