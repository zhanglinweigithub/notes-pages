import{_ as e,r,o,c as k,g as p,w as l,a as c,f as a,e as s}from"./app-Vg0IViah.js";const d={},t=c('<h1 id="mysql表结构设计经验" tabindex="-1"><a class="header-anchor" href="#mysql表结构设计经验"><span>MySQL表结构设计经验</span></a></h1><h2 id="一、自关联表结构" tabindex="-1"><a class="header-anchor" href="#一、自关联表结构"><span>一、自关联表结构</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">CREATE</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> TABLE</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> `</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">organization</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">` (</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `org_id`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> bigint</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">20</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">NOT NULL</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> AUTO_INCREMENT COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;分组ID&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `code`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> varchar</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">50</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">DEFAULT</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> NULL</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;组织编码&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `description`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> varchar</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">1000</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">DEFAULT</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> NULL</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;描述&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `name`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> varchar</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">200</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">DEFAULT</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> NULL</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;组织名称&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `parent_id`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> bigint</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">20</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">DEFAULT</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;"> 0</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;父ID 0为顶级&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `parent_path`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> varchar</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">1000</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">DEFAULT</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;父路径&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `level`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> int</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">20</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">DEFAULT</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;0&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;层级，最大五层，从1开始&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `extra_info`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> text</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;扩展信息&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `gmt_create`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> datetime</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> DEFAULT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> CURRENT_TIMESTAMP,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `gmt_update`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> datetime</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> DEFAULT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> CURRENT_TIMESTAMP </span><span style="color:#569CD6;--shiki-dark:#569CD6;">ON</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> UPDATE</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> CURRENT_TIMESTAMP,</span></span>\n<span class="line"><span style="color:#CE9178;--shiki-dark:#CE9178;">  `delete_flag`</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> tinyint</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">4</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">DEFAULT</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &#39;0&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> COMMENT </span><span style="color:#CE9178;--shiki-dark:#CE9178;">&#39;0&#39;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">  PRIMARY KEY</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> (</span><span style="color:#CE9178;--shiki-dark:#CE9178;">`org_id`</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">  UNIQUE</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> KEY</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> `unq_org_code`</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> (</span><span style="color:#CE9178;--shiki-dark:#CE9178;">`code`</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) </span><span style="color:#569CD6;--shiki-dark:#569CD6;">USING</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> BTREE,</span></span>\n<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) ENGINE=InnoDB AUTO_INCREMENT=</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">1380715</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> DEFAULT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> CHARSET=utf8mb4;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>parent_path</code> 记录了该节点到其顶级父节点的路径 <code>/1/2/3/4,</code> 不包含自身</p></div>',4),h=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"shiki shiki-themes dark-plus dark-plus",style:{"background-color":"#1E1E1E","--shiki-dark-bg":"#1E1E1E",color:"#D4D4D4","--shiki-dark":"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A9955","--shiki-dark":"#6A9955"}},"-- 方式一")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"SELECT")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"	g1.*")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"FROM")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"	organization "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"AS"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," g1")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"WHERE")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"	delete_flag = "),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}},"0")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"AND"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}}," NOT"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}}," EXISTS"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," (")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"	SELECT"),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}}," 1")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"	FROM"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," organization "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"AS"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," g2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"	WHERE"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," g2.parent_id = g1.org_id")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"	AND"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," g2.delete_flag = "),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}},"0")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"if"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," test="),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}},`"req.query != null and req.query != '' "`),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"	and"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," g1.name "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"LIKE"),s("span",{style:{color:"#DCDCAA","--shiki-dark":"#DCDCAA"}}," concat"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}},"'%'"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},", #{req.query}, "),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}},"'%'"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},"</"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"if"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955","--shiki-dark":"#6A9955"}},"-- 方式二")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"SELECT"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," t1.*")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"FROM"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," organization t1")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"LEFT JOIN"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," organization t2 "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"ON"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," t1.org_id = t2.parent_id "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"and"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," t1.delete_flag = "),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}},"0"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}}," and"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," t2.delete_flag = "),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}},"0")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"WHERE"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," t2.org_id "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"IS"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}}," NULL"),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}}," and"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," t1.delete_flag = "),s("span",{style:{color:"#B5CEA8","--shiki-dark":"#B5CEA8"}},"0")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),C=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"shiki shiki-themes dark-plus dark-plus",style:{"background-color":"#1E1E1E","--shiki-dark-bg":"#1E1E1E",color:"#D4D4D4","--shiki-dark":"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A9955","--shiki-dark":"#6A9955"}},"-- 双边%")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"select"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," * "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"from"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," organization")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"where"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," parnet_path "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"like"),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}}," '%指定的根节点ID%'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955","--shiki-dark":"#6A9955"}},"-- 单边%")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"select"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," * "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"from"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," organization")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"where"),s("span",{style:{color:"#D4D4D4","--shiki-dark":"#D4D4D4"}}," parnet_path "),s("span",{style:{color:"#569CD6","--shiki-dark":"#569CD6"}},"like"),s("span",{style:{color:"#CE9178","--shiki-dark":"#CE9178"}}," '/指定的根节点parnetPath/指定的根节点ID/%'")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes dark-plus dark-plus",style:{"background-color":"#1E1E1E","--shiki-dark-bg":"#1E1E1E",color:"#D4D4D4","--shiki-dark":"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"1、将该节点查出来")]),a(`
`),s("span",{class:"line"},[s("span",null,"2、得到齐parnetPath")]),a(`
`),s("span",{class:"line"},[s("span",null,"3、若为空串，则自身就是根")]),a(`
`),s("span",{class:"line"},[s("span",null,"4、若不为空串，则根据 / 分割，得到第一个ID就是根节点ID")]),a(`
`),s("span",{class:"line"},[s("span")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function E(u,v){const D=r("CodeTabs");return o(),k("div",null,[t,p(D,{id:"12",data:[{id:"查询全部叶子节点"},{id:"查询我的全部子节点"},{id:"查询任意节点的根节点"}]},{title0:l(({value:i,isActive:n})=>[a("查询全部叶子节点")]),title1:l(({value:i,isActive:n})=>[a("查询我的全部子节点")]),title2:l(({value:i,isActive:n})=>[a("查询任意节点的根节点")]),tab0:l(({value:i,isActive:n})=>[h]),tab1:l(({value:i,isActive:n})=>[C]),tab2:l(({value:i,isActive:n})=>[y]),_:1})])}const b=e(d,[["render",E],["__file","MySQL.html.vue"]]),A=JSON.parse('{"path":"/Experience/Java/MySQL/MySQL.html","title":"MySQL表结构设计经验","lang":"zh-CN","frontmatter":{"category":"经验"},"headers":[{"level":2,"title":"一、自关联表结构","slug":"一、自关联表结构","link":"#一、自关联表结构","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"Experience/Java/MySQL/MySQL.md","localizedDate":"2024年2月19日"}');export{b as comp,A as data};
