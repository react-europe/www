gulp build
rm -rvf ../www-build-2017/*
cp -R dist/* ../www-build-2017/
cd ../www-build-2017/; git add --all .; git commit -am"latest"; git push;
ssh app@api.eventlama.com 'cd www/www-2017-build/;git pull origin master'
