import{_ as s,o as a,c as n,a as i}from"./app-Vg0IViah.js";const l={},e=i(`<h1 id="动态sql条件失效" tabindex="-1"><a class="header-anchor" href="#动态sql条件失效"><span>动态SQL条件失效</span></a></h1><p><strong>xml</strong></p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">select</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> id</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;selectByUserIds&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> resultType</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;com.zhang.entity.Role&quot;</span><span style="color:#808080;--shiki-dark:#808080;"> &gt;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">	select * from sys_user where user_id = #{userId}</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">	&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">if</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> test</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;status != null and status != &#39;&#39; &quot;</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">		status = #{status}</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">	&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">if</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;/</span><span style="color:#569CD6;--shiki-dark:#569CD6;">select</span><span style="color:#808080;--shiki-dark:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>传参</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">userMapper</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">selectByUserIds</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">0</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>sql日志</strong></p><p>可以看到 <code>status</code> 没有拼接上</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">select</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> * </span><span style="color:#569CD6;--shiki-dark:#569CD6;">from</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> sys_user </span><span style="color:#569CD6;--shiki-dark:#569CD6;">where</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user_id = </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h3><p><code>Mybatis</code>对于数值型的参数，如果为0，会当成<code>&#39;&#39;</code>，也就是空串, 所以未生效</p><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h3><p>两种方案</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 1、数值类型只判断 null</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&lt;</span><span style="color:#C586C0;--shiki-dark:#C586C0;">if</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> test=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot; status != null &quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">	status = #{status}</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&lt;/</span><span style="color:#C586C0;--shiki-dark:#C586C0;">if</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 2、传参改为非数值类型</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">userMapper</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">selectByUserIds</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">, </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[e];function t(o,p){return a(),n("div",null,r)}const D=s(l,[["render",t],["__file","1.html.vue"]]),c=JSON.parse('{"path":"/BUG/Java/MyBatisPlus/1.html","title":"动态SQL条件失效","lang":"zh-CN","frontmatter":{"category":"BUG"},"headers":[{"level":3,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":3,"title":"解决","slug":"解决","link":"#解决","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":0.41,"words":124},"filePathRelative":"BUG/Java/MyBatisPlus/1.md","localizedDate":"2024年2月19日"}');export{D as comp,c as data};