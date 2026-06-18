/* ─── PLAY / PAUSE TOGGLE ───────────────────────────────────────── */
let isPlaying = false;

document.querySelectorAll('.btn-play, .btn-play-main').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    isPlaying = !isPlaying;

    const icon = btn.querySelector('i');
    if (!icon) return;

    if (isPlaying) {
      icon.classList.replace('fa-play', 'fa-pause');
      icon.style.marginLeft = '0';
    } else {
      icon.classList.replace('fa-pause', 'fa-play');
      icon.style.marginLeft = btn.classList.contains('btn-play-main') ? '2px' : '3px';
    }
  });
});

/* ─── AMBIENT GLOW ON MOUSE MOVE ────────────────────────────────── */
const main = document.querySelector('.main');

main.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth)  * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  main.style.backgroundImage =
    `radial-gradient(circle at ${x}% ${y}%, rgba(83,224,118,.05) 0%, transparent 50%)`;
});

/* ─── ACTIVE-SCALE MICRO-INTERACTION ────────────────────────────── */
document.querySelectorAll('.btn-play, .btn-create, .btn-play-main').forEach(el => {
  el.addEventListener('mousedown', () => el.style.transform = 'scale(.93)');
  el.addEventListener('mouseup',   () => el.style.transform = '');
  el.addEventListener('mouseleave',() => el.style.transform = '');
});