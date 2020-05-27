<template>
    <div class="bottomnav">
        <van-tabbar v-model="active" active-color="#f99" :border="false">
            <van-tabbar-item icon="home-o" to="/" @click="changeActive(0)">课程表</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/sort" @click="changeActive(1)">学生</van-tabbar-item>
            <van-tabbar-item icon="comment-o" to="goods" @click="changeActive(2)">老师</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="mine" @click="changeActive(3)">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
  export default {
    name: 'bottomnav',
    data() {
      return {
        active: Number(localStorage.getItem('active')) || 0
      }
    },
    watch: {
      $route: {
        handler: function(val, oldVal){
          console.log(val);
          this.active = Number(localStorage.getItem('active')) || 0
        },
        // 深度观察监听
        deep: true
      }
    },
    methods: {
      changeActive(index) {
        localStorage.setItem('active', index)
      }
    }
  }
</script>
<style lang="scss" scoped>

    .bottomnav {
        .van-tabbar {
            /* background-color:#999; */
            /* border-top:.01rem solid #333; */
        }
    }
</style>