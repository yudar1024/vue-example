<template>
<p>part 2</p>
<p>当前路径: {{$route.path}}</p>
  <p>当前路由参数: {{$route.params | json}}</p>
   <p>当前查询参数: {{$route.query | json}}</p>
<router-view></router-view>
</template>

<script>
</script>