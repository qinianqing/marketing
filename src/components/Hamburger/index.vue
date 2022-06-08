<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <img
      :class="{ 'is-active': isActive }"
      class="hamburger"
      src="@/assets/header/right.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    },
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 52px;
  height: 52px;
  position: absolute;
  left: -27px;
  top: 5px;
  z-index: 9999 !important;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
