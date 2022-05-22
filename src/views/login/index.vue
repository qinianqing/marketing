<template>
  <div class="login-container">
    <div class="login-form-box">
      <div class="box-title">
        <div class="box-form-title">账号登录</div>
        <div class="box-form-title-tip">请输入您的账号和密码进行登录</div>
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>

        <el-button
          :loading="loading"
          type="primary"
          class="login-button"
          @click.native.prevent="handleLogin"
          ><div class="login-botton-text">点击登录</div></el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码最少不少于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur" },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

@supports (-webkit-mask: none) and (not (cater-color: $base-text-stair-color)) {
  .login-container .el-input input {
    color: $base-text-stair-color;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    width: 390px;
    height: 50px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 11px;
      color: $base-text-stair-color;
      height: 50px;
      line-height: 74px;
      caret-color: $base-text-stair-color;
      box-sizing: border-box;
      font-family: $base-text-main-family;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $base-text-Invert-color inset !important;
        -webkit-text-fill-color: $base-text-stair-color !important;
      }
    }
  }

  .el-form-item {
    border-radius: 4px;
    border: 1px solid $base-input-border-color;
    background: $base-text-Invert-color;
    margin-bottom: 20px;
  }
}
</style>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  min-width:1135px;
  background-image: url("../../assets/login/bg.png");
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form-box {
    width: 1080px;
    height: 630px;
    background-image: url("../../assets/login/input_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .login-form {
      position: absolute;
      left: 550px;
      top: 265px;
      overflow: hidden;
    }
    .box-title {
      position: absolute;
      left: 550px;
      top: 140px;
      .box-form-title {
        font-family: $base-text-title-family;
        color: $base-text-stair-color;
        font-size: 28px;
        font-weight: bold;
        position: relative;
        &:after {
          position: absolute;
          content: "";
          width: 110px;
          height: 6px;
          background: $base-assist-first-color;
          left: 0;
          opacity: 0.4;
          bottom: 0;
        }
      }
      .box-form-title-tip {
        font-size: 14px;
        font-family: $base-text-main-family;
        font-weight: 400;
        color: $base-text-second-color;
        margin-top: 12px;
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $base-text-stair-color;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $base-text-stair-color;
      cursor: pointer;
      user-select: none;
    }
    .login-button {
      width: 154px;
      height: 50px;
      background: $base-main-color;
      border-radius: 25px;
      margin-top: 20px;
     position: relative;
      &:after {
        position: absolute;
        content: "";
        width: 21px;
        height: 8px;
        background-image: url("../../assets/login/arrow_signin.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        left: 107px;
        bottom: 21px;
      }
      .login-botton-text {
        position: absolute;
        left: 26px;
        bottom:15px;
        font-size: 18px;
        font-family: $base-text-title-family;
        color: $base-text-Invert-color;
      }
    }
  }
}
</style>
