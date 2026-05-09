// Custom cursor
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx - 5 + 'px';
    cur.style.top = my - 5 + 'px';
});

function animCursor() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    curR.style.left = rx - 16 + 'px';
    curR.style.top = ry - 16 + 'px';
    requestAnimationFrame(animCursor);
}
animCursor();

document.querySelectorAll('a, button, .mc-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cur.style.transform = 'scale(2.5)';
        curR.style.transform = 'scale(1.5)';
        curR.style.borderColor = 'rgba(124,111,255,.8)';
    });
    el.addEventListener('mouseleave', () => {
        cur.style.transform = 'scale(1)';
        curR.style.transform = 'scale(1)';
        curR.style.borderColor = 'rgba(124,111,255,.4)';
    });
});

// Hamburger menu
document.getElementById('ham').addEventListener('click', () => {
    document.getElementById('mob').classList.toggle('open');
});

function cm() {
    document.getElementById('mob').classList.remove('open');
}

// Scroll reveal
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
        }
    });
}, { threshold: .08 });

document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

// Meme toggle
function tog(btn) {
    const mc = btn.closest('.mc');
    const rev = mc.querySelector('.mc-reveal');
    const open = rev.classList.contains('open');
    document.querySelectorAll('.mc-reveal').forEach(r => r.classList.remove('open'));
    document.querySelectorAll('.mc-btn').forEach(b => b.classList.remove('open'));
    if (!open) {
        rev.classList.add('open');
        btn.classList.add('open');
    }
}

// Nav active highlight
const secs = document.querySelectorAll('section[id]');
const nls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    secs.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    nls.forEach(a => {
        const match = a.getAttribute('href') === '#' + current;
        a.style.color = match ? 'var(--text)' : '';
        a.style.background = match ? 'var(--surface2)' : '';
    });
});