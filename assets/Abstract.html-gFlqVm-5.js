import{_ as a,o as s,c as e,a as i}from"./app-Vg0IViah.js";const l="/notes-pages/assets/image-20230901160634613-DaTi16Rg.png",n={},c=i(`<h1 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类"><span>抽象类</span></a></h1><p>抽象类是一种特殊的父类，内部可以编写抽象方法</p><p>抽象方法和抽象类都使用<code>abstract</code>关键字修饰</p><h2 id="一、抽象类" tabindex="-1"><a class="header-anchor" href="#一、抽象类"><span>一、抽象类</span></a></h2><p>如果一个类中存在抽象方法，那么该类就必须声明为抽象类</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 定义格式：public abstract class 类名{}</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> abstract</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> class</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> Fu</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>抽象类不能实例化</li><li>抽象类存在构造方法</li><li>抽象类中可以存在普通方法</li><li>抽象类的子类 <ul><li>要么重写抽象类中的所有抽象方法</li><li>要么是抽象类</li></ul></li></ul><h2 id="二、抽象方法" tabindex="-1"><a class="header-anchor" href="#二、抽象方法"><span>二、抽象方法</span></a></h2><p>抽象方法不可以有方法体，抽象方法要求子类必须重写，除非子类也是抽象类</p><p>将共性的行为（方法）抽取到父类之后，发现该方法的实现逻辑无法在父类中给出具体明确，该方法就可以定义为抽象方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 定义格式：public abstract 返回值类型 方法名(参数列表);</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> abstract</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> method1</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、关键字冲突" tabindex="-1"><a class="header-anchor" href="#三、关键字冲突"><span>三、关键字冲突</span></a></h2><p><code>final</code>：被 <code>abstract</code> 修饰的方法，强制要求子类重写，被 <code>final</code> 修饰的方法子类不能重写</p><p><code>private</code>：被 <code>abstract</code> 修饰的方法，强制要求子类重写，被 <code>private</code> 修饰的方法子类不能重写</p><p><code>static</code>：被 <code>static</code> 修饰的方法可以类名调用，类名调用抽象方法没有意义，因为抽象方法没有方法体</p><h2 id="四、使用场景" tabindex="-1"><a class="header-anchor" href="#四、使用场景"><span>四、使用场景</span></a></h2><figure><img src="`+l+'" alt="image-20230901160634613" tabindex="0" loading="lazy"><figcaption>image-20230901160634613</figcaption></figure>',17),r=[c];function t(d,o){return s(),e("div",null,r)}const h=a(n,[["render",t],["__file","Abstract.html.vue"]]),k=JSON.parse('{"path":"/Grammar/Java/Java/Abstract.html","title":"抽象类","lang":"zh-CN","frontmatter":{"category":"语法"},"headers":[{"level":2,"title":"一、抽象类","slug":"一、抽象类","link":"#一、抽象类","children":[]},{"level":2,"title":"二、抽象方法","slug":"二、抽象方法","link":"#二、抽象方法","children":[]},{"level":2,"title":"三、关键字冲突","slug":"三、关键字冲突","link":"#三、关键字冲突","children":[]},{"level":2,"title":"四、使用场景","slug":"四、使用场景","link":"#四、使用场景","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"Grammar/Java/Java/Abstract.md","localizedDate":"2024年2月19日"}');export{h as comp,k as data};
