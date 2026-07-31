/* ── 五子棋箭头折叠/展开 ── */
(function () {
  'use strict';
  var header = document.querySelector('.gobang-header');
  var arrow = document.querySelector('.gobang-arrow');
  var body = document.querySelector('.gobang-body');
  if (!header || !arrow || !body) return;

  var isOpen = false;       // false = base-right, true = base-up
  var hovering = false;

  /* 从 transform matrix 提取当前旋转角度 */
  function getAngle(el) {
    var m = getComputedStyle(el).transform;
    if (m === 'none') return 0;
    var v = m.split('(')[1].split(')')[0].split(',');
    return Math.atan2(parseFloat(v[1]), parseFloat(v[0])) * (180 / Math.PI);
  }

  /* 逆时针走到 base-up（-90°/270°） */
  function ccwToUp(cur) {
    var norm = ((cur % 360) + 360) % 360;
    return cur - (norm > 270 ? norm - 270 : norm + 90);
  }

  /* 走到 base-right（0°） */
  function toBaseRight(cur) {
    var norm = ((cur % 360) + 360) % 360;
    return cur - norm;
  }

  /* hover：spin + 隐藏 body（关闭状态） */
  header.addEventListener('mouseenter', function () {
    hovering = true;
    arrow.style.animation = '';
    if (!isOpen) body.classList.add('hidden');
  });

  header.addEventListener('mouseleave', function () {
    hovering = false;
    arrow.style.animation = '';
    arrow.style.transition = 'transform .6s ease';
    arrow.style.transform = isOpen ? 'rotate(-90deg)' : 'rotate(0deg)';
    if (!isOpen) body.classList.remove('hidden');
  });

  /* click：切换 */
  header.addEventListener('click', function () {
    /* 停止 CSS spin 动画，改用 JS 控制旋转 */
    arrow.style.animation = 'none';
    var cur = getAngle(arrow);
    arrow.style.transition = 'transform .6s ease';

    if (!isOpen) {
      arrow.style.transform = 'rotate(' + ccwToUp(cur) + 'deg)';
      isOpen = true;
      body.classList.remove('hidden');
    } else {
      arrow.style.transform = 'rotate(' + toBaseRight(cur) + 'deg)';
      isOpen = false;
      if (hovering) {
        body.classList.add('hidden');
      } else {
        body.classList.remove('hidden');
      }
    }
  });
})();
