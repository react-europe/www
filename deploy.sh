gulp build
rm -rvf ../www-build-2017/*
cp -R dist/* ../www-build-2017/
cd ../www-build-2017/; git add --all .; git commit -am"latest"; git push;
ssh app@api.eventlama.com 'cd www/www-build-2017/;git pull origin master'
