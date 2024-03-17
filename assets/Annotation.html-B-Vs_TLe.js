import{_ as s,o as a,c as e,a as n}from"./app-Vg0IViah.js";const i={},t=n(`<h1 id="shiro注解" tabindex="-1"><a class="header-anchor" href="#shiro注解"><span>Shiro注解</span></a></h1><p>通过给接口服务方法添加注解可以实现权限校验，可以加在控制器方法上，也可以加 在业务方法上，一般加在控制器方法上。</p><h2 id="一、常用注解" tabindex="-1"><a class="header-anchor" href="#一、常用注解"><span>一、常用注解</span></a></h2><table><thead><tr><th>注解</th><th>作用</th></tr></thead><tbody><tr><td><code>@RequiresAuthentication</code></td><td>验证用户是否登录，等同于方法<code>subject.isAuthenticated()</code></td></tr><tr><td><code>@RequiresUser</code></td><td>验证用户是否被记忆：<br>登录认证成功<code>subject.isAuthenticated()为true</code><br>登录后被记忆<code>subject.isRemembered()为true</code></td></tr><tr><td><code>@RequiresGuest</code></td><td>验证是否是一个<code>guest</code>的请求，是否是游客的请求，此时<code>subject.getPrincipal()为null</code></td></tr><tr><td><code>@RequiresRoles</code></td><td>验证<code>subject</code>是否有相应角色，有角色访问方法，没有则会抛出异常 <code>AuthorizationException</code>。</td></tr><tr><td><code>@RequiresPermissions</code></td><td>验证<code>subject</code>是否有相应权限，有权限访问方法，没有则会抛出异常 <code>AuthorizationException</code>。</td></tr></tbody></table><h2 id="二、使用" tabindex="-1"><a class="header-anchor" href="#二、使用"><span>二、使用</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 具有 admin 角色才能访问</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">@</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">RequiresRoles</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;admin&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">@</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">GetMapping</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;userLoginRoles&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> String</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> userLoginRoles</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">	// 。。。</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 具有 user:delete 权限才能访问</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">@</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">RequiresPermissions</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;user:delete&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">@</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">GetMapping</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;deleteUser&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> String</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> deleteUser</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">	// 。。。</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function o(r,d){return a(),e("div",null,l)}const p=s(i,[["render",o],["__file","Annotation.html.vue"]]),D=JSON.parse('{"path":"/Use/Java/Shiro/Annotation.html","title":"Shiro注解","lang":"zh-CN","frontmatter":{"category":"使用篇"},"headers":[{"level":2,"title":"一、常用注解","slug":"一、常用注解","link":"#一、常用注解","children":[]},{"level":2,"title":"二、使用","slug":"二、使用","link":"#二、使用","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":0.78,"words":235},"filePathRelative":"Use/Java/Shiro/Annotation.md","localizedDate":"2024年2月19日"}');export{p as comp,D as data};