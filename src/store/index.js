import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    userInfo:{},
  },
  getters:{
    getIsLogin:(state)=>state.isLogin,
    getUserInfo:(state)=>state.userInfo
  },
  mutations: {
    setIsLogin:(state,isLogin)=>state.isLogin=isLogin,
    setUserInfo:(state,userInfo)=>state.userInfo=userInfo,
  },
  actions: {
  },
  modules: {
  }
})
