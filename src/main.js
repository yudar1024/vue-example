//一定要看vue-router 官方文档描写的vue版本 兼容性，这个兼容性说明藏在github 的release 说明里，不在首页！不在首页！不在首页！。妈蛋，调了好久。
// define some components
var Vue = require("vue");
var App = require('./App.vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
var routingMap = require('./router.js');

Vue.use(VueRouter);
Vue.use(VueResource);



// configure router
var router = new VueRouter();
routingMap.buildMaping(router);

router.start(App, '#app')