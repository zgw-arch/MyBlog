const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const angle = 10; // 倾斜角度（度），越大越斜
const baseSlant = Math.tan(angle * Math.PI / 180);

const drops = Array.from({ length: 20 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random() * 2 + 5,
    length: Math.random() * 1 + 6,
    opacity: Math.random() * 0.1 + 0.3,
    slant: baseSlant + (Math.random() - 0.5) * 0.06 // 每滴角度微调
}));

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drops.forEach(d => {
        const offsetX = d.length * d.slant;
        const endX = d.x + offsetX;
        const endY = d.y + d.length;

        // 雨滴主体：用渐变模拟拖尾，顶部淡、底部亮
        const grad = ctx.createLinearGradient(d.x, d.y, endX, endY);
        grad.addColorStop(0, `rgba(180, 210, 255, 0)`);
        grad.addColorStop(0.7, `rgba(180, 210, 255, ${d.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(200, 225, 255, ${d.opacity})`);

        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // 雨滴头部亮点
        ctx.beginPath();
        ctx.arc(endX, endY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 230, 255, ${d.opacity + 0.1})`;
        ctx.fill();

        d.y += d.speed;
        d.x += d.speed * d.slant;
        if (d.y > canvas.height) {
            d.y = -d.length - 5;
            d.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
