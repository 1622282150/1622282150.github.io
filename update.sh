#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git config --local user.name "1622282150"
git config --local user.email "1622282150@qq.com"

note=`git status`

git add -A
git commit -m "$note"

# git branch --set-upstream-to=github-origin/main main

git push github-origin main

cd /
