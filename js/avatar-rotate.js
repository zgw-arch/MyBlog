/* 头像旋转效果 */
(function () {
  'use strict';

  var style = document.createElement('style');
  style.textContent =
    '.avatar {' +
      'animation: avatarSpinSlow 8s linear infinite;' +
    '}' +
    '.avatar:hover {' +
      'animation: avatarSpinFast 1.5s linear infinite;' +
    '}' +
    '@keyframes avatarSpinSlow {' +
      'from { transform: rotate(0deg); }' +
      'to   { transform: rotate(360deg); }' +
    '}' +
    '@keyframes avatarSpinFast {' +
      'from { transform: rotate(0deg); }' +
      'to   { transform: rotate(360deg); }' +
    '}';

  document.head.appendChild(style);
})();
