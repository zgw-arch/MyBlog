const header = document.querySelector('.header');
if (!header) throw new Error('Header not found');

const fogCanvas = document.createElement('canvas');
fogCanvas.id = 'fog';
fogCanvas.style.cssText = 'position:absolute;top:0;left:0;z-index:1;pointer-events:none;';
header.appendChild(fogCanvas);

const fctx = fogCanvas.getContext('2d');

// 雾团：随机位置、大小、透明度、漂移速度
let blobs = [];

function resize() {
    fogCanvas.width = header.offsetWidth;
    fogCanvas.height = header.offsetHeight;
    blobs = Array.from({ length: 13 }, () => ({
        x: Math.random() * fogCanvas.width,
        y: Math.random() * fogCanvas.height * 0.9,
        r: Math.random() * 280 + 100,
        opacity: Math.random() * 0.04 + 0.03,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() - 0.5) * 0.28,
    }));
}

resize();

function drawFog() {
    fctx.clearRect(0, 0, fogCanvas.width, fogCanvas.height);

    blobs.forEach(b => {
        b.x += b.speedX;
        b.y += b.speedY;

        if (b.x < -b.r) b.x = fogCanvas.width + b.r;
        if (b.x > fogCanvas.width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = fogCanvas.height + b.r;
        if (b.y > fogCanvas.height + b.r) b.y = -b.r;

        const grad = fctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `rgba(200, 215, 230, ${b.opacity})`);
        grad.addColorStop(0.5, `rgba(200, 215, 230, ${b.opacity * 0.6})`);
        grad.addColorStop(1, 'rgba(200, 215, 230, 0)');

        fctx.fillStyle = grad;
        fctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
    });

    requestAnimationFrame(drawFog);
}

drawFog();

window.addEventListener('resize', resize);
