<template>
<p>{{part1temp}}</p>

<p>当前路径: {{$route.path}}</p>
  <p>当前路由参数: {{$route.params | json}}</p>
   <p>当前查询参数: {{$route.query | json}}</p>
   <a v-link="{ path: '/foo/baz' }">Go to /foo/baz</a>
</template>

<script>
    export default {
        data: function() {
            console.log(this.$route.path);
            return {
                part1temp: 'Hello Vue, Hello world'
            };
        }
    }
</script>