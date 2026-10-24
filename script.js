const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
const ham = document.getElementById('ham');
const mobMenu = document.getElementById('mob');
const navLinks = document.querySelectorAll('.nav-link, .mob-menu a');

let mx = 0;
let my = 0;
let rx = 0;
let ry = 0;

function addNavMenuStyles() {
    const style = document.createElement('style');
    style.id = 'nav-menu-enhancements';
    style.textContent = `
        body.nav-open {
            overflow: hidden;
        }

        .mob-menu {
            opacity: 0;
            visibility: hidden;
            max-height: 0;
            overflow: hidden;
            transform: translateY(-12px);
            transition: opacity 0.25s ease, transform 0.25s ease, max-height 0.3s ease, visibility 0.25s ease;
        }

        .mob-menu.open {
            opacity: 1;
            visibility: visible;
            max-height: 420px;
            transform: translateY(0);
        }

        .ham {
            position: relative;
            z-index: 1001;
            transition: transform 0.25s ease;
        }

        .ham span {
            display: block;
            transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .ham.open {
            transform: rotate(180deg);
        }

        .ham.open span:nth-child(1) {
            transform: rotate(45deg) translate(4px, 4px);
        }

        .ham.open span:nth-child(2) {
            opacity: 0;
        }

        .ham.open span:nth-child(3) {
            transform: rotate(-45deg) translate(4px, -4px);
        }

        .mob-menu a {
            position: relative;
            transition: color 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
        }

        .mob-menu a:hover,
        .mob-menu a:focus-visible {
            color: var(--text);
            transform: translateX(4px);
        }

        @media (max-width: 860px) {
            .nav-center {
                display: none;
            }

            .ham {
                display: flex;
            }
        }

        @media (min-width: 861px) {
            .mob-menu {
                display: none !important;
            }
        }
    `;

    if (!document.getElementById('nav-menu-enhancements')) {
        document.head.appendChild(style);
    }
}

function setLinkBehavior() {
    document.querySelectorAll('a[href]').forEach((link) => {
        const href = link.getAttribute('href') || '';
        const isExternal = /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');

        if (isExternal && !link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }

        if (isExternal && !link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

function closeMenu() {
    if (!mobMenu || !ham) return;

    mobMenu.classList.remove('open');
    ham.classList.remove('open');
    mobMenu.setAttribute('aria-hidden', 'true');
    ham.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
}

function openMenu() {
    if (!mobMenu || !ham) return;

    mobMenu.classList.add('open');
    ham.classList.add('open');
    mobMenu.setAttribute('aria-hidden', 'false');
    ham.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
}

function toggleMenu() {
    if (!mobMenu || !ham) return;

    if (mobMenu.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    addNavMenuStyles();
    setLinkBehavior();

    if (ham && mobMenu) {
        ham.setAttribute('aria-expanded', 'false');
        mobMenu.setAttribute('aria-hidden', 'true');

        ham.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleMenu();
        });

        mobMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
    }

    document.addEventListener('click', (event) => {
        if (!mobMenu || !ham) return;

        const clickedInsideMenu = mobMenu.contains(event.target);
        const clickedToggle = ham.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle && mobMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) {
            closeMenu();
        }
    });
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

if (cur && curR) {
    animCursor();
}

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

navLinks.forEach((link) => {
    link.addEventListener('focus', () => {
        if (window.innerWidth <= 860 && ham && mobMenu && mobMenu.classList.contains('open')) {
            return;
        }
    });
});
