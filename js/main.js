/* ============================================
   Blog — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  var ARTICLES_PER_PAGE = 4;
  var articles = [];
  var currentPage = 1;
  var totalPages = 1;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    navActive();
    backToTop();
    loadArticles();
    calcRuntime();
  }

  function calcRuntime() {
    var el = document.getElementById('runtime-days');
    if (!el) return;
    var start = new Date('2021-12-01');
    var now = new Date();
    var days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    el.textContent = days + ' 天';
  }

  function loadArticles() {
    var container = document.getElementById('article-list');
    if (!container) return;
    articles = window.ARTICLES_DATA || [];
    articles.sort(function(a, b) { return b.id - a.id; });
    if (articles.length === 0) {
      container.innerHTML = '<p style="text-align:center;padding:60px;color:var(--muted);">暂无文章</p>';
      return;
    }
    totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
    var params = new URLSearchParams(window.location.search);
    var pageParam = parseInt(params.get('page'), 10);
    currentPage = (!isNaN(pageParam) && pageParam >= 1 && pageParam <= totalPages) ? pageParam : 1;
    renderPage();
    renderRecentPosts();
  }

  function renderPage() {
    var start = (currentPage - 1) * ARTICLES_PER_PAGE;
    var end = Math.min(start + ARTICLES_PER_PAGE, articles.length);
    var pageArticles = articles.slice(start, end);
    Card.renderCards(pageArticles, 'article-list');
    renderPagination();
  }

  function renderPagination() {
    var pag = document.getElementById('pagination');
    if (!pag || totalPages <= 1) {
      if (pag) pag.style.display = 'none';
      return;
    }
    pag.style.display = 'flex';
    var html = '';
    if (currentPage > 1) html += '<a href="?page=' + (currentPage - 1) + '">&#171;</a>';

    var pagesToShow = [];
    if (totalPages <= 7) {
      for (var i = 1; i <= totalPages; i++) pagesToShow.push(i);
    } else {
      pagesToShow.push(1);
      if (currentPage > 3) pagesToShow.push('dots');
      var s = Math.max(2, currentPage - 1);
      var e = Math.min(totalPages - 1, currentPage + 1);
      for (var j = s; j <= e; j++) pagesToShow.push(j);
      if (currentPage < totalPages - 2) pagesToShow.push('dots');
      pagesToShow.push(totalPages);
    }

    pagesToShow.forEach(function (p) {
      if (p === 'dots') { html += '<span class="dots">&hellip;</span>'; }
      else if (p === currentPage) { html += '<span class="current">' + p + '</span>'; }
      else { html += '<a href="?page=' + p + '">' + p + '</a>'; }
    });

    if (currentPage < totalPages) html += '<a href="?page=' + (currentPage + 1) + '">&#187;</a>';
    pag.innerHTML = html;
    bindPagination();
  }

  function bindPagination() {
    var pag = document.getElementById('pagination');
    if (!pag) return;
    pag.addEventListener('click', function (e) {
      var target = e.target.closest('a');
      if (!target) return;
      e.preventDefault();
      var match = target.getAttribute('href').match(/page=(\d+)/);
      if (!match) return;
      var page = parseInt(match[1], 10);
      if (page < 1 || page > totalPages) return;
      currentPage = page;
      if (history.pushState) history.pushState(null, '', '?page=' + page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderPage();
    });
  }

  function renderRecentPosts() {
    var container = document.getElementById('recent-posts');
    if (!container) return;
    var recent = articles.slice(0, 5);
    var html = '';
    recent.forEach(function (art) {
      html += '<a class="recent-item" href="article.html?id=' + art.id + '">' +
          '<div class="recent-title">' + art.title + '</div>' +
          '<div class="recent-date">' + art.date + '</div>' +
        '</a>';
    });
    container.innerHTML = html;
  }

  function navActive() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var links = nav.querySelectorAll('a');
    var currentPath = window.location.pathname;
    links.forEach(function (a) {
      if (a.getAttribute('href') === currentPath || (currentPath === '/' && a.getAttribute('href') === '/')) {
        a.classList.add('active');
      }
      a.addEventListener('click', function () {
        links.forEach(function (l) { l.classList.remove('active'); });
        a.classList.add('active');
      });
    });
  }

  function backToTop() {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.title = 'Back to top';
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>';
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.body.appendChild(btn);
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 500) { btn.classList.add('show'); }
          else { btn.classList.remove('show'); }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

})();
