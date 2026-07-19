

window.ARTICLES_DATA = [
  {"id":8,"title":"积分变换——拉普拉斯变换在积分运算与常微分方程中的应用  \n <p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Integral Transform — The Application of Laplace Transform in Integration and Ordinary Differential Equations<\p> " ,
    "date":"2026-05-11","category":"教程","tags":["积分变换","微分方程","拉普拉斯变换"],"thumbnail":"img/11.jpg",
    "excerpt":"","content":"<h2>一、积分运算</h2>\n" +
        "\n" +
        "<h3>1. 傅汝兰尼积分</h3>\n" +
        "<p>$$I_1=\\int_{0}^{+\\infty}\\frac{\\cos(3x)-\\cos(x)}{x}dx$$</p>\n" +
        "<p>性质：设 $F(S)$ 是 $f(t)$ 拉普拉斯变换的像函数</p>\n" +
        "<p>$$\\frac{F(S)}{S}=\\mathscr{L}\\left[\\int_0^{t}f(\\tau)d\\tau\\right],\\quad \\mathscr{L}\\left[\\frac{f(t)}{t}\\right]=\\int_s^{+\\infty}F(S)dS$$</p>\n" +
        "<p>$$\\mathscr{L}[\\cos(x)]=\\frac{s}{s^2+\\omega^2}\\bigg|_{\\omega=1}=\\frac{s}{s^2+1}$$</p>\n" +
        "<p>根据拉普拉斯变换相似性原则：</p>\n" +
        "<p>$$\\mathscr{L}[\\cos(3x)]=\\frac{1}{3}\\cdot\\frac{\\frac{1}{3}s}{\\left(\\frac{1}{3}s\\right)^2+1}=\\frac{s}{s^2+9}$$</p>\n" +
        "<p>$$\\mathscr{L}\\left\\{ \\cos(3x)-\\cos(x) \\right\\}=\\frac{s}{s^2+9}-\\frac{s}{s^2+1}$$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "I_1&=\\mathscr{L}\\left\\{ \\frac{\\cos(3x)-\\cos(x)}{x} \\right\\}\\bigg|_{s=0}\\\\\n" +
        "&=\\left[\\int_s^{+\\infty}\\left(\\frac{s}{s^2+9}-\\frac{s}{s^2+1}\\right)ds\\right]_{s=0}\\\\\n" +
        "&=\\left[\\frac{1}{2}\\ln\\left(\\frac{s^2+1}{s^2+9}\\right)\\right]_{s=0}\\\\\n" +
        "&=-\\frac{1}{2}\\ln9=-\\ln3\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "\n" +
        "<h3>2. $I_2=\\int_0^{+\\infty}xe^{-x}\\sin (x)dx$</h3>\n" +
        "<p>性质：设 $F(S)$ 是 $f(t)$ 的拉普拉斯变换像函数</p>\n" +
        "<p>$$\\mathscr{L}[tf(t)]=\\int_0^{+\\infty}tf(t)e^{-St}dt=-F'(S)$$</p>\n" +
        "<p>广义积分 $I_2$ 视作 $x\\sin x$ 的拉氏变换在 $s=1$ 处取值。</p>\n" +
        "<p>$$\\mathscr{L}[\\sin(x)]=\\frac{1}{s^2+1}$$</p>\n" +
        "<p>$$\\mathscr{L}[x\\sin x]=-\\left(\\frac{1}{s^2+1}\\right)'=\\frac{2s}{(s^2+1)^2}$$</p>\n" +
        "<p>$$I_2=\\mathscr{L}[x\\sin x]\\bigg|_{s=1}=\\frac{2\\cdot 1}{(1^2+1)^2}=\\frac{1}{2}$$</p>\n" +
        "\n" +
        "<h3>3. 狄利克雷积分</h3>\n" +
        "<p>$$I_3=\\int_0^{+\\infty}\\frac{\\sin x}{x}dx$$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\mathscr{L}\\left[\\frac{\\sin x}{x}\\right]&=\\int_s^{\\infty}\\mathscr{L}[\\sin x]ds=\\int_s^\\infty \\frac{1}{s^2+1}ds\\\\\n" +
        "&=\\frac{\\pi}{2}-\\arctan(s)\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>$$I_3=\\left[\\frac{\\pi}{2}-\\arctan(s)\\right]_{s=0}=\\frac{\\pi}{2}$$</p>\n" +
        "\n" +
        "<h3>4. $I_4=\\int_0^{+\\infty}\\frac{\\sin x}{x}e^{-x}dx$</h3>\n" +
        "<p>位移性质：$\\mathscr{L}\\left[f(t)e^{\\pm\\alpha t}\\right]=F(S\\mp\\alpha)$</p>\n" +
        "<p>$$\\mathscr{L}\\left[\\frac{\\sin x}{x}e^{-x}\\right]=\\frac{\\pi}{2}-\\arctan(s+1)$$</p>\n" +
        "<p>$$I_4=\\left[\\frac{\\pi}{2}-\\arctan(s+1)\\right]_{s=0}=\\frac{\\pi}{4}$$</p>\n" +
        "\n" +
        "<h3>5. 欧拉—泊松积分</h3>\n" +
        "<p>$$I_5=\\int_0^\\infty e^{-x^2}dx$$</p>\n" +
        "<p>令 $f(t)=\\int_0^\\infty e^{-tx^2}dx$，对 $f(t)$ 作拉普拉斯变换：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\mathscr{L}[f(t)]&=\\int_0^\\infty\\left(\\int_0^{\\infty}e^{-tx^2}dx\\right)e^{-st}dt\\\\\n" +
        "&=\\int_0^\\infty\\int_0^\\infty e^{-(x^2+s)t}dtdx\\\\\n" +
        "&=\\int_0^\\infty \\frac{1}{s+x^2}dx=\\frac{\\pi}{2\\sqrt{s}}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>$$\\mathscr{L}\\left(t^{-\\frac{1}{2}}\\right)=\\int_0^\\infty t^{-\\frac{1}{2}}e^{-st}dt=\\frac{1}{\\sqrt{s}}\\Gamma\\left(\\frac{1}{2}\\right)=\\sqrt{\\frac{\\pi}{s}}$$</p>\n" +
        "<p>$$\\mathscr{L}^{-1}\\left(\\sqrt{\\frac{\\pi}{s}}\\right)=t^{-\\frac{1}{2}} \\implies \\mathscr{L}^{-1}\\left(\\frac{1}{\\sqrt s}\\right)=\\frac{1}{\\sqrt{\\pi t}}$$</p>\n" +
        "<p>$$\\mathscr{L}^{-1}\\left(\\frac{\\pi}{2\\sqrt{s}}\\right)=\\frac{\\pi}{2}\\cdot\\frac{1}{\\sqrt{\\pi t}}=\\frac{1}{2}\\sqrt{\\frac{\\pi}{t}}$$</p>\n" +
        "<p>$$f(t)=\\frac{1}{2}\\sqrt{\\frac{\\pi}{t}}=\\int_0^\\infty e^{-tx^2}dx$$</p>\n" +
        "<p>$$I_5=f(1)=\\frac{\\sqrt\\pi}{2}$$</p>\n" +
        "\n" +
        "<h3>6. $I_6=\\int_0^1\\frac{\\sin(\\ln x)}{\\ln x }dx$</h3>\n" +
        "<p>令 $t=-\\ln x$，则 $x=e^{-t},dx=-e^{-t}dt$</p>\n" +
        "<p>$$I_6=\\int_0^\\infty\\frac{\\sin t}{t}e^{-t}dt=I_4=\\frac{\\pi}{4}$$</p>\n" +
        "\n" +
        "<h3>7. 菲涅尔积分 $I_7=\\int_0^\\infty \\sin(x^2)dx$</h3>\n" +
        "<p>令 $f(t)=\\int_0^\\infty \\sin(tx^2)dx$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\mathscr{L}[f(t)]&=\\int_0^\\infty\\left(\\int_0^\\infty \\sin(tx^2)dx\\right)e^{-st}dt\\\\\n" +
        "&=\\int_0^\\infty\\left(\\int_0^\\infty e^{-st}\\sin(tx^2)dt\\right)dx\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>视 $x^2$ 为常数：</p>\n" +
        "<p>$$\\int_0^\\infty e^{-st}\\sin(tx^2)dt=\\mathscr{L}\\left[\\sin(x^2 t)\\right]=\\frac{x^2}{s^2+x^4}$$</p>\n" +
        "<p>$$\\mathscr{L}[f(t)]=\\int_0^\\infty\\frac{x^2}{s^2+x^4}dx$$</p>\n" +
        "<p>换元 $x=\\sqrt{s}\\,u$：</p>\n" +
        "<p>$$\\int_0^\\infty\\frac{x^2}{s^2+x^4}dx=s^{-\\frac{1}{2}}\\int_0^\\infty \\frac{u^2}{1+u^4}du$$</p>\n" +
        "<p>令 $u=\\dfrac1t$：</p>\n" +
        "<p>$$\\int_0^\\infty \\frac{u^2}{1+u^4}du=\\int_0^\\infty \\frac{1}{1+t^4}dt \\triangleq J$$</p>\n" +
        "<p>求解 $J=\\int_0^\\infty \\frac{1}{1+t^4}dt$，令 $K=t^4,dt=\\frac14 K^{-3/4}dK$</p>\n" +
        "<p>$$J=\\frac{1}{4}\\int_0^\\infty\\frac{K^{-\\frac{3}{4}}}{1+K}dK$$</p>\n" +
        "<p>贝塔函数：$\\displaystyle B(p,q)=\\int_0^\\infty \\frac{t^{p-1}}{(1+t)^{p+q}}dt$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "J&=\\frac{1}{4}B\\left(\\frac{1}{4},\\frac{3}{4}\\right)\n" +
        "=\\frac{1}{4}\\cdot\\frac{\\Gamma\\left(\\frac14\\right)\\Gamma\\left(\\frac34\\right)}{\\Gamma(1)}\\\\\n" +
        "&=\\frac{1}{4}\\cdot\\frac{\\pi}{\\sin\\frac{\\pi}{4}}=\\frac{\\sqrt2\\pi}{4}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>$$\\mathscr{L}[f(t)]=s^{-\\frac12}\\cdot \\frac{\\sqrt2\\pi}{4}=\\frac{\\sqrt2\\pi}{4}\\cdot\\frac{1}{\\sqrt{s}}$$</p>\n" +
        "<p>$$f(t)=\\mathscr{L}^{-1}\\left(\\frac{\\sqrt2\\pi}{4\\sqrt{s}}\\right)=\\frac{\\sqrt2\\pi}{4}\\cdot\\frac{1}{\\sqrt{\\pi t}}=\\frac14\\sqrt{\\frac{2\\pi}{t}}$$</p>\n" +
        "<p>$$I_7=f(1)=\\frac{\\sqrt{2\\pi}}{4}$$</p>\n" +
        "\n" +
        "<h3>8. 拉普拉斯积分 $I_8=\\int_0^\\infty\\frac{\\cos x}{x^2+1}dx$</h3>\n" +
        "<p>令 $\\displaystyle f(t)=\\int_0^\\infty\\frac{\\cos(xt)}{x^2+1}dx$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\mathscr{L}[f(t)]&=\\int_0^\\infty\\left(\\int_0^\\infty\\frac{\\cos(xt)}{x^2+1}dx\\right)e^{-pt}dt\\\\\n" +
        "&=\\int_0^\\infty \\frac{1}{x^2+1}\\cdot \\mathscr{L}[\\cos(xt)]dx\\\\\n" +
        "&=\\int_0^\\infty \\frac{1}{x^2+1}\\cdot\\frac{p}{p^2+x^2}dx\\\\\n" +
        "&=\\frac{p}{1-p^2}\\int_0^\\infty\\left(\\frac{1}{p^2+x^2}-\\frac{1}{x^2+1}\\right)dx\\\\\n" +
        "&=\\frac{\\pi}{2}\\cdot\\frac{1}{1+p}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>$$\\mathscr{L}(e^{-t})=\\frac{1}{1+p} \\implies \\mathscr{L}^{-1}\\left(\\frac{\\pi}{2(1+p)}\\right)=\\frac{\\pi}{2}e^{-t}$$</p>\n" +
        "<p>$$I_8=f(1)=\\frac{\\pi}{2e}$$</p>\n" +
        "\n" +
        "<h3>9. $I_9=\\int_0^\\infty\\left(\\frac{\\sin x}{x}\\right)^2dx$</h3>\n" +
        "<p>交换公式：</p>\n" +
        "<p>$$\\int_0^\\infty f(t)G(t)dt=\\int_0^\\infty F(t)g(t)dt$$</p>\n" +
        "<p>其中 $F(s)=\\mathscr{L}[f(t)],G(s)=\\mathscr{L}[g(t)]$。</p>\n" +
        "<p>取 $f(t)=t,\\displaystyle F(s)=\\frac{1}{s^2}$，则 $F(x)=\\dfrac{1}{x^2}$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "I_9&=\\int_0^\\infty F(x)\\sin^2 x dx=\\int_0^\\infty x\\cdot\\mathscr{L}[\\sin^2 x]dx\\\\\n" +
        "&=\\frac12\\int_0^\\infty x\\left(\\frac1x-\\frac{x}{x^2+4}\\right)dx\n" +
        "=\\frac12\\int_0^\\infty\\frac{4}{x^2+4}dx\\\\\n" +
        "&=2\\cdot\\frac12\\arctan\\frac{x}{2}\\bigg|_0^{+\\infty}=\\frac{\\pi}{2}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "\n" +
        "<h3>10. $I_{10}=\\int_0^\\infty \\left(\\frac{\\sin x}{x}\\right)^3dx$</h3>\n" +
        "<p>三倍角：$\\sin3x=3\\sin x-4\\sin^3x \\implies \\sin^3x=\\dfrac34\\sin x-\\dfrac14\\sin3x$</p>\n" +
        "<p>取 $\\displaystyle f(t)=\\frac12 t^2,\\ F(s)=\\frac{1}{s^3}$</p>\n" +
        "<p>$$G(s)=\\mathscr{L}[\\sin^3x]=\\frac34\\cdot\\frac{1}{s^2+1}-\\frac34\\cdot\\frac{1}{s^2+9}$$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "I_{10}&=\\int_0^\\infty F(x)\\sin^3 x dx=\\frac12\\int_0^\\infty x^2 G(x)dx\\\\\n" +
        "&=\\frac38\\int_0^\\infty\\left(\\frac{x^2}{x^2+1}-\\frac{x^2}{x^2+9}\\right)dx\\\\\n" +
        "&=\\frac38\\int_0^\\infty\\left(1-\\frac{1}{x^2+1}-1+\\frac{9}{x^2+9}\\right)dx\\\\\n" +
        "&=\\frac38\\left[-\\arctan x + 3\\arctan\\frac{x}{3}\\right]_0^{+\\infty}\n" +
        "=\\frac{3\\pi}{8}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "\n" +
        "<h3>11. 拉普拉斯积分 $I_{11}=\\int_0^\\infty\\frac{x\\sin x}{x^2+1}dx$</h3>\n" +
        "<p>取 $f(x)=\\sin x,\\ F(s)=\\dfrac{1}{s^2+1}$；$g(x)=\\cos x,\\ G(s)=\\dfrac{s}{s^2+1}$</p>\n" +
        "<p>$$I_{11}=\\int_0^\\infty f(x)G(x)dx=\\int_0^\\infty F(x)g(x)dx=I_8=\\frac{\\pi}{2e}$$</p>\n" +
        "\n" +
        "<h2>二、常微分方程</h2>\n" +
        "<h3>1. 二阶线性非齐次微分方程</h3>\n" +
        "<p>$$y''(x)-2y'(x)+y(x)=x^2,\\quad y(0)=y'(0)=0$$</p>\n" +
        "<p>微分变换公式：</p>\n" +
        "<p>$$\\mathscr{L}[y']=sY(s)-y(0),\\quad \\mathscr{L}[y'']=s^2Y(s)-sy(0)-y'(0)$$</p>\n" +
        "<p>代入初值：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\mathscr{L}[y''-2y'+y]\n" +
        "&=s^2Y(s)-2sY(s)+Y(s)\\\\\n" +
        "&=(s-1)^2Y(s)\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>$$\\mathscr{L}[x^2]=\\frac{2!}{s^{3}}=\\frac{2}{s^3}$$</p>\n" +
        "<p>$$(s-1)^2Y(s)=\\frac{2}{s^3} \\implies Y(s)=\\frac{2}{s^3(s-1)^2}$$</p>\n" +
        "<p>部分分式分解：</p>\n" +
        "<p>$$Y(s)=\\frac{A}{(s-1)^2}+\\frac{B}{s-1}+\\frac{C}{s^3}+\\frac{D}{s^2}+\\frac{E}{s}$$</p>\n" +
        "<p>求得系数：$A=2,B=-6,C=2,D=4,E=6$</p>\n" +
        "<p>$$Y(s)=\\frac{2}{(s-1)^2}-\\frac{6}{s-1}+\\frac{2}{s^3}+\\frac{4}{s^2}+\\frac{6}{s}$$</p>\n" +
        "<p>拉普拉斯逆变换：</p>\n" +
        "<p>$$\\mathscr{L}^{-1}\\left[\\frac{1}{(s-1)^2}\\right]=xe^x,\\quad\n" +
        "\\mathscr{L}^{-1}\\left[\\frac{1}{s^n}\\right]=\\frac{x^{n-1}}{(n-1)!}$$</p>\n" +
        "<p>$$y(x)=2xe^x -6e^x +x^2 +4x +6$$</p>\n" +
        "\n" +
        "<h3>2. 微分方程组</h3>\n" +
        "<p>$$\n" +
        "\\begin{cases}\n" +
        "x'(t)=x(t)+4y(t)+e^t\\\\\n" +
        "y'(t)=x(t)+y(t)+1\n" +
        "\\end{cases},\\quad x(0)=y(0)=0\n" +
        "$$</p>\n" +
        "<p>记 $X(s)=\\mathscr{L}[x(t)],\\ Y(s)=\\mathscr{L}[y(t)]$，变换后：</p>\n" +
        "<p>$$\n" +
        "\\begin{cases}\n" +
        "sX = X +4Y +\\dfrac{1}{s-1}\\\\[4pt]\n" +
        "sY = X + Y +\\dfrac{1}{s}\n" +
        "\\end{cases}\n" +
        "$$</p>\n" +
        "<p>解出：</p>\n" +
        "<p>$$X(s)=\\frac{s+4}{s(s+1)(s-3)},\\quad\n" +
        "Y(s)=\\frac{s^2-s+1}{s(s-1)(s-3)(s+1)}$$</p>\n" +
        "<p>部分分式分解：</p>\n" +
        "<p>$$X(s)=\\frac{3}{4(s+1)}+\\frac{7}{12(s-3)}-\\frac{4}{3s}$$</p>\n" +
        "<p>$$Y(s)=\\frac{1}{3s}-\\frac{1}{4(s-1)}+\\frac{7}{24(s-3)}-\\frac{3}{8(s+1)}$$</p>\n" +
        "<p>逆变换：</p>\n" +
        "<p>$$x(t)=\\frac34 e^{-t}+\\frac{7}{12}e^{3t}-\\frac43$$</p>\n" +
        "<p>$$y(t)=-\\frac14 e^{t}+\\frac{7}{24}e^{3t}-\\frac38 e^{-t}+\\frac13$$</p>\n"},



  {"id":2,"title":"含参积分——费曼积分法 \t  <p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Parametric Integrals — Feynman Integration Method<\p> ","date":"2025-07-22","category":"记录","tags":["微积分","高等数学"],"thumbnail":"img/8.jpg","excerpt":"利用费曼积分法解决积分问题","content":"<h2>含参积分——费曼积分法</h2>\n" +
        "\n" +
        "<h3>1. $\\displaystyle I_1=\\int_0^\\infty \\frac{\\cos (x)}{(x^2+1)^2}dx$</h3>\n" +
        "<p>令 $\\displaystyle f(t)=\\int_0^\\infty \\frac{\\cos (xt)}{x^2+a}dx,\\ a>0$，对 $f(t)$ 作拉普拉斯变换</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\mathscr{L}[f(t)]&=\\int_0^\\infty\\left[\\int_0^\\infty \\frac{\\cos (xt)}{x^2+a}dx\\right]e^{-st}dt\\\\\n" +
        "&=\\int_0^\\infty\\left[\\int_0^\\infty e^{-st}\\cos(xt)dt\\right]\\frac{1}{x^2+a}dx\\\\\n" +
        "&=\\int_0^\\infty \\mathscr{L}[\\cos(xt)]\\frac{1}{x^2+a}dx\\\\\n" +
        "&=\\int_0^\\infty \\frac{s}{(s^2+x^2)(x^2+a)}dx\\\\\n" +
        "&=\\frac{s}{a-s^2}\\int_0^\\infty \\left(\\frac{1}{s^2+x^2}-\\frac{1}{a+x^2}\\right)dx\\\\\n" +
        "&=\\frac{s}{a-s^2}\\left[\\frac{1}{s}\\arctan\\left(\\frac{x}{s}\\right)\\bigg|_0^\\infty-\\frac{1}{\\sqrt a}\\arctan\\left(\\frac{x}{\\sqrt a}\\right)\\bigg|_0^\\infty\\right]\\\\\n" +
        "&=\\frac{\\pi}{2}\\cdot\\frac{s}{a-s^2}\\left(\\frac{1}{s}-\\frac{1}{\\sqrt a}\\right)\n" +
        "=\\frac{\\pi}{2}\\cdot \\frac{s}{(\\sqrt a+s)(\\sqrt a-s)}\\cdot \\frac{\\sqrt a-s}{s\\sqrt a}\\\\\n" +
        "&=\\frac{\\pi}{2\\sqrt a}\\cdot\\frac{1}{\\sqrt a+s}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>对像函数做拉普拉斯逆变换：\n" +
        "$$\\mathscr{L}^{-1}\\left(\\frac{\\pi}{2\\sqrt a}\\cdot\\frac{1}{\\sqrt a+s}\\right)=f(t)=\\frac{\\pi}{2\\sqrt a}e^{-\\sqrt a t}$$</p>\n" +
        "<p>$$f(1)=\\int_0^\\infty \\frac{\\cos (x)}{x^2+a}dx=\\frac{\\pi}{2\\sqrt a}e^{-\\sqrt a}$$</p>\n" +
        "<p>令 $\\displaystyle g(a)=f(1)=\\int_0^\\infty \\frac{\\cos (x)}{x^2+a}dx=\\frac{\\pi}{2\\sqrt a}e^{-\\sqrt a}$</p>\n" +
        "<p>$$\n" +
        "g'(a)=-\\int_0^\\infty \\frac{\\cos (x)}{(x^2+a)^2}dx\n" +
        "=-\\frac{\\pi e^{-\\sqrt a}}{4a^{\\frac{3}{2}}}-\\frac{\\pi e^{-\\sqrt a}}{4a}\n" +
        "$$</p>\n" +
        "<p>$$\n" +
        "g'(1)=-\\int_0^\\infty \\frac{\\cos (x)}{(x^2+1)^2}dx\n" +
        "=-\\frac{\\pi e^{-1}}{4}-\\frac{\\pi e^{-1}}{4}=-\\frac{\\pi e^{-1}}{2}\n" +
        "$$</p>\n" +
        "<p>$$I_1=\\int_0^\\infty \\frac{\\cos (x)}{(x^2+1)^2}dx=\\frac{\\pi e^{-1}}{2}$$</p>\n" +
        "\n" +
        "<h3>2. $\\displaystyle I_2=\\int_0^{+\\infty}xe^{-x}\\sin (x)dx$</h3>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "I_2&=\\int_0^{+\\infty}xe^{-x}\\sin (x)dx\\\\\n" +
        "&=-\\left[\\int_0^{+\\infty}\\frac{\\partial}{\\partial s}e^{-sx}\\sin(x)dx\\right]_{s=1}\\\\\n" +
        "&=-\\left[\\frac{\\partial}{\\partial s}\\int_0^{+\\infty}e^{-sx}\\sin(x)dx\\right]_{s=1}\\\\\n" +
        "&=-\\left[\\frac{\\partial}{\\partial s}\\mathscr{L}(\\sin x)\\right]_{s=1}\\\\\n" +
        "&=-\\left[\\frac{\\partial}{\\partial s}\\frac{1}{s^2+1}\\right]_{s=1}\\\\\n" +
        "&=\\frac{2s}{(s^2+1)^2}\\bigg|_{s=1}\\\\\n" +
        "&=\\frac{1}{2}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "\n" +
        "<h3>3. 狄利克雷积分</h3>\n" +
        "<p>$$I_3=\\int_0^\\infty\\frac{\\sin(x)}{x}dx$$</p>\n" +
        "<p>令 $\\displaystyle f(a)=\\int_0^\\infty \\frac{\\sin x}{x}e^{-ax}dx$</p>\n" +
        "<p>设 $\\mathscr{L}[\\sin(x)]=F(s)$，则\n" +
        "$$f'(a)=-\\int_0^\\infty e^{-ax}\\sin xdx=-F(a)=-\\frac{1}{a^2+1}$$</p>\n" +
        "<p>$$f(a)=-\\int\\frac{1}{a^2+1}da=-\\arctan(a)+c$$</p>\n" +
        "<p>$$\\lim_{a \\rightarrow +\\infty}f(a)=\\lim_{a \\rightarrow +\\infty}\\int_0^\\infty \\frac{\\sin x}{x}e^{-ax}dx=0$$</p>\n" +
        "<p>$$\\lim_{a \\rightarrow +\\infty}\\left[-\\arctan(a)+c\\right]=0 \\implies c=\\frac{\\pi}{2}$$</p>\n" +
        "<p>$$f(a)=-\\arctan(a)+\\frac{\\pi}{2}$$</p>\n" +
        "<p>狄利克雷积分：\n" +
        "$$I_3=\\int_0^\\infty\\frac{\\sin(x)}{x}dx=f(0)=\\frac{\\pi}{2}$$</p>\n" +
        "\n" +
        "<h3>4. $\\displaystyle I_4=\\int_0^\\infty x^2e^{-x^2}dx$</h3>\n" +
        "<h4>方法一</h4>\n" +
        "<p>令 $\\displaystyle f(a)=\\int_0^\\infty e^{-(\\sqrt{a}x)^2}dx$，换元 $t=ax^2 \\Rightarrow dx=\\frac{\\sqrt{a}}{2a\\sqrt{t}}dt$</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "f(a)&=\\frac{\\sqrt{a}}{2a}\\int_0^\\infty t^{-\\frac{1}{2}}e^{-t}dt\n" +
        "=\\frac{\\sqrt{a}}{2a}\\Gamma\\left(\\frac{1}{2}\\right)\n" +
        "=\\frac{\\sqrt{a\\pi}}{2a}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>$$\n" +
        "\\frac{d}{da}f(a)=\\frac{d}{da}\\int_0^\\infty e^{-ax^2}dx\n" +
        "=-\\int_0^\\infty x^2e^{-ax^2}dx\n" +
        "=\\frac{d}{da}\\frac{\\sqrt{a\\pi}}{2a}=-\\frac{\\sqrt{\\pi}}{4}a^{-\\frac{3}{2}}\n" +
        "$$</p>\n" +
        "<p>$$\n" +
        "\\frac{d}{da}f(1)=-I_4=-\\int_0^\\infty x^2e^{-x^2}dx=-\\frac{\\sqrt\\pi}{4}\n" +
        "$$</p>\n" +
        "<p>$$I_4=\\frac{\\sqrt \\pi}{4}$$</p>\n" +
        "\n" +
        "<h4>方法二：分部积分法</h4>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "I_4&=-\\frac{1}{2}\\int_0^\\infty xd\\left(e^{-x^2}\\right)\\\\\n" +
        "&=-\\frac{1}{2}\\left[xe^{-x^2}\\right]_0^\\infty+\\frac{1}{2}\\int_0^\\infty e^{-x^2}dx\\\\\n" +
        "&=\\frac{\\sqrt\\pi}{4}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n"},


  {"id":3,"title":"傅里叶级数与留数定理求解无穷级数的收敛值\t<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Using Fourier series and the residue theorem to find the convergence value of an infinite series<\p>","date":"2026-08-09","category":"课程","tags":["傅里叶变换","留数","积分变换","无穷级数"],"thumbnail":"img/9.jpg","excerpt":"深入解析复数形式的傅里叶级数推导，探讨留数定理的应用。","content":"<h2>一、傅里叶级数</h2>\n" +
        "<h3>1. 复数形式傅里叶级数完整推导</h3>\n" +
        "<p>周期为 $2l$ 函数实傅里叶标准展开式：</p>\n" +
        "<p>$$f(x)\\sim \\frac{a_0}{2}+\\sum_{n=1}^{\\infty}\\left(a_n\\cos\\frac{n\\pi x}{l}+b_n\\sin\\frac{n\\pi x}{l}\\right)$$</p>\n" +
        "<p>实傅里叶系数定义：</p>\n" +
        "<p>$$\n" +
        "\\begin{cases}\n" +
        "a_n=\\displaystyle\\frac{1}{l}\\int_{-l}^{l}f(x)\\cos\\frac{n\\pi x}{l}dx,\\quad n=0,1,2\\cdots\\\\\n" +
        "b_n=\\displaystyle\\frac{1}{l}\\int_{-l}^{l}f(x)\\sin\\frac{n\\pi x}{l}dx,\\quad n=1,2,3\\cdots\n" +
        "\\end{cases}\n" +
        "$$</p>\n" +
        "<p>欧拉复指数公式：$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$，变形得三角复指数分解：</p>\n" +
        "<p>$$\n" +
        "\\cos\\frac{n\\pi x}{l}=\\frac{e^{\\frac{in\\pi x}{l}}+e^{-\\frac{in\\pi x}{l}}}{2},\\quad\n" +
        "\\sin\\frac{n\\pi x}{l}=\\frac{e^{\\frac{in\\pi x}{l}}-e^{-\\frac{in\\pi x}{l}}}{2i}\n" +
        "$$</p>\n" +
        "<p>将余弦、正弦代入实傅里叶级数，拆分正负指数项：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "f(x)&=\\frac{a_0}{2}+\\sum_{n=1}^\\infty a_n \\cdot \\frac{e^{\\frac{in\\pi x}{l}}+e^{-\\frac{in\\pi x}{l}}}{2}\n" +
        "+\\sum_{n=1}^\\infty b_n \\cdot \\frac{e^{\\frac{in\\pi x}{l}}-e^{-\\frac{in\\pi x}{l}}}{2i}\\\\\n" +
        "&=\\frac{a_0}{2}+\\sum_{n=1}^\\infty \\frac{a_n-ib_n}{2}e^{\\frac{in\\pi x}{l}}\n" +
        "+\\sum_{n=1}^\\infty \\frac{a_n+ib_n}{2}e^{-\\frac{in\\pi x}{l}}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>定义复数傅里叶系数：</p>\n" +
        "<p>$$\n" +
        "c_n=\\frac{a_n-ib_n}{2},\\quad c_{-n}=\\frac{a_n+ib_n}{2},\\quad c_0=\\frac{a_0}{2}\n" +
        "$$</p>\n" +
        "<p>替换求和下标，令 $n\\to -n$ 处理负次项，合并得到复数形式完整级数：</p>\n" +
        "<p>$$f(x)\\sim \\sum_{n=-\\infty}^{+\\infty}c_n e^{\\frac{in\\pi x}{l}}$$</p>\n" +
        "<p>统一复数系数积分公式：</p>\n" +
        "<p>$$c_n=\\frac{1}{2l}\\int_{-l}^{l}f(x)e^{-\\frac{in\\pi x}{l}}dx,\\quad n=0,\\pm1,\\pm2,\\pm3,\\dots$$</p>\n" +
        "\n" +
        "<h3>2. 例题1：$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^2+1}$ 完整推导</h3>\n" +
        "<p>取周期 $2\\pi$，$l=\\pi$，$f(x)=e^x,\\ x\\in[-\\pi,\\pi]$，此时 $\\omega=\\frac{\\pi}{l}=1$，复数系数：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "c_n&=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}e^{x-inx}dx\n" +
        "=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}e^{(1-in)x}dx\\\\\n" +
        "&=\\frac{1}{2\\pi}\\cdot \\frac{e^{(1-in)\\pi}-e^{-(1-in)\\pi}}{1-in}\n" +
        "=\\frac{(-1)^n \\sinh\\pi}{\\pi(1+n^2)}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>帕塞瓦尔能量恒等式：</p>\n" +
        "<p>$$\\frac{1}{2l}\\int_{-l}^l |f(x)|^2 dx=\\sum_{n=-\\infty}^{\\infty}|c_n|^2$$</p>\n" +
        "<p>代入 $l=\\pi$，左侧积分计算：</p>\n" +
        "<p>$$\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}e^{2x}dx=\\frac{1}{2\\pi}\\cdot \\frac{e^{2\\pi}-e^{-2\\pi}}{2}=\\frac{\\sinh2\\pi}{2\\pi}$$</p>\n" +
        "<p>模平方：$\\displaystyle|c_n|^2=\\frac{\\sinh^2\\pi}{\\pi^2(1+n^2)^2}$，拆分双向求和：</p>\n" +
        "<p>$$\\sum_{n=-\\infty}^{\\infty}|c_n|^2=|c_0|^2+2\\sum_{n=1}^{\\infty}|c_n|^2$$</p>\n" +
        "<p>代入 $c_0=\\displaystyle\\frac{\\sinh\\pi}{\\pi}$，$|c_0|^2=\\displaystyle\\frac{\\sinh^2\\pi}{\\pi^2}$，联立等式：</p>\n" +
        "<p>$$\n" +
        "\\frac{\\sinh2\\pi}{2\\pi}=\\frac{\\sinh^2\\pi}{\\pi^2}+2\\sum_{n=1}^{\\infty}\\frac{\\sinh^2\\pi}{\\pi^2(1+n^2)^2}\n" +
        "$$</p>\n" +
        "<p>利用双曲恒等式 $\\sinh2\\pi=2\\sinh\\pi\\cosh\\pi$ 化简，消去公共项：</p>\n" +
        "<p>$$\n" +
        "\\frac{2\\sinh\\pi\\cosh\\pi}{2\\pi}=\\frac{\\sinh^2\\pi}{\\pi^2}\\left(1+2\\sum_{n=1}^\\infty\\frac{1}{(n^2+1)^2}\\right)\n" +
        "$$</p>\n" +
        "<p>$$\n" +
        "\\frac{\\pi\\cosh\\pi}{\\sinh\\pi}=1+2\\sum_{n=1}^\\infty\\frac{1}{n^2+1}\n" +
        "$$</p>\n" +
        "<p>整理得到最终求和公式：</p>\n" +
        "<p>$$\\sum_{n=1}^{\\infty}\\frac{1}{n^2+1}=\\frac{\\pi\\coth\\pi -1}{2}$$</p>\n" +
        "\n" +
        "<h3>3. 例题2：交错级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2+1}$ 完整推导</h3>\n" +
        "<p>构造函数 $f(x)=e^{-x},\\ x\\in[-\\pi,\\pi]$，周期 $2\\pi$，计算复数傅里叶系数：</p>\n" +
        "<p>$$c_n=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}e^{(-1-in)x}dx=\\frac{(-1)^n \\sinh\\pi}{\\pi(1+n^2)}(-1)^n=\\frac{\\sinh\\pi}{\\pi(1+n^2)}(-1)^n$$</p>\n" +
        "<p>代入帕塞瓦尔恒等式，拆分正负项奇偶符号，分离交错求和：</p>\n" +
        "<p>$$\n" +
        "\\sum_{n=-\\infty}^{\\infty}\\frac{(-1)^n}{n^2+1}=\\frac{\\pi}{\\sinh\\pi}\n" +
        "$$</p>\n" +
        "<p>拆分双向求和 $\\displaystyle\\sum_{n=-\\infty}^\\infty =1+2\\sum_{n=1}^\\infty\\frac{(-1)^n}{n^2+1}$，化简：</p>\n" +
        "<p>$$\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2+1}=\\frac{\\pi}{2\\sinh\\pi}-\\frac12$$</p>\n" +
        "\n" +
        "<h3>4. 例题3：平方倒数级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^2},\\ \\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n^2}$</h3>\n" +
        "<p>取 $f(x)=x^2,\\ x\\in(-\\pi,\\pi)$，实傅里叶展开完整计算：</p>\n" +
        "<p>$$a_0=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}x^2dx=\\frac{2\\pi^2}{3},\\quad a_n=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}x^2\\cos nx dx=\\frac{4(-1)^n}{n^2},\\ b_n=0$$</p>\n" +
        "<p>展开式：$$x^2=\\frac{\\pi^2}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2}\\cos nx,\\quad x\\in(-\\pi,\\pi)$$</p>\n" +
        "<p>代入边界 $x=\\pi$，$\\cos n\\pi=(-1)^n$：</p>\n" +
        "<p>$$\\pi^2=\\frac{\\pi^2}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2}(-1)^n=\\frac{\\pi^2}{3}+4\\sum_{n=1}^\\infty\\frac{1}{n^2}$$</p>\n" +
        "<p>移项得巴塞尔基础结果：$$\\sum_{n=1}^{\\infty}\\frac{1}{n^2}=\\frac{\\pi^2}{6}$$</p>\n" +
        "<p>代入 $x=0$，$\\cos0=1$：$$0=\\frac{\\pi^2}{3}+4\\sum_{n=1}^\\infty\\frac{(-1)^n}{n^2}$$</p>\n" +
        "<p>交错平方级数：$$\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n^2}=\\frac{\\pi^2}{12}$$</p>\n" +
        "\n" +
        "<h3>5. 例题4：四次倒数级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^4},\\ \\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n^4}$</h3>\n" +
        "<p>取 $f(x)=x^4,\\ x\\in(-\\pi,\\pi)$，实傅里叶系数：</p>\n" +
        "<p>$$a_0=\\frac{2\\pi^4}{5},\\quad a_n=\\frac{8\\pi^2(-1)^n}{n^2}-\\frac{48(-1)^n}{n^4},\\quad b_n=0$$</p>\n" +
        "<p>展开式：$$x^4=\\frac{\\pi^4}{5}+\\sum_{n=1}^\\infty\\left(\\frac{8\\pi^2(-1)^n}{n^2}-\\frac{48(-1)^n}{n^4}\\right)\\cos nx$$</p>\n" +
        "<p>代入 $x=\\pi$，联立已知 $\\displaystyle\\sum_{n=1}^\\infty\\frac{1}{n^2}=\\frac{\\pi^2}{6}$ 代入化简方程：</p>\n" +
        "<p>$$\\pi^4=\\frac{\\pi^4}{5}+8\\pi^2\\sum_{n=1}^\\infty\\frac{(-1)^n(-1)^n}{n^2}-48\\sum_{n=1}^\\infty\\frac{(-1)^n(-1)^n}{n^4}$$</p>\n" +
        "<p>$$\\pi^4=\\frac{\\pi^4}{5}+8\\pi^2\\cdot\\frac{\\pi^2}{6}-48\\sum_{n=1}^\\infty\\frac{1}{n^4}$$</p>\n" +
        "<p>计算得到：$$\\sum_{n=1}^{\\infty}\\frac{1}{n^4}=\\frac{\\pi^4}{90}$$</p>\n" +
        "<p>代入 $x=0$ 得到交错四次级数：$$\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n^4}=\\frac{7\\pi^4}{720}$$</p>\n" +
        "\n" +
        "<h3>6. 例题5：含参数通用双曲级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^2+a^2},\\ \\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2+a^2}$</h3>\n" +
        "<p>取 $f(x)=\\cosh(ax),\\ x\\in[-\\pi,\\pi]$，$a\\neq0$，实傅里叶余弦展开，正弦系数 $b_n=0$：</p>\n" +
        "<p>$$a_0=\\frac{2\\sinh(a\\pi)}{a\\pi},\\quad a_n=\\frac{2a(-1)^n\\sinh(a\\pi)}{\\pi(a^2+n^2)}$$</p>\n" +
        "<p>展开式：$$\\cosh(ax)=\\frac{\\sinh(a\\pi)}{a\\pi}+\\frac{2a\\sinh(a\\pi)}{\\pi}\\sum_{n=1}^\\infty\\frac{(-1)^n}{a^2+n^2}\\cos nx$$</p>\n" +
        "<p>代入 $x=0$，$\\cos nx=1$：</p>\n" +
        "<p>$$1=\\frac{\\sinh(a\\pi)}{a\\pi}+\\frac{2a\\sinh(a\\pi)}{\\pi}\\sum_{n=1}^\\infty\\frac{(-1)^n}{a^2+n^2}$$</p>\n" +
        "<p>整理交错含参级数：$$\\sum_{n=1}^\\infty\\frac{(-1)^n}{n^2+a^2}=\\frac{\\pi}{2a\\sinh(\\pi a)}-\\frac{1}{2a^2}$$</p>\n" +
        "<p>代入 $x=\\pi$，$\\cos n\\pi=(-1)^n$：</p>\n" +
        "<p>$$\\cosh(a\\pi)=\\frac{\\sinh(a\\pi)}{a\\pi}+\\frac{2a\\sinh(a\\pi)}{\\pi}\\sum_{n=1}^\\infty\\frac{1}{a^2+n^2}$$</p>\n" +
        "<p>标准通用公式：$$\\sum_{n=1}^\\infty\\frac{1}{n^2+a^2}=\\frac{\\pi\\coth(\\pi a)}{2a}-\\frac{1}{2a^2}$$</p>\n" +
        "\n" +
        "<h2>二、伯努利数与自然数等幂和</h2>\n" +
        "<h3>1. 伯努利数生成函数定义与基础取值</h3>\n" +
        "<p>生成函数标准定义：</p>\n" +
        "<p>$$\\frac{x}{e^x-1}=\\sum_{k=0}^{\\infty}\\frac{B_k}{k!}x^k$$</p>\n" +
        "<p>基础伯努利数：$B_0=1,\\ B_1=-\\dfrac12,\\ B_2=\\dfrac16,\\ B_4=-\\dfrac{1}{30},\\ B_6=\\dfrac{1}{42},\\ B_8=-\\dfrac{1}{30}$</p>\n" +
        "<p>核心性质：对任意整数 $k\\ge1$，奇数下标伯努利数满足 $B_{2k+1}=0$</p>\n" +
        "\n" +
        "<h3>2. 等幂和 Faulhaber 完整推导（柯西卷积法）</h3>\n" +
        "<p>定义自然数 $j$ 次等幂和：$\\displaystyle S_j(n)=\\sum_{i=1}^n i^j$</p>\n" +
        "<p>幂级数生成辅助函数：$\\displaystyle G(x)=\\sum_{i=1}^n e^{ix}=e^x\\cdot\\frac{1-e^{nx}}{1-e^x}$</p>\n" +
        "<p>对生成函数做 $j$ 阶求导：$G^{(j)}(x)=\\sum_{i=1}^n i^j e^{ix}$，取 $x=0$ 得 $G^{(j)}(0)=S_j(n)$</p>\n" +
        "<p>拆分生成函数：$$G(x)=\\frac{x}{e^x-1}\\cdot \\frac{e^{(n+1)x}-e^x}{x}$$</p>\n" +
        "<p>设 $A(x)=\\displaystyle\\frac{x}{e^x-1}=\\sum_{k=0}^\\infty\\frac{B_k}{k!}x^k$，$B(x)=\\displaystyle\\frac{e^{(n+1)x}-e^x}{x}=\\sum_{m=0}^\\infty\\frac{(n+1)^{m+1}-1}{(m+1)!}x^m$</p>\n" +
        "<p>柯西乘积卷积公式：两个幂级数乘积系数满足</p>\n" +
        "<p>$$A(x)B(x)=\\left(\\sum_{k=0}^\\infty\\frac{B_k}{k!}x^k\\right)\\left(\\sum_{m=0}^\\infty\\frac{(n+1)^{m+1}-1}{(m+1)!}x^m\\right)\n" +
        "=\\sum_{j=0}^\\infty\\left(\\sum_{k=0}^j \\frac{B_k}{k!}\\cdot\\frac{(n+1)^{j-k+1}-1}{(j-k+1)!}\\right)x^j$$</p>\n" +
        "<p>$x^j$ 项系数等于 $\\displaystyle\\frac{G^{(j)}(0)}{j!}=\\frac{S_j(n)}{j!}$，等式两边同乘 $j!$：</p>\n" +
        "<p>$$S_j(n)=\\sum_{k=0}^j \\binom{j+1}{k}\\cdot \\frac{(n+1)^{j-k+1}-1}{j+1}B_k$$</p>\n" +
        "<p>标准Faulhaber公式：$$S_j(n)=\\frac{1}{j+1}\\sum_{k=0}^{j}\\binom{j+1}{k}(n+1)^{j-k+1}B_k$$</p>\n" +
        "<p>实例验证：$j=3,n=5$</p>\n" +
        "<p>$$S_3(5)=1^3+2^3+3^3+4^3+5^3=225$$</p>\n" +
        "\n" +
        "<h3>3. $\\cot x$ 伯努利洛朗级数完整展开推导</h3>\n" +
        "<p>由生成函数做变量替换 $x\\to ix$：</p>\n" +
        "<p>$$\\frac{ix}{e^{ix}-1}=\\sum_{k=0}^\\infty\\frac{B_k}{k!}(ix)^k$$</p>\n" +
        "<p>拆分实部虚部，利用 $B_{2k+1}=0$ 消去奇次项，整理余切函数：</p>\n" +
        "<p>$$\\cot x=\\frac{\\cos x}{\\sin x}=\\frac1x+\\sum_{k=1}^{\\infty}\\frac{(-1)^k 2^{2k}B_{2k}}{(2k)!}x^{2k-1}$$</p>\n" +
        "<p>展开前几项直观形式：</p>\n" +
        "<p>$$\\cot x=\\frac1x-\\frac{x}{3}-\\frac{x^3}{45}-\\frac{2x^5}{945}-\\frac{x^7}{4725}-\\cdots$$</p>\n" +
        "\n" +
        "<h2>三、留数定理结合 $\\pi\\cot\\pi z$ 求解无穷级数</h2>\n" +
        "<h3>1. 方形围道构造、有界估计与收敛完整证明</h3>\n" +
        "<p>构造方形闭合围道 $C_N$，四个顶点：$z=N+\\tfrac12+Ni,\\ z=-N-\\tfrac12+Ni,\\ z=-N-\\tfrac12-Ni,\\ z=N+\\tfrac12-Ni$，$N\\in\\mathbb{N}^*$</p>\n" +
        "<p>在围道四条边上对函数 $\\displaystyle h(z)=\\frac{\\pi\\cot\\pi z}{z^m}$ 做模长有界估计：</p>\n" +
        "<p>当 $N\\to\\infty$ 时，$|\\cot\\pi z|$ 在围道上一致有界，分母 $|z|^m$ 趋于无穷，因此围道积分极限：</p>\n" +
        "<p>$$\\lim_{N\\to\\infty}\\oint_{C_N}\\frac{\\pi\\cot\\pi z}{z^m}dz=0$$</p>\n" +
        "<p>复变留数定理：闭合围道积分等于 $2\\pi i$ 乘以围道内部所有孤立奇点的留数之和。</p>\n" +
        "<p>$\\cot\\pi z=\\displaystyle\\frac{\\cos\\pi z}{\\sin\\pi z}$ 的奇点为全体整数 $z=0,\\pm1,\\pm2,\\dots$，全部为一阶极点。</p>\n" +
        "\n" +
        "<h3>2. 巴塞尔问题完整留数证明</h3>\n" +
        "<p>构造复变函数：$$f(z)=\\frac{\\pi\\cot\\pi z}{z^2}$$</p>\n" +
        "<p>奇点分类：\n" +
        "1. $z=n,\\ n=\\pm1,\\pm2,\\dots$：一阶极点，留数 $\\displaystyle\\mathrm{Res}[f(z),n]=\\lim_{z\\to n}(z-n)\\frac{\\pi\\cot\\pi z}{z^2}=\\frac{1}{n^2}$\n" +
        "2. $z=0$：三阶极点，洛朗展开求得留数 $\\displaystyle\\mathrm{Res}[f(z),0]=-\\frac{\\pi^2}{3}$</p>\n" +
        "<p>围道内奇点留数总和：$\\displaystyle -\\frac{\\pi^2}{3}+2\\sum_{n=1}^N\\frac{1}{n^2}$</p>\n" +
        "<p>令 $N\\to\\infty$，围道积分为0：</p>\n" +
        "<p>$$2\\pi i\\left(-\\frac{\\pi^2}{3}+2\\sum_{n=1}^\\infty\\frac{1}{n^2}\\right)=0$$</p>\n" +
        "<p>消去虚数单位，移项化简得到：$$\\sum_{n=1}^{\\infty}\\frac{1}{n^2}=\\frac{\\pi^2}{6}$$</p>\n" +
        "\n" +
        "<h3>3. 二阶极点复合型级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{(n^2+a^2)^2}$ 完整推导</h3>\n" +
        "<p>构造复变函数：$$f(z)=\\frac{\\pi\\cot\\pi z}{(z^2+a^2)^2}$$</p>\n" +
        "<p>奇点分类：\n" +
        "1. $z=n,\\ n=\\pm1,\\pm2,\\dots$：一阶极点，留数 $\\displaystyle\\mathrm{Res}[f(z),n]=\\frac{1}{(n^2+a^2)^2}$\n" +
        "2. $z=ia,\\ z=-ia$：二阶极点，利用二阶极点留数公式 $\\displaystyle\\mathrm{Res}[g(z),(z-z_0)^2]=\\lim_{z\\to z_0}\\frac{d}{dz}\\left[(z-z_0)^2g(z)\\right]$ 计算两处留数</p>\n" +
        "<p>合并两处二阶极点留数，结合围道积分趋于0的条件联立方程，完整化简后最终结果：</p>\n" +
        "<p>$$\\sum_{n=1}^{\\infty}\\frac{1}{(n^2+a^2)^2}=\\frac{a^2\\pi^2\\coth^2(\\pi a)-a^2\\pi^2+a\\pi \\coth(\\pi a)-2}{4a^4}$$</p>\n"},




  {"id":4,"title":"全微分方程与积分因子\t<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Total Differential Equations and Integrating Factors<\p>","date":"2026-09-02","category":"记录","tags":["微分方程","积分因子"],"thumbnail":"img/10.jpg","excerpt":"全微分方程的求解","content":"<h2>一、一阶非齐次线性微分方程</h2>\n" +
        "<h3>通解推导（常数变易法）</h3>\n" +
        "<p>标准形式：$y'(x)=P(x)y(x)+Q(x)$</p>\n" +
        "<p>对应齐次方程：$y'(x)=P(x)y$</p>\n" +
        "<p>分离变量：$\\displaystyle\\frac{dy}{y}=P(x)dx$，两边积分：</p>\n" +
        "<p>$$\\ln y=\\int P(x)dx+C$$</p>\n" +
        "<p>齐次通解：$$y=Ce^{\\int P(x)dx}$$</p>\n" +
        "<p>设非齐次通解形式：$y=C(x)e^{\\int P(x)dx}$，代入原方程求导：</p>\n" +
        "<p>$$\\frac{d}{dx}\\big[C(x)e^{\\int P(x)dx}\\big]=P(x)C(x)e^{\\int P(x)dx}+Q(x)$$</p>\n" +
        "<p>展开左侧乘积求导：</p>\n" +
        "<p>$$\\frac{dC(x)}{dx}\\cdot e^{\\int P(x)dx}+P(x)C(x)e^{\\int P(x)dx}=P(x)C(x)e^{\\int P(x)dx}+Q(x)$$</p>\n" +
        "<p>消去同类项，化简得：</p>\n" +
        "<p>$$\\frac{dC(x)}{dx}=Q(x)e^{-\\int P(x)dx}$$</p>\n" +
        "<p>积分求出变易函数：$$C(x)=\\int Q(x)e^{-\\int P(x)dx}dx$$</p>\n" +
        "<p>一阶线性非齐次微分方程通解公式：</p>\n" +
        "<p>$$y=e^{\\int P(x)dx}\\cdot \\int Q(x)e^{-\\int P(x)dx}dx$$</p>\n" +
        "\n" +
        "<h2>二、伯努利方程</h2>\n" +
        "<h3>标准形式与换元转化</h3>\n" +
        "<p>$$\\frac{dy}{dx}+P(x)y=Q(x)y^n,\\quad n\\neq0,1$$</p>\n" +
        "<p>两边同除 $y^n$：$$y^{-n}\\frac{dy}{dx}+P(x)y^{1-n}=Q(x)$$</p>\n" +
        "<p>变形：$$\\frac{1}{1-n}\\cdot\\frac{d(y^{1-n})}{dx}+P(x)y^{1-n}=Q(x)$$</p>\n" +
        "<p>令 $z=y^{1-n}$，求导 $\\displaystyle\\frac{dz}{dx}=(1-n)y^{-n}\\frac{dy}{dx}$，代入得一阶线性方程：</p>\n" +
        "<p>$$\\frac{dz}{dx}+(1-n)P(x)z=(1-n)Q(x)$$</p>\n" +
        "<p>说明：求解线性方程得到 $z(x)$ 后，代回 $z=y^{1-n}$ 即可得到伯努利方程通解。</p>\n" +
        "\n" +
        "<h2>三、一阶全微分（恰当）方程</h2>\n" +
        "<h3>1. 恰当方程定义与判定条件</h3>\n" +
        "<p>形如 $P(x,y)dx+Q(x,y)dy=0$，若存在二元函数 $u(x,y)$ 满足：</p>\n" +
        "<p>$$du(x,y)=P(x,y)dx+Q(x,y)dy$$</p>\n" +
        "<p>则称方程为恰当（全微分）方程，判定充要条件：</p>\n" +
        "<p>$$\\frac{\\partial P(x,y)}{\\partial y}=\\frac{\\partial Q(x,y)}{\\partial x}$$</p>\n" +
        "<p>此时通解：$u(x,y)=C$，$C$ 为任意常数，且满足：</p>\n" +
        "<p>$$\\frac{\\partial u}{\\partial x}=P(x,y),\\quad \\frac{\\partial u}{\\partial y}=Q(x,y)$$</p>\n" +
        "<p>混合偏导关系：$\\displaystyle\\frac{\\partial P}{\\partial y}=\\frac{\\partial^2 u}{\\partial x\\partial y}=\\frac{\\partial Q}{\\partial x\\partial y}$</p>\n" +
        "\n" +
        "<h4>例题</h4>\n" +
        "<p>求 $(3x^2+6xy^2)dx+(6x^2y+4y^3)dy=0$ 通解</p>\n" +
        "<p>判定：$\\displaystyle\\frac{\\partial P}{\\partial y}=12xy,\\quad \\frac{\\partial Q}{\\partial x}=12xy$，满足恰当条件</p>\n" +
        "<p>分项凑微分：</p>\n" +
        "<p>$$d(x^3)+d(y^4)+d(3x^2y^2)=0 \\implies d\\left(x^3+y^4+3x^2y^2\\right)=0$$</p>\n" +
        "<p>通解：$$x^3+y^4+3x^2y^2=C$$</p>\n" +
        "\n" +
        "<h3>2. 常用全微分凑微分公式</h3>\n" +
        "<p>$$d(xy)=xdy+ydx$$</p>\n" +
        "<p>$$d\\left(\\frac{x}{y}\\right)=\\frac{ydx-xdy}{y^2}$$</p>\n" +
        "<p>$$d\\left(\\frac{y}{x}\\right)=\\frac{xdy-ydx}{x^2}$$</p>\n" +
        "<p>$$d\\left(\\arctan\\frac{x}{y}\\right)=\\frac{ydx-xdy}{x^2+y^2}$$</p>\n" +
        "<p>$$d\\left(\\frac{\\ln(x^2+y^2)}{2}\\right)=\\frac{xdx+ydy}{x^2+y^2}$$</p>\n" +
        "<p>$$d(x^m y^n)=x^{m-1}y^{n-1}(mydx+nxdy)$$</p>\n" +
        "\n" +
        "<h4>例1</h4>\n" +
        "<p>求解 $(x-y)dx+(x+y)dy=0$</p>\n" +
        "<p>拆分重组：$$xdx+ydy+xdy-ydx=0$$</p>\n" +
        "<p>$$\\frac{xdx+ydy}{x^2+y^2}+\\frac{xdy-ydx}{x^2+y^2}=0$$</p>\n" +
        "<p>套用凑微分公式：</p>\n" +
        "<p>$$d\\left(\\frac{\\ln(x^2+y^2)}{2}\\right)+d\\left(\\arctan\\frac{y}{x}\\right)=0$$</p>\n" +
        "<p>$$d\\left[\\frac{\\ln(x^2+y^2)}{2}+\\arctan\\frac{y}{x}\\right]=0$$</p>\n" +
        "<p>通解：$$\\frac{\\ln(x^2+y^2)}{2}+\\arctan\\frac{y}{x}=C$$</p>\n" +
        "\n" +
        "<h4>例2</h4>\n" +
        "<p>求解 $xdy-ydx=x^2\\ln y \\,dy$</p>\n" +
        "<p>两边除以 $x^2$：$$\\frac{xdy-ydx}{x^2}=\\ln y \\,dy$$</p>\n" +
        "<p>$$d\\left(\\frac{y}{x}\\right)=\\ln y \\,dy$$</p>\n" +
        "<p>两边积分：$$\\int d\\left(\\frac{y}{x}\\right)=\\int \\ln y \\,dy$$</p>\n" +
        "<p>通解：$$\\frac{y}{x}=y\\ln y - y + C$$</p>\n" +
        "\n" +
        "<h2>四、一阶微分方程与积分因子</h2>\n" +
        "<h3>1. 积分因子定义</h3>\n" +
        "<p>若 $Pdx+Qdy=0$ 不满足 $\\displaystyle\\frac{\\partial P}{\\partial y}\\neq\\frac{\\partial Q}{\\partial x}$，则非恰当方程；</p>\n" +
        "<p>若存在 $\\mu(x,y)$ 使得 $\\mu Pdx+\\mu Qdy=0$ 为恰当方程，则称 $\\mu(x,y)$ 为积分因子，满足：</p>\n" +
        "<p>$$\\frac{\\partial(\\mu P)}{\\partial y}=\\frac{\\partial(\\mu Q)}{\\partial x}$$</p>\n" +
        "<p>展开等价关系式：$$\\mu\\left(\\frac{\\partial P}{\\partial y}-\\frac{\\partial Q}{\\partial x}\\right)=Q\\frac{\\partial \\mu}{\\partial x}-P\\frac{\\partial \\mu}{\\partial y}$$</p>\n" +
        "\n" +
        "<h4>例1</h4>\n" +
        "<p>方程 $\\displaystyle\\frac{dy}{dx}-\\frac{y}{x+1}=1$，改写为 $dy+\\left(-\\frac{y}{x+1}-1\\right)dx=0$</p>\n" +
        "<p>设积分因子仅与 $x$ 有关 $\\mu=\\mu(x)$，则 $\\displaystyle\\frac{\\partial \\mu}{\\partial y}=0$，代入判定式化简：</p>\n" +
        "<p>$$\\frac{d\\mu}{dx}=-\\frac{\\mu}{x+1}$$</p>\n" +
        "<p>求解得 $\\displaystyle\\mu(x)=\\frac{C_1}{x+1}$，取 $C_1=1$，积分因子 $\\displaystyle\\mu=\\frac{1}{x+1}$</p>\n" +
        "<p>乘入原方程化为恰当方程，偏积分求得：</p>\n" +
        "<p>$$\\frac{y}{x+1}-\\ln(x+1)=C$$</p>\n" +
        "\n" +
        "<h4>例2</h4>\n" +
        "<p>求解 $(3x^3+y)dx+(2x^2y-x)dy=0$</p>\n" +
        "<p>设积分因子仅与 $x$ 有关 $\\mu=\\mu(x)$，代入积分因子等式化简：</p>\n" +
        "<p>$$\\mu'(x)=-\\frac{2}{x}\\mu(x)$$</p>\n" +
        "<p>解得 $\\displaystyle\\mu(x)=\\frac{C_1}{x^2}$，取 $C_1=1$，积分因子 $\\displaystyle\\mu=\\frac{1}{x^2}$</p>\n" +
        "<p>乘入后分项偏积分，最终通解：$$\\frac{3}{2}x^2-\\frac{y}{x}+y^2=C$$</p>\n" +
        "\n" +
        "<h3>2. 齐次函数专属积分因子</h3>\n" +
        "<p>若 $P(x,y),Q(x,y)$ 为同次齐次函数，则积分因子公式：</p>\n" +
        "<p>$$\\mu(x,y)=\\frac{1}{xP+yQ}$$</p>\n" +
        "<p>齐次函数定义：$f(tx,ty)=t^n f(x,y)$，$n$ 为齐次次数。</p>\n" +
        "\n" +
        "<h4>例1</h4>\n" +
        "<p>齐次方程 $(x+y)dx-(x-y)dy=0$，$P,Q$ 为1次齐次函数</p>\n" +
        "<p>积分因子：$$\\mu=\\frac{1}{x(x+y)+y(-x+y)}=\\frac{1}{x^2+y^2}$$</p>\n" +
        "<p>乘入后拆分凑微分：$$\\frac{x+y}{x^2+y^2}dx+\\frac{y-x}{x^2+y^2}dy=0$$</p>\n" +
        "<p>$$d\\left(\\frac12\\ln(x^2+y^2)\\right)+d\\left(\\arctan\\frac{x}{y}\\right)=0$$</p>\n" +
        "<p>通解：$$\\frac12\\ln(x^2+y^2)+\\arctan\\frac{x}{y}=C$$</p>\n" +
        "\n" +
        "<h4>例2</h4>\n" +
        "<p>齐次方程 $y^3dx+x^3dy=0$，3次齐次函数，积分因子 $\\displaystyle\\mu=\\frac{1}{xy^3+x^3y}=\\frac{1}{xy(x^2+y^2)}$</p>\n" +
        "<p>乘入后分项积分化简，最终通解：$$\\frac{1}{x^2}+\\frac{1}{y^2}=C$$</p>\n"},



  {"id":5,"title":"一阶微分方程求解技巧\t<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Tips for Solving First-Order Differential Equations<\p>","date":"2025-09-07","category":"教程","tags":["微分方程"],"thumbnail":"img/12.jpg","excerpt":"","content":"<h2>一、三角换元型一阶线性微分方程例题</h2>\n" +
        "<h3>例1：$\\displaystyle \\frac{1}{\\cos^2 y}y'+\\frac{\\tan y}{x\\ln x}=\\frac{1}{x}$</h3>\n" +
        "<p>由微分公式：$\\displaystyle d(\\tan y)=\\frac{1}{\\cos^2 y}dy$，原方程改写：</p>\n" +
        "<p>$$\\frac{d(\\tan y)}{dx}+\\frac{\\tan y}{x\\ln x}=\\frac{1}{x}$$</p>\n" +
        "<p>换元：令 $z=\\tan y$，得标准一阶线性方程：</p>\n" +
        "<p>$$\\frac{dz}{dx}+\\frac{z}{x\\ln x}=\\frac{1}{x}$$</p>\n" +
        "<p>两边乘积分因子，先处理齐次部分：$\\displaystyle \\frac{dz}{z}=-\\frac{dx}{x\\ln x}$</p>\n" +
        "<p>由 $d(\\ln x)=\\frac{1}{x}dx$，变形 $d(\\ln z)=-\\frac{d(\\ln x)}{\\ln x}$</p>\n" +
        "<p>再换元 $u=\\ln x$，$du=\\frac{1}{x}dx$，方程化为：</p>\n" +
        "<p>$$dz+\\frac{z}{u}du=\\frac{1}{x}dx=(1-z)\\frac{1}{u}du$$</p>\n" +
        "<p>整理可分离变量式：$\\displaystyle \\frac{1-2p}{p}dp=\\frac{1}{u}du$（中间齐次变量代换 $p=\\frac{z}{u}$）</p>\n" +
        "<p>积分：$\\displaystyle \\int \\frac{1-2p}{p}dp=\\int \\frac{1}{u}du$</p>\n" +
        "<p>$$\\ln p - 2p = \\ln u + C \\implies p e^{-2p}=Cu$$</p>\n" +
        "<p>回代 $p=\\frac{z}{u},\\ u=\\ln x$：</p>\n" +
        "<p>$$\\frac{z}{\\ln x}e^{-\\frac{2z}{\\ln x}}=C\\ln x \\implies z=\\frac{C}{\\ln x}+\\frac{\\ln x}{2}$$</p>\n" +
        "<p>还原 $z=\\tan y$，方程通解：</p>\n" +
        "<p>$$y=\\arctan\\left(\\frac{\\ln x}{2}+\\frac{C}{\\ln x}\\right),\\quad C\\in\\mathbb{R}$$</p>\n" +
        "\n" +
        "<h3>例2：$\\displaystyle \\sec y \\tan y \\cdot y'+\\frac{\\sec y}{x\\ln x}=\\frac{1}{x}$</h3>\n" +
        "<p>由 $d(\\sec y)=\\sec y \\tan y dy$，令 $z=\\sec y$，原方程化为：</p>\n" +
        "<p>$$\\frac{dz}{dx}+\\frac{z}{x\\ln x}=\\frac{1}{x}$$</p>\n" +
        "<p>同例1一阶线性求解，得：$\\displaystyle z=\\frac{C}{\\ln x}+\\frac{\\ln x}{2}$</p>\n" +
        "<p>还原 $z=\\sec y$，通解：</p>\n" +
        "<p>$$y=\\mathrm{arcsec}\\left(\\frac{\\ln x}{2}+\\frac{C}{\\ln x}\\right),\\quad C\\in\\mathbb{R}$$</p>\n" +
        "\n" +
        "<h2>二、一次平移换元可分离方程</h2>\n" +
        "<h3>例3：$\\displaystyle \\frac{dy}{dx}=(x+y+3)^2$</h3>\n" +
        "<p>令平移换元 $u=x+y+3$，则 $\\displaystyle \\frac{du}{dx}=1+\\frac{dy}{dx}$，$\\frac{dy}{dx}=u^2$</p>\n" +
        "<p>$$\\frac{du}{dx}-1=u^2 \\implies \\frac{du}{u^2+1}=dx$$</p>\n" +
        "<p>两边积分：$\\displaystyle \\int \\frac{du}{u^2+1}=\\int dx$</p>\n" +
        "<p>$$\\arctan u = x+C$$</p>\n" +
        "<p>回代 $u=x+y+3$，通解：</p>\n" +
        "<p>$$y=\\tan(x+C)-x-3,\\quad C\\in\\mathbb{R}$$</p>\n" +
        "\n" +
        "<h3>例4：$\\displaystyle y'=\\tan\\left(\\frac{y+2}{x+1}\\right)+\\frac{y+2}{x+1}$</h3>\n" +
        "<p>齐次型换元：令 $u=\\frac{y+2}{x+1}$，$y+2=u(x+1)$</p>\n" +
        "<p>求导：$\\displaystyle y'=u+\\frac{du}{dx}(x+1)$，代入原方程：</p>\n" +
        "<p>$$u+(x+1)\\frac{du}{dx}=\\tan u + u$$</p>\n" +
        "<p>化简可分离：$\\displaystyle \\frac{dx}{x+1}=\\frac{du}{\\tan u}$</p>\n" +
        "<p>积分：$\\displaystyle \\ln|x+1|=\\ln|\\sin u|+C$</p>\n" +
        "<p>整理：$C(x+1)=\\sin\\left(\\frac{y+2}{x+1}\\right)$</p>\n" +
        "<p>显式通解：</p>\n" +
        "<p>$$y=(x+1)\\arcsin\\big[C(x+1)\\big]-2,\\quad C\\in\\mathbb{R}$$</p>\n" +
        "\n" +
        "<h2>三、全微分恰当方程例题</h2>\n" +
        "<h3>例5：$(x^2+y^2+x+y)dx+(y-x)dy=0$</h3>\n" +
        "<p>拆分重组微分项，套用标准全微分公式：</p>\n" +
        "<p>$$xdx+ydy + \\frac{xdy-ydx}{x^2+y^2} + xdx+ydy=0$$</p>\n" +
        "<p>$$d\\left(\\frac{\\ln(x^2+y^2)}{2}\\right)+d\\left(\\arctan\\frac{x}{y}\\right)+dx=0$$</p>\n" +
        "<p>合并微分：</p>\n" +
        "<p>$$d\\left[x+\\frac{1}{2}\\ln(x^2+y^2)+\\arctan\\frac{x}{y}\\right]=0$$</p>\n" +
        "<p>通解：</p>\n" +
        "<p>$$x+\\frac{1}{2}\\ln(x^2+y^2)+\\arctan\\frac{x}{y}=C,\\quad C\\in\\mathbb{R}$$</p>\n" +
        "\n" +
        "<h2>四、$yy'$ 型可降阶微分方程</h2>\n" +
        "<h3>例6：$yy'=y'^2+2xy^2$</h3>\n" +
        "<p>两边除以 $y^2$，令 $\\displaystyle z=\\frac{y'}{y}$，则 $\\displaystyle z'=\\frac{y''y-y'^2}{y^2}$</p>\n" +
        "<p>原方程化为：$z=z^2+2x$，变形 $\\displaystyle \\frac{dz}{z-z^2}=2dx$</p>\n" +
        "<p>分离变量积分：$\\displaystyle \\int\\left(\\frac{1}{z}-\\frac{1}{z-1}\\right)dz=\\int 2dx$</p>\n" +
        "<p>$$\\ln\\left|\\frac{z}{z-1}\\right|=x^2+C$$</p>\n" +
        "<p>回代 $z=\\frac{y'}{y}$，再积分一次得通解：</p>\n" +
        "<p>$$\\ln y=\\frac{x^3}{3}+C_1 x+C_2$$</p>\n" +
        "<p>指数形式：$\\displaystyle y=C_1 e^{\\frac{1}{3}x^3+Cx}$</p>\n" +
        "\n" +
        "<h2>五、齐次伯努利型方程</h2>\n" +
        "<h3>例7：$x^n dy + y^n dx=0$</h3>\n" +
        "<p>变形：$\\displaystyle \\frac{dy}{dx}=-x^{-n}y^n$，标准伯努利形式 $y'+P(x)y=Q(x)y^n$</p>\n" +
        "<p>两边除以 $y^n$：$\\displaystyle y^{-n}\\frac{dy}{dx}=-x^{-n}$</p>\n" +
        "<p>换元 $z=y^{1-n}$，$\\displaystyle \\frac{dz}{dx}=(1-n)y^{-n}\\frac{dy}{dx}$</p>\n" +
        "<p>$$\\frac{1}{1-n}\\frac{dz}{dx}=-x^{-n} \\implies dz=-(1-n)x^{-n}dx$$</p>\n" +
        "<p>积分：$\\displaystyle z=-(1-n)\\cdot \\frac{x^{-n+1}}{-n+1}+C=-x^{1-n}+C$</p>\n" +
        "<p>回代 $z=y^{1-n}$，通解：</p>\n" +
        "<p>$$\\frac{1}{x^{n-1}}+\\frac{1}{y^{n-1}}=C$$</p>\n" +
        "\n" +
        "<h2>六、指数伯努利方程</h2>\n" +
        "<h3>例8：$\\displaystyle y'=-\\frac{y^3}{x^2}e^{-\\frac{1}{x}}+\\frac{y}{x}$</h3>\n" +
        "<p>伯努利方程 $n=3$，两边除以 $y^3$，令 $z=y^{-2}$</p>\n" +
        "<p>求导：$\\displaystyle \\frac{dz}{dx}=-2y^{-3}y'$，代入化简为一阶线性：</p>\n" +
        "<p>$$\\frac{dz}{dx}=-\\frac{2}{x}z + 2e^{-\\frac{1}{x}}$$</p>\n" +
        "<p>常数变易法求解，最终回代 $z=y^{-2}$，通解：</p>\n" +
        "<p>$$y^2=\\frac{1}{e^{-\\frac{1}{x}}+Cx^2},\\quad C\\in\\mathbb{R}$$</p>\n" +
        "\n" +
        "<h2>七、不显含 $x$ 参数法（$y'=f(y')$ 型）</h2>\n" +
        "<h3>例9：$y=e^{y'}(y'-1)$</h3>\n" +
        "<p>参数换元：令 $p=y'=\\frac{dy}{dx}$，则 $y=e^p(p-1)$</p>\n" +
        "<p>两边对 $y$ 微分：$\\displaystyle dy=e^p(p-1)dp + e^p dp = p e^p dp$</p>\n" +
        "<p>由 $dx=\\frac{dy}{p}$，得 $dx=e^p dp$，积分：</p>\n" +
        "<p>$$x=e^p+C$$</p>\n" +
        "<p>消去参数 $p$，通解：</p>\n" +
        "<p>$$y=(x-C)\\big[\\ln(x-C)-1\\big]$$</p>\n" +
        "\n" +
        "<h2>八、含 $\\ln y$ 齐次参数方程</h2>\n" +
        "<h3>例10：$\\displaystyle 2xy'-y=y\\ln\\left(\\frac{y}{xy'}\\right)$</h3>\n" +
        "<p>参数换元 $p=y'$，整理为齐次结构，令 $u=\\frac{p}{y}$，分离变量积分</p>\n" +
        "<p>逐步化简消参，最终通解：</p>\n" +
        "<p>$$x=\\frac{y}{2C}+\\frac{1}{2}\\ln C$$</p>\n" +
        "\n" +
        "<h2>九、复合余弦换元一阶线性方程</h2>\n" +
        "<h3>例11：$\\displaystyle (x^2-1)y'\\sin y + 2x\\cos y=2x$</h3>\n" +
        "<p>换元 $z=\\cos y$，求导 $\\displaystyle z'=-\\sin y \\cdot y'$，代入原方程：</p>\n" +
        "<p>$$-(x^2-1)z'+2xz=2x$$</p>\n" +
        "<p>整理标准一阶线性：$\\displaystyle z'-\\frac{2x}{x^2-1}z=-\\frac{2x}{x^2-1}$</p>\n" +
        "<p>常数变易法求解，回代 $z=\\cos y$，通解：</p>\n" +
        "<p>$$\\cos y=C(x^2-1)+1$$</p>\n" +
        "<p>显式：$\\displaystyle y=\\arccos\\big[C(x^2-1)+1\\big],\\ C\\in\\mathbb{R}$</p>\n" +
        "\n" +
        "<h2>十、指数型一阶线性方程</h2>\n" +
        "<h3>例12：$\\displaystyle y'=\\frac{2}{x}y+e^{\\frac{1}{x}}$</h3>\n" +
        "<p>标准一阶线性 $P(x)=-\\frac{2}{x},\\ Q(x)=e^{\\frac{1}{x}}$</p>\n" +
        "<p>积分因子 $\\displaystyle e^{\\int -\\frac{2}{x}dx}=\\frac{1}{x^2}$，常数变易法积分求解</p>\n" +
        "<p>最终通解：</p>\n" +
        "<p>$$y=x^2\\left(C+\\int \\frac{1}{x^2}e^{\\frac{1}{x}}dx\\right)$$</p>\n" +
        "\n" +
        "<h2>十一、二次可降阶参数方程</h2>\n" +
        "<h3>例13：$\\displaystyle y-2xy'=x^2-4y'^2$</h3>\n" +
        "<p>参数换元 $p=y'$，方程改写 $y=x^2+2xp-4p^2$</p>\n" +
        "<p>两边对 $x$ 求导消去 $y$，整理可分离变量方程求解，合并两支解：</p>\n" +
        "<p>$$y=Cx-\\frac{1}{4}x^2-4C^2,\\quad C\\in\\mathbb{R}$$</p>\n"},


  {"id":6,"title":"伯努利数——三角函数的级数展开式推导\t<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Bernoulli Numbers – Deriving the Series Expansion of Trigonometric Functions<\p>","date":"2025-10-12","category":"记录","tags":["洛朗级数","泰勒级数","伯努利数"],"thumbnail":"img/13.jpg","excerpt":"","content":"<h2>一、伯努利数的生成函数</h2>\n" +
        "<h3>1. 泰勒级数基础定义</h3>\n" +
        "<p>函数 $f(x)$ 在 $x=x_0$ 处带皮亚诺余项的 $n$ 阶泰勒公式：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "f(x)&=f(x_0)(x-x_0)^0+f'(x_0)(x-x_0)+\\frac{f''(x_0)}{2!}(x-x_0)^2+\\dots \\\\\n" +
        "&\\quad+\\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o\\left[(x-x_0)^n\\right]\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>记导数序列 $\\{R_n\\}=\\big\\{f(x_0),f'(x_0),\\dots,f^{(n)}(x_0),\\dots\\big\\}$，泰勒级数简写：</p>\n" +
        "<p>$$f(x)=\\sum_{n=0}^{\\infty}\\frac{R_n}{n!}(x-x_0)^n$$</p>\n" +
        "\n" +
        "<h3>2. 伯努利生成函数与柯西卷积递推</h3>\n" +
        "<p>伯努利数生成函数定义：$\\displaystyle\\frac{x}{e^x-1}=\\sum_{k=0}^{\\infty}\\frac{B_k}{k!}x^k$，$B_k$ 为伯努利数。</p>\n" +
        "<p>变形等式：$\\displaystyle\\sum_{k=0}^{\\infty}\\frac{B_k}{k!}x^k\\cdot\\frac{e^x-1}{x}=1$</p>\n" +
        "<p>展开指数幂级数：$\\displaystyle\\frac{e^x-1}{x}=\\sum_{n=0}^{\\infty}\\frac{x^n}{(n+1)!}$，代入得乘积恒等式：</p>\n" +
        "<p>$$\\sum_{k=0}^{\\infty}\\frac{B_k}{k!}x^k \\cdot \\sum_{n=0}^{\\infty}\\frac{x^n}{(n+1)!}=1$$</p>\n" +
        "<p>由柯西乘积规则 $\\displaystyle\\sum_{n=0}^{\\infty}a_n\\sum_{n=0}^{\\infty}b_n=\\sum_{m=0}^{\\infty}\\left(\\sum_{n=0}^m a_n b_{m-n}\\right)x^m$，合并同次项：</p>\n" +
        "<p>$$\\sum_{n=0}^{\\infty}\\left(\\sum_{k=0}^n \\frac{B_k}{k!\\cdot(n-k+1)!}\\right)x^n=1$$</p>\n" +
        "<p>记离散函数 $\\displaystyle f(n)=\\sum_{k=0}^n \\frac{B_k}{k!\\cdot(n-k+1)!}$，级数展开为：</p>\n" +
        "<p>$$f(0)+x f(1)+x^2 f(2)+x^3 f(3)+\\dots=1$$</p>\n" +
        "<p>比较系数得约束：$f(0)=1$，$\\forall n\\in\\mathbb{N}_+,\\ f(n)=0$。</p>\n" +
        "\n" +
        "<h3>3. 伯努利数求解与取值</h3>\n" +
        "<p>代入 $n=0$：$\\displaystyle f(0)=\\frac{B_0}{0!\\cdot(0-0+1)!}=B_0=1 \\implies B_0=1$</p>\n" +
        "<p>代入 $n=1$：$\\displaystyle f(1)=\\frac{B_0}{0!\\cdot1!}+\\frac{B_1}{1!\\cdot1!}=0 \\implies 1+B_1=0 \\implies B_1=-\\frac12$</p>\n" +
        "<p>完整伯努利数序列（奇数下标大于1时恒为0）：</p>\n" +
        "<p>$$B_0=1,\\ B_1=-\\frac12,\\ B_2=\\frac16,\\ B_3=0,\\ B_4=-\\frac{1}{30},\\ B_5=0,\\ B_6=\\frac{1}{42},\\ B_7=0,\\ B_8=-\\frac{1}{30},\\dots$$</p>\n" +
        "<p>核心性质：$\\forall n\\in\\mathbb{N}_+,\\ B_{2n+1}=0$</p>\n" +
        "\n" +
        "---\n" +
        "\n" +
        "<h2>二、$\\cot x$ 的洛朗级数展开式</h2>\n" +
        "<p>由复指数恒等式变形余切：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\cot x&=\\frac{\\cos x}{\\sin x}=i\\cdot\\frac{e^{ix}+e^{-ix}}{e^{ix}-e^{-ix}}=i+\\frac{2i}{e^{2ix}-1}=i+\\frac1x\\cdot\\frac{2ix}{e^{2ix}-1}\\\\\n" +
        "&=i+\\frac1x\\sum_{n=0}^{\\infty}\\frac{B_n(2ix)^n}{n!}=i+\\sum_{n=0}^{\\infty}\\frac{B_n(2i)^n}{n!}x^{n-1}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>拆分展开项，利用 $B_{2n+1}=0$ 消去奇次伯努利项，且 $\\displaystyle\\frac{2i B_1}{1!}x^0=-i$ 抵消常数虚部：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\cot x&=\\frac{(2i)^0 B_0}{0!}x^{-1}+\\frac{(2i)^2 B_2}{2!}x+\\frac{(2i)^4 B_4}{4!}x^3+\\dots \\\\\n" +
        "&=\\sum_{k=0}^{\\infty}\\frac{2^{2k}(-1)^k B_{2k}}{(2k)!}x^{2k-1}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>截断直观展开：$\\displaystyle\\cot x=\\frac1x-\\frac13x-\\frac{1}{45}x^3+\\dots$</p>\n" +
        "\n" +
        "---\n" +
        "\n" +
        "<h2>三、$\\tan x$ 的泰勒级数展开式</h2>\n" +
        "<h3>1. 恒等式证明 $\\tan x=\\cot x-2\\cot2x$</h3>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\cot x-2\\cot2x&=\\cot x-\\frac{2}{\\tan2x}=\\cot x-2\\cdot\\frac{1-\\tan^2 x}{2\\tan x}\\\\\n" +
        "&=\\frac{1}{\\tan x}-\\frac{1}{\\tan x}+\\tan x=\\tan x\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<h3>2. 级数合并化简</h3>\n" +
        "<p>将 $\\cot x$ 级数与 $\\cot2x$ 级数代入恒等式：</p>\n" +
        "<p>$$\n" +
        "\\begin{aligned}\n" +
        "\\tan x&=\\sum_{k=0}^{\\infty}\\frac{2^{2k}(-1)^k B_{2k}}{(2k)!}x^{2k-1}\n" +
        "-2\\sum_{k=0}^{\\infty}\\frac{2^{2k}(-1)^k B_{2k}}{(2k)!}(2x)^{2k-1}\\\\\n" +
        "&=\\sum_{k=0}^{\\infty}\\frac{2^{2k}(1-2^{2k})(-1)^k B_{2k}}{(2k)!}x^{2k-1}\n" +
        "\\end{aligned}\n" +
        "$$</p>\n" +
        "<p>截断展开：$\\displaystyle\\tan x=x+\\frac13x^3+\\frac{2}{15}x^5+\\frac{17}{315}x^7+\\dots$</p>\n" +
        "\n" +
        "---\n" +
        "\n" +
        "<h2>四、$\\sec x$ 的泰勒级数展开式</h2>\n" +
        "<p>由乘积恒等式 $\\sec x\\cdot\\cos x=1$，余弦幂级数：$\\displaystyle\\cos x=\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n}}{(2n)!}$</p>\n" +
        "<p>$\\sec x$ 为偶函数，仅含偶次幂，设 $\\displaystyle\\sec x=\\sum_{n=0}^{\\infty}\\frac{R_{2n}}{(2n)!}x^{2n}$，乘积：</p>\n" +
        "<p>$$\\left(\\sum_{n=0}^{\\infty}\\frac{R_{2n}}{(2n)!}x^{2n}\\right)\\left(\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n}}{(2n)!}\\right)=1$$</p>\n" +
        "<p>柯西合并同次偶次项，记 $\\displaystyle f(m)=\\sum_{n=0}^m \\frac{R_{2n}}{(2n)!}\\cdot\\frac{(-1)^{m-n}}{(2m-2n)!}$，得：</p>\n" +
        "<p>$$\\sum_{m=0}^{\\infty}x^{2m}f(m)=1$$</p>\n" +
        "<p>比较系数递推求欧拉数 $\\{R_{2n}\\}=\\{1,1,5,61,\\dots\\}$，奇数项 $R_{2n+1}=0$，完整展开：</p>\n" +
        "<p>$$\\sec x=\\sum_{n=0}^{\\infty}\\frac{R_{2n}}{(2n)!}x^{2n}=1+\\frac12x^2+\\frac{5}{24}x^4+\\frac{61}{720}x^6+\\dots$$</p>\n" +
        "\n" +
        "---\n" +
        "\n" +
        "<h2>五、$\\csc x$ 的洛朗级数展开式</h2>\n" +
        "<p>由恒等式 $x\\cdot\\csc x\\cdot\\sin x=x$，正弦幂级数：$\\displaystyle\\sin x=\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$</p>\n" +
        "<p>$x\\csc x$ 为偶函数，仅含偶次幂，设 $\\displaystyle x\\csc x=\\sum_{n=0}^{\\infty}\\frac{R_{2n}}{(2n)!}x^{2n}$，乘积：</p>\n" +
        "<p>$$\\left(\\sum_{n=0}^{\\infty}\\frac{R_{2n}}{(2n)!}x^{2n}\\right)\\left(\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!}\\right)=x$$</p>\n" +
        "<p>消去公共因子 $x$，合并偶次项，递推求得对应欧拉数序列，奇数项系数为0，展开：</p>\n" +
        "<p>$$\\csc x=\\sum_{n=0}^{\\infty}\\frac{R_{2n}}{(2n)!}x^{2n-1}=\\frac1x+\\frac16x+\\frac{7}{360}x^3+\\dots$$</p>\n"},


 {"id":7,"title":"特殊函数与广义积分<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Special Functions and Generalized Integrals<\p>","date":"2025-10-18","category":"记录","tags":["微积分","特殊函数"],"thumbnail":"img/14.jpg","excerpt":"","content":"<h2>一、Beta-Gamma 型广义积分：$\\displaystyle I=\\int_{0}^{+\\infty}\\frac{1}{1+x^n}dx \\quad(n>1,\\ n\\neq k\\pi)$</h2>\n" +
       "<h3>变量代换与Beta函数转化</h3>\n" +
       "<p>令 $K=x^n \\implies dK=nx^{n-1}dx \\implies dx=\\frac{1}{n}K^{\\frac{1-n}{n}}dK$</p>\n" +
       "<p>代入积分：\n" +
       "$$I=\\frac{1}{n}\\int_{0}^{+\\infty}\\frac{K^{\\frac{1}{n}-1}}{1+K}dK$$</p>\n" +
       "<p>Beta函数无穷区间形式：$\\displaystyle B(p,q)=\\int_{0}^{+\\infty}\\frac{t^{p-1}}{(1+t)^{p+q}}dt$，对比得 $p=\\frac1n,\\ q=\\frac{n-1}{n}$</p>\n" +
       "<p>$$I=\\frac1n B\\left(\\frac1n,\\frac{n-1}{n}\\right)$$</p>\n" +
       "<h3>余元公式化简</h3>\n" +
       "<p>Beta-Gamma关系：$\\displaystyle B(p,q)=\\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p+q)}$，$\\Gamma(1)=1$</p>\n" +
       "<p>$$I=\\frac1n \\cdot \\frac{\\Gamma(\\frac1n)\\Gamma(1-\\frac1n)}{\\Gamma(1)}=\\frac1n\\Gamma\\left(\\frac1n\\right)\\Gamma\\left(1-\\frac1n\\right)$$</p>\n" +
       "<p>余元公式：$\\displaystyle \\Gamma(s)\\Gamma(1-s)=\\frac{\\pi}{\\sin(\\pi s)}\\ (0<s<1)$，最终：</p>\n" +
       "<p>$$\\int_{0}^{+\\infty}\\frac{1}{1+x^n}dx=\\frac{\\pi}{n\\sin\\frac{\\pi}{n}}$$</p>\n" +
       "<h4>实例</h4>\n" +
       "<p>$$\\int_{0}^{+\\infty}\\frac{1}{1+x^{2026}}dx=\\frac{\\pi}{2026\\sin\\frac{\\pi}{2026}},\\quad \\int_{0}^{+\\infty}\\frac{1}{1+x^3}dx=\\frac{\\pi}{3\\sin\\frac{\\pi}{3}}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>二、欧拉-泊松积分（高斯积分）$\\displaystyle I=\\int_{0}^{+\\infty}e^{-x^2}dx$</h2>\n" +
       "<h3>方法1：二重极坐标变换</h3>\n" +
       "<p>设 $I=\\int_{0}^{+\\infty}e^{-x^2}dx=\\int_{0}^{+\\infty}e^{-y^2}dy$，平方构造二重积分：\n" +
       "$$I^2=\\int_{0}^{+\\infty}\\int_{0}^{+\\infty}e^{-x^2-y^2}dxdy$$</p>\n" +
       "<p>极坐标 $x=r\\cos\\theta,y=r\\sin\\theta,\\ dxdy=rdrd\\theta$，范围 $0\\le\\theta\\le\\frac{\\pi}{2},\\ r\\ge0$：\n" +
       "$$I^2=\\int_{0}^{\\frac{\\pi}{2}}d\\theta\\int_{0}^{+\\infty}e^{-r^2}rdr=\\frac{\\pi}{2}\\cdot\\left.\\left(-\\frac12 e^{-r^2}\\right)\\right|_{0}^{+\\infty}=\\frac{\\pi}{4}$$</p>\n" +
       "<p>开方：$\\displaystyle I=\\frac{\\sqrt{\\pi}}{2}$</p>\n" +
       "<h3>方法2：Gamma函数代换</h3>\n" +
       "<p>Gamma定义：$\\displaystyle \\Gamma(p)=\\int_{0}^{+\\infty}t^{p-1}e^{-t}dt$，令 $t=x^2 \\implies dx=\\frac12 t^{-\\frac12}dt$</p>\n" +
       "<p>$$I=\\frac12\\int_{0}^{+\\infty}t^{-\\frac12}e^{-t}dt=\\frac12\\Gamma\\left(\\frac12\\right)=\\frac{\\sqrt{\\pi}}{2}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>三、菲涅尔积分 $\\displaystyle I=\\int_{0}^{+\\infty}\\sin(x^2)dx$</h2>\n" +
       "<h3>含参高斯积分与拉普拉斯变换结合</h3>\n" +
       "<p>先定义含参积分 $\\displaystyle J(t)=\\int_{0}^{+\\infty}e^{-tx^2}dx=\\frac12\\sqrt{\\frac{\\pi}{t}}\\ (t>0)$</p>\n" +
       "<p>将 $\\sin(x^2)=\\mathrm{Im}\\left(e^{ix^2}\\right)$，交换积分次序：\n" +
       "$$\\int_{0}^{+\\infty}\\sin(x^2)dx=\\frac12\\int_{0}^{+\\infty}t^{-\\frac12}\\sin t \\,dt$$</p>\n" +
       "<p>拉普拉斯变换 $\\displaystyle \\mathcal{L}[\\sin t]=\\frac{1}{1+s^2}$，代入复参 $s=x^2$ 积分化简，结合余元公式：</p>\n" +
       "<p>$$\\int_{0}^{+\\infty}\\sin(x^2)dx=\\frac{\\sqrt{2\\pi}}{4}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>四、含指数三角函数广义积分 $I(a,b)=\\int_{0}^{+\\infty}xe^{-ax}\\sin bx \\,dx,\\ J(a,b)=\\int_{0}^{+\\infty}xe^{-ax}\\cos bx \\,dx\\ (a>0)$</h2>\n" +
       "<h3>1. $\\boldsymbol{I(a,b)}$ 推导</h3>\n" +
       "<p>先求基础拉普拉斯积分：$\\displaystyle \\int_{0}^{+\\infty}e^{-ax}\\sin bx \\,dx=\\frac{b}{a^2+b^2}$</p>\n" +
       "<p>对参数 $a$ 求导（莱布尼茨积分法则）：\n" +
       "$$I(a,b)=-\\frac{d}{da}\\int_{0}^{+\\infty}e^{-ax}\\sin bx \\,dx=\\frac{2ab}{(a^2+b^2)^2}$$</p>\n" +
       "<h4>实例</h4>\n" +
       "<p>$$I\\left(\\frac92,\\frac14\\right)=\\int_{0}^{+\\infty}xe^{-\\frac92 x}\\sin\\frac14 x \\,dx=\\frac{2\\cdot\\frac92\\cdot\\frac14}{\\left(\\frac{81}{4}+\\frac{1}{16}\\right)^2}=\\frac{576}{105625}$$</p>\n" +
       "<h3>2. $\\boldsymbol{J(a,b)}$ 推导</h3>\n" +
       "<p>基础积分：$\\displaystyle \\int_{0}^{+\\infty}e^{-ax}\\cos bx \\,dx=\\frac{a}{a^2+b^2}$，对 $a$ 求导：\n" +
       "$$J(a,b)=-\\frac{d}{da}\\left(\\frac{a}{a^2+b^2}\\right)=\\frac{a^2-b^2}{(a^2+b^2)^2}$$</p>\n" +
       "<h4>实例</h4>\n" +
       "<p>$$J(5,10)=\\int_{0}^{+\\infty}xe^{-5x}\\cos10x \\,dx=\\frac{25-100}{(25+100)^2}=-\\frac{3}{625}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>五、泊松积分 $\\displaystyle I(b)=\\int_{0}^{+\\infty}e^{-ax^2}\\cos bx \\,dx\\ (a>0)$</h2>\n" +
       "<p>对 $b$ 求导并分部积分：\n" +
       "$$I'(b)=-\\int_{0}^{+\\infty}xe^{-ax^2}\\sin bx \\,dx=-\\frac{b}{2a}I(b)$$</p>\n" +
       "<p>一阶常微分方程 $\\displaystyle I'(b)+\\frac{b}{2a}I(b)=0$，分离变量求解：\n" +
       "$$I(b)=Ce^{-\\frac{b^2}{4a}}$$</p>\n" +
       "<p>代入初值 $b=0$：$\\displaystyle I(0)=\\int_{0}^{+\\infty}e^{-ax^2}dx=\\frac12\\sqrt{\\frac{\\pi}{a}}=C$</p>\n" +
       "<p>最终结果：\n" +
       "$$\\int_{0}^{+\\infty}e^{-ax^2}\\cos bx \\,dx=\\frac12\\sqrt{\\frac{\\pi}{a}}e^{-\\frac{b^2}{4a}}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>六、狄利克雷积分 $\\displaystyle I=\\int_{0}^{+\\infty}\\frac{\\sin x}{x}dx$</h2>\n" +
       "<p>构造含参积分 $\\displaystyle f(a)=\\int_{0}^{+\\infty}\\frac{\\sin x}{x}e^{-ax}dx\\ (a\\ge0)$，对 $a$ 求导：\n" +
       "$$f'(a)=-\\int_{0}^{+\\infty}e^{-ax}\\sin x \\,dx=-\\frac{1}{a^2+1}$$</p>\n" +
       "<p>积分回代：$\\displaystyle f(a)=-\\arctan a + C$，取极限 $a\\to+\\infty,\\ f(+\\infty)=0 \\implies C=\\frac{\\pi}{2}$</p>\n" +
       "<p>令 $a=0$：\n" +
       "$$\\int_{0}^{+\\infty}\\frac{\\sin x}{x}dx=\\frac{\\pi}{2}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>七、拉普拉斯积分 $\\displaystyle I(b)=\\int_{0}^{+\\infty}\\frac{\\cos bx}{x^2+a^2}dx\\ (a>0)$</h2>\n" +
       "<p>对 $b$ 求二阶导，结合狄利克雷积分得到二阶常微分方程：\n" +
       "$$I''(b)-a^2 I(b)=0$$</p>\n" +
       "<p>特征根 $r=\\pm a$，通解 $I(b)=C_1 e^{ab}+C_2 e^{-ab}$，利用边界条件 $b\\to+\\infty$ 积分有界，得 $C_1=0$；代入初值 $b=0$：\n" +
       "$$I(0)=\\int_{0}^{+\\infty}\\frac{1}{x^2+a^2}dx=\\frac{\\pi}{2a}$$</p>\n" +
       "<p>解得常数 $C_2=\\frac{\\pi}{2a}$，最终：\n" +
       "$$\\int_{0}^{+\\infty}\\frac{\\cos bx}{x^2+a^2}dx=\\frac{\\pi}{2a}e^{-ab}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>八、分母平方型三角广义积分 $\\displaystyle \\int_{0}^{+\\infty}\\frac{\\cos bx}{(x^2+a^2)^2}dx\\ (a>0)$</h2>\n" +
       "<p>对上一节拉普拉斯积分 $I(b)$ 关于参数 $a$ 求导：\n" +
       "$$\\frac{d}{da}\\left(\\frac{\\pi}{2a}e^{-ab}\\right)=-\\frac{\\pi}{2a^2}e^{-ab}-\\frac{\\pi b}{2a}e^{-ab}$$</p>\n" +
       "<p>交换微分积分次序：\n" +
       "$$\\int_{0}^{+\\infty}\\frac{\\cos bx}{(x^2+a^2)^2}dx=\\frac{\\pi}{4a^3}e^{-ab}(ab+1)$$</p>\n" +
       "<h4>实例</h4>\n" +
       "<p>$$\\int_{0}^{+\\infty}\\frac{\\cos x}{(x^2+1)^2}dx=\\frac{\\pi}{4}e^{-1},\\quad \\int_{0}^{+\\infty}\\frac{\\cos 2x}{(x^2+4)^2}dx=\\frac{9\\pi e^{-8}}{256}$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>九、$\\displaystyle \\int_{0}^{+\\infty}\\frac{1}{(1+x^2)^n}dx\\ (n>\\frac12)$</h2>\n" +
       "<p>代换 $t=x^2 \\implies dx=\\frac12 t^{-\\frac12}dt$，转化Beta函数：\n" +
       "$$\\int_{0}^{+\\infty}\\frac{1}{(1+x^2)^n}dx=\\frac12\\int_{0}^{+\\infty}\\frac{t^{-\\frac12}}{(1+t)^n}dt=\\frac12 B\\left(\\frac12,n-\\frac12\\right)$$</p>\n" +
       "<p>Beta-Gamma转换：\n" +
       "$$=\\frac12\\cdot\\frac{\\Gamma(\\frac12)\\Gamma(n-\\frac12)}{\\Gamma(n)}=\\frac{\\sqrt{\\pi}}{2}\\cdot\\frac{\\Gamma(n-\\frac12)}{\\Gamma(n)}$$</p>\n" +
       "<h4>实例</h4>\n" +
       "<p>$$\\int_{0}^{+\\infty}\\frac{1}{(1+x^2)^5}dx=\\frac{35\\pi}{256},\\quad \\int_{0}^{+\\infty}\\frac{1}{(1+x^2)^{\\frac32}}dx=1$$</p>\n" +
       "\n" +
       "---\n" +
       "\n" +
       "<h2>十、$\\displaystyle \\int_{0}^{+\\infty}\\frac{1}{1+x^k}dx$ 通用拓展示例（$k=3$）</h2>\n" +
       "<p>令 $t=x^3,\\ dx=\\frac13 t^{-\\frac23}dt$，转化Beta函数：\n" +
       "$$\\int_{0}^{+\\infty}\\frac{1}{1+x^3}dx=\\frac13 B\\left(\\frac13,\\frac23\\right)=\\frac13\\cdot\\frac{\\Gamma(\\frac13)\\Gamma(\\frac23)}{\\Gamma(1)}$$</p>\n" +
       "<p>余元公式 $\\displaystyle \\Gamma(\\frac13)\\Gamma(\\frac23)=\\frac{\\pi}{\\sin\\frac{\\pi}{3}}$，得：\n" +
       "$$\\int_{0}^{+\\infty}\\frac{1}{1+x^3}dx=\\frac{2\\sqrt{3}\\pi}{9}$$</p>\n"},


  {"id":1,"title":"变限积分的等价无穷小\t<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Equivalent infinitesimals of variable-limit integrals<\p>","date":"2025-07-15","category":"记录","tags":["变限积分","等价无穷小"],"thumbnail":"img/15.webp","excerpt":"","content":"<h2>一、变上限积分等价无穷小替换定理</h2>\n" +
        "<h3>定理条件</h3>\n" +
        "<p>设 $f(x),g(x)$ 在 $x=0$ 某去心邻域可导，满足：</p>\n" +
        "<p>(i) $x\\to0$ 时，$F(x),G(x),f(x),g(x)$ 全为无穷小；</p>\n" +
        "<p>(ii) $x\\to0$ 时，$F(x)\\sim G(x),\\ f(x)\\sim g(x)$；</p>\n" +
        "<p>(iii) $\\displaystyle \\lim_{x\\to0}\\frac{f'(x)}{g'(x)}$ 存在有限，且 $g'(x)\\neq0$。</p>\n" +
        "<p>结论：\n" +
        "$$\\lim_{x\\to0}\\int_{0}^{f(x)}F(t)dt=\\lim_{x\\to0}\\int_{0}^{g(x)}G(t)dt$$</p>\n" +
        "\n" +
        "<h3>完整证明</h3>\n" +
        "<p>1. 无穷小判定：由条件(ii)，$f(x),g(x)\\to0,\\ F(x),G(x)\\to0$，故上下限、被积函数均趋于0，两个变上限积分都是 $x\\to0$ 时的无穷小。</p>\n" +
        "<p>2. 洛必达前置推导：等价无穷小定义\n" +
        "$$f(x)=g(x)+o(g(x)),\\quad F(x)=G(x)+o(G(x))$$\n" +
        "由洛必达法则：\n" +
        "$$\\lim_{x\\to0}\\frac{f(x)}{g(x)}=\\lim_{x\\to0}\\frac{f'(x)}{g'(x)}=1$$</p>\n" +
        "<p>3. 变上限求导法则：$\\displaystyle \\frac{d}{dx}\\int_{b(x)}^{a(x)}h(t)dt=h[a(x)]a'(x)-h[b(x)]b'(x)$，分母下限为0，化简分式极限：\n" +
        "$$\\lim_{x\\to0}\\frac{\\displaystyle\\int_{0}^{f(x)}F(t)dt}{\\displaystyle\\int_{0}^{g(x)}G(t)dt}=\\lim_{x\\to0}\\frac{F(f(x))\\cdot f'(x)}{G(g(x))\\cdot g'(x)}$$</p>\n" +
        "<p>4. 无穷小等价代换：\n" +
        "$$\\lim_{x\\to0}\\frac{F(f(x))}{G(g(x))}=\\lim_{x\\to0}\\frac{F(g(x))}{G(g(x))}=\\lim_{u\\to0}\\frac{F(u)}{G(u)}=1$$\n" +
        "结合 $\\displaystyle\\lim_{x\\to0}\\frac{f'(x)}{g'(x)}=1$，整体极限为1：\n" +
        "$$\\lim_{x\\to0}\\frac{\\displaystyle\\int_{0}^{f(x)}F(t)dt}{\\displaystyle\\int_{0}^{g(x)}G(t)dt}=1$$\n" +
        "即 $\\displaystyle\\lim_{x\\to0}\\int_{0}^{f(x)}F(t)dt=\\lim_{x\\to0}\\int_{0}^{g(x)}G(t)dt$，证毕。</p>\n" +
        "\n" +
        "---\n" +
        "\n" +
        "<h2>二、配套例题详解</h2>\n" +
        "<h3>例1：极限 $\\displaystyle I=\\lim_{x\\to0}\\frac{\\displaystyle\\int_{0}^{\\ln[1+\\arctan x^3]}\\sin t \\,dt}{x^6}$</h3>\n" +
        "<p>等价无穷小匹配：\n" +
        "$$f(x)=\\ln(1+\\arctan x^3)\\sim \\arctan x^3 \\sim x^3,\\quad F(t)=\\sin t \\sim t$$\n" +
        "验证导数比：\n" +
        "$$\\lim_{x\\to0}\\frac{f'(x)}{g'(x)}=\\lim_{x\\to0}\\frac{\\frac{3x^2}{(1+x^6)[1+\\arctan x^3]}}{3x^2}=1$$</p>\n" +
        "<p>替换后计算：\n" +
        "$$I=\\lim_{x\\to0}\\frac{\\displaystyle\\int_{0}^{x^3}t\\,dt}{x^6}=\\lim_{x\\to0}\\frac{\\frac12 x^6}{x^6}=\\frac12$$\n" +
        "<p>直接积分验算：\n" +
        "$$\\int_{0}^{\\ln(1+\\arctan x^3)}\\sin t dt=1-\\cos\\left[\\ln(1+\\arctan x^3)\\right]$$\n" +
        "$$I=\\lim_{x\\to0}\\frac{\\frac12\\ln^2(1+\\arctan x^3)}{x^6}=\\frac12\\lim_{x\\to0}\\frac{(x^3)^2}{x^6}=\\frac12$$</p>\n" +
        "\n" +
        "<h3>例2：判断 $x\\to0^+$ 时 $\\displaystyle f(x)=\\int_{0}^{\\sqrt{\\sin x}}\\tan t dt,\\ g(x)=\\int_{0}^{\\sqrt{\\tan x}}\\sin t dt$ 是否等价无穷小</h3>\n" +
        "<p>等价关系：$x\\to0^+$ 时 $\\sqrt{\\sin x}\\sim\\sqrt{x},\\ \\sqrt{\\tan x}\\sim\\sqrt{x}$；$t\\to0$ 时 $\\tan t\\sim t,\\ \\sin t\\sim t$。</p>\n" +
        "<p>替换积分：\n" +
        "$$f(x)\\sim\\int_{0}^{\\sqrt{x}}t\\,dt,\\quad g(x)\\sim\\int_{0}^{\\sqrt{x}}t\\,dt$$\n" +
        "$$\\lim_{x\\to0^+}\\frac{f(x)}{g(x)}=1$$\n" +
        "<p>结论：$x\\to0^+$ 时 $f(x)$ 与 $g(x)$ 为等价无穷小。</p>\n" +
        "\n" +
        "<h3>例3：判断 $t\\to0^+$ 时 $\\displaystyle f(t)=\\int_{0}^{t}dx\\int_{x}^{t}\\tan\\sqrt{xy}\\,dy$ 关于 $t$ 的无穷小阶数</h3>\n" +
        "<p>$y\\to0$ 时 $\\tan\\sqrt{xy}\\sim\\sqrt{xy}$，二重积分等价替换：\n" +
        "$$f(t)\\sim\\int_{0}^{t}dx\\int_{x}^{t}\\sqrt{xy}\\,dy=\\int_{0}^{t}x^{\\frac12}\\cdot \\frac23\\left(t^{\\frac32}-x^{\\frac32}\\right)dx=\\frac29 t^3$$\n" +
        "$$\\lim_{t\\to0^+}\\frac{f(t)}{t^3}=\\frac29$$\n" +
        "<p>结论：$f(t)$ 是 $t$ 的3阶无穷小。</p>\n" +
        "\n" +
        "<h3>例4：求极限 $\\displaystyle I=\\lim_{x\\to0}\\frac{\\left(\\displaystyle\\int_{0}^{x}\\arctan t\\,dt\\right)^2}{\\displaystyle\\int_{0}^{x}\\arcsin t\\,dt\\cdot \\displaystyle\\int_{0}^{x}\\sin t\\,dt}$</h3>\n" +
        "<p>$t\\to0$ 时 $\\arctan t\\sim t,\\ \\arcsin t\\sim t,\\ \\sin t\\sim t$，整体替换：\n" +
        "$$I=\\lim_{x\\to0}\\frac{\\left(\\displaystyle\\int_{0}^{x}t\\,dt\\right)^2}{\\displaystyle\\int_{0}^{x}t\\,dt\\cdot \\displaystyle\\int_{0}^{x}t\\,dt}=\\lim_{x\\to0}\\frac{\\left(\\frac{x^2}{2}\\right)^2}{\\frac{x^2}{2}\\cdot\\frac{x^2}{2}}=1$$</p>\n" +
        "\n" +
        "<h3>例5：求极限 $\\displaystyle I=\\lim_{x\\to0}\\frac{\\displaystyle\\int_{0}^{x^2}\\arctan t\\,dt}{\\displaystyle\\int_{0}^{x^2}\\frac{t}{2}\\,dt}$</h3>\n" +
        "<p>等价替换 $\\arctan t\\sim t$：\n" +
        "$$I=\\lim_{x\\to0}\\frac{\\displaystyle\\int_{0}^{x^2}t\\,dt}{\\displaystyle\\int_{0}^{x^2}\\frac{t}{2}dt}=\\lim_{x\\to0}\\frac{\\frac12 x^4}{\\frac1{16}x^4}=8$$</p>\n"},


   {"id":9,"title":"基于STM32F103C8与I2C协议的月薪喵动画效果\t<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Monthly Salary Cat Animation Effect Based on STM32F103C8 and I2C Protocol<\p>","date":"2025-10-22","category":"教程","tags":["STM32","I2C","嵌入式","月薪喵"],"thumbnail":"img/6.jpg","excerpt":"基于STM32F103C8与I2C协议的OLED显示月薪喵动画效果。","content":"<div style='text-align:center;'><img src='img/1.gif' alt='' style='max-width:100%;width:100px;height:90px;border-radius:8px;margin-bottom:16px;clip-path:inset(0 5px 0 5px);'></div><p>YueXinMiao2（月薪喵2）是一个基于 STM32F103C8T6 的裸机嵌入式项目，通过 I2C 协议驱动 0.96 寸 SSD1306 OLED（128×64 单色），循环播放 28 帧猫咪跳跃动画，帧率约 25 FPS。用户代码仅约 230 行 C，Flash 总占用约 19.4KB，是一款极致精简的入门级嵌入式显示项目。</p><p><strong>硬件平台：</strong>STM32F103C8T6（Cortex-M3, 72MHz），I2C1 400kHz Fast Mode，PB6=SCL, PB7=SDA，外部 8MHz 晶振 → PLL ×9 → 72MHz。</p><p><strong>OLED 驱动：</strong>SSD1306 I2C 地址 0x78，33 字节初始化命令序列（对比度 255、段重映射、COM 翻转、电荷泵使能）。核心绘制函数 OLED_DrawBitmap() 将位图逐页转换后批量 I2C 发送，64×64 精灵仅需 8 次事务。I2C 总线异常时自动软复位恢复。</p><p><strong>动画数据：</strong>28 帧 × 64×64 像素 × 1bpp = 14,336 字节，占 Flash 30.2%，采用 MSB-left 行优先打包格式，条件编译仅在 main.c 实例化一次。</p><p><strong>主循环：</strong>每帧 HAL_Delay(40ms) → 25 FPS → 完整周期 1.12 秒。" +
         "</p><div style='text-align:center;margin-top:24px;'><a href='download/YueXinMiao2.zip' download onclick='return confirm(\"确认下载 YueXinMiao2.zip？\")' style='display:inline-block;padding:10px 40px;background:#3b82f6;color:#a80505;border-radius:6px;text-decoration:none;font-weight:500;font-size:14px;letter-spacing:1px;'>点击下载项目源码</a></div>" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>一、硬件平台与引脚</h2>\n" +
         "<table>\n" +
         "<tr><td><strong>主控芯片</strong></td><td>STM32F103C8T6（Cortex-M3）</td></tr>\n" +
         "<tr><td><strong>Flash / SRAM</strong></td><td>64 KB / 20 KB</td></tr>\n" +
         "<tr><td><strong>显示屏</strong></td><td>0.96寸 SSD1306 OLED, 128×64 单色</td></tr>\n" +
         "<tr><td><strong>通信接口</strong></td><td>I2C1, Fast Mode 400 kHz</td></tr>\n" +
         "<tr><td><strong>I2C 地址</strong></td><td>0x78（SA0接地：0x3C << 1）</td></tr>\n" +
         "<tr><td><strong>时钟源</strong></td><td>外部 8MHz 晶振 → PLL ×9 → 72MHz 系统主频</td></tr>\n" +
         "<tr><td><strong>调试接口</strong></td><td>SWD（关闭JTAG，释放PB3/PB4/PA15）</td></tr>\n" +
         "</table>\n" +
         "\n" +
         "<h3>引脚连接表</h3>\n" +
         "<table>\n" +
         "<tr><th>引脚</th><th>功能</th><th>GPIO 模式</th><th>硬件说明</th></tr>\n" +
         "<tr><td>PB6</td><td>I2C1_SCL</td><td>复用开漏 AF_OD</td><td>外接4.7kΩ上拉电阻至3.3V</td></tr>\n" +
         "<tr><td>PB7</td><td>I2C1_SDA</td><td>复用开漏 AF_OD</td><td>外接4.7kΩ上拉电阻至3.3V</td></tr>\n" +
         "<tr><td>PA13</td><td>SWDIO</td><td>系统默认复用</td><td>ST-Link调试数据线</td></tr>\n" +
         "<tr><td>PA14</td><td>SWCLK</td><td>系统默认复用</td><td>ST-Link调试时钟线</td></tr>\n" +
         "</table>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>二、时钟树详解</h2>\n" +
         "<pre><code>HSE (8MHz 外部晶振)\n" +
         "  → PLL预分频 ÷1\n" +
         "  → PLL倍频 ×9 = 72MHz PLL时钟\n" +
         "  → SYSCLK = 72MHz\n" +
         "    ├─ HCLK = 72MHz(AHB不分频) → 内核、Flash总线\n" +
         "    │   Flash等待周期：2WS（48MHz＜主频≤72MHz标准配置）\n" +
         "    ├─ PCLK1 = 36MHz(APB1 ÷2) → I2C1外设时钟\n" +
         "    └─ PCLK2 = 72MHz(APB2不分频) → GPIO端口时钟\n" +
         "</code></pre>\n" +
         "<p>初始化完成后关闭内部HSI 8MHz RC振荡源降低功耗；SysTick由HAL底层配置为1ms节拍，提供HAL_Delay毫秒延时基准。</p>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>三、I2C 通信协议配置</h2>\n" +
         "<h3>3.1 HAL库初始化核心参数</h3>\n" +
         "<pre><code>hi2c1.Instance = I2C1;\n" +
         "hi2c1.Init.ClockSpeed = 400000;          // 400kHz高速模式\n" +
         "hi2c1.Init.DutyCycle = I2C_DUTYCYCLE_2;  // 高低电平占比 2:1\n" +
         "hi2c1.Init.AddressingMode = I2C_ADDRESSINGMODE_7BIT;\n" +
         "hi2c1.Init.NoStretchMode = I2C_NOSTRETCH_DISABLE; // 允许从机时钟拉伸\n" +
         "</code></pre>\n" +
         "\n" +
         "<h3>3.2 I2C时序寄存器计算（PCLK1=36MHz）</h3>\n" +
         "<ul>\n" +
         "<li><strong>CCR寄存器</strong>：$\\displaystyle CCR=\\frac{PCLK1}{2\\times 400000}=\\frac{36000000}{800000}=45$</li>\n" +
         "<li><strong>TRISE寄存器</strong>：$\\displaystyle TRISE=\\lceil 0.3\\times 36\\rceil+1=11$</li>\n" +
         "<li>实际总线频率：受上升沿影响，实测接近400kHz标准高速I2C</li>\n" +
         "</ul>\n" +
         "\n" +
         "<h3>3.3 I2C底层传输函数</h3>\n" +
         "<p>封装两套基础发送接口：</p>\n" +
         "<ul>\n" +
         "<li><code>I2C_WriteByte(ctrl, data)</code>：单字节发送，用于SSD1306寄存器命令配置</li>\n" +
         "<li><code>I2C_WriteMulti(ctrl, data, len)</code>：多字节批量写入，用于整页GDDRAM显存填充</li>\n" +
         "</ul>\n" +
         "<p>底层统一调用 <code>HAL_I2C_Mem_Write()</code>，用内存地址区分命令(0x00)和显示数据(0x40)，单包超时100ms；增加总线容错：通信失败自动DeInit再重新Init复位I2C外设，避免SDA锁死导致总线挂死黑屏。</p>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>四、SSD1306 OLED 驱动</h2>\n" +
         "<h3>4.1 上电初始化命令表（完整33字节）</h3>\n" +
         "<table>\n" +
         "<tr><th>序号</th><th>命令值</th><th>功能说明</th></tr>\n" +
         "<tr><td>0</td><td>0xAE</td><td>暂时关闭屏幕显示，配置阶段防花屏</td></tr>\n" +
         "<tr><td>1~2</td><td>0x00,0x10</td><td>列地址起始位置置0</td></tr>\n" +
         "<tr><td>3</td><td>0x40</td><td>屏幕显示起始行设为第0行</td></tr>\n" +
         "<tr><td>4</td><td>0xB0</td><td>显存页起始地址为第0页</td></tr>\n" +
         "<tr><td>5~6</td><td>0x81,0xFF</td><td>对比度拉满至最大值255</td></tr>\n" +
         "<tr><td>7</td><td>0xA1</td><td>SEG段重映射，画面左右翻转镜像</td></tr>\n" +
         "<tr><td>8</td><td>0xA6</td><td>正常白底黑字，不开启反色显示</td></tr>\n" +
         "<tr><td>9~10</td><td>0xA8,0x3F</td><td>MUX扫描比例 1/64，适配64行屏</td></tr>\n" +
         "<tr><td>11</td><td>0xC8</td><td>COM扫描方向重映射，画面上下翻转</td></tr>\n" +
         "<tr><td>12~13</td><td>0xD3,0x00</td><td>屏幕垂直偏移量为0</td></tr>\n" +
         "<tr><td>14~15</td><td>0xD5,0x80</td><td>内部振荡器时钟分频配置</td></tr>\n" +
         "<tr><td>16~17</td><td>0xD8,0x05</td><td>像素预充电时长5个DCLK</td></tr>\n" +
         "<tr><td>18~19</td><td>0xD9,0xF1</td><td>预充电电压档位配置</td></tr>\n" +
         "<tr><td>20~21</td><td>0xDA,0x12</td><td>COM引脚交替排布，64行屏必需配置</td></tr>\n" +
         "<tr><td>22~23</td><td>0xDB,0x30</td><td>VCOMH消隐电平 0.83VCC</td></tr>\n" +
         "<tr><td>24~25</td><td>0x8D,0x14</td><td>开启内置电荷泵，3.3V供电必须开启</td></tr>\n" +
         "<tr><td>26</td><td>0xAF</td><td>开启OLED屏幕显示</td></tr>\n" +
         "</table>\n" +
         "<p>上电先延时200ms等待电源稳定，逐条发送初始化指令，每条命令独立I2C传输，保证芯片稳定识别配置。</p>\n" +
         "\n" +
         "<h3>4.2 基础显示接口</h3>\n" +
         "<ul>\n" +
         "<li><strong>OLED_Clear()</strong>：按页批量写入0x00清空显存，仅8次I2C批量传输，效率极高</li>\n" +
         "<li><strong>OLED_Set_Pos(x, y)</strong>：定位页地址+列高低位地址，指定显存写入坐标</li>\n" +
         "<li><strong>OLED_DrawBitmap()</strong>：位图绘制核心函数</li>\n" +
         "<li><strong>OLED_Display_On/OFF()</strong>：屏幕开关控制，休眠场景降低功耗</li>\n" +
         "</ul>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>五、位图绘制核心算法</h2>\n" +
         "<p>函数原型：<code>OLED_DrawBitmap(x, y, bitmap, w, h)</code></p>\n" +
         "<ol>\n" +
         "<li>入参：绘图左上角坐标、点阵数组指针、图像宽高（本项目固定x=32,y=0,w=64,h=64）</li>\n" +
         "<li>边界判定：超出128×64屏幕范围直接退出，防止越界访问内存</li>\n" +
         "<li>核心逻辑：按SSD1306分页显存结构，逐页重组位图数据，每页生成一页缓冲区page_buf，单次I2C整页写入显存</li>\n" +
         "</ol>\n" +
         "<pre><code>// 绘图伪代码\n" +
         "for page in 0 ~ 总页数:\n" +
         "  for col in 0 ~ 图像宽度:\n" +
         "    byte_idx = col / 8\n" +
         "    bit_pos = 7 - (col % 8)\n" +
         "    for bit in 0 ~ 7:\n" +
         "      py = page*8 + bit\n" +
         "      if bitmap[py*行字节数 + byte_idx] & (1 << bit_pos):\n" +
         "        page_buf[col] |= (1 << bit)\n" +
         "  OLED_Set_Pos(x, page)\n" +
         "  I2C_WriteMulti(0x40, page_buf, w)\n" +
         "</code></pre>\n" +
         "<p>优化亮点：一张64×64图片仅8次I2C发包，摒弃逐点4096次低效写入，大幅提升刷新率。</p>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>六、动画数据存储格式</h2>\n" +
         "<table>\n" +
         "<tr><td>总帧数</td><td>28 帧猫咪跳跃画面</td></tr>\n" +
         "<tr><td>单帧尺寸</td><td>64×64 单色像素</td></tr>\n" +
         "<tr><td>单帧字节</td><td>512 Byte</td></tr>\n" +
         "<tr><td>全部动画体积</td><td>14336 Byte ≈ 14 KB</td></tr>\n" +
         "<tr><td>存储位置</td><td><code>const unsigned char cat_jump[28][512]</code>，存放Flash .rodata只读段，不占用SRAM</td></tr>\n" +
         "<tr><td>点阵排布</td><td>行优先打包，单字节最高位对应图像最左侧像素</td></tr>\n" +
         "<tr><td>编译优化</td><td>条件编译宏，仅在main.c实例化一次数组，避免多重定义报错</td></tr>\n" +
         "</table>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>七、主循环动画播放逻辑</h2>\n" +
         "<pre><code>int main(void) {\n" +
         "    uint8_t frame = 0;\n" +
         "    HAL_Init();               // SysTick初始化，提供1ms延时\n" +
         "    SystemClock_Config();      // 配置72MHz系统时钟\n" +
         "    MX_I2C1_Init();            // I2C1外设初始化\n" +
         "    OLED_Init();               // SSD1306屏幕初始化\n" +
         "    OLED_Clear();              // 上电清屏\n" +
         "    while (1) {\n" +
         "        OLED_DrawBitmap(32, 0, cat_jump[frame], 64, 64);\n" +
         "        HAL_Delay(40);         // 单帧间隔40ms\n" +
         "        frame = (frame + 1) % 28;\n" +
         "    }\n" +
         "}\n" +
         "</code></pre>\n" +
         "<ul>\n" +
         "<li>画面居中：x=32，横向居中放置64×64动画</li>\n" +
         "<li>帧率：$1000\\div 40=25\\ \\text{FPS}$</li>\n" +
         "<li>单轮完整动画周期：$28\\times 40=1120\\ \\text{ms}=1.12\\ \\text{s}$</li>\n" +
         "</ul>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>八、内存资源占用明细</h2>\n" +
         "<table>\n" +
         "<tr><th>内存区域</th><th>使用大小</th><th>备注</th></tr>\n" +
         "<tr><td>Flash总占用</td><td>19844 Byte</td><td>芯片总Flash 64KB，占用30.2%</td></tr>\n" +
         "<tr><td>其中动画点阵数据</td><td>14336 Byte</td><td>占固件整体72.3%</td></tr>\n" +
         "<tr><td>程序业务代码</td><td>约5KB</td><td>极简逻辑，冗余代码极少</td></tr>\n" +
         "<tr><td>SRAM总占用</td><td>1768 Byte</td><td>芯片SRAM 20KB，占用8.6%</td></tr>\n" +
         "<tr><td>栈空间</td><td>1024 Byte</td><td>局部变量缓冲区</td></tr>\n" +
         "<tr><td>堆空间</td><td>512 Byte</td><td>动态内存预留</td></tr>\n" +
         "<tr><td>全局静态变量</td><td>约232 Byte</td><td>全局结构体、帧索引变量</td></tr>\n" +
         "</table>\n" +
         "\n" +
         "\n" +
         "\n" +
         "<h2>九、异常调试与稳定性设计</h2>\n" +
         "<p>工程保留STM32标准HardFault异常入口函数，可快速定位：数组越界、指针空指针、堆栈溢出、I2C总线故障、时钟配置错误等嵌入式常见崩溃问题。</p>\n" +
         "<p>配套多重稳化设计：I2C总线自动复位容错、上电延时初始化、显存整页刷新防撕裂、Flash存放动画不占用运行内存，长时间连续运行不易黑屏死机。</p>\n" +
         ""},



  {"id":10,"title":"github访问加速方式<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "Ways to speed up GitHub access<\p>","date":"2025-11-15","category":"教程","tags":["github"],"thumbnail":"img/16.webp","excerpt":"","content":"" +
        "<h2>方式一：UU加速器</h2>打开uu加速器，搜素“学术”二字即可，选择“学术资源”进行加速，不过加速效果不是太好，断联风险较高。" +
        "<img src='img/5.webp' alt='' style='max-width:100%;width:1000px;height:530px;border-radius:8px;margin-bottom:16px;clip-path:inset(0 5px 0 5px);'>" +
        "<h2>方式二：Watt Toolkit加速器</h2>"
  +"Watt Toolkit，旧名 Steam++，是面向 Windows 系统的开源免费多功能游戏辅助工具箱，原生适配 Win10/Win11 全版本，无需付费、无广告捆绑，源码公开可\n" +
        "\n" +
        "自查，安全可靠。 \n" +
        "\n" +
        "核心依托本地智能反代技术，一键优化 Steam 网络环境，彻底解决商店打不开、社区创意工坊加载失败、游戏更新缓慢、人机验证加载异常等常见问题，同步支持\n" +
        "\n" +
        " Epic、Origin、Uplay、GOG、GitHub、Twitch 等平台加速。"+
        "<img src='img/7.webp' alt='' style='max-width:100%;width:1000px;height:600px;border-radius:8px;margin-bottom:16px;clip-path:inset(0 5px 0 5px);'>"},



   {"id":11,"title":"基于Labview的HC-05蓝牙串口无线实时数据采集简易系统的上位机设计<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:40px;\">" +
        "Design of a PC Application for a Simple Labview-Based HC-05 Bluetooth Serial Wireless Real-Time Data Collection System<\p>","date":"2025-11-19","category":"教程","tags":["labview","蓝牙"],"thumbnail":"img/23.jpg" +
         "","excerpt":"","content":"LABVIEW下载参考http://ruanjian.seosichuan.cn/ ，本项目采用2024（64bit）版本" +
        "<h2>前置项目：通过单片机集成DHT11与光敏传感器实现了温度T、湿度H、光照强度L的周期性数据采集，并配置了HC-05无线蓝牙透传模块</h2>"
   +"<h3>labview控件、函数清单</h3>"
   +"$$\n" +
         "\\begin{array}{|c|c|c|c|c|}\n" +
         "\\hline\n" +
         "分类 & 中文名称 & 英文名称 & LabVIEW 库路径 & 核心用途 \\\\\n" +
         "\\hline\n" +
         "\\hline\n" +
         "\\text{前面板控件} & \\text{VISA 资源名称下拉框} & \\text{VISA Resource Name} & \\text{I/O} \\to \\text{VISA Resource Name} & \\text{选择 HC-05 虚拟串口，标准格式ASRLx::INSTR} \\\\\n" +
         "\\hline\n" +
         "\\text{前面板控件} & \\text{字符串显示控件} & \\text{String Indicator} & \\text{String} \\to \\text{String Indicator} & \\text{实时可视化展示蓝牙串口接收数据} \\\\\n" +
         "\\hline\n" +
         "\\text{前面板控件} & \\text{停止布尔按钮} & \\text{Stop Button} & \\text{Boolean} \\to \\text{Stop Button} & \\text{控制 While 循环终止，手动停止采集程序} \\\\\n" +
         "\\hline\n" +
         "\\hline\n" +
         "\\text{框图核心函数} & \\text{VISA 打开} & \\text{VISA Open} & \\text{Instrument I/O} \\to \\text{Serial} \\to \\text{VISA Open} & \\text{建立串口通信会话，生成合法 VISA 句柄} \\\\\n" +
         "\\hline\n" +
         "\\text{框图核心函数} & \\text{VISA 配置串口} & \\text{VISA Configure Serial Port} & \\text{Instrument I/O} \\to \\text{Serial} \\to \\text{VISA Configure Serial Port} & \\text{配置波特率、超时等串口通信参数} \\\\\n" +
         "\\hline\n" +
         "\\text{框图核心函数} & \\text{While 循环结构} & \\text{While Loop} & \\text{Structures} \\to \\text{While Loop} & \\text{持续循环轮询串口，实现数据实时刷新} \\\\\n" +
         "\\hline\n" +
         "\\text{框图核心函数} & \\text{VISA 读取} & \\text{VISA Read} & \\text{Instrument I/O} \\to \\text{Serial} \\to \\text{VISA Read} & \\text{读取蓝牙虚拟 COM 缓冲区的下位机数据} \\\\\n" +
         "\\hline\n" +
         "\\text{框图核心函数} & \\text{VISA 关闭} & \\text{VISA Close} & \\text{Instrument I/O} \\to \\text{Serial} \\to \\text{VISA Close} & \\text{程序结束释放 COM 端口，避免端口占用锁死} \\\\\n" +
         "\\hline\n" +
         "\\hline\n" +
         "\\text{辅助优化函数} & \\text{简易错误处理器} & \\text{Simple Error Handler} & \\text{Dialog \\& User Interface} \\to \\text{Simple Error Handler} & \\text{捕获全链路串口故障，弹窗输出报错信息} \\\\\n" +
         "\\hline\n" +
         "\\hline\n" +
         "\\end{array}\n" +
         "$$\n"+"<h3>蓝牙部署</h3>\n"+"<img src='img/24.png'> "+
   "PC端打开蓝牙连接HC-05，配对密码为1234,\n"+""+"\n打开NI MAX，查看蓝牙连接端口为COM3"+
         "<img src='img/19.png' alt='' style='max-width:100%;border-radius:8px;margin-bottom:16px;clip-path:inset(0 5px 0 5px);'>"
   +"VISA 资源名称模块的下拉框中选择COM3"+"<h2>HC-05 标准串口配置参数表</h2>"+"$$\n" +
         "\\begin{array}{|c|c|c|}\n" +
         "\\hline\n" +
         "\\text{参数项} & \\text{标准数值} & \\text{说明} \\\\\n" +
         "\\hline\n" +
         "\\hline\n" +
         "\\text{波特率 Baud Rate} & 9600 & \\text{固定，不可用 10000 等非标速率，否则通讯失败} \\\\\n" +
         "\\hline\n" +
         "\\text{数据位 Data Bits} & 8 & \\text{通用串口标准} \\\\\n" +
         "\\hline\n" +
         "\\text{停止位 Stop Bits} & 1 & \\text{HC-05 默认配置} \\\\\n" +
         "\\hline\n" +
         "\\text{校验位 Parity} & \\text{无 None} & \\text{不开启奇偶校验} \\\\\n" +
         "\\hline\n" +
         "\\text{硬件流控 Flow Control} & \\text{无 None} & \\text{无需 RTS/CTS 接线，直接忽略} \\\\\n" +
         "\\hline\n" +
         "\\text{串口超时 Timeout} & 10000\\ \\text{ms} & \\text{项目设置 10 秒超时，避免读取卡死} \\\\\n" +
         "\\hline\n" +
         "\\end{array}\n" +
         "$$\n"+"根据表格，在VISA Configure Serial Port配置参数"+"&&\n"+"<h2>VISA Read 模块的字节总数连接常量100</h2>"+"$$\n" +
         "\\text{VISA Read 字节总数(Byte Count)}：单次串口读取允许获取的最大字节上限，本项目固定常量值为100。\n" +
         "$$\n"+"<h2>Labview程序</h2>"+ "<img src='img/20.png'> "+"<h2>输出控件结果</h2>"+"<img src='img/21.png'> "+"<h2>while循环</h2>"+
         "HC-05的数据是周期性采集的，加入while循环函数，对输出控件的值进行周期性更新"+"<img src='img/22.png'> "
         +"<h2>波形图展示的前置条件</h2>" +
        "<h3>单片机的蓝牙程序中，数据包的格式是字符串<code>T:xx H:xx L:xx%</code>，其中xx表示传感器采集的数据</h3>\n" +
         "<h4>字符串不可直接接入“波形图表”控件，必须先转换成数字</h4>\n" +
         "<h4>核心控件：搜索/拆分字符串、截取字符串、十进制数字符串至数值转换、波形图表</h4>\n" +
         "<h4>1、找到“搜索/拆分字符串”控件，将VISA Read读取的原始字符串数据接入到此控件的“字符串”输入端口</h4>\n" +
         "<h4>2、“搜索字符串”端口添加常量<code>:</code>，为英文格式的冒号。此控件有两个输出端口，一个是“匹配之前的子字符串”；另一个是“匹配+匹配之后的字符串”</h4>\n" +
         "<h4>3、已知原始字符串为<code>T:xx H:xx L:xx%</code></h4>\n" +
         "<h4>完成上述步骤之后，“匹配之前的子字符串”端口输出字符串<code>T</code>，“匹配+匹配之后的字符串”端口输出字符串<code>:xx H:xx L:xx%</code></h4>\n" +
         "<h4>4、我们目前先获得温度T的数据，因此需要对<code>:xx H:xx L:xx%</code>字符串再进行一次搜索与拆分动作。4、将匹配+匹配之后的字符串端口接入下一个“搜索/拆分字符串”控件，第二个控件的“搜索字符串”端口添加常量<code> </code>，没错，常量就是空格。</h4>\n" +
         "<h4>6、为什么？</h4>" +
         "首先我们当前已经有<code>:xx H:xx L:xx%</code>，其中<code>:xx</code>后面有一个空格，控件检索到此空格之后，其“匹配之前的子字符串”端口输出这个空格之前的内容，即<code>:xx</code>，于是我们得到了字符T和空格之间的内容，但是冒号怎么消除呢？\n" +
         "</h4>\n" +
         "<h4>7、这里需要用到“截取字符串”这个控件</h4>\n" +
         "<h4>把所得的<code>:xx</code>接入“截取字符串”的“字符串”输入端口，“偏移量”设置为<code>1</code>，则截取到冒号之后的字符串，即温度传感器采集到的数据<code>xx</code></h4>\n" +
         "<img src='img/25.png'>\n" +
         "<h4>得到了<code>xx</code>这个字符串,需要接入“十进制数字符串至数值转换”的“字符串输入端口”，将字符串转换为纯数字，最后此控件的“数字“端口可接入波形图表了</h4>\n" +
         "<h4>注意：若直接使用“截取字符串”模块可以直接消去“T:”部分，此处为了演示稍显复杂。“搜索 / 拆分字符串” 控件的 “偏移量” 代表检索的起始下标。\n" +
         "例：字符串 S = \"hello world\"，偏移量设为 0、搜索字符 l 时，程序从 S \\[0\\] 字符 h 向右遍历，匹配到第一个 l。\n" +
         "该字符串内一共存在三处 l：下标 2、下标 3、下标 9。若想要只检索到第三个 l，需要把偏移量设置为 4；程序从 S \\[4\\] 字符 o 开始向右检索，前两个 l 都在起始位置左侧，不会被匹配，仅能找到下标 9 的第三个 l。\n" +
         "该检索方式可用于蓝牙上传的湿度、光照强度报文截取，完成字符串到数值的转换。</h4>"+
         "<h3>由于短时间内室温变化不大，湿度值能够通过人哈气较大幅度改变，因此这里展示湿度值的波形图：</h3> <img src='img/26.png'> </h2>"+"<h2>BUG修复</h2>"+
         "<h3>VISA 读取写死 100 字节，蓝牙持续发送数据，串口输入缓冲区残留数据不断堆积溢出；程序循环读取后没有清理剩余杂字节，最终导致读取超时错误</h3>"+
         "解决方案：采用2 帧平铺顺序结构，把VISA关闭模块放在第二帧，其余均在第一帧。前面板新增布尔stop按钮，并放置在while循环中。放置事件结构模块，初始事件默认为超时。事件结构模块新增事件，关联stop停止按钮，事件为“值改变”。 <img src='img/27.png'> " +
         "把while循环放置在“超时”事件中，并在”事件结构“左上角设置超时时间常量20"+"VISA打开和读取后分别接入”VISA清空I/O缓冲区“模块"+ "<img src='img/28.png'> "+ "<img src='img/29.png'> "
     +"</p><div style='text-align:center;margin-top:24px;'><a href='download/HC-05 蓝牙.zip' download onclick='return confirm(\"确认下载 HC-05 蓝牙.zip？\")' style='display:inline-block;padding:10px 40px;background:#3b82f6;color:#fff;border-radius:6px;text-decoration:none;font-weight:500;font-size:14px;letter-spacing:1px;'>点击下载项目源码</a></div>"
     +"此项目仅供参考，若改变蓝牙型号或者发送的数据包格式，VISA控件的属性与字符串处理过程必须对应修改...........以下是执行过程的高亮显示"+
         "<video src='img/1.mp4' controls style='max-width:100%;border-radius:8px;margin-bottom:16px;'></video>"

   },






{"id":12,"title":"基于labview的巴特沃斯音频滤波降噪系统<p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "LabVIEW-based Butterworth Audio Filtering and Noise Reduction<\p>","date":"2026-01-15","category":"教程",
  "tags":["巴特沃斯","滤波","labview"],"thumbnail":"img/theme.webp",
  "excerpt":"","content":"" +
        "<h2>1、这是未添加噪音的纯净音乐音频   ↓</h2><audio controls src=\"img/h264_video.wav\" preload=\"none\"></audio>"+
      " <h3>这分别是此音频的时域信号和fft频域信号   ↓</h3><img src='img/不含噪音的纯净音乐.png'> "+"<img src='img/纯净音乐的fft.png'>"+
  "<h2>2、这是添加噪音的待滤波音乐音频（此音频的杂音非常尖锐，下文简称“原始信号”）   ↓</h2><audio controls src=\"img/mix4.wav\" preload=\"none\"></audio>"+
     "<h3>这分别是此音频的时域信号和fft频域信号  ↓</h3><img src='img/原始信号.png'> "+"</h3><img src='img/原始信号的fft.png'>"+
        "<h2>3、这是采用巴特沃斯滤波成功的音乐音频（杂音已经滤除，下文简称“滤波信号”）   ↓</h2><audio controls src=\"img/36-8000高通.wav\" preload=\"none\"></audio>"+
        "<h3>这分别是此音频的时域信号和fft频域信号  ↓</h3><img src='img/滤波信号.png'> "+"</h3><img src='img/滤波信号的fft.png'>"
  +"<h2>滤波过程</h2>"+"<h3>  对比原始信号与纯净信号的fft频谱，可以发现在1650hz~2000hz区间原始信号有明显的高峰，可以认定为噪声信号的能量集中在此频域区间内。</h3>"+
  "  <h3>通过观察，纯净音乐的低频（0~500Hz）能量峰值最高；中频段（500~2700Hz）能量平稳；2700Hz 能量陡降，此频率之后的区间为低频段，大概率是音源本身低通滤波、播放设备高频滚降，或是录音麦克风高频衰减。</h3>"
  +"<h3>可以直接选择高通滤波器，把中频段1650Hz之后的频段全部滤除，对音乐的整体音色与能量影响并不大。</h3>"+"<h2>Labview程序</h2>"+
      "        <img src='img/1784444612887.png'> "+  "<video src='img/151141.mp4' controls style='max-width:100%;border-radius:8px;margin-bottom:16px;'></video>"
        },


  /* {"id":12,"title":"Python 异步编程：async/await","date":"2025-04-20","category":"课程","tags":["Python","异步编程"],"thumbnail":"","excerpt":"从回调函数到 async/await，全面梳理 Python 异步编程演进历程。","content":"<h2>基础用法</h2><pre><code>async def fetch(url):\n    async with aiohttp.ClientSession() as s:\n        return await s.get(url)</code></pre>"},
  {"id":13,"title":"STM32 Flash 自锁与解锁方法","date":"2025-03-12","category":"问题","tags":["STM32","嵌入式"],"thumbnail":"","excerpt":"记录 STM32 Flash 读保护导致芯片被锁的问题及解锁流程。","content":"<h2>原因</h2><p>错误配置选项字节中的读保护等级会导致芯片锁死。</p>"},
  {"id":14,"title":"CH340 串口驱动与 brltty 冲突解决","date":"2025-02-28","category":"问题","tags":["CH340","Linux","驱动"],"thumbnail":"","excerpt":"解决 Linux 下 CH340 串口芯片与 brltty 服务冲突的问题。","content":"<h2>解决方案</h2><pre><code>sudo systemctl stop brltty\nsudo systemctl disable brltty</code></pre>"},
  {"id":15,"title":"Markdown 写作规范与工具推荐","date":"2025-01-10","category":"碎碎念","tags":["Markdown","写作"],"thumbnail":"","excerpt":"总结 Markdown 格式规范与提高文档写作效率的实用工具。","content":"<h2>编辑器对比</h2><p>Typora 沉浸式写作，VS Code 混合编辑，Obsidian 知识库管理。</p>"},
  {"id":16,"title":"PVE 虚拟化平台安装与配置","date":"2024-11-20","category":"记录","tags":["PVE","虚拟化"],"thumbnail":"","excerpt":"Proxmox VE 安装全过程及网卡直通配置实现高性能网络。","content":"<h2>PVE 简介</h2><p>Proxmox Virtual Environment 基于 Debian，同时支持 KVM 和 LXC。</p>"},
  {"id":17,"title":"数据可视化：从 Matplotlib 到 D3.js","date":"2024-10-05","category":"课程","tags":["可视化","Python","JavaScript"],"thumbnail":"","excerpt":"对比 Matplotlib、Plotly、ECharts 和 D3.js 的优势与适用场景。","content":"<h2>Python 生态</h2><p>Matplotlib 是基石，Plotly 支持交互，Seaborn 擅长统计图表。</p>"},
  {"id":18,"title":"GitHub Actions CI/CD 自动部署","date":"2024-09-18","category":"教程","tags":["CI/CD","GitHub Actions"],"thumbnail":"","excerpt":"配置 GitHub Actions 实现 Hexo 博客自动构建与部署。","content":"<h2>配置</h2><pre><code>on: push\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3</code></pre>"},
  {"id":19,"title":"计算机视觉入门：图像处理到检测","date":"2024-08-22","category":"课程","tags":["计算机视觉","OpenCV"],"thumbnail":"","excerpt":"面向初学者的计算机视觉入门指南，从图像滤波到目标检测。","content":"<h2>图像基础</h2><p>OpenCV 提供了丰富的图像处理函数，彩色图 RGB 三通道。</p>"},
  {"id":20,"title":"Shell 脚本编程实用技巧合集","date":"2024-07-30","category":"教程","tags":["Shell","Linux"],"thumbnail":"","excerpt":"整理日常开发中最常用的 Shell 脚本技巧，提高自动化效率。","content":"<h2>参数处理</h2><pre><code>while getopts \"f:o:v\" opt; do\n  case $opt in f) file=$OPTARG ;; esac\ndone</code></pre>"},
  {"id":21,"title":"LaTeX 论文排版模板与技巧","date":"2024-06-15","category":"课程","tags":["LaTeX","论文"],"thumbnail":"","excerpt":"毕业论文 LaTeX 模板配置，含公式编号和参考文献管理。","content":"<h2>模板</h2><pre><code>\\\\documentclass{article}\n\\\\usepackage[UTF8]{ctex}</code></pre>"},
  {"id":22,"title":"树莓派搭建家用 NAS 与媒体服务器","date":"2024-05-10","category":"记录","tags":["树莓派","NAS"],"thumbnail":"","excerpt":"用树莓派 4B 搭建低功耗 NAS，配置 Samba 和 Jellyfin。","content":"<h2>软件</h2><pre><code>sudo apt install samba\nsudo apt install jellyfin</code></pre>"},
  {"id":23,"title":"深入理解 HTTPS：TLS 握手与证书","date":"2024-04-25","category":"教程","tags":["HTTPS","TLS","网络安全"],"thumbnail":"","excerpt":"用 Wireshark 抓包分析 TLS 1.3 握手全过程。","content":"<h2>TLS 1.3</h2><p>仅需 1-RTT 完成握手，Client Hello 携带密钥分享参数。</p>"},
  {"id":24,"title":"MQTT 协议入门与 ESP32 实战","date":"2024-03-18","category":"记录","tags":["MQTT","ESP32","物联网"],"thumbnail":"","excerpt":"从 MQTT 原理讲起，ESP32 通过 MQTT 上传传感器数据。","content":"<h2>MQTT</h2><p>轻量级发布/订阅消息协议，QoS 分 0/1/2 三个等级。</p>"},

<h4></h4>             "<img src='img/24.png'> "
 "<video src='img/1.mp4' controls style='max-width:100%;border-radius:8px;margin-bottom:16px;'></video>"

 "</p><div style='text-align:center;margin-top:24px;'><a href='download/YueXinMiao2.zip' download onclick='return confirm(\"确认下载 YueXinMiao2.zip？\")' style='display:inline-block;padding:10px 40px;background:#3b82f6;color:#fff;border-radius:6px;text-decoration:none;font-weight:500;font-size:14px;letter-spacing:1px;'>点击下载项目源码</a></div>"


 {"id":11,"title":"此处填标题名 <p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "标题英文名<\p>","date":"2025-06-15","category":"教程","tags":["Hexo","建站"],"thumbnail":"img/16.webp","excerpt":"从安装 Node.js 开始，一步步搭建 Hexo 博客并自定义 Butterfly 主题。","content":"" +
        "<h2>方式一：UU加速器</h2>打开uu加速器，搜素“学术”二字即可，选择“学术资源”进行加速，不过加速效果不是太好，断联风险较高。
        <img src='img/5.webp' alt='' style='max-width:100%;width:1000px;height:530px;border-radius:8px;margin-bottom:16px;clip-path:inset(0 5px 0 5px);'>" +
        "<h2>方式二：Watt Toolkit加速器</h2>"
  +"Watt Toolkit，旧名 Steam++，是面向 Windows 系统的开源免费多功能游戏辅助工具箱，原生适配 Win10/Win11 全版本，无需付费、无广告捆绑，源码公开可\n" +
        "\n" +
        "自查，安全可靠。 \n" +
        "\n" +
        "核心依托本地智能反代技术，一键优化 Steam 网络环境，彻底解决商店打不开、社区创意工坊加载失败、游戏更新缓慢、人机验证加载异常等常见问题，同步支持\n" +
        "\n" +
        " Epic、Origin、Uplay、GOG、GitHub、Twitch 等平台加速。"+
        "<img src='img/7.webp' alt='' style='max-width:100%;width:1000px;height:600px;border-radius:8px;margin-bottom:16px;clip-path:inset(0 5px 0 5px);'>"
        },




        {"id":12,"title":"此处填标题名 <p  style=\"font-family:'MonsieurLaDoulaise',serif;font-size:42px;\">" +
        "标题英文名<\p>","date":"2025-06-15","category":"教程","tags":["Hexo","建站"],"thumbnail":"img/16.webp",
  "excerpt":"从安装 Node.js 开始，一步步搭建 Hexo 博客并自定义 Butterfly 主题。","content":"" +
        ""
        },
*/];
