<template>
  <div>
   这是首页
    <div>
      <router-link to="/user/userone">用户1的页面</router-link><br/>
      <router-link to="/user/usertwo">用户2的页面</router-link><br/>
      <router-link to="/students">学生页面</router-link><br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
