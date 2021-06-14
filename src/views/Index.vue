<template>
  <div class="index">
    首页
    <navbar></navbar>
    <Form></Form>
    <aside-bar></aside-bar>
  </div>
</template>
<script>
// import store from "../store/index.js";
import AsideBar from '../components/AsideBar.vue'
import Navbar from '../components/Navbar.vue'
import Form from '../components/Form.vue'
export default {
  name: "Index",
  // beforeRouteEnter: (to, from, next) => {
  //   let isLogin = store.getters.getIsLogin;
  //   if (isLogin) next();
  //   else next("/login");
  // },
  components: {
    AsideBar,
    Navbar,
    Form

  },
};
</script>
<style lang="less">
.index {
}
</style>