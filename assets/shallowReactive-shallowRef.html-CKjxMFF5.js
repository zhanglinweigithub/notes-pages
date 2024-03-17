import{_ as s,o as a,c as l,a as n}from"./app-Vg0IViah.js";const i={},D=n(`<h1 id="shallowreactive、shallowref" tabindex="-1"><a class="header-anchor" href="#shallowreactive、shallowref"><span>shallowReactive、shallowRef</span></a></h1><ul><li><code>shallowReactive</code>：只处理对象最外层属性的响应式（浅响应式）。</li><li><code>shallowRef</code>：只处理基本数据类型的响应式, 不进行对象的响应式处理。</li><li>什么时候使用? <ul><li>如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; <code>shallowReactive</code>。</li><li>如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; <code>shallowRef</code></li></ul></li></ul><h2 id="一、shallowreactive" tabindex="-1"><a class="header-anchor" href="#一、shallowreactive"><span>一、shallowReactive</span></a></h2><p>使用 <code>shallowReactive</code> 定义的响应式对象，只有对象的第一层具有响应式功能，其他不具备</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">姓名：{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">年龄：{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">age</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">薪水： {{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">job</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">j1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">salary</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">  &lt;!-- 会发生变化 --&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">name</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> += </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;!&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">姓名</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">  &lt;!-- 会发生变化 --&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">age</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">年龄</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">  &lt;!-- 不会发生变化 --&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">job</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">j1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">salary</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">薪水</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> setup</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> { </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">shallowReactive</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;vue&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">let</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> person</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">shallowReactive</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  name:</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;张&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  age:</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 33</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  job:</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    j1:</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">      salary:</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 20</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">});</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、shallowref" tabindex="-1"><a class="header-anchor" href="#二、shallowref"><span>二、shallowRef</span></a></h2><ul><li><p>使用 <code>shallowRef</code> 定义的基本类型，具备响应式功能</p></li><li><p>使用 <code>shallowRef</code> 定义的对象类型，不具备响应式功能</p></li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">x:{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">x</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">y: {{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">y</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">x</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">h1</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">  &lt;!-- 会变 --&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">x</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">x++</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">  &lt;!-- 不会变，但是点击完 再去点击 x的 则会替换原有的值 --&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> @</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">click</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">y</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">x</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">++</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">y.x++</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">button</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> setup</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> { </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">shallowRef</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;vue&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">let</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> x</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">shallowRef</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">0</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">let</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> y</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">shallowRef</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  x:</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 5</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">});</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[D];function p(r,e){return a(),l("div",null,o)}const t=s(i,[["render",p],["__file","shallowReactive-shallowRef.html.vue"]]),c=JSON.parse('{"path":"/Grammar/Font/Vue3/shallowReactive-shallowRef.html","title":"shallowReactive、shallowRef","lang":"zh-CN","frontmatter":{"category":"语法"},"headers":[{"level":2,"title":"一、shallowReactive","slug":"一、shallowreactive","link":"#一、shallowreactive","children":[]},{"level":2,"title":"二、shallowRef","slug":"二、shallowref","link":"#二、shallowref","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":1.06,"words":318},"filePathRelative":"Grammar/Font/Vue3/shallowReactive-shallowRef.md","localizedDate":"2024年2月19日"}');export{t as comp,c as data};
