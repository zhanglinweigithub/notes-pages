import{_ as a,r as i,o as l,c as e,e as s,f as o,g as r,a as p}from"./app-Vg0IViah.js";const D={},d=s("h1",{id:"黑白名单",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#黑白名单"},[s("span",null,"黑白名单")])],-1),c={href:"https://nginx.org/en/docs/http/ngx_http_access_module.html",target:"_blank",rel:"noopener noreferrer"},t=p(`<ul><li><code>allow</code>后配置你的白名单，<code>deny</code>后配置你的黑名单，均可为<code>all</code></li><li><code>ip</code> 可以是<code>ipv4</code> 也可以是<code>ipv6</code> 也可以按照网段来配置</li><li>可以在 <code>http</code>，<code>server</code>，<code>location</code>和<code>limit_except</code>这几个域都可以区别只是作用粒度大小问题</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>nginx</code>建议我们使用 <code>ngx_http_geo_module</code>这个库</p><p><code>ngx_http_geo_module</code>库支持 按地区、国家进行屏蔽，并且提供了<code>IP</code>库，当需要配置的名单比较多或者根据地区国家屏蔽时这个库可以帮上大忙</p></div><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">server</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">	listen </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">8099;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">	</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    location</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> / {</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    	deny </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 192.168.1.1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">; </span><span style="color:#6A9955;--shiki-dark:#6A9955;"># 指定IP</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    	allow </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">192.168.1.0/24; </span><span style="color:#6A9955;--shiki-dark:#6A9955;"># 指定网段</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    	allow </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">10.1.1.0/16;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    	allow </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">2001:0db8::/32; </span><span style="color:#6A9955;--shiki-dark:#6A9955;"># IPV6</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    	deny  all</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">; </span><span style="color:#6A9955;--shiki-dark:#6A9955;"># 全部</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">	}</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>允许任何<code>ip</code>访问前端、禁止<code>127.0.0.2</code>访问后端</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">server</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">	listen </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">8099;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">	</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    location</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> / {</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        root </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">  /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        index </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        </span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        allow </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">all;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">	location</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> /zhang {</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        deny </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">127.0.0.2;</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">        # 不能省略, 否则默认使用http块中的类型，http块默认为下载 application/octet-stream</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        default_type </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">text/plain;</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">		return</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 200</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;success&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">	}</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(h,v){const n=i("ExternalLinkIcon");return l(),e("div",null,[d,s("p",null,[s("a",c,[o("官方文档"),r(n)])]),t])}const y=a(D,[["render",k],["__file","AllowDeny.html.vue"]]),u=JSON.parse('{"path":"/Use/Java/Nginx/AllowDeny.html","title":"黑白名单","lang":"zh-CN","frontmatter":{"category":"使用篇"},"headers":[],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"Use/Java/Nginx/AllowDeny.md","localizedDate":"2024年2月19日"}');export{y as comp,u as data};
