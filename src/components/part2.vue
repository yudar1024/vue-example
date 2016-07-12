<template>
<p>part 2</p>
<p>当前路径: {{$route.path}}</p>
  <p>当前路由参数: {{$route.params | json}}</p>
   <p>当前查询参数: {{$route.query | json}}</p>
   <p>field: {{tempfield}}</p>
<router-view></router-view>
</template>

<script>
    export default {
        route: {
            // 这个data函数式router 生命周期中的一个钩子,要和组件自身的data()函数区别开,理解两者区别非常重要
            data: function(transition) {

                this.$http.get('http://localhost:8080/wephoto-payment/api/v1/testC/test').then((response) => {
                    console.log(response.text());
                    transition.next({
                        tempfield: response.text()
                    });
                }, (response) => {
                    console.log(response.status);
                    console.log("error happened");
                });
            }

        },
        // 定义模块的属性.
        data() {
            return {
                tempfield: 'default value'
            }
        },

    }
</script>