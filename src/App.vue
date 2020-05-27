<template>
  <div id="app">
   

    <router-view />

    <BottomNav v-show="bfoot"/>  
  </div>
</template>

<script>
  // @指向src
  import BottomNav from '@/components/BottomNav.vue';
  export default {
    name: 'app',
    components:{
      BottomNav
    },
    data() {
      return {
        msg:"大家好",
        active: 0,
        bfoot:true
      }
    },
    mounted() {
    },
    methods:{
      checkPath(path){
        if(/home|sort|mine|goods/.test(path)){
          this.bfoot = true
        }
        if(/login|reg/.test(path)){
          this.bfoot = false
        }
      }
    },
    watch:{
      $route:{
      handler(current,prev){
        // current.path==/home|/follow|/colukn|/detail/23423234
        this.checkPath(current.path)
      },
      immediate:true,  
      deep:true    
    }
    }

  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height:100%;
  }
</style>