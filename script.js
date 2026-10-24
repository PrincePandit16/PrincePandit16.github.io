// Custom cursor
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx = 0;
let my = 0;
let rx = 0;
let ry = 0;

function setLinkBehavior() {
    document.querySelectorAll('a[href]').forEach((link) => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }

        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLinkBehavior();
});

document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = `${mx - 5}px`;
    cur.style.top = `${my - 5}px`;
});

function animCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    curR.style.left = `${rx - 16}px`;
    curR.style.top = `${ry - 16}px`;
    requestAnimationFrame(animCursor);
}

animCursor();

document.querySelectorAll('a, button, .mc-btn').forEach((el) => {
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

const ham = document.getElementById('ham');
const mobMenu = document.getElementById('mob');

if (ham && mobMenu) {
    ham.addEventListener('click', () => {
        mobMenu.classList.toggle('open');
    });
}

function cm() {
    if (mobMenu) {
        mobMenu.classList.remove('open');
    }
}

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((r) => obs.observe(r));

// Meme toggle
function tog(btn) {
    const mc = btn.closest('.mc');
    const rev = mc.querySelector('.mc-reveal');
    const isOpen = rev.classList.contains('open');

    document.querySelectorAll('.mc-reveal').forEach((r) => r.classList.remove('open'));
    document.querySelectorAll('.mc-btn').forEach((b) => b.classList.remove('open'));

    if (!isOpen) {
        rev.classList.add('open');
        btn.classList.add('open');
    }
}

// Nav active highlight
const secs = document.querySelectorAll('section[id]');
const nls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) {
            current = s.id;
        }
    });

    nls.forEach((a) => {
        const match = a.getAttribute('href') === `#${current}`;
        a.style.color = match ? 'var(--text)' : '';
        a.style.background = match ? 'var(--surface2)' : '';
    });
});
