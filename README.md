# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 项目初始化
node
node -v
ls

1、使用npm全局安装vue-cli（前提是你已经安装了nodejs，否则你连npm都用不了），在cmd中输入一下命令
npm install --global vue-cli

2、安装完成后，创建自己的工作空间，在cmd切换至刚刚创建好的工作空间，如果已经有工作空间，直接切换到工作空间即可。使用命令创建项目
  test是项目名称，这个名字自己随便取，命令输入后，会进入安装阶段，需要用户输入一些信息
vue init webpack vuetest

3、安装依赖模块
npm install

4、切换到项目目录
cd vuetest

5、运行项目
npm run dev

### 解决 npm ERR! code ELIFECYCLE

npm cache clean --force
rm -rf node_modules
rm -f  package-lock.json
npm install