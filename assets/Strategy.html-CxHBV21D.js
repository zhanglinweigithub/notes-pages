import{_ as e,o as c,c as d,a as o}from"./app-Vg0IViah.js";const l={},a=o('<h1 id="内存分配与回收策略" tabindex="-1"><a class="header-anchor" href="#内存分配与回收策略"><span>内存分配与回收策略</span></a></h1><h2 id="一、minor-gc-和-full-gc" tabindex="-1"><a class="header-anchor" href="#一、minor-gc-和-full-gc"><span>一、Minor GC 和 Full GC</span></a></h2><ul><li><code>Minor GC</code>：回收新生代，因为新生代对象存活时间很短，因此 <code>Minor GC</code> 会频繁执行，执行的速度一般也会比较快。</li><li><code>Full GC</code>：回收老年代和新生代，老年代对象其存活时间长，因此 <code>Full GC</code> 很少执行，执行速度会比 <code>Minor GC</code> 慢很多。</li></ul><h2 id="二、内存分配策略" tabindex="-1"><a class="header-anchor" href="#二、内存分配策略"><span>二、内存分配策略</span></a></h2><h3 id="_1、对象优先在-eden-分配" tabindex="-1"><a class="header-anchor" href="#_1、对象优先在-eden-分配"><span>1、对象优先在 Eden 分配</span></a></h3><p>大多数情况下，对象在新生代 <code>Eden</code> 上分配，当 <code>Eden</code> 空间不够时，发起 <code>Minor GC</code>。</p><h3 id="_2、大对象直接进入老年代" tabindex="-1"><a class="header-anchor" href="#_2、大对象直接进入老年代"><span>2、大对象直接进入老年代</span></a></h3><p>大对象是指需要连续内存空间的对象，最典型的大对象是那种很长的字符串以及数组。</p><p>经常出现大对象会提前触发垃圾收集以获取足够的连续空间分配给大对象。</p><p><code>-XX:PretenureSizeThreshold</code>，大于此值的对象直接在老年代分配，避免在 <code>Eden</code> 和 <code>Survivor</code> 之间的大量内存复制。</p><h3 id="_3、长期存活的对象进入老年代" tabindex="-1"><a class="header-anchor" href="#_3、长期存活的对象进入老年代"><span>3、长期存活的对象进入老年代</span></a></h3><p>为对象定义年龄计数器，对象在 <code>Eden</code> 出生并经过 <code>Minor GC</code> 依然存活，将移动到 <code>Survivor</code> 中，年龄就增加 1 岁，增加到一定年龄则移动到老年代中。默认15岁进入老年代</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以用<code>-XX:MaxTenuringThreshold</code> 来定义年龄的阈值</p></div><h3 id="_4、动态对象年龄判定" tabindex="-1"><a class="header-anchor" href="#_4、动态对象年龄判定"><span>4、动态对象年龄判定</span></a></h3><p>虚拟机并不是永远要求对象的年龄必须达到 <code>MaxTenuringThreshold</code> 才能晋升老年代，如果在 <code>Survivor</code> 中相同年龄所有对象大小的总和大于 <code>Survivor</code> 空间的一半，则年龄大于或等于该年龄的对象可以直接进入老年代，无需等到 <code>MaxTenuringThreshold</code> 中要求的年龄。</p><h3 id="_5、空间分配担保" tabindex="-1"><a class="header-anchor" href="#_5、空间分配担保"><span>5、空间分配担保</span></a></h3><p>在发生 <code>Minor GC</code> 之前，虚拟机先检查老年代最大可用的连续空间是否大于新生代所有对象总空间，如果条件成立的话，那么 <code>Minor GC</code> 可以确认是安全的。</p><p>如果不成立的话虚拟机会查看 <code>HandlePromotionFailure</code> 的值是否允许担保失败，如果允许那么就会继续检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小，如果大于，将尝试着进行一次 <code>Minor GC</code>；如果小于，或者 <code>HandlePromotionFailure</code> 的值不允许冒险，那么就要进行一次 <code>Full GC</code>。</p><p>如果经过 <code>Full GC</code> 后，空间仍然不够，那么虚拟机会抛出 <code>java.lang.OutOfMemoryError</code>。</p><h2 id="三、full-gc-的触发条件" tabindex="-1"><a class="header-anchor" href="#三、full-gc-的触发条件"><span>三、Full GC 的触发条件</span></a></h2><p>对于 <code>Minor GC</code>，其触发条件非常简单，当 <code>Eden</code> 空间满时，就将触发一次 <code>Minor GC</code>。而 <code>Full GC</code> 则相对复杂，有以下条件：</p><h3 id="_1、调用-system-gc" tabindex="-1"><a class="header-anchor" href="#_1、调用-system-gc"><span>1、调用 System.gc()</span></a></h3><p>只是建议虚拟机执行 <code>Full GC</code>，但是虚拟机不一定真正去执行。不建议使用这种方式，而是让虚拟机管理内存。</p><h3 id="_2-老年代空间不足" tabindex="-1"><a class="header-anchor" href="#_2-老年代空间不足"><span>2. 老年代空间不足</span></a></h3><p>老年代空间不足的常见场景为上面所说的大对象直接进入老年代、长期存活的对象进入老年代等。</p><p>为了避免以上原因引起的 <code>Full GC</code>，应当尽量不要创建过大的对象以及数组。除此之外，可以通过 <code>-Xmn</code> 虚拟机参数调大新生代的大小，让对象尽量在新生代被回收掉，不进入老年代。还可以通过 <code>-XX:MaxTenuringThreshold</code> 调大对象进入老年代的年龄，让对象在新生代多存活一段时间。</p><h3 id="_3-空间分配担保失败" tabindex="-1"><a class="header-anchor" href="#_3-空间分配担保失败"><span>3. 空间分配担保失败</span></a></h3><p>使用复制算法的 <code>Minor GC</code> 需要老年代的内存空间作担保，如果担保失败会执行一次 <code>Full GC</code>。参考上面所说内容。</p><h3 id="_4-jdk-1-7-及以前的永久代空间不足" tabindex="-1"><a class="header-anchor" href="#_4-jdk-1-7-及以前的永久代空间不足"><span>4. JDK 1.7 及以前的永久代空间不足</span></a></h3><p>在 <code>JDK 1.7</code> 及以前，<code>HotSpot</code> 虚拟机中的方法区是用永久代实现的，永久代中存放的为一些 <code>Class</code> 的信息、常量、静态变量等数据。</p><p>当系统中要加载的类、反射的类和调用的方法较多时，永久代可能会被占满，在未配置为采用 <code>CMS GC</code> 的情况下也会执行 <code>Full GC</code>。如果经过 <code>Full GC</code> 仍然回收不了，那么虚拟机会抛出 <code>java.lang.OutOfMemoryError</code>。</p><p>为避免以上原因引起的 <code>Full GC</code>，可采用的方法为增大永久代空间或转为使用 <code>CMS GC</code>。</p><h3 id="_5-concurrent-mode-failure" tabindex="-1"><a class="header-anchor" href="#_5-concurrent-mode-failure"><span>5. Concurrent Mode Failure</span></a></h3><p>执行 <code>CMS GC</code> 的过程中同时有对象要放入老年代，而此时老年代空间不足（可能是 <code>GC</code> 过程中浮动垃圾过多导致暂时性的空间不足），便会报 <code>Concurrent Mode Failure</code> 错误，并触发 <code>Full GC</code>。</p>',34),n=[a];function r(i,t){return c(),d("div",null,n)}const h=e(l,[["render",r],["__file","Strategy.html.vue"]]),p=JSON.parse('{"path":"/Doc/Java/JVM/Strategy.html","title":"内存分配与回收策略","lang":"zh-CN","frontmatter":{"category":"八股文"},"headers":[{"level":2,"title":"一、Minor GC 和 Full GC","slug":"一、minor-gc-和-full-gc","link":"#一、minor-gc-和-full-gc","children":[]},{"level":2,"title":"二、内存分配策略","slug":"二、内存分配策略","link":"#二、内存分配策略","children":[{"level":3,"title":"1、对象优先在 Eden 分配","slug":"_1、对象优先在-eden-分配","link":"#_1、对象优先在-eden-分配","children":[]},{"level":3,"title":"2、大对象直接进入老年代","slug":"_2、大对象直接进入老年代","link":"#_2、大对象直接进入老年代","children":[]},{"level":3,"title":"3、长期存活的对象进入老年代","slug":"_3、长期存活的对象进入老年代","link":"#_3、长期存活的对象进入老年代","children":[]},{"level":3,"title":"4、动态对象年龄判定","slug":"_4、动态对象年龄判定","link":"#_4、动态对象年龄判定","children":[]},{"level":3,"title":"5、空间分配担保","slug":"_5、空间分配担保","link":"#_5、空间分配担保","children":[]}]},{"level":2,"title":"三、Full GC 的触发条件","slug":"三、full-gc-的触发条件","link":"#三、full-gc-的触发条件","children":[{"level":3,"title":"1、调用 System.gc()","slug":"_1、调用-system-gc","link":"#_1、调用-system-gc","children":[]},{"level":3,"title":"2. 老年代空间不足","slug":"_2-老年代空间不足","link":"#_2-老年代空间不足","children":[]},{"level":3,"title":"3. 空间分配担保失败","slug":"_3-空间分配担保失败","link":"#_3-空间分配担保失败","children":[]},{"level":3,"title":"4. JDK 1.7 及以前的永久代空间不足","slug":"_4-jdk-1-7-及以前的永久代空间不足","link":"#_4-jdk-1-7-及以前的永久代空间不足","children":[]},{"level":3,"title":"5. Concurrent Mode Failure","slug":"_5-concurrent-mode-failure","link":"#_5-concurrent-mode-failure","children":[]}]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":3.89,"words":1166},"filePathRelative":"Doc/Java/JVM/Strategy.md","localizedDate":"2024年2月19日"}');export{h as comp,p as data};
