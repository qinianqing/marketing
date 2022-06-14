<template>
  <div class="customer-manage-container">
    <MainTitle :title="title">
      <Search :options="options" @search="search"></Search>
    </MainTitle>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle";
import Search from "@/components/Search";

export default {
  name: "CustomerManage",
  components: { MainTitle, Search },
  created() {
    this.title = this.$route.meta.title;
  },
  data() {
    return {
      options: [
        {
          label: "手机号",
          value: "",
          type: "Tel",
          key: "mobile",
          clear: true, // 可选
        },
        {
          label: "昵称",
          value: "",
          type: "Input",
          key: "nick_name",
          clear: true, // 可选
        },
        {
          label: "会员等级",
          value: "",
          type: "Select",
          key: "level",
          multiple: false, // 可选
          options: [
            {
              value: "0",
              label: "不限",
            },
            {
              value: "2",
              label: "粉丝",
            },
            {
              value: "3",
              label: "肚侠",
            },
            {
              value: "4",
              label: "肚王",
            },
            {
              value: "5",
              label: "肚神",
            },
          ],
          clear: true, // 可选
        },

        {
          label: "顾客身份",
          value: "",
          type: "Select",
          key: "role",
          multiple: false, // 可选
          options: [
            {
              value: "0",
              label: "不限",
            },
            {
              value: "1",
              label: "会员",
            },
            {
              value: "2",
              label: "游客",
            },
          ],
          clear: true, // 可选
        },
        {
          label: "顾客状态",
          value: "",
          type: "Select",
          key: "status",
          multiple: false, // 可选
          options: [
            {
              value: "1",
              label: "启用",
            },
            {
              value: "2",
              label: "禁用",
            },
          ],
          clear: true, // 可选
        },
      ],
    };
  },
  methods: {
    search(data) {
      console.log("submit!", data);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
