const starCanvas = document.createElement('canvas');
starCanvas.id = 'stars';
starCanvas.style.cssText = 'position:fixed;top:0;left:0;z-index:0;pointer-events:none;';
document.body.insertBefore(starCanvas, document.body.firstChild);

const sctx = starCanvas.getContext('2d');

starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;

const stars = Array.from({ length: 60 }, () => ({
    x: Math.random() * starCanvas.width,
    y: Math.random() * starCanvas.height,
    r: Math.random() * 1.8 + 0.5,
    speed: Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.5 + 0.2,
    twinkle: Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 0.02 + 0.005
}));

function drawStars() {
    sctx.clearRect(0, 0, starCanvas.width, starCanvas.height);

    stars.forEach(function (s) {
        s.y -= s.speed;
        s.twinkle += s.twinkleSpeed;

        if (s.y < -5) {
            s.y = starCanvas.height + 5;
            s.x = Math.random() * starCanvas.width;
        }

        const alpha = s.opacity + Math.sin(s.twinkle) * 0.25;

        const grad = sctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        grad.addColorStop(0, `rgba(200,220,255,${Math.min(1, alpha + 0.3)})`);
        grad.addColorStop(0.3, `rgba(180,200,240,${Math.min(1, alpha)})`);
        grad.addColorStop(1, 'rgba(180,200,240,0)');

        sctx.beginPath();
        sctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        sctx.fillStyle = grad;
        sctx.fill();
    });

    requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener('resize', function () {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
});
