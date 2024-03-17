import{_ as t}from"./image-20240214133554117-tcoy_Gv4.js";import{_ as e,o as a,c as n,a as i}from"./app-Vg0IViah.js";const s="/notes-pages/assets/image-20240214234609024-CE9APr_N.png",l="/notes-pages/assets/image-20240214235607913-C2-T6zgt.png",r="/notes-pages/assets/image-20240214235930156-CWpPna8E.png",d="/notes-pages/assets/image-20240215000320340-Dp-j9Lp5.png",p="/notes-pages/assets/image-20240215000615505-CEeYlHfu.png",g="/notes-pages/assets/image-20240215000953153-Bhfky0VZ.png",c="/notes-pages/assets/image-20240215001458783-Cq9m7oQY.png",o="/notes-pages/assets/image-20240215002023908-3SeOrUkc.png",h="/notes-pages/assets/image-20240215001844206-DVQopOux.png",m="/notes-pages/assets/image-20240215001547514-zSdTaiUT.png",f={},y=i('<h1 id="操作系统-2" tabindex="-1"><a class="header-anchor" href="#操作系统-2"><span>操作系统 - 2</span></a></h1><figure><img src="'+t+'" alt="image-20240214133554117" tabindex="0" loading="lazy"><figcaption>image-20240214133554117</figcaption></figure><h2 id="一、存储管理" tabindex="-1"><a class="header-anchor" href="#一、存储管理"><span>一、存储管理</span></a></h2><h3 id="_1、页式存储" tabindex="-1"><a class="header-anchor" href="#_1、页式存储"><span>1、页式存储</span></a></h3><p><strong>页式存储是操作系统的一种存储管理方式</strong></p><p>因为我们的程序往往是远远大于内存的，所以程序在执行的时候，是不会一次性把所有内容都装入到内存中，它会把程序分为若干个 <strong>页</strong> ，每个页固定大小，一般是 <strong>4K</strong> ，然后把这些页离散存入到内存中，而内存是按块来划分的，所以就通过页表来进行映射程序中的页在内存中的块的存储；</p><p>进程(程序)中的地址，我们称之为 <strong>逻辑地址</strong> (虚地址)，而内存中的地址我们称之为 <strong>物理地址</strong> (实地址)；</p><p>每个页分为 <strong>页号</strong> 和 <strong>页内地址</strong> ：</p><ul><li>页号用来和块号对应，代表存储的位置，大小可以代表页的数量</li><li>页内地址代表的是存储的数据内容， 大小可以代表数据大小</li></ul><figure><img src="'+s+'" alt="image-20240214234609024" tabindex="0" loading="lazy"><figcaption>image-20240214234609024</figcaption></figure><p><strong>优点：</strong> 利用率高、碎片小（只在最后一个页中有） 、分配及管理简单。</p><p><strong>缺点：</strong> 增加了系统开销， 可能产生抖动现象。</p><h3 id="_2、页面置换算法" tabindex="-1"><a class="header-anchor" href="#_2、页面置换算法"><span>2、页面置换算法</span></a></h3><p>有时候，进程空间分为100个页面，而系统内存只有10个物理块，无法全部满足分配，就需要将马上要执行的页面先分配进去，而后根据算法进行淘汰，使100个页面能够按执行顺序调入物理块中执行完。</p><p>缺页表示需要执行的页不在内存物理块中，需要从外部调入内存，会增加执行时间，因此， <strong>缺页数越多，系统效率越低</strong> 。</p><p><strong>页面置换算法有如下几种：</strong></p><ol><li>最优算法： OPT，理论上的算法，无法实现，是在进程执行完后进行的最佳效率计算，用来让其他算法比较差距。原理是选择未来最长时间内不被访问的页面置换，这样可以保证未来执行的都是马上要访问的。</li><li>先进先出算法： FIFO，先调入内存的页先被置换淘汰，会产生抖动现象，即分配的页数越多，缺页率可能越多（即效率越低）</li><li>最近最少使用： LRU，在最近的过去，进程执行过程中，过去最少使用的页面被置换淘汰，根据局部性原理，这种方式效率高，且不会产生抖动现象。</li></ol><h3 id="_3、快表" tabindex="-1"><a class="header-anchor" href="#_3、快表"><span>3、快表</span></a></h3><p><strong>快表是一块小容量的相联存储器，由快速存储器组成，按内容访问，速度快</strong> ，并且可以从硬件上保证按内容并行查找， 一般用来存放当前访问最频繁的少数活动页面的页号(可以看成是页表的频繁访问数据的副本)。</p><ul><li>快表是将页表存于Cache中</li><li>慢表是将页表存于内存上</li></ul><p>因此慢表需要访问两次内存才能取出数据，而快表是访问一次Cache和一次内存， 因此更快。</p><figure><img src="'+l+'" alt="image-20240214235607913" tabindex="0" loading="lazy"><figcaption>image-20240214235607913</figcaption></figure><h3 id="_4、段式存储" tabindex="-1"><a class="header-anchor" href="#_4、段式存储"><span>4、段式存储</span></a></h3><p>将进程空间分为一个个段，每段也有段号和段内地址， <strong>与页式存储不同的是，每段物理大小不同</strong> ，分段是根据逻辑整体分段的</p><p><strong>地址表示：</strong> （段号， 段内偏移）：其中段内偏移不能超过该段号对应的段长，否则越界错误，而此地址对应的真正内存地址应该是：段号对应的基地址 + 段内偏移。</p><ul><li>优点：程序逻辑完整，修改互不影响</li><li>缺点：内存碎片浪费大，导致内存利用率低</li></ul><figure><img src="'+r+'" alt="image-20240214235930156" tabindex="0" loading="lazy"><figcaption>image-20240214235930156</figcaption></figure><h3 id="_5、段页存储" tabindex="-1"><a class="header-anchor" href="#_5、段页存储"><span>5、段页存储</span></a></h3><p>对进程空间先分段，后分页，具体原理图和优缺点如下：</p><ul><li>优点： 空间浪费小、存储共享容易、能动态连接</li><li>缺点： 由于管理软件的增加，复杂性和开销也增加，执行速度下降</li></ul><figure><img src="'+d+'" alt="image-20240215000320340" tabindex="0" loading="lazy"><figcaption>image-20240215000320340</figcaption></figure><h2 id="二、文件管理" tabindex="-1"><a class="header-anchor" href="#二、文件管理"><span>二、文件管理</span></a></h2><h3 id="_1、文件结构" tabindex="-1"><a class="header-anchor" href="#_1、文件结构"><span>1、文件结构</span></a></h3><p>计算机系统中采用的索引文件结构如下图所示：</p><p>系统中有13个索引节点，0-9为直接索引，即每个索引节点存放的是内容，假设每个物理盘大小为4KB，共可存<code>4KB * 10 = 40KB</code>数据；</p><p>10号索引节点为一级间接索引节点，大小为4KB，存放的并非直接数据，而是链接到直接物理盘块的地址，假设每个地址占4B，则共有1024个地址，对应1024个物理盘，可存 <code>1024 * 4KB = 4098KB</code>数据。</p><p>二级索引节点类似，直接盘存放一级地址，一级地址再存放物理盘快地址，而后链接到存放数据的物理盘块，容量又扩大了一个数量级，为 <code>1024 * 1024 * 4KB</code>数据。</p><figure><img src="'+p+'" alt="image-20240215000615505" tabindex="0" loading="lazy"><figcaption>image-20240215000615505</figcaption></figure><h3 id="_2、树形文件" tabindex="-1"><a class="header-anchor" href="#_2、树形文件"><span>2、树形文件</span></a></h3><p>相对路径：是从当前路径开始的路径。</p><p>绝对路径：是从根目录开始的路径。</p><p>全文件名 = 绝对路径 + 文件名。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>绝对路径和相对路径是不加最后的文件名的，只是单纯的路径序列。</p></div><p>树形结构主要是区分相对路径和绝对路径， 如下图所示：</p><figure><img src="'+g+'" alt="image-20240215000953153" tabindex="0" loading="lazy"><figcaption>image-20240215000953153</figcaption></figure><p>文件属性：R只读文件、A存档属性、S系统文件、H隐藏文件</p><p>文件名的组成：驱动器号、路径、主文件名、扩展名</p><h3 id="_3、空间存储" tabindex="-1"><a class="header-anchor" href="#_3、空间存储"><span>3、空间存储</span></a></h3><p><strong>空闲区表法：</strong> 将所有空闲空间整合成一张表，即空闲文件目录。</p><p><strong>空闲链表法：</strong> 将所有空闲空间链接成一个链表，根据需要分配。</p><p><strong>成组链接法：</strong> 既分组，每组内又链接成链表，是上述两种方法的综合。</p><p><strong>位示图法：</strong> 对每个物理空间用一位标识，为1则使用，为0则空闲，形成 一 张位示图。</p><figure><img src="'+c+'" alt="image-20240215001458783" tabindex="0" loading="lazy"><figcaption>image-20240215001458783</figcaption></figure><h2 id="三、操作系统" tabindex="-1"><a class="header-anchor" href="#三、操作系统"><span>三、操作系统</span></a></h2><h3 id="_1、微内核操作系统" tabindex="-1"><a class="header-anchor" href="#_1、微内核操作系统"><span>1、微内核操作系统</span></a></h3><p>微内核，顾名思义，就是尽可能的将内核做的很小，只将最为核心必要的东西放入内核中，其他能独立的东西都放入用户进程中，这样，系统就被分为了用户态和内核态，如下图所示</p><figure><img src="'+o+'" alt="image-20240215002023908" tabindex="0" loading="lazy"><figcaption>image-20240215002023908</figcaption></figure><table><thead><tr><th></th><th>实质</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>单体内核</td><td>将图形 、设备驱动及文件系统等功能全部在内核中实现，运行在内核状态和同一地址空间</td><td>减少进程间通信和状态切换的系统开销，获得较高的运行效率</td><td>内核庞大，占用资源较多且不易裁剪 。系统的稳定性和安全性 不好</td></tr><tr><td>微内核</td><td>只实现基本功能，将图形系统、文件系统、设备驱动及通信功能放在内核之外。</td><td>内核精炼，便于裁剪和移植。<br>系统服务程序运行在用户地址空间，系统的可靠性稳定性和安全性较高。可用于分布式系统。</td><td>用户状态和内核状态需要频繁切换， 从而导致系统效率不如单体内核</td></tr></tbody></table><h3 id="_2、嵌入式操作系统" tabindex="-1"><a class="header-anchor" href="#_2、嵌入式操作系统"><span>2、嵌入式操作系统</span></a></h3><p>嵌入式操作系统特点： <strong>微型化、代码质量高、专业化、实时性强、可裁剪可配置</strong></p><p>实时嵌入式操作系统的内核服务： <strong>异常和中断、计时器、I/O管理</strong> 。</p><p>常见的嵌入式RTOS（实时操作系统）：<code>VxWorks</code>、<code>RT-Linux</code>、<code>QNX</code>、<code>pSOS</code>。</p><p>嵌入式系统初始化过程按照自底向上、从硬件到软件的次序依次为：芯片级初始化 ==&gt; 板卡级初始化 ==&gt; 系统级初始化。</p><p><strong>芯片级是微处理器的初始化，板卡级是其他硬件设备初始化，系统级初始化就是软件及操作系统初始化。</strong></p><h2 id="四、练习" tabindex="-1"><a class="header-anchor" href="#四、练习"><span>四、练习</span></a></h2><p>1、某计算机系统页面大小为4K， 若进程的页面变换表如下所示， 逻辑地址为十六进制 1D16H 。该地址经过变换后， 其物理地址应为十六进制（） 。</p><table><thead><tr><th style="text-align:center;">页号</th><th style="text-align:center;">块号</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">4</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">6</td></tr></tbody></table><p>A.1024H B.3D16H C.4DI6H D.6D16H</p><details class="hint-container details"><summary>答案</summary><p>B</p><p>1D16H，前面是页号，后面是页内地址，而页内地址代表的是数据，所以是不会变得，排除A选项，因为页号是1，对应的块号为3，故选择B</p></details><p>2、某进程有4个页面，页号为0~3，页面变换表及状态位、访问位和修改位的含义如下图所示，若系统给该进程分配了3个存储块，当访问前页面1不在内存时，淘汰表中页号为（） 的页面代价最小。</p><table><thead><tr><th style="text-align:center;">页号</th><th style="text-align:center;">页帧号</th><th style="text-align:center;">状态位</th><th style="text-align:center;">访问位</th><th style="text-align:center;">修改位</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td style="text-align:center;">6</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;"></td><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">3</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">2</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr></tbody></table><ul><li>状态位：0不存在，1在内存</li><li>访问位：0未访问过，1访问过</li><li>修改位：0未修改过，1修改过</li></ul><p>A.0 B.1 C.2 D.3</p><details class="hint-container details"><summary>答案</summary><p>D</p><p>3号页存在为0的标识位，说明最近未被修改过，故代价最小</p></details><p>3、设某进程的段表如下所示，逻辑地址（）可以转换为对应的物理位置。</p><table><thead><tr><th style="text-align:center;">段号</th><th style="text-align:center;">基地址</th><th style="text-align:center;">段长</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td style="text-align:center;">1598</td><td style="text-align:center;">600</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">486</td><td style="text-align:center;">50</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">90</td><td style="text-align:center;">100</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">1327</td><td style="text-align:center;">2988</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">1952</td><td style="text-align:center;">960</td></tr></tbody></table><p>A.（0， 1597） 、（1，30） 和（3， 1390）</p><p>B. （0， 128） 、（1，30） 和（3， 1390）</p><p>C. （0， 1597） 、（2，98） 和（3， 1390）</p><p>D. （0， 128） 、（2，98） 和（4， 1066）</p><details class="hint-container details"><summary>答案</summary><p>B</p><p>地址表示：（段号， 段内偏移）</p><p>0号段，段长为600， A、C选项第一个选项段长为1597，大于600，所以存不下，排除AC</p><p>D选项的最后一个选项，段长为1066，大于4号段的段长，故存不下，排除D，选择B</p></details><p>4、设文件索引节点中有8个地址项，每个地址项大小为4字节，其中5个地址项为直接地址索引，2个地址项是一级间接地址索引，1个地址项是二级间接地址索引，磁盘索引块和磁盘数据块大小均为1KB，若要访问文件的逻辑块号分别为5和518，则系统应分别采用（） ，而且可表示的单个文件最大长度是（） KB。</p><p>A.直接地址索引和一级间接地址索引 A. 517</p><p>B.直接地址索引和二级间接地址索引 B. 1029</p><p>C.一级间接地址索引和二级间接地址索引 C. 16513</p><p>D.一级间接地址索引和一级间接地址索引 D. 66053</p><details class="hint-container details"><summary>答案</summary><p>CD</p><p>1、由题可知（题目没说，则默认从0开始），0<sub>4为直接索引，5</sub>6为一级索引，7为二级索引</p><p>所以，5号块对应一级索引，排除AB，以及索引存储到 1KB/4B = 256，因为有两个以及索引所以乘2 = 512，在加上5个直接索引 = 517</p><p>所以518在二级索引，选择C</p><p>2、最大长度 = 直接索引 + 一级索引 + 2级索引 = （5）+ （<code>（1KB/4B）*2</code>）+ （<code>256*256*1</code>） = 66053，故选择D</p></details><p>5、若某文件系统的目录结构如下图所示，假设用户要访问文件<code>Fault.swf</code>，且当前工作目录为<code>swshare</code>，则该文件的全文件名为（），相对路径和绝对路径分别为（）。</p><figure><img src="'+h+'" alt="image-20240215001844206" tabindex="0" loading="lazy"><figcaption>image-20240215001844206</figcaption></figure><p>A.<code>fault.swf</code> A.<code>swshare\\flash\\</code>和<code>\\flash\\</code></p><p>B.<code>flash\\fault.swf</code> B.<code>flash</code>和<code> \\swshare\\flash\\</code></p><p>C. <code>swshare\\ flash\\ fault. swf</code> C.<code>\\swshare\\flash\\</code>和<code>flash\\</code></p><p>D.<code>\\swshare\\flash\\fault.swf</code> D.<code>\\flash\\</code>和<code> \\swshare\\flash\\</code></p><details class="hint-container details"><summary>答案</summary><p>DB</p><p>相对路径：是从当前路径开始的路径，不带文件名。</p><p>绝对路径：是从根目录开始的路径，不带文件名。</p><p>全文件名 = 绝对路径 + 文件名。</p></details><p>6、某文件管理系统在磁盘上建立了位示图(bitmap)，记录磁盘的使用情况。若磁盘上的物理块依次编号为： 0、1、2、…， 系统中字长为32位，每一位对应文件存储器上的一个物理块，取值0和1分别表示空闲和占用，如下图所示。</p><figure><img src="'+m+'" alt="image-20240215001547514" tabindex="0" loading="lazy"><figcaption>image-20240215001547514</figcaption></figure><p>假设将4195号物理块分配给某文件，那么该物理块的使用情况在位示图中的第()个字中描述： 系统应该将()</p><p>A.129 A.该字的第3位置“0”</p><p>B.130 B.该字的第3位置“1”</p><p>C.131 C.该字的第4位置“0”</p><p>D.132 D.该字的第4位置“1”</p><details class="hint-container details"><summary>答案</summary><p>DB</p><p>1、因为从0开始，且字长为32位，所以 4195号物理块是第4196个，<code>4196 / 32 = 131.125</code> ，向上取整为132，故选择D</p><p>2、题目说的是第三位而不是第三个位置，因为从0开始，所以第三位表示第四个位置</p><p><code>4196 - （32 * 131）</code>余4，所以，第三位置1，选择B</p></details>',102),x=[y];function _(u,b){return a(),n("div",null,x)}const C=e(f,[["render",_],["__file","OperatingSystem2.html.vue"]]),v=JSON.parse('{"path":"/SoftTest/Conventional/OperatingSystem2.html","title":"操作系统 - 2","lang":"zh-CN","frontmatter":{"order":7,"category":"软考","feed":false,"seo":false},"headers":[{"level":2,"title":"一、存储管理","slug":"一、存储管理","link":"#一、存储管理","children":[{"level":3,"title":"1、页式存储","slug":"_1、页式存储","link":"#_1、页式存储","children":[]},{"level":3,"title":"2、页面置换算法","slug":"_2、页面置换算法","link":"#_2、页面置换算法","children":[]},{"level":3,"title":"3、快表","slug":"_3、快表","link":"#_3、快表","children":[]},{"level":3,"title":"4、段式存储","slug":"_4、段式存储","link":"#_4、段式存储","children":[]},{"level":3,"title":"5、段页存储","slug":"_5、段页存储","link":"#_5、段页存储","children":[]}]},{"level":2,"title":"二、文件管理","slug":"二、文件管理","link":"#二、文件管理","children":[{"level":3,"title":"1、文件结构","slug":"_1、文件结构","link":"#_1、文件结构","children":[]},{"level":3,"title":"2、树形文件","slug":"_2、树形文件","link":"#_2、树形文件","children":[]},{"level":3,"title":"3、空间存储","slug":"_3、空间存储","link":"#_3、空间存储","children":[]}]},{"level":2,"title":"三、操作系统","slug":"三、操作系统","link":"#三、操作系统","children":[{"level":3,"title":"1、微内核操作系统","slug":"_1、微内核操作系统","link":"#_1、微内核操作系统","children":[]},{"level":3,"title":"2、嵌入式操作系统","slug":"_2、嵌入式操作系统","link":"#_2、嵌入式操作系统","children":[]}]},{"level":2,"title":"四、练习","slug":"四、练习","link":"#四、练习","children":[]}],"git":{"createdTime":1710676914000,"updatedTime":1710676914000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":1}]},"readingTime":{"minutes":10.62,"words":3187},"filePathRelative":"SoftTest/Conventional/OperatingSystem2.md","localizedDate":"2024年3月17日"}');export{C as comp,v as data};
