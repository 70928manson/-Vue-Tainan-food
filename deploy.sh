#!/usr/bin/env sh

# 當發生錯誤時終止程式
set -e

# 构建
npm run build

# cd 到建構輸出的目錄下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到指定路徑 -> https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:70928manson/NCKU-History-convey-affection.git master:gh-pages

cd -