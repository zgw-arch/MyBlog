/* Blog — Article Detail Loader */

(function () {
  'use strict';

  var articleId = null;
  var articles = [];

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    articleId = getIdFromURL();
    if (!articleId) { showError('No article ID'); return; }
    loadArticles();
  }

  function getIdFromURL() {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get('id'), 10);
    return isNaN(id) ? null : id;
  }

  function loadArticles() {
    articles = window.ARTICLES_DATA || [];
    articles.sort(function(a, b) { return b.id - a.id; });
    if (articles.length === 0) { showError('No data'); return; }
    renderArticle();
  }

  function renderArticle() {
    var article = null;
    for (var i = 0; i < articles.length; i++) {
      if (articles[i].id === articleId) { article = articles[i]; break; }
    }
    if (!article) { showError('Article not found'); return; }

    document.title = article.title + ' | Blog';
    document.getElementById('breadcrumb-cat').textContent = article.category;
    document.getElementById('art-date').textContent = article.date;
    document.getElementById('art-cat').textContent = article.category;
    document.getElementById('art-title').innerHTML = article.title;

    var tagsEl = document.getElementById('art-tags');
    tagsEl.innerHTML = '';
    article.tags.forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'article-tag';
      span.textContent = tag;
      tagsEl.appendChild(span);
    });

    document.getElementById('art-body').innerHTML = article.content;
    document.getElementById('article-loading').style.display = 'none';
    document.getElementById('article-content').style.display = 'block';

    // 设置 Cusdis 评论区文章信息
    var cusdis = document.getElementById('cusdis_thread');
    if (cusdis) {
      cusdis.setAttribute('data-page-id', 'ARTICLE_' + article.id);
      cusdis.setAttribute('data-page-url', window.location.href);
      cusdis.setAttribute('data-page-title', article.title.replace(/<[^>]*>/g, ''));
      if (window.CUSDIS) { window.CUSDIS.renderTo(cusdis); }
    }

    renderNav();
  }

  function renderNav() {
    var prevLink = document.getElementById('prev-article');
    var nextLink = document.getElementById('next-article');
    var idx = -1;
    for (var i = 0; i < articles.length; i++) {
      if (articles[i].id === articleId) { idx = i; break; }
    }
    if (idx < articles.length - 1) {
      prevLink.href = 'article.html?id=' + articles[idx + 1].id;
      prevLink.textContent = '← ' + articles[idx + 1].title;
    } else { prevLink.style.visibility = 'hidden'; }
    if (idx > 0) {
      nextLink.href = 'article.html?id=' + articles[idx - 1].id;
      nextLink.textContent = articles[idx - 1].title + ' →';
    } else { nextLink.style.visibility = 'hidden'; }
  }

  function showError(msg) {
    var loading = document.getElementById('article-loading');
    if (loading) { loading.textContent = msg; loading.style.color = 'var(--muted)'; }
  }

})();
