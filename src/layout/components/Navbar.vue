<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
        </div>
        <el-dropdown-menu />
      </el-dropdown>
      <div class="user-name">{{ name }}</div>
      <div class="logo-out" @click="logout"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "name"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  min-width: 1030px;
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    margin-right: 35px;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      .avatar-wrapper {
        margin-top: 16px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
    .user-name {
      display: inline-block;
      margin-left: 10px;
      margin-right: 25px;
      height: 22px;
      font-size: 16px;
      font-family: $base-text-main-family;
      font-weight: 400;
      color: $base-text-stair-color;
      line-height: 22px;
      position: relative;
      top: -12px;
      &:after {
        display: inline-block;
        content: "";
        width: 1px;
        height: 22px;
        border: 0.5px solid #e5e9ed;
        position: relative;
        left: 25px;
        vertical-align: middle;
      }
    }
    .logo-out {
      background-image: url("../../assets/login/logo_out.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 19px;
      height: 19px;
      display: inline-block;
      margin-bottom: 8px;
      margin-left: 25px;
    }
  }
}
</style>
