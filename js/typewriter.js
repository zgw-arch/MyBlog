/* Blog — Typewriter Effect */
(function() {
  var lines = [
    "Edelweiss, Edelweiss",
    "Every morning you greet me",
    "Small and white, clean and bright",
    "You look happy to meet me",
    "Blossom of snow, may you bloom and grow",
    "Bloom and grow forever",
    "Edelweiss, Edelweiss",
    "Bless my homeland forever",
    "Edelweiss, Edelweiss",
    "Every morning you greet me",
    "Small and white, clean and bright",
    "You look happy to meet me",
    "Blossom of snow, may you bloom and grow",
    "Bloom and grow forever",
    "Edelweiss, Edelweiss",
    "Bless my homeland forever"
  ];
  var el = document.getElementById('typewriter');
  if (!el) return;
  var lineIdx = 0, charIdx = 0, speed = 15;
  function type() {
    if (lineIdx >= lines.length) return;
    var cur = lines[lineIdx];
    if (charIdx < cur.length) {
      charIdx++;
      el.innerHTML = lines.slice(0, lineIdx).join('<br>') + (lineIdx > 0 ? '<br>' : '') + cur.slice(0, charIdx) + '<span style="animation:blink 0.8s infinite;">|</span>';
      setTimeout(type, speed);
    } else {
      lineIdx++; charIdx = 0;
      setTimeout(type, speed * 4);
    }
  }
  type();
})();
