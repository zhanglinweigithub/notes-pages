import{_ as e,o,c as i,a as t}from"./app-Vg0IViah.js";const a="/notes-pages/assets/image-20240126215038212-Bei1Jec6.png",c="/notes-pages/assets/image-20240126215058306-CTFrsoha.png",s={},n=t('<h1 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效"><span>索引失效</span></a></h1><p><strong>背景：</strong> 同一条<code>SQL</code>生产环境执行<code>1s</code>，测试环境执行<code>19s</code>，经检查确认生产库走了索引而测试库没有走索引</p><p><strong>排查：</strong></p><ul><li><code>MySQL</code>版本一致：大版本一致</li><li>表结构一致：字段类型、是否可为<code>Null</code>、默认值必须都一致</li><li>数据量一致：相差很小</li><li>索引一致</li><li>索引顺序一致</li><li>甚至索引名称都一致</li></ul><p>使用<code>explain</code>查看<code>SQL</code>执行计划、发现生产和测试走的索引不一致</p><p>尝试使用<code>SQL</code>提示强制指定索引，好家伙，干脆不走索引了</p><p><strong>原因：</strong></p><p>生产库的字符集和排序规则为：<code>utf8mb4_bin</code></p><figure><img src="'+a+'" alt="image-20240126215038212" tabindex="0" loading="lazy"><figcaption>image-20240126215038212</figcaption></figure><p>测试库的字符集和排序规则为：<code>utf8mb4_0900_ai_ci</code></p><figure><img src="'+c+'" alt="image-20240126215058306" tabindex="0" loading="lazy"><figcaption>image-20240126215058306</figcaption></figure><p><strong>解决：</strong></p><p>将两个表的表结构以及字段类型、字段字符集、字段排序规则、索引等全部修改为相同，即解决。</p><blockquote><p>真是个坑，建议最好将两张表的DDL完全一致、包括索引，最好一个字不差</p></blockquote>',14),l=[n];function d(r,p){return o(),i("div",null,l)}const m=e(s,[["render",d],["__file","1.html.vue"]]),_=JSON.parse('{"path":"/BUG/Java/MySQL/1.html","title":"索引失效","lang":"zh-CN","frontmatter":{"category":"BUG"},"headers":[],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"BUG/Java/MySQL/1.md","localizedDate":"2024年2月19日"}');export{m as comp,_ as data};