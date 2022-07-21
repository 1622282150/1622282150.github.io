#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 初始化项目，自动化部署
# window 全局下载  npm i rimraf -g
rimraf .git
# mac 可使用(慎用)
# rm -rf .git
git init

git config --local user.name "1622282150"
git config --local user.email "1622282150@qq.com"

git add -A
git commit -m "update"

git remote add github-origin git@github.com:1622282150/1622282150.github.io.git

git push -f github-origin main

cd /
