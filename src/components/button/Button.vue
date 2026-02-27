<template>
  <button class="btn" :class="variantClass" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: { type: String, default: "primary" },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    variantClass() {
      return `btn--${this.variant}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./button.scss";
</style>
