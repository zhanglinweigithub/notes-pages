import{_ as s,o as a,c as n,a as i}from"./app-Vg0IViah.js";const l={},D=i(`<h1 id="aggregationbuilders" tabindex="-1"><a class="header-anchor" href="#aggregationbuilders"><span>AggregationBuilders</span></a></h1><h2 id="普通" tabindex="-1"><a class="header-anchor" href="#普通"><span>普通</span></a></h2><p>根据 <code>user_id</code> 聚合，取前100条数据</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">terms</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;user_id_group&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;user_id&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">size</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">100</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 相当于SQL</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">SELECT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user_id </span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">FROM</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user </span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">GROUP</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> BY</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user_id LIMIT </span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">100</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cardinality" tabindex="-1"><a class="header-anchor" href="#cardinality"><span>cardinality</span></a></h2><p>去重统计指定字段数量</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">SearchSourceBuilder</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> sourceBuilder</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#C586C0;--shiki-dark:#C586C0;">new</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> SearchSourceBuilder</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">cardinality</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;distinct_agg&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;age&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">precisionThreshold</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#B5CEA8;--shiki-dark:#B5CEA8;">40000</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">sourceBuilder</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">aggregation</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(aggregation);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 相当于SQL</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">SELECT</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> COUNT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">DISTINCT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> age) </span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">FROM</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于4w以上数据的去重无法达到100%准确度</p><p><code>precisionThreshold</code> 设置精确数量，越高内存消耗越大</p></div><h2 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>count</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">count</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;user_id_count&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;user_id&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 相当于SQL</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">SELECT</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> COUNT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(user_id) </span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">FROM</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sum、avg、max、min" tabindex="-1"><a class="header-anchor" href="#sum、avg、max、min"><span>sum、avg、max、min</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num_sum&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// SELECT SUM(num) FROM user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">avg</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num_avg&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// SELECT AVG(num) FROM user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">max</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num_max&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// SELECT MAX(num) FROM user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">min</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num_min&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// SELECT MIN(num) FROM user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">terms</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;user_id_group&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;user_id&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">); </span><span style="color:#6A9955;--shiki-dark:#6A9955;">// userTermAgg</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">AggregationBuilders</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num_sum&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">).</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">field</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;num&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">); </span><span style="color:#6A9955;--shiki-dark:#6A9955;">// numSumGroup</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">//将sum聚合设为term子聚合</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">userTermAgg</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">subAggregation</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(numSumGroup);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 相当于SQL</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">SELECT</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user_id, </span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">sum</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(num) </span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">FROM</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user </span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">GROUP</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> BY</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> user_id</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[D];function e(o,p){return a(),n("div",null,r)}const k=s(l,[["render",e],["__file","AggregationBuilders.html.vue"]]),c=JSON.parse('{"path":"/Use/Java/ElasticSearch/AggregationBuilders.html","title":"AggregationBuilders","lang":"zh-CN","frontmatter":{"category":"使用篇"},"headers":[{"level":2,"title":"普通","slug":"普通","link":"#普通","children":[]},{"level":2,"title":"cardinality","slug":"cardinality","link":"#cardinality","children":[]},{"level":2,"title":"count","slug":"count","link":"#count","children":[]},{"level":2,"title":"sum、avg、max、min","slug":"sum、avg、max、min","link":"#sum、avg、max、min","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"Use/Java/ElasticSearch/AggregationBuilders.md","localizedDate":"2024年2月19日"}');export{k as comp,c as data};
