rm -rf dist && mkdir dist
npx ./node_modules/babel-cli/bin/babel.js src --out-dir dist --ignore node_modules
cp package.json dist
cd dist && yarn install --production --modules-folder node_modules
node dist/server.js
