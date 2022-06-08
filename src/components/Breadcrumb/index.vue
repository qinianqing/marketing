<template>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <div class="location-logo">
      <img src="../../assets/header/wz.png" alt="" />
    </div>
    <div class="location">当前位置:</div>
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from "path-to-regexp";

export default {
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];
      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "首页" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },
  },
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  line-height: 64px;
  margin-left: 8px;
  font-size: 12px;
  font-family: $base-text-main-family;
  font-weight: 400;
  color: $base-text-second-color;
  .no-redirect {
    cursor: text;
    font-size: 12px;
    font-family: $base-text-main-family;
    font-weight: 400;
    color: $base-assist-first-color;
  }
  .location-logo {
    float: left;
    width: 11px;
    height: 12px;
    img {
      width: 11px;
      height: 12px;
    }
    line-height: 65px;
    margin-right: 5px;
  }
  .location {
    float: left;
    font-size: 12px;
    font-family: $base-text-main-family;
    font-weight: 400;
    color: $base-text-second-color;
    line-height: 63px;
    margin-right: 13px;
  }
}
</style>
