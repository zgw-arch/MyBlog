/* ── 滚动驱动 Header 压缩/拉伸（clip-path 版，GPU 加速无反冲）── */
(function () {
  'use strict';
  var header = document.querySelector('.header');
  if (!header) return;

  var originalHeight = 0;
  var ticking = false;

  function measure() {
    // 临时清掉 clip-path 以测量原始高度
    var saved = header.style.clipPath;
    header.style.clipPath = '';
    originalHeight = header.getBoundingClientRect().height;
    header.style.clipPath = saved;
  }

  function update() {
    // hidden = 从底部裁掉的像素数，scrollY 每前进 1px 就裁掉 1px
    var hidden = Math.max(0, Math.min(originalHeight, window.scrollY));
    header.style.clipPath = 'inset(0 0 ' + hidden + 'px 0)';
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', function () {
    measure();
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  });

  measure();
  // 初始调用，防止页面加载时已有滚动位置
  update();
})();
