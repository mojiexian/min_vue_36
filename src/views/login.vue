<template>
  <div class="login">
    <div class="container">
      <img src="@/assets/DenziQi.png" alt />
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input placeholder="用户名" prefix-icon="iconfont icon-wode" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            prefix-icon="iconfont icon-yuechi"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 登陆 -->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user_index.js'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 在次实现数据的验证
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log('hhh', valid)
          login(this.loginForm)
            .then(res => {
              console.log('***', res)
              if (res.data.dta.meta.status === 200) {
                // 进行跳转
              } else {
                this.$message({
                  message: res.data.meta.msg,
                  type: 'error'
                })
              }
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: '登录失败',
                type: 'error'
              })
            })
        } else {
          this.$message({
            message: '数据输入不合法',
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  background: #314836;
  width: 100%;
  height: 100%;
  .container {
    position: absolute;
    right: 0;
    left: 0;
    width: 460px;
    box-shadow: 0 0 160px #4bf0f7 inset;
    margin: 200px auto;
    padding: 0px 40px 15px 40px;
    > img {
      position: relative;
      left: 50%;
      width: 140px;
      height: 140px;
      margin-bottom: 16px;
      margin-left: -70px;
      margin-top: -80px;
      box-sizing: border-box;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 12px #29e015 inset;
    }
    .el-button {
      width: 100%;
      background: #a2f00d;
      color: #f00fe3;
      font-size: 20px;
    }
  }
}
</style>
