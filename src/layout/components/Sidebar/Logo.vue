<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img v-if="logo" :src="small_logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: "营销系统",
      logo: "https://cdn-scp.banu.cn/ideas/ideas/logo-marketing.png",
      small_logo: "https://cdn-scp.banu.cn/ideas/ideas/logo_small.png",
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 2s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: $base-logo-color;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 58px;
      height: 20px;
      vertical-align: middle;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: $base-white-color;
      line-height: 50px;
      font-size: 16px;
      font-family: $base-text-title-family;
      vertical-align: middle;
      padding-left: 20px;
      font-weight: 400;
      &:before {
        display: inline-block;
        position: relative;
        content: "";
        width: 1px;
        height: 20px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        left: -10px;
        opacity: 0.4;
        bottom: -4px;
      }
    }
  }

  &.collapse {
    .sidebar-logo {
      width: 42px;
      height: 14px;
      margin-right: 0px;
    }
  }
}
</style>
