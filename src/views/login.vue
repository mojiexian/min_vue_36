<template>
  <div class="login">
    <div class="container">
      <img src="@/assets/DenziQi.png" alt />
      <el-form :model="loginForm" :rules="login" ref=";loginForm" class="demo-ruleForm">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input placeholder="用户名" prefix-icon="iconfont icon-wode" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input placeholder="密码" prefix-icon="iconfont icon-yuechi" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 登陆 -->
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      login: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
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
