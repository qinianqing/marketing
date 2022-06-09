<template>
  <div class="card-container">
    <div v-for="(v, i) in cardList" :key="i">
      <div class="title">{{ v.title }}</div>
      <div class="list-container">
        <div v-for="k in v.list" :key="k.ttile" class="item-container">
          <div class="item-box">
            <div class="item-logo">
              <img :src="k.logo" alt="" />
            </div>
            <div class="item-title">{{ k.title }}</div>
          </div>
          <count-to
            class="count"
            :startVal="0"
            :endVal="Number(k.count || 0)"
            :duration="2000"
          ></count-to>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "CardList",
  props: {
    cardList: {
      type: Array,
      default: [],
    },
  },
  methods: {},
  components: {
    countTo,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-top: 40px;
  width: 100%;
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
    background-image: url("../../assets/dashboard/bg_kqtj.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 24px;
    margin-top: 20px;
    .item-container {
      width: calc(100% / 3);
      height: 180px;
      text-align: center;
      .item-box {
        margin-top: 38px;
        .item-title {
          font-size: 16px;
          font-family: $base-text-main-family;
          font-weight: 400;
          color: $base-text-tips-color;
          display: inline-block;
          position: relative;
          bottom: 10px;
        }
        .item-logo {
          display: inline-block;
          width: 27px;
          height: 27px;
          margin-right: 12px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .count {
        margin-top: 19px;
        display: inline-block;
        font-size: 34px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: $base-text-stair-color;
      }
    }
  }
}
</style>
