/* Blog — Card Component */

var Card = (function () {
  'use strict';

  var PLACEHOLDER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m22 16-5-5-7 7-3-2-5 5"/></svg>';

  function cardHTML(art) {
    var thumbHTML = art.thumbnail
      ? '<img src="' + art.thumbnail + '" alt="" style="width:100%;height:100%;object-fit:cover;">'
      : '<div class="placeholder">' + PLACEHOLDER_SVG + '</div>';

    var tagsHTML = '';
    if (art.tags && art.tags.length) {
      tagsHTML = art.tags.map(function (t) {
        return '<span class="article-tag">' + t + '</span>';
      }).join('');
    }

    return '<a class="article-card" href="article.html?id=' + art.id + '">' +
      '<div class="article-thumb">' + thumbHTML + '</div>' +
      '<div class="article-body">' +
        '<div class="article-meta">' +
          '<span class="article-date">' + art.date + '</span>' +
          '<span class="article-cat">' + art.category + '</span>' +
        '</div>' +
        '<div class="article-title">' + art.title + '</div>' +
        '<div class="article-excerpt">' + art.excerpt + '</div>' +
        '<div class="article-tags">' + tagsHTML + '</div>' +
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
