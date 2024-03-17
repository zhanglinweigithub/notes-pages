import{_ as n,r as t,o as i,c as d,e,f as a,g as o,a as s}from"./app-Vg0IViah.js";const l="/notes-pages/assets/image-20240114135119601-BHv_SCus.png",r="/notes-pages/assets/image-20240114135509513-Bpj58gCB.png",h={},p=s('<h1 id="安装elasticsearch" tabindex="-1"><a class="header-anchor" href="#安装elasticsearch"><span>安装ElasticSearch</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>Java8</code>可用<code>ES</code>版本：<code>Elasticsearch 5.0.x ~ Elasticsearch 7.17.x</code></p></div><h2 id="一、windows安装" tabindex="-1"><a class="header-anchor" href="#一、windows安装"><span>一、Windows安装</span></a></h2><h3 id="_1、下载" tabindex="-1"><a class="header-anchor" href="#_1、下载"><span>1、下载</span></a></h3>',4),_=e("code",null,"ElasticSearch",-1),g={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"ik",-1),b={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"Kibana",-1),k={href:"https://www.elastic.co/cn/downloads/kibana",target:"_blank",rel:"noopener noreferrer"},f=s('<div class="hint-container caution"><p class="hint-container-title">警告</p><p><code>ElasticSearch</code>，<code>El</code>，<code>Kibana</code>，版本需要一致，比如<code>ElasticSearch</code>版本是<code>7.12.1</code>，那么<code>El</code>和<code>Kibana</code>的版本也需要是<code>7.12.1</code></p></div><h3 id="_2、安装启动" tabindex="-1"><a class="header-anchor" href="#_2、安装启动"><span>2、安装启动</span></a></h3><p><strong>启动ES</strong></p><p>1）解压<code>ES</code>压缩包 ==&gt; 在<code>plugins</code>目录下新建<code>ik</code>目录 ==&gt; 将下载的<code>ik</code>分词器解压到此目录</p><p>2）进入<code>ES</code>的<code>bin</code>目录 ==&gt; 双击<code>elasticsearch.bat</code>启动<code>ES</code>，默认占用9200端口。</p>',5),E={href:"http://127.0.0.1:9200/",target:"_blank",rel:"noopener noreferrer"},v=s('<figure><img src="'+l+'" alt="image-20240114135119601" tabindex="0" loading="lazy"><figcaption>image-20240114135119601</figcaption></figure><p><strong>启动Kibana</strong></p><p>1）解压<code>Kibana</code>压缩包 ==&gt; 修改<code>config</code>目录下的<code>kibana.yml</code>文件，将如下注释打开，配置为自己的<code>ES</code>地址</p><figure><img src="'+r+'" alt="image-20240114135509513" tabindex="0" loading="lazy"><figcaption>image-20240114135509513</figcaption></figure><p>2）进入<code>Kibana</code>的<code>bin</code>目录 ==&gt; 双击<code>kibana.bat</code>启动<code>Kibana</code>，默认占用5601端口。</p>',5),w={href:"http://127.0.0.1:5601",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"kibana",-1),S=s(`<h3 id="_3、查看安装的插件" tabindex="-1"><a class="header-anchor" href="#_3、查看安装的插件"><span>3、查看安装的插件</span></a></h3><p><code>ES</code>的<code>bin</code>目录下<code>cmd</code>，输入如下命令查看安装的插件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">elasticsearch-plugin</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> list</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function D(C,y){const c=t("ExternalLinkIcon");return i(),d("div",null,[p,e("p",null,[_,a("的"),e("a",g,[a("下载地址"),o(c)])]),e("p",null,[m,a("分词器的"),e("a",b,[a("下载地址"),o(c)])]),e("p",null,[u,a("可视化工具"),e("a",k,[a("下载地址"),o(c)])]),f,e("p",null,[a("启动成功可通过【"),e("a",E,[a("http://127.0.0.1:9200/"),o(c)]),a(" 】访问 ，如下表示成功")]),v,e("p",null,[a("通过浏览器访问 【"),e("a",w,[a("http://127.0.0.1:5601"),o(c)]),a("】即可访问"),x]),S])}const B=n(h,[["render",D],["__file","Install.html.vue"]]),I=JSON.parse('{"path":"/Use/Java/ElasticSearch/Install.html","title":"安装ElasticSearch","lang":"zh-CN","frontmatter":{"order":2,"category":"使用篇"},"headers":[{"level":2,"title":"一、Windows安装","slug":"一、windows安装","link":"#一、windows安装","children":[{"level":3,"title":"1、下载","slug":"_1、下载","link":"#_1、下载","children":[]},{"level":3,"title":"2、安装启动","slug":"_2、安装启动","link":"#_2、安装启动","children":[]},{"level":3,"title":"3、查看安装的插件","slug":"_3、查看安装的插件","link":"#_3、查看安装的插件","children":[]}]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"Use/Java/ElasticSearch/Install.md","localizedDate":"2024年2月19日"}');export{B as comp,I as data};
