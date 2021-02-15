#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# copy google search console verification code
# cp googleb46ece2894730422.html docs/.vuepress/dist

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:belvederef/blog.git master:gh-pages

cd -