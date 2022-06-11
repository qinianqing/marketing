<template>
  <div class="card-container">
    <div class="title">{{ cardList.title }}</div>
    <div class="list-container">
      <div
        v-for="k in cardList.list"
        :key="k.ttile"
        class="item-container"
        :class="`item-hidden-${num}`"
      >
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
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "CardList",
  props: {
    cardList: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      num:
        this.cardList.list.length % 3 === 0 ? 3 : this.cardList.list.length % 3,
    };
  },

  methods: {},
  components: {
    countTo,
  },
};
</script>

<style lang="scss" scoped>
$dotNum: 3;

.card-container {
  margin-top: 40px;
  margin-bottom: 40px;
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
      position: relative;
      &:after {
        content: "";
        display: inline-block;
        position: absolute;
        background-color: $base-partition-color;
        right: 0;
        top: calc(100% - 47) / 2;
        width: 1px;
        height: 47px;
      }

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
    .item-container:nth-child(3n + 3):after {
      display: none;
    }
    .item-container:nth-child(3n-1)::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 1px;
      background-color: #e7e9ee;
      position: relative;
      top: 180px;
    }
    .item-container:nth-child(3n)::before {
      content: "";
      display: inline-block;
      width: 90%;
      height: 1px;
      background-color: #e7e9ee;
      position: relative;
      top: 180px;
      right: 5%;
    }
    .item-container:nth-child(3n-2)::before {
      content: "";
      display: inline-block;
      width: 90%;
      height: 1px;
      background-color: #e7e9ee;
      position: relative;
      top: 180px;
      left: 5%;
    }

    .item-hidden-1 {
      &:nth-last-child(-n + 1)::before {
        visibility: hidden;
      }
    }
    .item-hidden-2 {
      &:nth-last-child(-n + 2)::before {
        visibility: hidden;
      }
    }
    .item-hidden-3 {
      &:nth-last-child(-n + 3)::before {
        visibility: hidden;
      }
    }
  }
}
</style>
