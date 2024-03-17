import{_ as e,r as l,o as r,c as o,e as s,f as n,g as i,a as d}from"./app-Vg0IViah.js";const D="/notes-pages/assets/image-20240120131942213-BTp3a1ng.png",c="/notes-pages/assets/image-20240120132053738-bkbEzOyh.png",p="/notes-pages/assets/image-20240120132335046-DpTHW1VF.png",t="/notes-pages/assets/image-20240120132626029-BPWoa8NC.png",k="/notes-pages/assets/image-20240120133247028-D5aLDKx7.png",m={},h=s("h1",{id:"限流",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#限流"},[s("span",null,"限流")])],-1),v=s("p",null,[s("code",null,"Nginx"),n("主要有两种限流方式：")],-1),u={href:"https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"},g=d(`<h2 id="一、针对请求速率" tabindex="-1"><a class="header-anchor" href="#一、针对请求速率"><span>一、针对请求速率</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">http{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    ...</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">    # 对请求速率限流</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    limit_req_zone </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">$</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">binary_remote_addr</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> zone=myRateLimit:10m rate=5r/s;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    server{</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        location</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> /interface{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">            ...</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">zone=myRateLimit burst=5  nodelay;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_status </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">520;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_log_level </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">info;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>**$binary_remote_addr **：表示基于 <code>remote_addr</code>(客户端IP) 来做限流</li><li><strong>zone=myRateLimit:10m</strong> ：表示使用<code>myRateLimit</code>来作为内存区域（存储访问信息）的名字，大小为10M，1M能存储<code>16000 IP</code>地址的访问信息，10M可以存储<code>16W IP</code>地址访问信息</li><li><strong>rate=5r/s</strong> ：表示相同<code>ip</code>每秒最多请求5次，<code>nginx</code>是精确到毫秒的，也就是说此配置代表每200毫秒处理一个请求，这意味着自上一个请求处理完后，若后续200毫秒内又有请求到达，将拒绝处理该请求</li><li><strong>burst=5</strong> ：设置一个大小为5的缓冲队列，若同时有6个请求到达，<code>Nginx</code> 会处理第一个请求，剩余5个请求将放入队列，然后每隔<code>200ms</code>从队列中获取一个请求进行处理。若请求数大于6，将拒绝处理多余的请求，直接返回503</li><li><strong>nodelay</strong> ：针对的是 <code>burst</code> 参数，<code>burst=5 nodelay</code> 这个配置表示被放到缓冲队列的这5个请求会立马处理，不再是每隔200ms取一个了。但是值得注意的是，即使这5个突发请求立马处理并结束，后续来了请求也不一定不会立马处理，因为虽然请求被处理了但是请求所占的坑并不会被立即释放，而是只能按 200ms 一个来释放，释放一个后才将等待的请求 入队一个</li><li><strong>limit_req_status=520</strong> ：表示当被限流后，<code>nginx</code>的返回码</li><li><strong>limit_req_log_level info</strong> ：代表日志级别</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果不开启<code>nodelay</code>且开启了<code>burst</code>这个配置，那么将会严重影响用户体验（你想想假设<code>burst</code>队列长度为100的话每100ms处理一个,那队列最后那个请求得等10000ms=10s后才能被处理，那不超时才怪呢此时<code>burst</code>已经意义不大了）所以一般情况下建议<code>burst</code>和<code>nodelay</code>结合使用，从而尽可能达到速率稳定</p></div><h3 id="_1、关闭burst-nodelay参数情况" tabindex="-1"><a class="header-anchor" href="#_1、关闭burst-nodelay参数情况"><span>1、关闭burst nodelay参数情况</span></a></h3><p>注释掉 <code>burst=5 nodelay;</code></p><p>该配置意味着每秒最多处理5次同样<code>ip</code>的请求</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">http{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    ...</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">    # 对请求速率限流</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    limit_req_zone </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">$</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">binary_remote_addr</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> zone=myRateLimit:10m rate=5r/s;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    server{</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        location</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> /interface{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">            ...</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">zone=myRateLimit; </span><span style="color:#6A9955;--shiki-dark:#6A9955;"># burst=5  nodelay;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_status </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">520;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_log_level </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">info;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>jmeter</code>设置1个线程循环10次，间隔时间为<code>100ms</code>,效果如下（5成功5失败）：</p><figure><img src="`+D+'" alt="image-20240120131942213" tabindex="0" loading="lazy"><figcaption>image-20240120131942213</figcaption></figure><p>将间隔时间改<code>200ms</code>的话，是都可以成功的，因为一秒最多5次精确到毫秒其实就是最多<code>200ms</code>一次，而<code>200ms</code>一次正好没超过我们配置的 <code>5r/s</code> 的速率</p><figure><img src="'+c+`" alt="image-20240120132053738" tabindex="0" loading="lazy"><figcaption>image-20240120132053738</figcaption></figure><h3 id="_2、开启burst参数情况" tabindex="-1"><a class="header-anchor" href="#_2、开启burst参数情况"><span>2、开启burst参数情况</span></a></h3><p>开启 <code>burst</code>、关闭 <code>nodelay</code></p><p>设置<code>burst=5</code>代表缓冲队列的长度为5，<code>nginx</code>每隔<code>200ms</code>，从缓冲队列拿一个进行处理</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">http{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    ...</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">    # 对请求速率限流</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    limit_req_zone </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">$</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">binary_remote_addr</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> zone=myRateLimit:10m rate=5r/s;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    server{</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        location</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> /interface{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">            ...</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">zone=myRateLimit burst=5; </span><span style="color:#6A9955;--shiki-dark:#6A9955;"># nodelay;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_status </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">520;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_log_level </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">info;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置线程数量为15，每隔<code>100ms</code>一次，效果如下：</p><figure><img src="`+p+`" alt="image-20240120132335046" tabindex="0" loading="lazy"><figcaption>image-20240120132335046</figcaption></figure><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>第一个是被<code>nginx</code>进程直接处理，之后往<code>burst</code>塞了5个（每隔<code>200ms</code>拿一个进行处理）剩下的都被返回了520状态码代表被拒绝了</p></div><h3 id="_3、打开burst-nodelay情况" tabindex="-1"><a class="header-anchor" href="#_3、打开burst-nodelay情况"><span>3、打开burst nodelay情况</span></a></h3><p>打开<code>nodlay</code>的话，代表放到<code>burst</code>队列的请求直接处理 ，不再按速率 <code>200ms/次</code> 拿了</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">http{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    ...</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">    # 对请求速率限流</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    limit_req_zone </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">$</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">binary_remote_addr</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> zone=myRateLimit:10m rate=5r/s;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    server{</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        location</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> /interface{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">            ...</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">zone=myRateLimit burst=5 nodelay;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_status </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">520;</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            limit_req_log_level </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">info;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是配置15个线程，然后每个线程间隔<code>100ms</code>请求一次，看下效果：</p><figure><img src="`+t+`" alt="image-20240120132626029" tabindex="0" loading="lazy"><figcaption>image-20240120132626029</figcaption></figure><p>开启<code>nodelay</code>后响应时间10几秒明显比不开启<code>nodelay</code>快很多，但是请求成功的还是6个，因为<code>nodelay</code>虽然会即时处理，但是释放坑位是<code>200ms</code>释放一个 <code>（也就是说即使开启了nodelay 但释放令牌的速度是不变的）</code> ，所以<code>nodelay</code>参数本质上并没有提高访问速率，而仅仅是让处于<code>burst</code>队列的请求 <strong>被快速处理</strong> 罢了</p><h2 id="二、针对连接数量" tabindex="-1"><a class="header-anchor" href="#二、针对连接数量"><span>二、针对连接数量</span></a></h2><p>针对连接数量的限流和速率不一样，即使你速率是<code>1ms</code>一次，只要你连接数量不超过设置的，那么也访问成功。如果连接数超过设置的值将会请求失败</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">http{</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">    # 针对ip  对请求连接数限流</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    ...</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    limit_conn_zone </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">$</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">binary_remote_addr</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> zone=myConnLimit:10m; </span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    ...</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    server{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">       ...</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">       limit_conn </span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">myConnLimit </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">12</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>limit_conn_zone</strong> ：基于连接数量限流</li><li><strong>$binary_remote_addr</strong> ：限流的对象是<code>ip</code></li><li><strong>zone=myConnLimit:10m</strong> ：名称是<code>myConnLimit</code> 存储空间大小<code>10mb</code></li><li><strong>limit_conn myConnLimit 12</strong> ：表示该<code>ip</code>最大支持12个连接超过则返回503</li></ul><p><code>jmeter</code>搞20个线程，0延迟，效果如下：</p><figure><img src="`+k+'" alt="image-20240120133247028" tabindex="0" loading="lazy"><figcaption>image-20240120133247028</figcaption></figure><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于我们配置的并发数是12，所以20个连接中有8个都被限了</p></div>',32);function b(_,C){const a=l("ExternalLinkIcon");return r(),o("div",null,[h,v,s("ul",null,[s("li",null,[n("按并发连接数限流："),s("a",u,[n("ngx_http_limit_conn_module"),i(a)])]),s("li",null,[n("按请求速率限流："),s("a",y,[n("ngx_http_limit_req_module"),i(a)]),n(" 使用的令牌桶算法")])]),g])}const f=e(m,[["render",b],["__file","Limiting.html.vue"]]),E=JSON.parse('{"path":"/Use/Java/Nginx/Limiting.html","title":"限流","lang":"zh-CN","frontmatter":{"category":"使用篇"},"headers":[{"level":2,"title":"一、针对请求速率","slug":"一、针对请求速率","link":"#一、针对请求速率","children":[{"level":3,"title":"1、关闭burst nodelay参数情况","slug":"_1、关闭burst-nodelay参数情况","link":"#_1、关闭burst-nodelay参数情况","children":[]},{"level":3,"title":"2、开启burst参数情况","slug":"_2、开启burst参数情况","link":"#_2、开启burst参数情况","children":[]},{"level":3,"title":"3、打开burst nodelay情况","slug":"_3、打开burst-nodelay情况","link":"#_3、打开burst-nodelay情况","children":[]}]},{"level":2,"title":"二、针对连接数量","slug":"二、针对连接数量","link":"#二、针对连接数量","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":4.29,"words":1287},"filePathRelative":"Use/Java/Nginx/Limiting.md","localizedDate":"2024年2月19日"}');export{f as comp,E as data};
