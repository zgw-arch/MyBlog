/* Blog — Article Card Component */
var Card = (function () {
  'use strict';
  var PLACEHOLDER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m22 16-5-5-7 7-3-2-5 5"/></svg>';

  // 计算字数 + 阅读时间
  function calcRead(art) {
    var text = (art.content || '') + (art.excerpt || '');
    // 去掉 HTML 标签
    text = text.replace(/<[^>]+>/g, '');
    // 中文字符数 + 英文单词数
    var chinese = (text.match(/[一-鿿]/g) || []).length;
    var english = (text.match(/[a-zA-Z]+/g) || []).length;
    var words = chinese + english;
    var minutes = Math.max(1, Math.round(words / 300));
    return { words: words, minutes: minutes };
  }

  function cardHTML(art) {
    var read = calcRead(art);
    var tagHTML = '';
    if (art.tags && art.tags.length) {
      tagHTML = art.tags.map(function (t) { return '<span class="card-tag">' + t + '</span>'; }).join('');
    }
    var imgHTML = art.thumbnail
      ? '<img src="' + art.thumbnail + '" alt="">'
      : '<div class="placeholder">' + PLACEHOLDER_SVG + '</div>';

    return '<a class="article-card" href="article.html?id=' + art.id + '">' +
      '<div class="water-drop"></div>' +
      '<div class="card-img-wrap">' + imgHTML + '</div>' +
      '<div class="card-body">' +
        '<span class="card-title">' + art.title + '</span>' +
        '<span class="card-desc">' + art.excerpt + '</span>' +
        '<div class="card-meta">' +
          '<span class="card-date">' + art.date + '</span>' +
          '<div class="card-meta-right">' + tagHTML +
            '<span class="card-read">字数' + read.words + ' 阅读约' + read.minutes + 'min</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</a>';
  }

  function renderCards(articles, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var html = '';
    articles.forEach(function (art) { html += cardHTML(art); });
    container.innerHTML = html;
  }
  return { cardHTML: cardHTML, renderCards: renderCards };
})();
