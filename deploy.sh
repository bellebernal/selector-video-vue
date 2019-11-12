#!/usr.bin.env sh

# abot on errors
set -e

#build
npm run build

#navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/bellebernal/selector-video-vue.git master:gh-pages

cd -