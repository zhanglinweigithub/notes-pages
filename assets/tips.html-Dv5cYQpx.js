import{_ as s,o as a,c as n,a as i}from"./app-Vg0IViah.js";const l={},e=i(`<h1 id="一些使用指南" tabindex="-1"><a class="header-anchor" href="#一些使用指南"><span>一些使用指南</span></a></h1><h2 id="一、markdown-中嵌入视频播放器" tabindex="-1"><a class="header-anchor" href="#一、markdown-中嵌入视频播放器"><span>一、Markdown 中嵌入视频播放器</span></a></h2><p>theme.ts文件</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">plugins</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">    components</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">      // 组件</span></span>
<span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">      components</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;Badge&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;PDF&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;ArtPlayer&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;VidStack&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;FontIcon&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">public目录下的video存放视频，notes-pages是网站根目录base</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">VidStack</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> src</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;/notes-pages/video/20240217_144623.mp4&quot;</span><span style="color:#808080;--shiki-dark:#808080;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、markdown-中嵌入pdf文件" tabindex="-1"><a class="header-anchor" href="#二、markdown-中嵌入pdf文件"><span>二、Markdown 中嵌入PDF文件</span></a></h2><p>theme.ts文件</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">plugins</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">    components</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">      // 组件</span></span>
<span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">      components</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;Badge&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;PDF&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;ArtPlayer&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;VidStack&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;FontIcon&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">public目录下的file存放文件</span></span>
<span class="line"><span style="color:#808080;--shiki-dark:#808080;">&lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">PDF</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> url</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;/file/123.pdf&quot;</span><span style="color:#808080;--shiki-dark:#808080;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、markdown-中嵌入徽章" tabindex="-1"><a class="header-anchor" href="#三、markdown-中嵌入徽章"><span>三、Markdown 中嵌入徽章</span></a></h2><p>theme.ts文件</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">plugins</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">    components</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">      // 组件</span></span>
<span class="line"><span style="color:#C8C8C8;--shiki-dark:#C8C8C8;">      components</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;Badge&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;PDF&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;ArtPlayer&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;VidStack&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">        &quot;FontIcon&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;--shiki-dark:#808080;"> &lt;</span><span style="color:#569CD6;--shiki-dark:#569CD6;">Badge</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> text</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;徽章文字&quot;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> color</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">=</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;#242378&quot;</span><span style="color:#808080;--shiki-dark:#808080;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、一些常用页面-format" tabindex="-1"><a class="header-anchor" href="#四、一些常用页面-format"><span>四、一些常用页面 format</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 你可以自定义封面图片</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">cover: /assets/images/cover1.jpg</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 这是页面的图标</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">icon: file</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 这是侧边栏的顺序</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">order: 1</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 一个页面可以有多个分类</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">category:</span></span>
<span class="line"><span style="color:#6796E6;--shiki-dark:#6796E6;">  -</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> 使用指南</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 一个页面可以有多个标签</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">tag:</span></span>
<span class="line"><span style="color:#6796E6;--shiki-dark:#6796E6;">  -</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> 页面配置</span></span>
<span class="line"><span style="color:#6796E6;--shiki-dark:#6796E6;">  -</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> 使用指南</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 此页面会在文章列表置顶</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">sticky: true</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 此页面会出现在文章收藏中</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">star: true</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 你可以自定义页脚</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">footer: 这是测试显示的页脚</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;font-weight:bold;--shiki-dark-font-weight:bold;"># 你可以自定义版权信息</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">copyright: 无版权</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[e];function d(p,o){return a(),n("div",null,r)}const c=s(l,[["render",d],["__file","tips.html.vue"]]),t=JSON.parse('{"path":"/tips.html","title":"一些使用指南","lang":"zh-CN","frontmatter":{"sidebar":false,"cover":"/assets/images/cover1.jpg","icon":"file","order":1,"category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true,"footer":"这是测试显示的页脚","copyright":"无版权"},"headers":[{"level":2,"title":"一、Markdown 中嵌入视频播放器","slug":"一、markdown-中嵌入视频播放器","link":"#一、markdown-中嵌入视频播放器","children":[]},{"level":2,"title":"二、Markdown 中嵌入PDF文件","slug":"二、markdown-中嵌入pdf文件","link":"#二、markdown-中嵌入pdf文件","children":[]},{"level":2,"title":"三、Markdown 中嵌入徽章","slug":"三、markdown-中嵌入徽章","link":"#三、markdown-中嵌入徽章","children":[]},{"level":2,"title":"四、一些常用页面 format","slug":"四、一些常用页面-format","link":"#四、一些常用页面-format","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708330205000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":1}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"tips.md","localizedDate":"2024年2月19日"}');export{c as comp,t as data};
