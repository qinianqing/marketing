<template>
  <div class="banner">
    <div class="banner-title">您好！欢迎使用巴奴营销系统~</div>
    <div class="banner-desc">巴奴毛肚火锅数字化建设中心软件研发团队</div>
    <img
      class="illustration"
      src=".././../assets/dashboard/img_chahua.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Bread",
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 150px;
  background-image: url("../../assets/dashboard/banner_part.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-color: $base-main-color;
  border-radius: 10px;
  .banner-title {
    position: absolute;
    left: 50px;
    top: 40px;
    font-size: 28px;
    font-weight: 700;
    color: $base-white-color;
  }
  .banner-desc {
    position: absolute;
    left: 50px;
    bottom: 40px;
    font-size: 16px;
    color: #d1d9f4;
  }
  .illustration {
    position: absolute;
    right: 60px;
    width: 234px;
    height: 218px;
  }
}
</style>
