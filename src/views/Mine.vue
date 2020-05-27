<template>
    <div class="mine">
        <div v-if="!isLogin"
             style="width: 100%; height: 53px; border-bottom: 1px solid #eee; text-align: left; margin-top: 50px; padding-left: 20px;">
            <van-icon size="50" @click="goLogin" name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
                      style=" float:left;"/>
            <p style="height: 100%; line-height: 53px; float: left; margin-left: 15px" @click="goLogin">登录/注册</p>
        </div>
        <div v-else
             style="width: 100%; height: 53px; border-bottom: 1px solid #eee; text-align: center; margin-top: 50px;">
            <van-icon size="50" name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
            <van-form style="margin-top: 50px;">
                <van-field
                        v-model="ruleForm.accountNumber"
                        name="账号"
                        label="账号"
                        placeholder="账号"
                        readonly/>
                <van-field
                        v-model="ruleForm.password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        readonly/>
                <van-field
                        v-model="ruleForm.age"
                        name="年龄"
                        label="年龄"
                        placeholder="年龄"
                        readonly/>
                <van-field name="radio" label="性别">
                    <template #input>
                        <van-radio-group v-model="ruleForm.sex" direction="horizontal" readonly>
                            <van-radio name="0">男</van-radio>
                            <van-radio name="1">女</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field
                        v-model="ruleForm.name"
                        name="姓名"
                        label="姓名"
                        placeholder="姓名"
                        :rules="[{ required: true, message: '请填写姓名' }]"
                        readonly/>
                <van-field name="radio" label="角色">
                    <template #input>
                        <van-radio-group v-model="ruleForm.mark" direction="horizontal" readonly>
                            <van-radio name="1">老师</van-radio>
                            <van-radio name="0">学生</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
            </van-form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .mine {

    }
</style>
<script>
  export default {
    name: 'mine',
    data() {
      return {
        isLogin: !!localStorage.userInfo,
        ruleForm: localStorage.userInfo ? JSON.parse(localStorage.userInfo).user : {}
      }
    },
    mounted() {
    },
    methods: {
      goLogin() {
        if (localStorage.userInfo) {
          return
        }
        this.$router.replace({
          path: '/login'
        })
      }
    }
  }
</script>


