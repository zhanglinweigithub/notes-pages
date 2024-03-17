import{_ as r,r as D,o,c as p,g as k,w as l,a as d,e as s,f as a}from"./app-Vg0IViah.js";const c={},t=d(`<h1 id="template" tabindex="-1"><a class="header-anchor" href="#template"><span>Template</span></a></h1><h2 id="一、" tabindex="-1"><a class="header-anchor" href="#一、"><span>一、<code>{{ }}</code></span></a></h2><p>可以在模板中使用<code>JS</code>中暴露的变量、函数且支持<code>JS</code>表达式</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">Message: {{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">msg</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">number</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> + </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">ok</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> ? </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;YES&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> : </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;NO&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">{{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">message</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">split</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">reverse</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">().</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">join</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">{{ </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">toUpper</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;zlw&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) }}</span><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">span</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以合法地写在 <code>return</code> 后面的表达式，都可以使用 <code>{{ }}</code></p></div><h2 id="二、模板引用" tabindex="-1"><a class="header-anchor" href="#二、模板引用"><span>二、模板引用</span></a></h2><h3 id="_1、普通使用" tabindex="-1"><a class="header-anchor" href="#_1、普通使用"><span>1、普通使用</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> setup</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> { </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 声明一个 ref 来存放该元素的引用</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 必须和模板里的 ref 同名</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">const</span><span style="color:#4FC1FF;--shiki-dark:#4FC1FF;"> input</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#569CD6;--shiki-dark:#569CD6;">null</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">=&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">  input</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">value</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">focus</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">input</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;input&quot;</span><span style="color:#808080;--shiki-dark:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>只可以 <strong>在组件挂载后</strong> 才能访问模板引用，在此之前为<code>null</code></p></div><p>如果你需要侦听一个模板引用 <code>ref</code> 的变化，确保考虑到其值为 <code>null</code> 的情况</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">watchEffect</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">=&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">  if</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> (</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">input</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">value</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    input</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">value</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">focus</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">  } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">else</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、v-for-的模板引用" tabindex="-1"><a class="header-anchor" href="#_2、v-for-的模板引用"><span>2、v-for 的模板引用</span></a></h3><p>当在 <code>v-for</code> 中使用模板引用时，对应的 <code>ref</code> 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> setup</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> { </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">const</span><span style="color:#4FC1FF;--shiki-dark:#4FC1FF;"> list</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">([</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">3</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">2</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">3</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">const</span><span style="color:#4FC1FF;--shiki-dark:#4FC1FF;"> itemRefs</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">([])</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">console</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">log</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">itemRefs</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">value</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">=&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">  alert</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">itemRefs</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">value</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">map</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">i</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> =&gt;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> i</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">textContent</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">ul</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">    &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">li</span><span style="color:#C586C0;--shiki-dark:#C586C0;"> v-for</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">item</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> in</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> list</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;itemRefs&quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">      {{ </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">item</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> }}</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">    &lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">li</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">ul</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>ref</code> 数组 <strong>并不</strong> 保证与源数组相同的顺序</p></div><h3 id="_3、组件上的ref" tabindex="-1"><a class="header-anchor" href="#_3、组件上的ref"><span>3、组件上的ref</span></a></h3><p>这种情况下引用中获得的值是组件实例</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> setup</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> { </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">import</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> Child</span><span style="color:#C586C0;--shiki-dark:#C586C0;"> from</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;./Child.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">const</span><span style="color:#4FC1FF;--shiki-dark:#4FC1FF;"> child</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#569CD6;--shiki-dark:#569CD6;">null</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">=&gt;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">  // child.value 是 &lt;Child /&gt; 组件的实例</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">script</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">  &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">Child</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> ref</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;child&quot;</span><span style="color:#808080;--shiki-dark:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">template</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用了 <code>&lt;script setup&gt;</code> 的组件是 <strong>默认私有</strong> 的：一个父组件无法访问到一个使用了 <code>&lt;script setup&gt;</code> 的子组件中的任何东西，除非子组件在其中通过 <code>defineExpose</code> 宏显式暴露</p></div>`,19),C=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("pre",{class:"shiki shiki-themes dark-plus dark-plus",style:{"background-color":"#1E1E1E","--shiki-dark-bg":"#1E1E1E",color:"#D4D4D4","--shiki-dark":"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},"<"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"script"),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}}," setup"),s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0","--shiki-dark":"#C586C0"}},"import"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," { "),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"ref"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},", "),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"onMounted"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," } "),s("span",{style:{color:"#C586C0","--shiki-dark":"#C586C0"}},"from"),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}}," 'vue'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0","--shiki-dark":"#C586C0"}},"import"),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}}," Child"),s("span",{style:{color:"#C586C0","--shiki-dark":"#C586C0"}}," from"),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}}," './Child.vue'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"const"),s("span",{style:{color:"#4FC1FF","--shiki-dark":"#4FC1FF"}}," child"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," = "),s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}},"ref"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"("),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"null"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},")")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}},"onMounted"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"(() "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"=>"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"  console"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}},"log"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"child"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"value"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"  console"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}},"log"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"child"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"value"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"a"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},") "),s("span",{style:{color:"#6A9955","--shiki-dark":"#6A9955"}},"// 1")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"  console"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}},"log"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"child"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"value"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"b"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},") "),s("span",{style:{color:"#6A9955","--shiki-dark":"#6A9955"}},"// 2 ref会自动解包")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"})")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},"</"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"script"),s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},"<"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"template"),s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},"  <"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"Child"),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}}," ref"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}},'"child"'),s("span",{style:{color:"#808080","--shiki-dark":"#808080"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},"</"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"template"),s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},">")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("pre",{class:"shiki shiki-themes dark-plus dark-plus",style:{"background-color":"#1E1E1E","--shiki-dark-bg":"#1E1E1E",color:"#D4D4D4","--shiki-dark":"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},"<"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"script"),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}}," setup"),s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0","--shiki-dark":"#C586C0"}},"import"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," { "),s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"ref"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," } "),s("span",{style:{color:"#C586C0","--shiki-dark":"#C586C0"}},"from"),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}}," 'vue'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"const"),s("span",{style:{color:"#4FC1FF","--shiki-dark":"#4FC1FF"}}," a"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," = "),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}},"1")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"const"),s("span",{style:{color:"#4FC1FF","--shiki-dark":"#4FC1FF"}}," b"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," = "),s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}},"ref"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"("),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}},"2"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},")")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955","--shiki-dark":"#6A9955"}},"// 像 defineExpose 这样的编译器宏不需要导入")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}},"defineExpose"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"  a"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9CDCFE","--shiki-dark":"#9CDCFE"}},"  b")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"})")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},"</"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"script"),s("span",{style:{color:"#808080","--shiki-dark":"#808080"}},">")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=s("p",null,[a("当父组件通过模板引用获取到了该组件的实例时，得到的实例类型为 "),s("code",null,"{ a: number, b: number }"),a(" (ref 都会自动解包，和一般的实例一样)。")],-1);function v(u,E){const e=D("CodeTabs");return o(),p("div",null,[t,k(e,{id:"55",data:[{id:"App.vue"},{id:"Child.vue"}]},{title0:l(({value:i,isActive:n})=>[a("App.vue")]),title1:l(({value:i,isActive:n})=>[a("Child.vue")]),tab0:l(({value:i,isActive:n})=>[C]),tab1:l(({value:i,isActive:n})=>[h]),_:1},8,["data"]),y])}const b=r(c,[["render",v],["__file","Template.html.vue"]]),F=JSON.parse('{"path":"/Use/Font/Vue3/Template.html","title":"Template","lang":"zh-CN","frontmatter":{"category":["使用篇"],"tag":["Vue3使用","Template"]},"headers":[{"level":2,"title":"一、{{  }}","slug":"一、","link":"#一、","children":[]},{"level":2,"title":"二、模板引用","slug":"二、模板引用","link":"#二、模板引用","children":[{"level":3,"title":"1、普通使用","slug":"_1、普通使用","link":"#_1、普通使用","children":[]},{"level":3,"title":"2、v-for 的模板引用","slug":"_2、v-for-的模板引用","link":"#_2、v-for-的模板引用","children":[]},{"level":3,"title":"3、组件上的ref","slug":"_3、组件上的ref","link":"#_3、组件上的ref","children":[]}]}],"git":{"createdTime":1709373238000,"updatedTime":1709384965000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":1.93,"words":580},"filePathRelative":"Use/Font/Vue3/Template.md","localizedDate":"2024年3月2日"}');export{b as comp,F as data};