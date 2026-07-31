/* ── Header 玻璃遮罩（JS 动态注入，自动适应 header 大小）── */
(function () {
  'use strict';
  var header = document.querySelector('.header');
  if (!header) return;

  var glass = document.createElement('div');
  glass.className = 'header-glass';
  glass.style.cssText =
    'position:absolute;inset:0;z-index:1;' +
    'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
    'background:rgba(30,32,38,0.25);pointer-events:none;';

  /* 插在 header-bg 之后，header-content 之前 */
  var bg = header.querySelector('.header-bg');
  if (bg && bg.nextSibling) {
    header.insertBefore(glass, bg.nextSibling);
  } else {
    header.appendChild(glass);
  }
})();
