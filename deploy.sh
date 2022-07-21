#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build 

# 进入生成的打包文件夹
cd docs/.vuepress/dist

echo "
<h3>
    <a href="https://1622282150.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/%E5%9C%B0%E5%9D%80%EF%BC%9A-https%3A%2F%2F1622282150.github.io%2F-brightgreen" alt="访问地址"/>
    </a>
</h3>
" > README.md

git init 

git config --local user.name "1622282150"
git config --local user.email "1622282150@qq.com"

git add -A
git commit -m "update"

git remote add github-origin git@github.com:1622282150/1622282150.github.io.git

git branch -M gh-pages
git push -f github-origin gh-pages

cd /
