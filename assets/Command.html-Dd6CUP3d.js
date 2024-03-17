import{_ as s,o as a,c as n,a as i}from"./app-Vg0IViah.js";const l={},e=i(`<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>命令比较多，建议使用 <code>CTRL + F</code> 进行搜索</p></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 创建项目文件夹</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">mkdir</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 进入到文件夹里</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">cd</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 初始化Git</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 关联远程仓库, origin可自定义</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> remote</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> add</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> origin</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 仓库地址</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置git" tabindex="-1"><a class="header-anchor" href="#配置git"><span>配置Git</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 用户名</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> config</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --global</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> user.name</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;Your Name&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 邮箱</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> config</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --global</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> user.email</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;email@example.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 生成密钥</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">ssh-keygen</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -t</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> rsa</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -C</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;email@example.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 颜色</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> config</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --global</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> color.ui</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="克隆代码" tabindex="-1"><a class="header-anchor" href="#克隆代码"><span>克隆代码</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 克隆整个仓库</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> clone</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 仓库地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 克隆指定分支代码</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> clone</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -b</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 仓库地址</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用操作" tabindex="-1"><a class="header-anchor" href="#常用操作"><span>常用操作</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 拉取代码</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看本地仓库与远程仓库内容不一样的文件</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 将修改添加到暂存区</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> add</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 文件名</span><span style="color:#6A9955;--shiki-dark:#6A9955;"> # 指定文件</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> add</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> .</span><span style="color:#6A9955;--shiki-dark:#6A9955;"> # 全部</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> add</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -f</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 文件名</span><span style="color:#6A9955;--shiki-dark:#6A9955;"> # -f 为强制添加，可提交.gitignore中配置的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看刚才提交了什么</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> show</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 提交暂存区内容</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> commit</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -m</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;msg&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 将commit到暂存区的文件还原到工作区</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> reset</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 推送到远程仓库</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> push</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> origin</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 将其他分支上的提交应用到当前分支</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> cherry-pick</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> commit的编号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 对比文件改动内容</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> diff</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 文件名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看git日志</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 如果想看到其它分支的提交记录需要先 git pull 一下</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看.gitignore文件中哪条规则写错了</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> check-ignore</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -v</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 文件名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 版本回退到第N个版本前</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> reset</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --hard</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> HEAD~N</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 版本回退(切换)到指定版本</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> reset</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --hard</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 版本号</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> reset</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --hard</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> e475afc93c209a690c39c13a46716e8fa000c366</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工作空间操作" tabindex="-1"><a class="header-anchor" href="#工作空间操作"><span>工作空间操作</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 贮藏更改</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看保存的修改</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 从保存的修改恢复（不会删除）</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> apply</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 若存在多个保存的工作空间(n为序号0开始，不会删除)</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> apply</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash@{n}</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 删除保存的修改</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> drop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 若存在多个保存的工作空间(n为序号0开始)</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> drop</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash@{n}</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 从保存的修改恢复并删除保存的修改</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 若存在多个保存的工作空间(n为序号0开始)</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> pop</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> stash@{n}</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作"><span>分支操作</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 创建分支</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> branch</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看分支</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看所有分支 本地+远程，远程分支会以红色标出，当前分支前面会标一个\`*\`号</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> branch</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 切换分支</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 老版本</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> checkout</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 新版本</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> switch</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 创建分支并切换</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 老版本</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> checkout</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -b</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 新版本</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> switch</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -c</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 删除分支</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> branch</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -d</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 强行删除分支</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> branch</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -D</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 合并分支到当前分支</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> merge</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --no-ff</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -m</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;提交备注&quot;</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 其他分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 将本地分支与远程分支关联</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> branch</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --set-upstream-to</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> 分支名</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> origin/分支名</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签操作" tabindex="-1"><a class="header-anchor" href="#标签操作"><span>标签操作</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes dark-plus dark-plus" style="background-color:#1E1E1E;--shiki-dark-bg:#1E1E1E;color:#D4D4D4;--shiki-dark:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 打标签</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> tag</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> v1.0</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> commit的id</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">不加则为之后的commit添加标签</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> tag</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -a</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> v1.0</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -m</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> &quot;提交备注&quot;</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> commit的id</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">(</span><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">不加则为之后的commit添加标签</span><span style="color:#D4D4D4;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看所有标签</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 查看标签信息</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> show</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> v1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 推送某个标签到远程</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> push</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> origin</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> v1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 推送全部尚未推送的标签</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> push</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> origin</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 删除本地标签</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> tag</span><span style="color:#569CD6;--shiki-dark:#569CD6;"> -d</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> v0.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;--shiki-dark:#6A9955;"># 删除远程标签</span></span>
<span class="line"><span style="color:#DCDCAA;--shiki-dark:#DCDCAA;">git</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> push</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> origin</span><span style="color:#CE9178;--shiki-dark:#CE9178;"> :refs/tags/v1.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[e];function r(d,c){return a(),n("div",null,p)}const k=s(l,[["render",r],["__file","Command.html.vue"]]),t=JSON.parse('{"path":"/Use/Java/Git/Command.html","title":"常用命令","lang":"zh-CN","frontmatter":{"category":"使用篇"},"headers":[{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":2,"title":"配置Git","slug":"配置git","link":"#配置git","children":[]},{"level":2,"title":"克隆代码","slug":"克隆代码","link":"#克隆代码","children":[]},{"level":2,"title":"常用操作","slug":"常用操作","link":"#常用操作","children":[]},{"level":2,"title":"工作空间操作","slug":"工作空间操作","link":"#工作空间操作","children":[]},{"level":2,"title":"分支操作","slug":"分支操作","link":"#分支操作","children":[]},{"level":2,"title":"标签操作","slug":"标签操作","link":"#标签操作","children":[]}],"git":{"createdTime":1708330205000,"updatedTime":1710676914000,"contributors":[{"name":"zhanglinwei","email":"3498729975@qq.com","commits":3}]},"readingTime":{"minutes":2.73,"words":820},"filePathRelative":"Use/Java/Git/Command.md","localizedDate":"2024年2月19日"}');export{k as comp,t as data};
