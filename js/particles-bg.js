tsParticles.load("tsparticles", {
  fpsLimit: 90,
  particles: {
    number: {
      value: 30,
      max: 55,                     // 硬上限，push 不会超过此值
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dfe6e9", "#a29bfe", "#fab1a0", "#81ecec", "#74b9ff", "#f5f0e1"],
      animation: {
        enable: true,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 90,
      color: "random",
      opacity: 0.5,
      width: 1,
      triangles: {
        enable: false,
        color: "#ffffff",
        opacity: 0.08
      }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false                // 由下方自定义逻辑接管点击
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.8
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 2
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: "transparent",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
}).then(function (container) {

  var MAX_BASE  = 40;      // 基准粒子数
  var MAX_LIMIT = 55;      // 绝对上限
  var cleanupTimer = null; // 10s 清理计时器

  /* ── 点击增加粒子（带上限） ── */
  container.canvas.element.addEventListener('click', function () {
    var count = container.particles.count;

    if (count < MAX_LIMIT) {
      // 每次加 4 个，但不能超过 55
      var toAdd = Math.min(4, MAX_LIMIT - count);
      for (var i = 0; i < toAdd; i++) {
        container.particles.addManualParticle();
      }
      count = container.particles.count; // 更新
    }

    // 超过基准值 → 启动 10s 清理倒计时
    if (count > MAX_BASE) {
      scheduleCleanup();
    }
  });

  /* ── 10 秒后随机清除多余粒子 ── */
  function scheduleCleanup() {
    if (cleanupTimer) {
      clearTimeout(cleanupTimer);
    }
    cleanupTimer = setTimeout(function () {
      var count = container.particles.count;
      if (count > MAX_BASE) {
        var excess = count - MAX_BASE;
        // 随机打乱粒子数组，取前 excess 个销毁
        var arr = container.particles.array.slice();
        for (var i = arr.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
        for (var k = 0; k < excess && k < arr.length; k++) {
          try { arr[k].destroy(); } catch (e) { /* 忽略销毁异常 */ }
        }
      }
      cleanupTimer = null;
    }, 10000);
  }

});
