<template lang="">
    <div class="students" id='students'>
        这是学生页面<br/>
         <router-link to="/students/zhangsan#students">张三</router-link><br/>
         <router-link to="/students/lisi#students">李四</router-link><br/>
         <router-link to="/students/wanger#students">王二</router-link><br/>
         <p v-if='$route.params.id'>这是学生 {{$route.params.id}} 的页面</p>
    </div>
</template>
<script>
export default {
    watch: {
        $route(to) {
            console.log('to',to);
        }
    }
}
</script>
<style>
    .students {
        height: 100%;
    }
</style>