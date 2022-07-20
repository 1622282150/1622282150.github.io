import{_ as p,r as l,o as t,a as c,b as n,e,F as r,d as s,c as o}from"./app.41e87ae4.js";const i={},b=n("h1",{id:"git-\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-\u547D\u4EE4","aria-hidden":"true"},"#"),s(" Git \u547D\u4EE4")],-1),m={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"\u5B66\u4E60\u8D44\u6599",-1),g={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},k=s("Git \u5B98\u65B9\u7F51\u7AD9"),d={href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},h=s("\u5E38\u7528 Git \u547D\u4EE4\u6E05\u5355 - \u962E\u4E00\u5CF0"),f={href:"https://github.com/xjh22222228/git-manual",target:"_blank",rel:"noopener noreferrer"},$=s("Git \u5E38\u7528\u547D\u4EE4\u53C2\u8003\u624B\u518C"),v=n("code",null,"GitHub",-1),_={href:"https://lhammer.cn/2018/05/12/git-hot-key/",target:"_blank",rel:"noopener noreferrer"},x=s("\u{1F6E0}Git \u5E38\u7528\u64CD\u4F5C\u603B\u7ED3"),q={href:"https://doc.zdzn.net/cheatsheet/git.html",target:"_blank",rel:"noopener noreferrer"},w=s("Git \u4E2D\u6587\u901F\u67E5\u8868 - ZDZN \u6587\u6863\u6559\u7A0B"),E={href:"https://www.yuque.com/docs/share/e7ad6091-bae2-4764-bf02-f7d35f7b7897?#%20%E3%80%8Agit%20%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E3%80%8B",target:"_blank",rel:"noopener noreferrer"},A=s("Git \u5E38\u7528\u547D\u4EE4 - \u8BED\u96C0"),B={href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"},D=s("Learn Git Branching"),G=n("code",null,"\u5728\u7EBF\u6E38\u620F",-1),N=o(`<h2 id="_1-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6E" aria-hidden="true">#</a> 1. \u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u914D\u7F6E\u4FE1\u606F</span>
$ <span class="token function">git</span> config --list
$ <span class="token function">git</span> config --global -l   // \u67E5\u770B\u5168\u5C40\u914D\u7F6E\u5217\u8868
$ <span class="token function">git</span> config --local -l    // \u67E5\u770B\u5C40\u90E8\u914D\u7F6E\u5217\u8868

<span class="token comment"># \u67E5\u770B\u6240\u6709\u7684\u914D\u7F6E\u4EE5\u53CA\u5B83\u4EEC\u6240\u5728\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> config --list --show-origin

<span class="token comment"># \u4FEE\u6539\u672C\u5730\u9ED8\u8BA4\u5206\u652F master\u53D8\u4E3Amain</span>
$ <span class="token function">git</span> config --global init.defaultBranch main

<span class="token comment"># \u8BBE\u7F6E\u5168\u5C40\u7528\u6237\u540D/\u90AE\u7BB1</span>
$ <span class="token function">git</span> config --global user.name <span class="token string">&quot;\u59D3\u540D&quot;</span>
$ <span class="token function">git</span> config --global user.email <span class="token string">&quot;example@example.com&quot;</span>

<span class="token comment"># \u8BBE\u7F6E\u5F53\u524D\u5DE5\u4F5C\u533A\u4ED3\u5E93\u7528\u6237\u540D/\u90AE\u7BB1</span>
$ <span class="token function">git</span> config --local user.name <span class="token string">&quot;\u59D3\u540D&quot;</span>
$ <span class="token function">git</span> config --local user.email <span class="token string">&quot;example@example.com&quot;</span>

<span class="token comment"># \u68C0\u67E5 git \u7684\u67D0\u4E00\u9879\u914D\u7F6E</span>
$ <span class="token function">git</span> config user.name
$ <span class="token function">git</span> config user.email

<span class="token comment"># \u5220\u9664\u914D\u7F6E</span>
$ <span class="token function">git</span> config --unset --global user.name
$ <span class="token function">git</span> config --unset --global user.email

<span class="token comment"># \u8BB0\u4F4F\u63D0\u4EA4\u8D26\u53F7\u5BC6\u7801, \u4E0B\u6B21\u64CD\u4F5C\u53EF\u514D\u8D26\u53F7\u5BC6\u7801</span>
$ <span class="token function">git</span> config --global credential.helper store   // \u6C38\u4E45
$ <span class="token function">git</span> config --global credential.helper cache   // \u4E34\u65F6\uFF0C\u9ED8\u8BA415\u5206\u949F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_2-\u521D\u59CB\u5316\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u59CB\u5316\u4ED3\u5E93" aria-hidden="true">#</a> 2. \u521D\u59CB\u5316\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F53\u524D\u76EE\u5F55\u751F\u6210 .git \u6587\u4EF6</span>
$ <span class="token function">git</span> init

<span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u88F8\u4ED3\u5E93\uFF0C\u91CC\u9762\u53EA\u6709 .git \u4E0B\u7684\u6240\u6709\u6587\u4EF6</span>
$ <span class="token function">git</span> init --bare

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\u5E76\u521D\u59CB\u5316</span>
$ <span class="token function">git</span> init <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_3-\u514B\u9686\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_3-\u514B\u9686\u9879\u76EE" aria-hidden="true">#</a> 3. \u514B\u9686\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u9879\u76EE</span>
$ <span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># \u514B\u9686\u6240\u6709\u5206\u652F\u5E76\u5207\u6362\u5230 gh-pages \u5206\u652F\u4E0A</span>
$ <span class="token function">git</span> clone -b gh-pages git@github.com:sg996/vue3-todo-list.git

<span class="token comment"># \u514B\u9686\u6307\u5B9A\u5206\u652F --single-branch</span>
$ <span class="token function">git</span> clone -b gh-pages --single-branch git@github.com:sg996/vue3-todo-list.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_4-\u7BA1\u7406\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_4-\u7BA1\u7406\u4ED3\u5E93" aria-hidden="true">#</a> 4. \u7BA1\u7406\u4ED3\u5E93</h2><div class="custom-container tip"><p class="custom-container-title">\u4ECB\u7ECD</p><p><code>git remote</code> \u547D\u4EE4\u7528\u6765\u7BA1\u7406\u8FDC\u7A0B\u4ED3\u5E93\u3002 \u901A\u5E38\u4E00\u4E2A\u9879\u76EE\u5BF9\u5E94\u591A\u4E2A\u4ED3\u5E93\u5C31\u9700\u8981\u7528\u5230 <code>git remote</code>\uFF0C \u6BD4\u5982\u8981\u63A8\u9001\u5230 <code>GitHub</code> / <code>Gitee</code> / <code>GitLab</code>\uFF0C \u5C31\u53EF\u4EE5\u7528 <code>git remote</code> \u6765\u7BA1\u7406\u591A\u4E2A\u4ED3\u5E93\u5730\u5740\u3002 <code>origin</code> \u662F\u4ED3\u5E93\u9ED8\u8BA4\u540D\u5B57\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u9879\u76EE\u8FDC\u7A0B\u4ED3\u5E93\u540D\u79F0</span>
<span class="token comment"># \uFF08\u4E00\u822C\u6253\u5370 origin\uFF0C\u8FD9\u662F\u4ED3\u5E93\u9ED8\u8BA4\u540D\u5B57\uFF0C\u9664\u975E\u6709\u591A\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u3002\uFF09</span>
$ <span class="token function">git</span> remote

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u9879\u76EE\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># \u81EA\u5B9A\u4E49\u8FDC\u7A0B\u4ED3\u5E93\u540D\u79F0\uFF08example \u662F\u81EA\u5B9A\u4E49\u540D\u5B57\uFF09</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>example<span class="token operator">&gt;</span> git@github.com:sg996/vue3-todo-list.git

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F</span>
$ <span class="token function">git</span> remote show <span class="token operator">&lt;</span>example<span class="token operator">&gt;</span>

<span class="token comment"># \u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>oldName<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>newName<span class="token operator">&gt;</span>

<span class="token comment"># \u79FB\u9664\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> remote remove <span class="token operator">&lt;</span>example<span class="token operator">&gt;</span>

<span class="token comment"># \u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\uFF0C\u4ECEHTTPS\u66F4\u6539\u4E3ASSH</span>
$ <span class="token function">git</span> remote set-url origin git@github.com:sg996/vue3-todo-list.git

<span class="token comment"># \u63A8\u9001\u6307\u5B9A\u4ED3\u5E93</span>
$ <span class="token function">git</span> push <span class="token operator">&lt;</span>example<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="_5-\u6682\u5B58\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u6682\u5B58\u6587\u4EF6" aria-hidden="true">#</a> 5. \u6682\u5B58\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6682\u5B58\u6240\u6709</span>
$ <span class="token function">git</span> <span class="token function">add</span> -A

<span class="token comment"># \u6682\u5B58\u67D0\u4E2A\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">add</span> ./README.md

<span class="token comment"># \u6682\u5B58\u5F53\u524D\u76EE\u5F55\u6240\u6709\u6539\u52A8\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u6682\u5B58\u4E00\u7CFB\u5217\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token number">1</span>.txt <span class="token number">2</span>.txt <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_6-\u63D0\u4EA4\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6-\u63D0\u4EA4\u6587\u4EF6" aria-hidden="true">#</a> 6. \u63D0\u4EA4\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u4EA4\u7684\u63CF\u8FF0\u4FE1\u606F</span>
$ <span class="token function">git</span> commit -m <span class="token string">&quot;changes log&quot;</span>

<span class="token comment"># \u53EA\u63D0\u4EA4\u67D0\u4E2A\u6587\u4EF6</span>
$ <span class="token function">git</span> commit README.md -m <span class="token string">&quot;message&quot;</span>

<span class="token comment"># \u63D0\u4EA4\u5E76\u663E\u793Adiff\u53D8\u5316</span>
$ <span class="token function">git</span> commit -v

<span class="token comment"># \u5141\u8BB8\u63D0\u4EA4\u7A7A\u6D88\u606F\uFF0C\u901A\u5E38\u5FC5\u987B\u6307\u5B9A -m \u53C2\u6570</span>
$ <span class="token function">git</span> commit --allow-empty-message

<span class="token comment"># \u91CD\u5199\u4E0A\u4E00\u6B21\u63D0\u4EA4\u4FE1\u606F\uFF0C\u786E\u4FDD\u5F53\u524D\u5DE5\u4F5C\u533A\u6CA1\u6709\u6539\u52A8</span>
$ <span class="token function">git</span> commit --amend -m <span class="token string">&quot;new message&quot;</span>

<span class="token comment"># \u8DF3\u8FC7\u9A8C\u8BC1\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7C7B\u4F3C husky \u5DE5\u5177\u3002</span>
$ <span class="token function">git</span> commit --no-verify -m <span class="token string">&quot;message&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_7-\u63A8\u9001\u8FDC\u7AEF" tabindex="-1"><a class="header-anchor" href="#_7-\u63A8\u9001\u8FDC\u7AEF" aria-hidden="true">#</a> 7. \u63A8\u9001\u8FDC\u7AEF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u63A8\u9001\u5F53\u524D\u5206\u652F</span>
<span class="token comment"># \uFF08\u7B49\u4EF7\u4E8E git push origin\uFF0C\u5B9E\u9645\u4E0A\u63A8\u9001\u5230\u4E00\u4E2A\u53EB origin \u9ED8\u8BA4\u4ED3\u5E93\u540D\u5B57\uFF09</span>
$ <span class="token function">git</span> push

<span class="token comment"># \u63A8\u9001\u5230\u4E3B\u5206\u652F</span>
$ <span class="token function">git</span> push -u origin main

<span class="token comment"># \u672C\u5730\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7AEF\u5206\u652F\uFF0C \u672C\u5730\u5206\u652F:\u8FDC\u7AEF\u5206\u652F</span>
$ <span class="token function">git</span> push origin <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u63A8\u9001, --force \u7F29\u5199</span>
$ <span class="token function">git</span> push -f git@github.com:sg996/vue3-todo-list.git main

<span class="token comment"># \u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7AEF\u5206\u652F\u4E4B\u95F4\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\u5E76\u63A8\u9001</span>
$ <span class="token function">git</span> push --set-upstream origin main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_8-\u67E5\u770B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_8-\u67E5\u770B\u5206\u652F" aria-hidden="true">#</a> 8. \u67E5\u770B\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u5206\u652F</span>
$ <span class="token function">git</span> branch -a

<span class="token comment"># \u67E5\u770B\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> branch

<span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -r

<span class="token comment"># \u67E5\u770B\u672C\u5730\u6240\u5173\u8054\u7684\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -v

<span class="token comment"># \u6253\u5F00\u5B98\u65B9\u5E2E\u52A9\u6587\u6863</span>
$ <span class="token function">git</span> branch --help
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_9-\u5207\u6362\u5206\u652F\u4E00" tabindex="-1"><a class="header-anchor" href="#_9-\u5207\u6362\u5206\u652F\u4E00" aria-hidden="true">#</a> 9. \u5207\u6362\u5206\u652F\u4E00</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F</span>
$ <span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u4E0A\u4E00\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> checkout -

<span class="token comment"># \u5F3A\u5236\u5207\u6362\uFF08\u5982\u679C\u6587\u4EF6\u672A\u4FDD\u5B58\u4FEE\u6539\u4F1A\u76F4\u63A5\u8986\u76D6\u6389\uFF09</span>
$ <span class="token function">git</span> checkout -f main

<span class="token comment"># \u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362</span>
$ <span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u521B\u5EFA\u5206\u652F\uFF08\u4E0D\u5207\u6362\u5206\u652F\uFF09</span>
$ <span class="token function">git</span> checkout -B <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u8FDC\u7A0B\u5206\u652F\uFF08\u5982\u679C\u7528\u4E86 git remote \u6DFB\u52A0\u4E00\u4E2A\u65B0\u4ED3\u5E93\u5C31\u9700\u8981\u7528 -t \u8FDB\u884C\u5207\u6362\uFF09</span>
$ <span class="token function">git</span> checkout -t upstream/main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_10-\u5207\u6362\u5206\u652F\u4E8C" tabindex="-1"><a class="header-anchor" href="#_10-\u5207\u6362\u5206\u652F\u4E8C" aria-hidden="true">#</a> 10. \u5207\u6362\u5206\u652F\u4E8C</h2><div class="custom-container tip"><p class="custom-container-title">\u4ECB\u7ECD</p><p><code>git switch</code> \u547D\u4EE4\u5728 <code>git</code> \u7248\u672C 2.23 \u5F15\u5165, \u7528\u4E8E\u5207\u6362\u5206\u652F\u3002 <code>git checkout</code> \u540C\u6837\u53EF\u4EE5\u5207\u6362\u5206\u652F, <code>git switch</code> \u610F\u4E49\u5728\u54EA\u91CC\uFF1F \u56E0\u4E3A <code>git checkout</code> \u4E0D\u4F46\u53EF\u4EE5\u5207\u6362\u5206\u652F\u8FD8\u53EF\u4EE5\u64A4\u9500\u5DE5\u4F5C\uFF0C\u5BFC\u81F4\u547D\u4EE4\u542B\u7CCA\u4E0D\u6E05\uFF0C\u6240\u4EE5\u5F15\u5165\u4E86 git switch\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F</span>
$ <span class="token function">git</span> switch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> switch -

<span class="token comment"># \u5F3A\u5236\u5207\u6362\uFF08\u5982\u679C\u6587\u4EF6\u672A\u4FDD\u5B58\u4FEE\u6539\u4F1A\u76F4\u63A5\u8986\u76D6\u6389\uFF09</span>
$ <span class="token function">git</span> switch -f main

<span class="token comment"># \u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362</span>
$ <span class="token function">git</span> switch -c <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u521B\u5EFA\u5206\u652F\uFF08\u4E0D\u5207\u6362\u5206\u652F\uFF09</span>
$ <span class="token function">git</span> switch -C <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u8FDC\u7A0B\u5206\u652F\uFF08\u5982\u679C\u7528\u4E86 git remote \u6DFB\u52A0\u4E00\u4E2A\u65B0\u4ED3\u5E93\u5C31\u9700\u8981\u7528 -t \u8FDB\u884C\u5207\u6362\uFF09</span>
$ <span class="token function">git</span> switch -t upstream/main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_11-\u521B\u5EFA\u5206\u652F-\u68C0\u51FA\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_11-\u521B\u5EFA\u5206\u652F-\u68C0\u51FA\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> 11. \u521B\u5EFA\u5206\u652F &amp; \u68C0\u51FA\u8FDC\u7A0B\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u521B\u5EFA\u5206\u652F\uFF08\u4E0D\u8F93\u51FA\u4EFB\u4F55\u8B66\u544A\u6216\u4FE1\u606F\uFF09</span>
$ <span class="token function">git</span> branch -f <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362</span>
$ <span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u521B\u5EFA\u5206\u652F\uFF08\u4E0D\u5207\u6362\u5206\u652F\uFF09</span>
$ <span class="token function">git</span> checkout -B <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362</span>
$ <span class="token function">git</span> switch -c <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u521B\u5EFA\u5206\u652F\uFF08\u4E0D\u5207\u6362\u5206\u652F\uFF09</span>
$ <span class="token function">git</span> switch -C <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u68C0\u51FA\u8FDC\u7A0B\u6240\u6709\u5206\u652F</span>
$ <span class="token function">git</span> fetch

<span class="token comment"># \u68C0\u51FA\u8FDC\u7A0B\u6307\u5B9A\u5206\u652F</span>
$ <span class="token function">git</span> fetch origin :<span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token comment"># \u7B49\u4EF7\u4E8E</span>
$ <span class="token function">git</span> fetch origin master:<span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u65B9\u5F0F\u4E00\uFF1A</span>
$ <span class="token function">git</span> fetch origin <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token comment"># \u65B9\u5F0F\u4E8C\uFF1A</span>
$ <span class="token function">git</span> pull origin <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token comment"># \u63A8\u9001\u9700\u6CE8\u610F</span>
$ <span class="token function">git</span> push --set-upstream origin <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="_12-\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_12-\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> 12. \u5220\u9664\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u6307\u5B9A\u5206\u652F</span>
$ <span class="token function">git</span> branch -d <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u5220\u9664\u672A\u5B8C\u5168\u5408\u5E76\u7684\u5206\u652F</span>
$ <span class="token function">git</span> branch -D <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token comment"># \u7B49\u4EF7\u4E8E</span>
$ <span class="token function">git</span> branch --delete --force <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin :<span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
$ <span class="token function">git</span> push origin --delete <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_13-\u91CD\u547D\u540D\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_13-\u91CD\u547D\u540D\u5206\u652F" aria-hidden="true">#</a> 13. \u91CD\u547D\u540D\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FEE\u6539\u5206\u652F\u540D\u79F0</span>
$ <span class="token function">git</span> branch -m <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u4FEE\u6539\u5206\u652F\u540D\u79F0</span>
$ <span class="token function">git</span> branch -M <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u65E7\u5206\u652F</span>
$ <span class="token function">git</span> push origin :<span class="token operator">&lt;</span>old-branch<span class="token operator">&gt;</span>

<span class="token comment"># \u5C06\u91CD\u547D\u540D\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B</span>
$ <span class="token function">git</span> push -u origin <span class="token operator">&lt;</span>new-branch<span class="token operator">&gt;</span>

<span class="token comment"># \u91CD\u547D\u540D\u6307\u5B9A\u5206\u652F</span>
$ <span class="token function">git</span> branch -m <span class="token operator">&lt;</span>old-branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new-branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_14-\u4E34\u65F6\u4FDD\u5B58" tabindex="-1"><a class="header-anchor" href="#_14-\u4E34\u65F6\u4FDD\u5B58" aria-hidden="true">#</a> 14. \u4E34\u65F6\u4FDD\u5B58</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FDD\u5B58\u5F53\u524D\u4FEE\u6539\u5DE5\u4F5C\u533A\u5185\u5BB9</span>
$ <span class="token function">git</span> stash

<span class="token comment"># \u4FDD\u5B58\u65F6\u6DFB\u52A0\u6CE8\u91CA\uFF08\u63A8\u8350\u4F7F\u7528\u6B64\u547D\u4EE4\uFF09</span>
$ <span class="token function">git</span> stash save <span class="token string">&quot;\u4FEE\u6539\u4E86#28 Bug&quot;</span>

<span class="token comment"># \u4FDD\u5B58\u5305\u542B\u6CA1\u6709\u88ABgit\u8FFD\u8E2A\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> stash -u

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u4FDD\u5B58\u5217\u8868</span>
$ <span class="token function">git</span> stash list

<span class="token comment"># \u6062\u590D\u4FEE\u6539\u5DE5\u4F5C\u533A\u5185\u5BB9\uFF0C\u4F1A\u4ECE git stash list \u79FB\u9664\u6389</span>
<span class="token comment"># \u6062\u590D\u6700\u8FD1\u4E00\u6B21\u4FDD\u5B58\u5185\u5BB9\u5230\u5DE5\u4F5C\u533A\uFF0C\u9ED8\u8BA4\u4F1A\u628A\u6682\u5B58\u533A\u7684\u6539\u52A8\u6062\u590D\u5230\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> stash pop
<span class="token comment"># \u6062\u590D\u6307\u5B9A id\uFF0C\u901A\u8FC7 git stash list \u53EF\u67E5\u5230</span>
$ <span class="token function">git</span> stash pop stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token comment"># \u6062\u590D\u6700\u8FD1\u4E00\u6B21\u4FDD\u5B58\u5185\u5BB9\u5230\u5DE5\u4F5C\u533A\uFF0C\u4F46\u5982\u679C\u662F\u6682\u5B58\u533A\u7684\u5185\u5BB9\u540C\u6837\u6062\u590D\u5230\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> stash pop --index

<span class="token comment"># \u4E0E pop \u547D\u4EE4\u4E00\u81F4\uFF0C\u552F\u4E00\u4E0D\u540C\u7684\u662F\u4E0D\u4F1A\u79FB\u9664\u4FDD\u5B58\u5217\u8868</span>
$ <span class="token function">git</span> stash apply

<span class="token comment"># \u6E05\u7A7A\u6240\u6709\u4FDD\u5B58</span>
$ <span class="token function">git</span> stash <span class="token function">clear</span>

<span class="token comment"># \u6E05\u7A7A\u6307\u5B9A stash id\uFF0C\u5982\u679C drop \u540E\u9762\u4E0D\u6307\u5B9Aid\u6E05\u9664\u6700\u8FD1\u7684\u4E00\u6B21</span>
$ <span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>
<span class="token comment"># \u6E05\u9664\u6700\u8FD1\u4E00\u6B21</span>
$ <span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_15-\u6587\u4EF6\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_15-\u6587\u4EF6\u72B6\u6001" aria-hidden="true">#</a> 15. \u6587\u4EF6\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B8C\u6574\u67E5\u770B\u6587\u4EF6\u72B6\u6001</span>
$ <span class="token function">git</span> status

<span class="token comment"># \u4EE5\u77ED\u683C\u5F0F\u7ED9\u51FA\u8F93\u51FA</span>
$ <span class="token function">git</span> status -s

<span class="token comment"># \u5FFD\u7565\u5B50\u6A21\u5757</span>
$ <span class="token function">git</span> status --ignore-submodules

<span class="token comment"># \u663E\u793A\u5DF2\u5FFD\u7565\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> status --ignored
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_16-\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_16-\u65E5\u5FD7" aria-hidden="true">#</a> 16. \u65E5\u5FD7</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5B8C\u6574\u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55</span>
$ <span class="token function">git</span> log

<span class="token comment"># \u67E5\u770B\u524DN\u6B21\u63D0\u4EA4\u8BB0\u5F55 commit message</span>
$ <span class="token function">git</span> log -2

<span class="token comment"># \u67E5\u770B\u524DN\u6B21\u63D0\u4EA4\u8BB0\u5F55\uFF0C\u5305\u62ECdiff</span>
$ <span class="token function">git</span> log -p -2

<span class="token comment"># \u4ECE commit \u8FDB\u884C\u641C\u7D22, \u53EF\u4EE5\u6307\u5B9A -i \u5FFD\u7565\u5927\u5C0F\u5199</span>
$ <span class="token function">git</span> log -i --grep<span class="token operator">=</span><span class="token string">&quot;fix: #28&quot;</span>

<span class="token comment"># \u4ECE\u5DE5\u4F5C\u76EE\u5F55\u641C\u7D22\u5305\u542B alert(1) \u8FD9\u6BB5\u4EE3\u7801\u4F55\u65F6\u5F15\u5165</span>
$ <span class="token function">git</span> log -S <span class="token string">&quot;alert(1)&quot;</span>

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u4F5C\u8005\u5386\u53F2\u8BB0\u5F55</span>
$ <span class="token function">git</span> log --author<span class="token operator">=</span>\u6E90\u4EE3\u7801

<span class="token comment"># \u67E5\u770B\u67D0\u4E2A\u6587\u4EF6\u7684\u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55</span>
$ <span class="token function">git</span> log README.md

<span class="token comment"># \u53EA\u663E\u793A\u5408\u5E76\u65E5\u5FD7</span>
$ <span class="token function">git</span> log --merges

<span class="token comment"># \u4EE5\u56FE\u5F62\u67E5\u770B\u65E5\u5FD7\u8BB0\u5F55, --oneline \u53EF\u9009</span>
$ <span class="token function">git</span> log --graph --oneline

<span class="token comment"># \u4EE5\u5012\u5E8F\u67E5\u770B\u5386\u53F2\u8BB0\u5F55</span>
$ <span class="token function">git</span> log --reverse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><blockquote><p>git shortlog \u4EE5\u7B80\u77ED\u7684\u5F62\u5F0F\u8F93\u51FA\u65E5\u5FD7\uFF0C\u901A\u5E38\u7528\u4E8E\u7EDF\u8BA1\u8D21\u732E\u8005\u4EE3\u7801\u91CF\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u4EE5\u8D21\u732E\u8005\u5206\u7EC4\u8FDB\u884C\u8F93\u51FA</span>
$ <span class="token function">git</span> shortlog

<span class="token comment"># \u5217\u51FA\u63D0\u4EA4\u8005\u4EE3\u7801\u8D21\u732E\u6570\u91CF\uFF0C\u6253\u5370\u4F5C\u8005\u548C\u8D21\u732E\u6570\u91CF</span>
$ <span class="token function">git</span> shortlog -sn

<span class="token comment"># \u4EE5\u63D0\u4EA4\u8D21\u732E\u6570\u91CF\u6392\u5E8F\u5E76\u6253\u5370\u51FAmessage</span>
$ <span class="token function">git</span> shortlog -n

<span class="token comment"># \u91C7\u7528\u90AE\u7BB1\u683C\u5F0F\u5316\u7684\u65B9\u5F0F\u8FDB\u884C\u67E5\u770B\u8D21\u732E\u5EA6</span>
$ <span class="token function">git</span> shortlog -e
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>git reflog \u901A\u5E38\u88AB\u5F15\u7528\u4E3A \u5B89\u5168\u7F51\uFF0C\u5F53 git log \u6CA1\u6709\u60F3\u8981\u7684\u4FE1\u606F\u65F6\u53EF\u4EE5\u5C1D\u8BD5\u7528 git reflog\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F53\u56DE\u6EDA\u67D0\u4E2A\u7248\u672C\u65F6\u8BB0\u5F55\u4E0D\u662F\u4FDD\u5B58\u5728 git log \u4E2D\uFF0C</span>
<span class="token comment"># \u60F3\u8981\u627E\u5230\u8FD9\u6761\u56DE\u6EDA\u7248\u672C\u4FE1\u606F\u65F6 git reflog \u5C31\u7528\u4E0A\u4E86\u3002</span>
$ <span class="token function">git</span> reflog
<span class="token comment"># \u7B49\u4EF7\u4E8E</span>
$ <span class="token function">git</span> log -g --abbrev-commit --pretty<span class="token operator">=</span>oneline
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_17-\u56DE\u6EDA\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_17-\u56DE\u6EDA\u7248\u672C" aria-hidden="true">#</a> 17. \u56DE\u6EDA\u7248\u672C</h2><div class="custom-container tip"><p class="custom-container-title">\u4ECB\u7ECD</p><p>\u56DE\u6EDA\u7248\u672C\u6709 2 \u79CD\u65B9\u6CD5\uFF1A</p><ul><li>git reset - \u56DE\u6EDA\u7248\u672C\u540E\u4E4B\u524D\u7684\u5386\u53F2\u8BB0\u5F55\u5C06\u4E0D\u4FDD\u5B58, \u4E0D\u4FDD\u7559\u75D5\u8FF9, \u57FA\u672C\u4E0A\u4E0D\u5B58\u5728\u51B2\u7A81\u60C5\u51B5\u3002</li><li>git revert - \u56DE\u6EDA\u7248\u672C\u540E\u4E4B\u524D\u7684\u5386\u53F2\u8BB0\u5F55\u8FD8\u5B58\u5728\u5E76\u591A\u589E\u52A0\u4E86\u4E00\u6761 Revert \u8BB0\u5F55\uFF0C\u5F88\u5BB9\u6613\u51FA\u73B0\u51B2\u7A81\u3002</li></ul></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u6EDA\u4E0A\u4E00\u4E2A\u7248\u672C</span>
$ <span class="token function">git</span> reset --hard HEAD^

<span class="token comment"># \u56DE\u6EDA\u4E0A\u4E24\u4E2A\u7248\u672C</span>
$ <span class="token function">git</span> reset --hard HEAD^^

<span class="token comment"># \u56DE\u6EDA\u5230\u6307\u5B9A commit_id \uFF0C \u901A\u8FC7 git log \u67E5\u770B</span>
$ <span class="token function">git</span> reset --hard <span class="token string">&#39;commit id&#39;</span>

<span class="token comment"># \u56DE\u6EDA\u540E\u4F46\u672A\u63A8\u9001\u5230\u8FDC\u7A0B\u60F3\u65AD\u5F00\u5F53\u524D\u64CD\u4F5C\u6267\u884C\u62C9\u53D6\u5373\u53EF\uFF1A</span>
$ <span class="token function">git</span> pull

<span class="token comment"># \u63A8\u9001</span>
$ <span class="token function">git</span> push -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u6EDA\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7248\u672C</span>
$ <span class="token function">git</span> revert HEAD^

<span class="token comment"># \u56DE\u6EDA\u6307\u5B9Acommit</span>
$ <span class="token function">git</span> revert 8efef3d37

<span class="token comment"># --no-edit \u56DE\u6EDA\u5E76\u8DF3\u8FC7\u7F16\u8F91\u6D88\u606F</span>
$ <span class="token function">git</span> revert HEAD^ --no-edit

<span class="token comment"># \u65AD\u5F00\u5F53\u524D\u64CD\u4F5C\uFF0C\u8FD8\u539F\u521D\u59CB\u72B6\u6001</span>
$ <span class="token function">git</span> revert --abort

<span class="token comment"># \u63A8\u9001\u5230\u8FDC\u7A0B\uFF0C\u5047\u8BBE\u5F53\u524D\u662F main \u5206\u652F</span>
$ <span class="token function">git</span> push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u6EDA\u5230\u6307\u5B9A\u5206\u652F\u6216Commit_id\u6307\u5B9A\u6587\u4EF6, \u547D\u4EE4\uFF1A</span>
$ <span class="token function">git</span> checkout main <span class="token number">1</span>.txt <span class="token number">2</span>.txt

$ <span class="token function">git</span> checkout 8efef3d37 <span class="token number">1</span>.txt <span class="token number">2</span>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_18-\u5176\u4ED6\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_18-\u5176\u4ED6\u547D\u4EE4" aria-hidden="true">#</a> 18. \u5176\u4ED6\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u76EE\u5F55</span>
$ <span class="token builtin class-name">cd</span> e:
$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>.
$ <span class="token builtin class-name">cd</span> ~
<span class="token comment"># \u4F7F\u7528 \u901A\u914D\u7B26*\uFF0C\u53EA\u6709\u4E00\u4E2Af\u5F00\u5934\u7684\u6587\u4EF6\u5939\uFF0C\u5B83\u5C31\u4F1A\u8FDB\u5165\u5230\u8FD9\u4E2A\u6587\u4EF6\u5939</span>
$ <span class="token builtin class-name">cd</span> f*

<span class="token comment"># \u67E5\u770B\u6587\u4EF6\u5185\u5BB9</span>
$ <span class="token function">cat</span> README.md

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u76EE\u5F55\u8DEF\u5F84</span>
$ <span class="token builtin class-name">pwd</span>

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6</span>
$ <span class="token function">ls</span>
<span class="token comment"># windows\u4E0D\u8D77\u4F5C\u7528</span>
$ ll

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6</span>
$ <span class="token function">touch</span> README.md
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;
    hello
	world&quot;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939</span>
$ <span class="token function">mkdir</span> <span class="token operator">&lt;</span>file-name<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u4E00\u4E2A\u6587\u4EF6</span>
$ <span class="token function">rm</span> README.md

<span class="token comment"># \u5220\u9664\u4E00\u4E2A\u6587\u4EF6\u5939</span>
$ <span class="token function">rm</span> -r <span class="token operator">&lt;</span>file-name<span class="token operator">&gt;</span>

<span class="token comment"># \u6E05\u5C4F</span>
$ reset
$ <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,45),y=s("\u53C2\u8003\u6587\u6863\uFF1A"),H={href:"https://github.com/xjh22222228/git-manual",target:"_blank",rel:"noopener noreferrer"},M=s("Git \u5E38\u7528\u547D\u4EE4\u53C2\u8003\u624B\u518C");function R(C,S){const a=l("ExternalLinkIcon");return t(),c(r,null,[b,n("div",m,[u,n("ul",null,[n("li",null,[n("a",g,[k,e(a)])]),n("li",null,[n("a",d,[h,e(a)])]),n("li",null,[n("a",f,[$,e(a)]),v]),n("li",null,[n("a",_,[x,e(a)])]),n("li",null,[n("a",q,[w,e(a)])]),n("li",null,[n("a",E,[A,e(a)])]),n("li",null,[n("a",B,[D,e(a)]),G])])]),N,n("blockquote",null,[n("p",null,[y,n("a",H,[M,e(a)])])])],64)}var z=p(i,[["render",R],["__file","index.html.vue"]]);export{z as default};
