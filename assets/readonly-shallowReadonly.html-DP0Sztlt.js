import{_ as s,o as a,c as n,a as l}from"./app-Vg0IViah.js";const D={},i=l(`<h1 id="readonly、shallowreadonly" tabindex="-1"><a class="header-anchor" href="#readonly、shallowreadonly"><span>readonly、shallowReadonly</span></a></h1><ul><li><code>readonly</code>: 让一个响应式数据变为只读的（深只读）。</li><li><code>shallowReadonly</code>：让一个响应式数据变为只读的（浅只读）。</li><li>应用场景: 不希望数据被修改时</li></ul><h2 id="一、readonly" tabindex="-1"><a class="header-anchor" href="#一、readonly"><span>一、readonly</span></a></h2><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">姓名：{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">年龄：{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">age</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">薪水： {{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">job</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">j1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">salary</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> += </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;!&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">姓名</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">age</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">年龄</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">job</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">j1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">salary</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">薪水</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">sum:{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">sum++</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> setup</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> { </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">readonly</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">reactive</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;vue&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">let</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">5</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">let</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">reactive</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  name:</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;张&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  age:</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 33</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  job:</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    j1:</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">      salary:</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 20</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">readonly</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">); </span><span style="color:#6A9955;--shiki-dark:#6A9955;">// 将 person 变为只读的</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">readonly</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">); </span><span style="color:#6A9955;--shiki-dark:#6A9955;">// 将 sum 变为只读的</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、shallowreadonly" tabindex="-1"><a class="header-anchor" href="#二、shallowreadonly"><span>二、shallowReadonly</span></a></h2><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">姓名：{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">年龄：{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">age</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">薪水： {{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">job</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">j1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">salary</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> += </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;!&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">姓名</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">age</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">年龄</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">job</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">j1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">salary</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">薪水</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">sum:{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">sum++</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> setup</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> { </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">reactive</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">shallowReadonly</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;vue&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">let</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">5</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">let</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">reactive</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  name:</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;张&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  age:</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 33</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  job:</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    j1:</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">      salary:</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 20</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">//将 person 的第一层变为只读的，更深层次的依然是响应式的</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">shallowReadonly</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">//将 sum 的第一层变为只读的，但基本数据类型只有一层，与 readonly 效果一样</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">shallowReadonly</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[i];function o(p,k){return a(),n("div",null,r)}const t=s(D,[["render",o],["__file","readonly-shallowReadonly.html.vue"]]),d=JSON.parse('{"path":"/Grammar/Font/Vue3/readonly-shallowReadonly.html","title":"readonly、shallowReadonly","lang":"zh-CN","frontmatter":{"category":"语法"},"headers":[{"level":2,"title":"一、readonly","slug":"一、readonly","link":"#一、readonly","children":[]},{"level":2,"title":"二、shallowReadonly","slug":"二、shallowreadonly","link":"#二、shallowreadonly","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"Grammar/Font/Vue3/readonly-shallowReadonly.md","localizedDate":"2024年2月19日"}');export{t as comp,d as data};
