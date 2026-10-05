// Mobile menu
const btn = document.querySelector(".menu-btn"),
  menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
});

// Hero gauge: animate to 72%
const fill = document.getElementById("fill"),
  h = document.getElementById("height");
setTimeout(() => {
  fill.style.width = "72%";
}, 300);
const target = 5.8,
  t0 = performance.now();
(function tick(t) {
  const p = Math.min((t - t0) / 2400, 1);
  h.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(1);
  if (p < 1) requestAnimationFrame(tick);
})(t0);

// Reveal feature cards on scroll
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
