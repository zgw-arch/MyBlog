/* ============================================
   自定义评论区 JS — Cusdis API 后端
   ============================================ */

var CUSDIS_APP_ID = '1cf5c667-a6d8-457b-966d-3b04d4141a06';

// 当前文章 pageId
function blogPageId() {
  return 'ARTICLE_' + (new URLSearchParams(window.location.search).get('id') || '0');
}

// HTML 转义
function esc(str) {
  var d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}

// 时间格式化
function timeAgo(d) {
  var diff = Math.floor((new Date() - new Date(d)) / 1000);
  if (diff < 60)  return '刚刚';
  if (diff < 3600) return Math.floor(diff / 60) + ' 分钟前';
  if (diff < 86400) return Math.floor(diff / 3600) + ' 小时前';
  if (diff < 2592000) return Math.floor(diff / 86400) + ' 天前';
  return new Date(d).toLocaleDateString('zh-CN');
}

// MD5（Gravatar 用）
function md5(s) {
  function r(n,c){return(n<<c)|(n>>>(32-c));}
  function q(n,c,d,e,f,g,h){return r(n+r(r(c,d,e,f,g,h)+n+g,7)+c,21)+d;}
  function a(b,c){return b>>>c|b<<(32-c);}
  var x=[],l=s.length,i,k,aa,bb,cc,dd;
  for(i=0;i<l;)x[i>>2]=(x[i>>2]||0)|((s.charCodeAt(i)&255)<<(i%4*8)),i++;
  x.push(0x80);while(x.length%16!=14)x.push(0);
  x.push(l*8>>>0,l*8/0x100000000>>>0);
  var A=0x67452301,B=0xefcdab89,C=0x98badcfe,D=0x10325476;
  for(i=0;i<x.length;i+=16){
    aa=A,bb=B,cc=C,dd=D;
    A=q(A,B,C,D,x[i+0],7,0xd76aa478);D=q(D,A,B,C,x[i+1],12,0xe8c7b756);C=q(C,D,A,B,x[i+2],17,0x242070db);
    B=q(B,C,D,A,x[i+3],22,0xc1bdceee);A=q(A,B,C,D,x[i+4],7,0xf57c0faf);D=q(D,A,B,C,x[i+5],12,0x4787c62a);
    C=q(C,D,A,B,x[i+6],17,0xa8304613);B=q(B,C,D,A,x[i+7],22,0xfd469501);A=q(A,B,C,D,x[i+8],7,0x698098d8);
    D=q(D,A,B,C,x[i+9],12,0x8b44f7af);C=q(C,D,A,B,x[i+10],17,0xffff5bb1);B=q(B,C,D,A,x[i+11],22,0x895cd7be);
    A=q(A,B,C,D,x[i+12],7,0x6b901122);D=q(D,A,B,C,x[i+13],12,0xfd987193);C=q(C,D,A,B,x[i+14],17,0xa679438e);
    B=q(B,C,D,A,x[i+15],22,0x49b40821);A=a(A+aa,7);B=a(B+bb,12);C=a(C+cc,17);D=a(D+dd,22);
  }
  var w=A.toString(16),y=B.toString(16),z=C.toString(16),u=D.toString(16);
  while(w.length<8)w='0'+w;while(y.length<8)y='0'+y;
  while(z.length<8)z='0'+z;while(u.length<8)u='0'+u;
  return w+y+z+u;
}

// Gravatar 头像
function gravatar(email, size) {
  size = size || 40;
  if (!email) {
    return 'data:image/svg+xml,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="'+size+'" height="'+size+'">' +
      '<rect fill="#1e2026" width="'+size+'" height="'+size+'"/>' +
      '<text fill="#555" x="50%" y="55%" text-anchor="middle" font-size="'+(size*0.45)+'">?</text></svg>');
  }
  return 'https://www.gravatar.com/avatar/' + md5(email.trim().toLowerCase()) + '?d=identicon&s=' + size;
}

// ==================== 获取评论 ====================
function loadBlogComments() {
  var list = document.getElementById('cc-list');
  if (!list) return;
  list.innerHTML = '<div style="text-align:center;padding:20px 0;color:rgba(255,255,255,0.35);font-size:13px;">加载中...</div>';

  fetch('https://cusdis.com/api/open/comments?appId=' + CUSDIS_APP_ID +
        '&pageId=' + encodeURIComponent(blogPageId()) + '&_=' + Date.now())
  .then(function(r) { return r.json(); })
  .then(function(j) {
    var comments = (j.data && j.data.data) ? j.data.data : [];
    if (!comments.length) {
      list.innerHTML = '<div style="text-align:center;padding:32px 0;color:rgba(255,255,255,0.25);font-size:14px;">还没有评论，来抢沙发</div>';
      return;
    }
    // 构建嵌套树
    var roots = [], all = {};
    comments.forEach(function(c) { all[c.id] = c; c.replies = c.replies || []; });
    comments.forEach(function(c) {
      var pid = c.parentId || c.parent_id || c.parentid;
      if (pid && all[pid]) { all[pid].replies.push(c); }
      else if (!pid) { roots.push(c); }
    });
    var html = '';
    roots.forEach(function(c) { html += renderBlogComment(c); });
    list.innerHTML = html;
  })
  .catch(function() {
    list.innerHTML = '<div style="text-align:center;padding:32px 0;color:rgba(255,255,255,0.25);font-size:14px;">加载失败，请刷新重试</div>';
  });
}

// ==================== 渲染评论 ====================
function renderBlogComment(c) {
  var avatar = gravatar(c.email || c.by_nickname, 36);
  var html =
    '<div class="cc-item">' +
      '<div class="cc-head">' +
        '<img class="cc-avatar" src="' + avatar + '" alt="" loading="lazy" />' +
        '<span class="cc-name">' + esc(c.by_nickname || '匿名') + '</span>' +
        '<span class="cc-time">' + timeAgo(c.createdAt || c.created_at || c.date) + '</span>' +
      '</div>' +
      '<div class="cc-content">' + esc(c.content) + '</div>' +
      '<button class="cc-reply-btn" onclick="toggleBlogReply(\'' + c.id + '\')">reply</button>' +
      '<div class="cc-reply-form" id="reply-form-' + c.id + '">' +
        '<input type="text" id="reply-nick-' + c.id + '" placeholder="昵称" maxlength="30" />' +
        '<textarea id="reply-content-' + c.id + '" placeholder="回复 ' + esc(c.by_nickname || '匿名') + '" rows="2"></textarea>' +
        '<div class="cc-reply-actions">' +
          '<button class="cc-reply-cancel" onclick="toggleBlogReply(\'' + c.id + '\')">取消</button>' +
          '<button class="cc-submit" onclick="submitBlogComment(\'' + c.id + '\')">回 复</button>' +
        '</div>' +
      '</div>';
  // 子回复
  if (c.replies && c.replies.length) {
    html += '<div class="cc-replies">';
    c.replies.forEach(function(r) { html += renderBlogComment(r); });
    html += '</div>';
  }
  html += '</div>';
  return html;
}

// ==================== 切换回复框 ====================
function toggleBlogReply(id) {
  var f = document.getElementById('reply-form-' + id);
  if (f) {
    f.style.display = f.style.display === 'flex' ? 'none' : 'flex';
  }
}

// ==================== 提交评论 ====================
function submitBlogComment(parentId) {
  var nickname, content;
  if (parentId) {
    nickname = document.getElementById('reply-nick-' + parentId).value.trim();
    content  = document.getElementById('reply-content-' + parentId).value.trim();
  } else {
    nickname = document.getElementById('cc-nickname').value.trim();
    content  = document.getElementById('cc-content').value.trim();
  }
  if (!nickname) { alert('请填写昵称'); return; }
  if (!content)  { alert('请填写评论内容'); return; }

  var body = {
    appId: CUSDIS_APP_ID,
    pageId: blogPageId(),
    pageUrl: window.location.href,
    pageTitle: document.title,
    nickname: nickname,
    content: content
  };
  if (parentId) { body.parentId = parentId; body.parent_id = parentId; }

  fetch('https://cusdis.com/api/open/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(function(r) { return r.json(); })
  .then(function() {
    if (parentId) { toggleBlogReply(parentId); }
    else { document.getElementById('cc-nickname').value = ''; document.getElementById('cc-content').value = ''; }
    loadBlogComments();
  })
  .catch(function() { alert('评论失败，请重试'); });
}

// ==================== 启动 ====================
loadBlogComments();
