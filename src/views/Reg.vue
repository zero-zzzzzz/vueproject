<template>
    <div class="reg">
        <div class="regTitle">
            <div class="title">课程表微服务</div>
            <el-form :model="registerUser" :rules="rules"  size="mini" label-width="150px" class="registerForm">
                <el-form-item label="账号:" prop="accountNumber">
                    <el-input type="number"  size="mini" v-model="registerUser.nickName" placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item label="年龄:" prop="age">
                    <el-input type="number"  size="mini" v-model="registerUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="姓名:" prop="name">
                    <el-input type="text"  size="mini" v-model="registerUser.phone" placeholder="请输入电话号码"></el-input>
                </el-form-item>
                <el-form-item label="性别:" prop="sex">
                    <el-radio v-model="registerUser.sex" label="0">男</el-radio>
                    <el-radio v-model="registerUser.sex" label="1">女</el-radio>
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <el-input type="password"  size="mini" v-model="registerUser.address" placeholder="请输入地址"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  size="mini" class="submit_btn" @click="reg()">注册</el-button>
                </el-form-item>
                <div class="tips">
                    <p>已经注册了！！现在<router-link to='/login'>登录</router-link></p>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'reg',
        data() {
            return {
                regUser:{
                accountNumber:'',
                age:'',
                name:'',
                password:'',
                sex:'',
                },
                rules:{
                    accountNumber:[
                        {required: true,message:'账号不能为空', trigger: 'blur' },
                        { min:2, max:16, message:'长度在2到16个字符之间',trigger:'blur'}
                    ],
                    age:[
                        { required: true,message:'地址不能为空', trigger: 'blur' }
                    ],
                    name:[
                        { required: true,message:'用户名不能为空', trigger: 'blur' },
                        { min:2, max:16, message:'长度在2到16个字符之间',trigger:'blur'}
                    ],
                    password:[
                        { required: true,message:'密码不能为空', trigger: 'blur' },
                        { min:6, max:16, message:'长度在6到16个字符之间',trigger:'blur'}
                    ],
                }
                
            }
        },
      methods:{
          register(){
              this.$axios({
                  url:'',
                  method:'post',
                  data:{
                      accountNumber:this.register.accountNumber,
                      age:this.register.age,
                      name:this.register.name,
                      password:this.register.password,
                      sex:this.register.sex
                  },
                  headers:{
                      'Content-Type':"application/json"
                  },
                  dataType:"json",
              }).then(res=>{
                  if(res.data.data.data.data == "该账号已存在"){
                      alert("该账号已存在，请重新输入");
                  }
                  console.log(res);
              })
              this.$router.push('/login');
      }
        
        },
    }
    
</script>
<style lang="scss" scoped>
    // .reg {
    //     width: 7.5rem;
    //     margin: 0 auto;
    // }
     .reg{
        position: relative;
        width:100%;
        height:100%;
        // background: url(../assets/images/.jpeg) no-repeat center center;
        background-size: 100% 100%;
        .regTitle{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            height:500px;
            width:450px;
            background-color:#fff;
            .registerForm{
                position: absolute;
                left:0;
                margin:10px 10px;
            }
            .title{
                // font:20px/3 '';
                font-size:20px;
                line-height: 60px;
            }
            .submit_btn{
                width:100%;
            }
            .tips{
                float: right;
                p a{
                    font-size:18px;   
                    color:blue;
                }
            } 
        }
    }
</style>