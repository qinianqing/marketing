<template>
  <div class="horizontal-container">
    <div class="title">{{ horizontalList.title }}</div>
    <div class="list-container">
      <div
        v-for="k in horizontalList.list"
        :key="k.ttile"
        class="item-container"
      >
        <div class="item-title">{{ k.title }}</div>
        <count-to
          class="count"
          :startVal="0"
          :endVal="Number(k.count || 0)"
          :duration="2000"
        ></count-to>
        <div class="item-logo">
          <img :src="k.logo" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "HorizontalList",
  props: {
    horizontalList: {
      type: Object,
      default: {},
    },
  },
  methods: {},
  components: {
    countTo,
  },
};
</script>

<style lang="scss" scoped>
.horizontal-container {
  margin-top: 30px;
  .title {
    font-size: 18px;
    font-family: $base-text-main-family;
    font-weight: 500;
    color: $base-text-stair-color;
    padding-left: 20px;
    &:before {
      content: "";
      display: inline-block;
      width: 5px;
      height: 16px;
      background-color: #ffda42;
      position: relative;
      border-radius: 1px;
      left: -20px;
      top: 1px;
    }
  }
  .list-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .item-container {
      position: relative;
      width: 354px;
      height: 126px;
      background: $base-text-Invert-color;
      box-shadow: 0px 10px 35px 0px rgba(47, 63, 95, 0.08);
      border-radius: 24px;
      margin-top: 20px;
      margin-right: 30px;
      .item-title {
        position: absolute;
        left: 30px;
        top: 27px;
        font-size: 16px;
        font-family: $base-text-main-family;
        font-weight: 400;
        color: $base-text-tips-color;
      }
      .count {
        position: absolute;
        left: 30px;
        top: 59px;
        font-size: 34px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: $base-text-stair-color;
      }
      .item-logo {
        width: 110px;
        height: 110px;
        position: absolute;
        right: 0;
        top: 25px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
