import{_ as s,o as a,c as n,a as i}from"./app-Vg0IViah.js";const l={},D=i(`<h1 id="线程间通信" tabindex="-1"><a class="header-anchor" href="#线程间通信"><span>线程间通信</span></a></h1><p>当多个线程可以一起工作去解决某个问题时，如果某些部分必须在其它部分之前完成，那么就需要对线程进行协调。</p><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>join()</span></a></h2><p>A线程调用B线程的<code>join()</code>方法，那么A线程需要等B线程执行完之后才会继续执行</p><p>在线程中调用另一个线程的 <code>join()</code> 方法，会将当前线程挂起，而不是忙等待，直到目标线程结束。</p><p>对于以下代码，虽然 b 线程先启动，但是因为在 b 线程中调用了 a 线程的 <code>join()</code> 方法，b 线程会等待 a 线程结束才继续执行，因此最后能够保证 a 线程的输出先于 b 线程的输出。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> class</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> JoinExample</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    private</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> class</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> A</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> extends</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> Thread</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        @</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">Override</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        public</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> run</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            System</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">out</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">println</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;A&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    private</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> class</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> B</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> extends</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> Thread</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        private</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> A</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> a</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">        B</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">A</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> a</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">            this</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">a</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = a;</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        @</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">Override</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">        public</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> run</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">            try</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">                a</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">join</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">            } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">catch</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> (</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">InterruptedException</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> e</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">                e</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">printStackTrace</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            System</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">out</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">println</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;B&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    public</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> test</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">        A</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> a</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#C586C0;--shiki-dark:#C586C0;">new</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> A</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">        B</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> b</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#C586C0;--shiki-dark:#C586C0;">new</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> B</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(a);</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">        b</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">start</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">        a</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">start</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> static</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> main</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">String</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">[] args) {</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">    JoinExample</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#C586C0;--shiki-dark:#C586C0;">new</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> JoinExample</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">test</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 输出</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">A</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">B</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wait-notify-notifyall" tabindex="-1"><a class="header-anchor" href="#wait-notify-notifyall"><span>wait() notify() notifyAll()</span></a></h2><p>调用 <code>wait()</code> 使得线程等待某个条件满足，线程在等待时会被挂起，当其他线程的运行使得这个条件满足时，其它线程会调用 <code>notify()</code> 或者 <code>notifyAll()</code> 来唤醒挂起的线程。</p><p>它们都属于 <code>Object</code> 的一部分，而不属于 <code>Thread</code>。</p><p>只能用在同步方法或者同步控制块中使用，否则会在运行时抛出 <code>IllegalMonitorStateException</code>。</p><p>使用 <code>wait()</code> 挂起期间，线程会释放锁。这是因为，如果没有释放锁，那么其它线程就无法进入对象的同步方法或者同步控制块中，那么就无法执行 <code>notify()</code> 或者 <code>notifyAll()</code> 来唤醒挂起的线程，造成死锁。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> class</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> WaitNotifyExample</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> synchronized</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> before</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">        System</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">out</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">println</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;before&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">        notifyAll</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> synchronized</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> after</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">        try</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">            wait</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">catch</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> (</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">InterruptedException</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> e</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            e</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">printStackTrace</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">        System</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">out</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">println</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;after&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> static</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> main</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">String</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">[] args) {</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">    ExecutorService</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> executorService</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">Executors</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">newCachedThreadPool</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">    WaitNotifyExample</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#C586C0;--shiki-dark:#C586C0;">new</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> WaitNotifyExample</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    executorService</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">execute</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">-&gt;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">after</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">());</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    executorService</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">execute</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">-&gt;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">before</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">());</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 输出</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">before</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">after</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>wait() 和 sleep() 的区别</strong></p><ul><li><code>wait()</code> 是 <code>Object</code> 的方法，而 <code>sleep()</code> 是 <code>Thread</code> 的静态方法；</li><li><code>wait()</code> 会释放锁，<code>sleep()</code> 不会。</li></ul><h2 id="await-signal-signalall" tabindex="-1"><a class="header-anchor" href="#await-signal-signalall"><span>await() signal() signalAll()</span></a></h2><p><code>java.util.concurrent</code> 类库中提供了 <code>Condition</code> 类来实现线程之间的协调，可以在 <code>Condition</code> 上调用 <code>await()</code> 方法使线程等待，其它线程调用 <code>signal()</code> 或 <code>signalAll()</code> 方法唤醒等待的线程。</p><p>相比于 <code>wait()</code> 这种等待方式，<code>await()</code> 可以指定等待的条件，因此更加灵活。</p><p>使用 <code>Lock</code> 来获取一个 <code>Condition</code> 对象。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> class</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> AwaitSignalExample</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    private</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> Lock</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#C586C0;--shiki-dark:#C586C0;">new</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> ReentrantLock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    private</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> Condition</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> condition</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">newCondition</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    public</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> before</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">        lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">        try</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            System</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">out</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">println</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;before&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            condition</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">signalAll</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">finally</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">unlock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">    public</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> after</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">        lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#C586C0;--shiki-dark:#C586C0;">        try</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            condition</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">await</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            System</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">out</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">println</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#CE9178;--shiki-dark:#CE9178;">&quot;after&quot;</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">catch</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> (</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">InterruptedException</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> e</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            e</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">printStackTrace</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        } </span><span style="color:#C586C0;--shiki-dark:#C586C0;">finally</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">            lock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">unlock</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;--shiki-dark:#569CD6;">public</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> static</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;"> void</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> main</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">String</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">[] args) {</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">    ExecutorService</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> executorService</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">Executors</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">newCachedThreadPool</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#4EC9B0;--shiki-dark:#4EC9B0;">    AwaitSignalExample</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> = </span><span style="color:#C586C0;--shiki-dark:#C586C0;">new</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;"> AwaitSignalExample</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    executorService</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">execute</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">-&gt;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">after</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">());</span></span>
<span class="line"><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;">    executorService</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">execute</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(() </span><span style="color:#569CD6;--shiki-dark:#569CD6;">-&gt;</span><span style="color:#9CDCFE;--shiki-dark:#9CDCFE;"> example</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">.</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">before</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">());</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;">// 输出</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">before</span></span>
<span class="line"><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">after</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),p=[D];function e(r,o){return a(),n("div",null,p)}const k=s(l,[["render",e],["__file","Notify.html.vue"]]),d=JSON.parse('{"path":"/Use/Java/Concurrent/Notify.html","title":"线程间通信","lang":"zh-CN","frontmatter":{"category":"使用篇"},"headers":[{"level":2,"title":"join()","slug":"join","link":"#join","children":[]},{"level":2,"title":"wait() notify() notifyAll()","slug":"wait-notify-notifyall","link":"#wait-notify-notifyall","children":[]},{"level":2,"title":"await() signal() signalAll()","slug":"await-signal-signalall","link":"#await-signal-signalall","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1708873062000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":2}]},"readingTime":{"minutes":2.25,"words":675},"filePathRelative":"Use/Java/Concurrent/Notify.md","localizedDate":"2024年2月19日"}');export{k as comp,d as data};
