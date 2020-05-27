<template>
    <div class="login">
        <div style="width: 100%; text-align: center; margin-top: 50px;">
            <van-icon size="50" name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
        </div>
        <van-form v-if="isLogin" @submit="login" style="margin-top: 50px;">
            <van-field
                    v-model="accountNumber"
                    name="账号"
                    label="账号"
                    placeholder="账号"
                    :rules="[{ required: true, message: '请填写账号' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px; text-align: center;">
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
        <van-form v-else @submit="registered" style="margin-top: 50px;">
            <van-field
                    v-model="ruleForm.accountNumber"
                    name="账号"
                    label="账号"
                    placeholder="账号"
                    :rules="[{ required: true, message: '请填写账号' }]"
            />
            <van-field
                    v-model="ruleForm.password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                    v-model="ruleForm.age"
                    name="年龄"
                    label="年龄"
                    placeholder="年龄"
                    :rules="[{ required: true, message: '请填写年龄' }]"
            />
            <van-field name="radio" label="性别">
                <template #input>
                    <van-radio-group v-model="ruleForm.sex" direction="horizontal">
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
            />
            <van-field name="radio" label="角色">
                <template #input>
                    <van-radio-group v-model="ruleForm.mark" direction="horizontal">
                        <van-radio name="1">老师</van-radio>
                        <van-radio name="0">学生</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>
        <div style="margin-bottom: 20px; width: 100%; text-align: center;">
            <a href="javascript:;" @click="isLogin = !isLogin">{{ isLogin ? '去注册' : '去登录'}}</a>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        ruleForm: {},
        accountNumber: '',
        password: '',
        isLogin: true
      }
    },
    created() {

    },
    methods: {
      login() {
        this.$axios({
          // http://123.56.14.30:8080/zero-0.0.1/login
          url: 'http://123.56.14.30:8080/zero-0.0.1/login',
          method: 'post',
          data: {
            "accountNumber": this.accountNumber,
            "password": this.password
          }
        }).then(res => {
          console.log(res);
          // let 无法重复定义
          // const 用于定义常量
          const {data, msg, status} = res.data;
          if (status === 200) {
            localStorage.setItem('userInfo', JSON.stringify(data))
            this.$toast.success('登录成功')
            this.$router.replace({path:'/home'})
            localStorage.setItem('active', 0)
          } else {
            this.$toast.fail(msg)
          }
        })
      },
      registered(v) {
        console.log(v)
        this.$axios({
          url: 'http://123.56.14.30:8080/zero-0.0.1/register',
          method: 'post',
          data: this.ruleForm
        }).then(res => {
          console.log(res);
          // let 无法重复定义
          // const 用于定义常量
          const {data, msg, status} = res.data;
          if (status === 200) {
            this.$toast.success('注册成功')
            this.isLogin = true
          }
        }).catch(err => {
          this.$toast.fail('接口异常')
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .login {
        width: 7.5rem;
        margin: 0 auto;
    }
</style>