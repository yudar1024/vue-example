var part1 = require('./components/part1.vue');
var part2 = require('./components/part2.vue');
var part3 = require('./components/part3.vue');


function buildMaping(router) {
    router.map({
        '/foo': {
            component: part2,
            // add a subRoutes map under /foo
            subRoutes: {
                '/': {
                    // This component will be rendered into Foo's <router-view>
                    // when /foo is matched. Using an inline component definition
                    // here for convenience.
                    component: {
                        template: "<h>here is  part2 title</h>"
                    }
                },
                '/bar': {
                    // Bar will be rendered inside Foo's <router-view>
                    // when /foo/bar is matched
                    component: part1
                },
                '/baz/:tec': {
                    // same for Baz, but only when /foo/baz is matched
                    component: part3
                }
            }
        }

    });
}


module.exports.buildMaping = buildMaping;