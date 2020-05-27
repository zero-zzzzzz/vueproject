import Vue from 'vue'
import Vuex from 'vuex'
import Vant from 'vant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1
  },
  mutations: {
    increment (state) {
      state.count++
    },
    max(state,payload) {
      //  注意一下payload的传值
      state.count += payload
      // state.count += payload.amount
    },
    min(state){
      state.count=10
    }
  },
  actions: {
    //  n ={type: 'incrementdouble',amount: 2}
    incrementdouble ({commit},payload) {
      // setInterval(()=>{
        commit('max',payload)
      // },1000)
    },
    abc ({commit},payload) {
      commit('min')
    }
  },
  modules: {

  }
})
