<template>
  <div>
    用户2 <br/>
     <p>store中的cout值为：{{$store.state.count}}</p>
    <button @click='increment' class="custom-link">自增</button> 
    <button @click='decrement' class="custom-link">自减</button><br/>
    <router-link to="/user/userone/detail">详情</router-link>
      <!--详情的内容-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-link {
  cursor: pointer;
  margin: 0 10px;
}
.custom-link:hover {
 font-weight: bold;
}
</style>
