<template>
   
      <div class="starter-template">
        <h1>Bootstrap starter template</h1>
        <h1>{{msg}}</h1>        
        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
         <button class="btn btn-lg btn-primary" @click="getdata()">获取数据</button>
         <button class="btn btn-lg btn-primary" @click="changeData()">changeData</button>
      </div>

    <p>
        <a v-link="{ path: '/foo' }">Go to /foo</a>
        <a v-link="{ path: '/foo/bar',query:{aa:this.msg} }">Go to /foo/bar</a>
        <a v-link="'/foo/baz/'+this.msg">Go to /foo/baz</a>
    </p>
   

  
      <router-view></router-view>
    

    
     
</template>

<script>
    export default {
        data: function() {
            return {
                msg: 'Hello Vue, Hello world',
                temp: '/foo/baz/tttt'
            };
        },
        methods: {
            getdata: function() {
                this.$http.get('http://localhost:8080/wephoto-payment/api/v1/testC/test').then((response) => {
                    this.msg = response.text();
                }, (response) => {
                    console.log(response.status);
                    console.log("error happened");
                });
            },
            gourl: function(param1) {
                console.log(param1);
                this.$route.router.go(
                    param1);
            },
            changeData: function() {
                this.msg = "cccc";
            }
        }

    }
</script>