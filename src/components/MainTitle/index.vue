<template>
  <div>
    <div class="main-title">
      <div class="icon">
        <img src="../../assets/header/main-icon.png" alt="" />
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-title {
  margin-bottom: 30px;
  display: flex;
  .icon {
    width: 20px;
    height: 12px;
    margin-right: 3px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 18px;
    font-family: $base-text-main-family;
    font-weight: 500;
    color: $base-text-stair-color;
  }
}
.main-content {
  width: 100%;
  background-color: $base-white-color;
  border-radius: 10px;
  padding: 30px 30px 40px 30px;
}
</style>

<script>
export default {
  name: "MainTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>