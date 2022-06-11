<template>
  <div class="dashboard-container">
    <Bread></Bread>
    <HorizontalList :horizontalList="horizontalList"></HorizontalList>
    <CardList :cardList="customerGroupList"></CardList>
  </div>
</template>

<script>
import Bread from "./Bread.vue";
import HorizontalList from "@/components/HorizontalList";
import CardList from "@/components/CardList";

export default {
  name: "Dashboard",
  components: { Bread, HorizontalList, CardList },
  data: () => ({
    horizontalList: {
      title: "门店统计",
      list: [
        {
          title: "企信客服数",
          count: 6158088,
          logo: require("@/assets/dashboard/statistic_qx.png"),
        },
        {
          title: "门店数量",
          count: 6158088,
          logo: require("@/assets/dashboard/statistic_store.png"),
        },
      ],
    },

    customerGroupList: {
      title: "客群统计",
      list: [
        {
          title: "顾客总数",
          count: 6158088,
          logo: require("@/assets/dashboard/ic_home_dsh.png"),
        },
        {
          title: "会员数量",
          count: 6158088,
          logo: require("@/assets/dashboard/ic_home_dzd1.png"),
        },
        {
          title: "小程序用户数",
          count: 6158088,
          logo: require("@/assets/dashboard/ic_home_dphf.png"),
        },
        {
          title: "企微客户数",
          count: 6158088,
          logo: require("@/assets/dashboard/ic_home_dsh2.png"),
        },
        {
          title: "公众号粉丝数",
          count: 6158088,
          logo: require("@/assets/dashboard/ic_home_dzd2.png"),
        },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  padding: 0 30px;
  margin-top: 30px;
}
</style>
